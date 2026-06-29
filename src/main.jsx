import React, { useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BUFF_ALIASES,
  CLASS_DISPLAY_NAMES,
  CLASS_ICON_FILES,
  DB,
  DEFAULT_ROSTER_SIZE,
  DISPLAY_NAMES,
  DISPLAY_ROLES,
  DISPLAY_ROLE_NAMES,
  RAID_ROLE_TARGETS,
  SPEC_DISPLAY_NAMES,
  SPEC_ICON_FILENAMES,
  UI_CATEGORIES,
} from "./data/raidData";
import "./styles.css";

const DASHBOARD_COLUMNS = [
  [
    ["physicalBuffs", "Physical Buffs", "physical-buff"],
    ["casterBuffs", "Caster Buffs", "caster-buff"],
    ["utilityBuffs", "Utility Buffs", "utility-buff"],
  ],
  [
    ["physicalDebuffs", "Physical Debuffs", "physical-debuff"],
    ["magicDebuffs", "Magic Debuffs", "magic-debuff"],
    ["utilityDebuffs", "Utility Debuffs", "utility-debuff"],
  ],
];

const BASE_URL = import.meta.env.BASE_URL || "./";

function App() {
  const [roster, setRoster] = useState(() => Array(DEFAULT_ROSTER_SIZE).fill(null));
  const [previewBuffIds, setPreviewBuffIds] = useState(new Set());
  const [sourceBuffId, setSourceBuffId] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const draggedIndex = useRef(null);
  const pointerDrag = useRef(null);
  const suppressClick = useRef(false);

  const specsByRole = useMemo(() => {
    const grouped = Object.fromEntries(DISPLAY_ROLES.map((role) => [role, []]));
    Object.keys(DB).sort().forEach((className) => {
      DB[className].specs.forEach((spec) => {
        if (!grouped[spec.role]) return;
        grouped[spec.role].push({
          className,
          specName: spec.name,
          role: spec.role,
          data: spec,
          provides: collectBuffIds(className, spec),
        });
      });
    });
    Object.values(grouped).forEach((items) => items.sort((a, b) => a.className.localeCompare(b.className)));
    return grouped;
  }, []);

  const buffCounts = useMemo(() => {
    const counts = {};
    roster.forEach((slot) => {
      if (!slot) return;
      [...slot.classBuffs, ...slot.classResists, ...slot.classDebuffs, ...slot.specBuffs, ...slot.specDebuffs].forEach((name) => {
        const id = simplify(name);
        counts[id] = (counts[id] || 0) + 1;
      });
    });
    return counts;
  }, [roster]);

  const roleSummary = useMemo(() => {
    const grouped = { TANK: [], HEALER: [], SUPPORT: [], DPS: [] };
    roster.forEach((slot) => {
      if (!slot) return;
      const roleKey = slot.role === "MELEE" || slot.role === "CASTER" ? "DPS" : slot.role;
      if (grouped[roleKey]) grouped[roleKey].push(slot);
    });
    return grouped;
  }, [roster]);

  const addSpec = (className, specName) => {
    setRoster((current) => {
      const index = current.findIndex((slot) => slot === null);
      if (index === -1) return current;
      const classData = DB[className];
      const specData = classData.specs.find((spec) => spec.name === specName);
      const next = [...current];
      next[index] = {
        class: className,
        specName,
        role: specData.role,
        classBuffs: classData.classBuffs || [],
        classResists: classData.classResists || [],
        classDebuffs: classData.classDebuffs || [],
        specBuffs: specData.buffs || [],
        specDebuffs: specData.debuffs || [],
      };
      return next;
    });
  };

  const removeSlot = (index) => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    setRoster((current) => {
      if (!current[index]) return current;
      const next = [...current];
      next[index] = null;
      return next;
    });
  };

  const moveSlot = (sourceIndex, targetIndex) => {
    if (!Number.isInteger(sourceIndex) || !Number.isInteger(targetIndex) || sourceIndex === targetIndex) return;
    setRoster((current) => {
      const next = [...current];
      const movingSlot = next[sourceIndex];
      next[sourceIndex] = next[targetIndex];
      next[targetIndex] = movingSlot;
      return next;
    });
  };

  const handleDragStart = (event, index) => {
    if (!roster[index]) {
      event.preventDefault();
      return;
    }
    draggedIndex.current = index;
    event.currentTarget.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", String(index));
    hideTooltip(setTooltip);
  };

  const handleDragOver = (event, index) => {
    if (draggedIndex.current === null || draggedIndex.current === index) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    event.currentTarget.classList.add("drop-target");
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const sourceIndex = draggedIndex.current;
    clearRosterDragState();
    draggedIndex.current = null;
    if (sourceIndex === null || sourceIndex === index) return;
    suppressClick.current = true;
    moveSlot(sourceIndex, index);
  };

  const handleDragEnd = () => {
    clearRosterDragState();
    draggedIndex.current = null;
  };

  const handlePointerDown = (event, index) => {
    if (event.button !== 0 || !roster[index]) return;
    pointerDrag.current = {
      index,
      startX: event.clientX,
      startY: event.clientY,
      dragging: false,
    };
    document.addEventListener("mousemove", handlePointerMove);
    document.addEventListener("mouseup", handlePointerUp, { once: true });
  };

  const handlePointerMove = (event) => {
    const state = pointerDrag.current;
    if (!state) return;
    const dx = event.clientX - state.startX;
    const dy = event.clientY - state.startY;
    if (!state.dragging && Math.hypot(dx, dy) < 6) return;

    state.dragging = true;
    suppressClick.current = true;
    hideTooltip(setTooltip);
    document.querySelector(`.raid-slot[data-index="${state.index}"]`)?.classList.add("dragging");
    document.querySelectorAll(".raid-slot.drop-target").forEach((slot) => slot.classList.remove("drop-target"));
    const targetSlot = getRosterSlotFromPoint(event.clientX, event.clientY);
    if (targetSlot && Number(targetSlot.dataset.index) !== state.index) targetSlot.classList.add("drop-target");
  };

  const handlePointerUp = (event) => {
    document.removeEventListener("mousemove", handlePointerMove);
    const state = pointerDrag.current;
    if (!state) return;

    const targetSlot = state.dragging ? getRosterSlotFromPoint(event.clientX, event.clientY) : null;
    const targetIndex = targetSlot ? Number(targetSlot.dataset.index) : state.index;
    clearRosterDragState();
    pointerDrag.current = null;
    if (state.dragging) setTimeout(() => { suppressClick.current = false; }, 0);
    if (state.dragging) moveSlot(state.index, targetIndex);
  };

  const showTooltipFor = (event, slot) => setTooltip(buildTooltip(event, slot));

  const showSpecPreview = (event, item) => {
    const previewData = specPreviewData(item.className, item.specName);
    setTooltip(buildTooltip(event, previewData));
    setPreviewBuffIds(new Set([...previewData.classBuffs, ...previewData.classResists, ...previewData.classDebuffs, ...previewData.specBuffs, ...previewData.specDebuffs].map(simplify)));
  };

  const clearSpecPreview = () => {
    hideTooltip(setTooltip);
    setPreviewBuffIds(new Set());
  };

  const rosterCount = roster.filter(Boolean).length;

  return (
    <main className="app-shell min-h-screen">
      <aside className="class-rail" aria-label="Raid setup">
        <div className="rail-title">Raid Roster</div>
        <div className="roster-controls">
          <div><strong>Roster:</strong> <span>{rosterCount}</span>/<span>{roster.length}</span></div>
          <div className="roster-actions">
            <button className="btn btn-size" disabled>25 Slots</button>
            <button className="btn btn-clear" onClick={() => setRoster(Array(DEFAULT_ROSTER_SIZE).fill(null))}>Clear All</button>
          </div>
        </div>

        <div className="raid-composition">
          <Roster
            roster={roster}
            onRemove={removeSlot}
            onTooltip={showTooltipFor}
            onHideTooltip={() => hideTooltip(setTooltip)}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
            onPointerDown={handlePointerDown}
          />
          <RoleSummary grouped={roleSummary} />
        </div>

        <div className="rail-title spec-rail-title">Specializations</div>
        <div className={`spec-picker ${sourceBuffId ? "highlighting-active" : ""}`}>
          {DISPLAY_ROLES.map((role) => (
            <div className="role-section" key={role}>
              <div className="role-header">{DISPLAY_ROLE_NAMES[role]}</div>
              <div className="spec-list">
                {specsByRole[role].map((item) => {
                  const isHighlighted = sourceBuffId && item.provides.includes(sourceBuffId);
                  return (
                    <button
                      className={`spec-btn ${isHighlighted ? "highlighted" : ""}`}
                      data-class={item.className}
                      data-spec={item.specName}
                      key={`${item.className}-${item.specName}`}
                      title={`${formatClassName(item.className)} - ${formatSpecName(item.specName)}`}
                      aria-label={`${formatClassName(item.className)} ${formatSpecName(item.specName)}`}
                      onClick={() => addSpec(item.className, item.specName)}
                      onMouseEnter={(event) => showSpecPreview(event, item)}
                      onMouseLeave={clearSpecPreview}
                    >
                      <SpecIcon className={item.className} specName={item.specName} imageClassName="spec-icon" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div className="class-heading">
            <span
              className="class-header-icon"
              aria-hidden="true"
              style={{ backgroundImage: `url("${BASE_URL}assets/icons/achievement_dungeon_coablackdragonflight.png")` }}
            ></span>
            <div>
              <h1>CoA Raid Comp Calculator</h1>
              <div className="data-status">{roster.length} Player Raid</div>
            </div>
          </div>
        </header>

        <section className="tree-stage" aria-label="Raid buffs">
          <div className="buff-dashboard">
            {DASHBOARD_COLUMNS.map((column, columnIndex) => (
              <div className="dashboard-column" key={columnIndex}>
                {column.map(([category, title, titleClass]) => (
                  <div className={`dashboard-section ${categoryToSectionClass(category)}`} key={category}>
                    <div className={`section-title ${titleClass}`}>{title}</div>
                    <div className="buff-grid">
                      {UI_CATEGORIES[category].map((buffName) => {
                        const id = simplify(buffName);
                        const count = buffCounts[id] || 0;
                        const previewActive = previewBuffIds.has(id);
                        return (
                          <div
                            className={`buff-item ${count ? "active" : ""} ${previewActive ? "preview-active" : ""}`}
                            id={`buff-${id}`}
                            key={buffName}
                            onMouseEnter={() => setSourceBuffId(id)}
                            onMouseLeave={() => setSourceBuffId(null)}
                          >
                            <span>{formatBuffName(buffName)}</span>
                            <div className="status-icon">{count || ""}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div className="dashboard-group-title">Boss Debuffs</div>
          </div>
        </section>
      </section>

      <Tooltip tooltip={tooltip} />
    </main>
  );
}

function Roster({
  roster,
  onRemove,
  onTooltip,
  onHideTooltip,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  onPointerDown,
}) {
  const groups = [];
  for (let groupIndex = 0; groupIndex < Math.ceil(roster.length / 5); groupIndex += 1) {
    groups.push(roster.slice(groupIndex * 5, groupIndex * 5 + 5));
  }

  return (
    <div className="raid-roster">
      {groups.map((group, groupIndex) => (
        <div className="raid-group" key={groupIndex}>
          <div className="raid-group-label">Group {groupIndex + 1}</div>
          <div className="raid-group-slots">
            {group.map((slot, offset) => {
              const index = groupIndex * 5 + offset;
              return (
                <div
                  className={`raid-slot ${slot ? `filled ${getRosterRoleClass(slot.role)}` : ""}`}
                  data-index={index}
                  draggable={!!slot}
                  key={index}
                  style={slot ? { backgroundColor: `var(--class-${slot.class.toLowerCase()})` } : undefined}
                  onClick={() => onRemove(index)}
                  onDragStart={(event) => onDragStart(event, index)}
                  onDragOver={(event) => onDragOver(event, index)}
                  onDragEnter={(event) => onDragOver(event, index)}
                  onDragLeave={(event) => event.currentTarget.classList.remove("drop-target")}
                  onDrop={(event) => onDrop(event, index)}
                  onDragEnd={onDragEnd}
                  onMouseDown={(event) => onPointerDown(event, index)}
                  onMouseEnter={slot ? (event) => onTooltip(event, slot) : undefined}
                  onMouseLeave={slot ? onHideTooltip : undefined}
                >
                  {slot ? (
                    <>
                      <SpecIcon className={slot.class} specName={slot.specName} imageClassName="slot-icon" />
                      <div className="remove-hint">X</div>
                    </>
                  ) : (
                    <div className="placeholder-text">{index + 1}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function RoleSummary({ grouped }) {
  return (
    <div className="raid-role-summary" aria-label="Role targets">
      {RAID_ROLE_TARGETS.map((item) => (
        <div className="raid-role-row" key={item.key}>
          <div className="raid-role-header">
            <span className="raid-role-label">{item.label}</span>
            <span className="raid-role-count">{grouped[item.key].length || ""}</span>
          </div>
          <div className="raid-role-icons">
            {grouped[item.key].length ? grouped[item.key].map((slot, index) => (
              <div
                className="raid-role-icon"
                key={`${slot.class}-${slot.specName}-${index}`}
                title={`${formatClassName(slot.class)} - ${formatSpecName(slot.specName)}`}
                style={{ backgroundColor: `var(--class-${slot.class.toLowerCase()})` }}
              >
                <SpecIcon className={slot.class} specName={slot.specName} imageClassName="spec-icon" />
              </div>
            )) : <span className="raid-role-empty">Empty</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

function SpecIcon({ className, specName, imageClassName }) {
  const urls = useMemo(() => specIconUrls(className, specName), [className, specName]);
  const [index, setIndex] = useState(0);
  const fallback = <span className="spec-fallback">{specInitials(formatSpecName(specName))}</span>;
  if (!urls.length || index >= urls.length) return fallback;
  return (
    <img
      className={imageClassName}
      alt={`${formatSpecName(specName)} icon`}
      decoding="async"
      loading="lazy"
      src={urls[index]}
      onError={() => setIndex((current) => current + 1)}
    />
  );
}

function Tooltip({ tooltip }) {
  if (!tooltip) return null;
  return (
    <div id="tooltip" style={{ display: "block", top: tooltip.top, left: tooltip.left }}>
      <div id="tooltip-header">
        <h4>{formatSpecName(tooltip.data.specName)}</h4>
        <span>{formatClassName(tooltip.data.class)}</span>
      </div>
      <div className="tooltip-body">
        <TooltipList title="Class Buffs" items={[...tooltip.data.classBuffs, ...tooltip.data.classResists]} />
        <TooltipList title="Spec Buffs" items={tooltip.data.specBuffs} />
        {!![...tooltip.data.classDebuffs, ...tooltip.data.specDebuffs].length && (
          <TooltipList title="Boss Debuffs" items={[...tooltip.data.classDebuffs, ...tooltip.data.specDebuffs]} debuff />
        )}
      </div>
    </div>
  );
}

function TooltipList({ title, items, debuff = false }) {
  return (
    <div className="tooltip-section">
      <h5>{title}</h5>
      <ul className={`tooltip-list ${debuff ? "tooltip-debuff" : ""}`}>
        {items.length ? items.map((item) => <li key={item}>{formatBuffName(item)}</li>) : <li className="tooltip-empty">- None -</li>}
      </ul>
    </div>
  );
}

function collectBuffIds(className, spec) {
  return [
    ...(DB[className].classBuffs || []),
    ...(DB[className].classResists || []),
    ...(DB[className].classDebuffs || []),
    ...(spec.buffs || []),
    ...(spec.debuffs || []),
  ].map(simplify);
}

function specPreviewData(className, specName) {
  const classData = DB[className];
  const specData = classData.specs.find((spec) => spec.name === specName);
  return {
    class: className,
    specName,
    classBuffs: classData.classBuffs || [],
    classResists: classData.classResists || [],
    classDebuffs: classData.classDebuffs || [],
    specBuffs: specData.buffs || [],
    specDebuffs: specData.debuffs || [],
  };
}

function buildTooltip(event, data) {
  const width = 260;
  const estimatedHeight = 260;
  const left = Math.min(event.clientX + 15, window.innerWidth - width - 10);
  const top = event.clientY + 15 + estimatedHeight > window.innerHeight
    ? Math.max(10, event.clientY - estimatedHeight - 10)
    : event.clientY + 15;
  return { data, left: `${left}px`, top: `${top}px` };
}

function hideTooltip(setTooltip) {
  setTooltip(null);
}

function clearRosterDragState() {
  document.querySelectorAll(".raid-slot.dragging, .raid-slot.drop-target").forEach((slot) => {
    slot.classList.remove("dragging", "drop-target");
  });
}

function getRosterSlotFromPoint(x, y) {
  const element = document.elementFromPoint(x, y);
  return element?.closest?.(".raid-slot") || null;
}

function getRosterRoleClass(role) {
  if (role === "TANK") return "role-tank";
  if (role === "HEALER") return "role-healer";
  if (role === "SUPPORT") return "role-support";
  return "role-dps";
}

function categoryToSectionClass(category) {
  return `${category.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}-section`;
}

function simplify(str) {
  return canonicalBuffName(str).toLowerCase().replace(/[^a-z0-9]/g, "");
}

function canonicalBuffName(name) {
  return BUFF_ALIASES[name] || name;
}

function formatBuffName(name) {
  return DISPLAY_NAMES[canonicalBuffName(name)] || canonicalBuffName(name);
}

function titleCaseLabel(name) {
  return String(name || "")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatClassName(className) {
  return CLASS_DISPLAY_NAMES[className] || titleCaseLabel(className);
}

function formatSpecName(specName) {
  return SPEC_DISPLAY_NAMES[specName] || titleCaseLabel(specName);
}

function specInitials(specName) {
  return specName
    .split(/\s+/)
    .map((part) => part[0] || "")
    .join("")
    .slice(0, 2) || specName.substring(0, 2);
}

function textureSlug(textureName) {
  if (!textureName) return "";
  return textureName.replace(/\.(blp|png|tga|jpg)$/i, "").toLowerCase();
}

function classIconUrl(className) {
  const file = CLASS_ICON_FILES[className];
  return file ? `${BASE_URL}assets/classes/${file}.png` : "";
}

function specIconUrls(className, specName) {
  const filename = SPEC_ICON_FILENAMES[className]?.[specName];
  const urls = [];
  const slug = textureSlug(filename);
  if (slug) {
    urls.push(`${BASE_URL}assets/icons/${slug}.png`);
    urls.push(`${BASE_URL}assets/icons/${slug}.jpg`);
  }
  const classUrl = classIconUrl(className);
  if (classUrl) urls.push(classUrl);
  return urls;
}

createRoot(document.getElementById("root")).render(<App />);
