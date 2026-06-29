// Extracted from the legacy standalone calculator. Keep this file data-only.

export const DB = {
    "BARBARIAN": {
        classBuffs: ["Flat Strength", "Flat Agility", "AP Flat (Shout)", "Concentration (Berserker)"],
        classResists: [],
        specs: [
            { name: "ANCESTRY", role: "SUPPORT", buffs: ["Armor (Devo)", "Heroism", "Resistance REDUCTION"], debuffs: [] },
            { name: "BRUTALITY", role: "MELEE", buffs: ["Attack Power %"], debuffs: ["Phys Dmg Taken (4%)", "Bleed Dmg Taken (30%)", "% Armor Debuff"] },
            { name: "HEADHUNTING", role: "CASTER", buffs: ["All Crit (3%)", "Attack Power %"], debuffs: ["Bleed Dmg Taken (30%)", "Healing Reduc (30-50%)"] }
        ]
    },
    "WITCHDOCTOR": {
        classBuffs: ["Small All Resist", "Flat Intellect", "Flat Spirit", "Mp5", "Cost Reduction (5%)"],
        classResists: [],
        classDebuffs: ["Cast Slow 30%"],
        specs: [
            { name: "SHADOWHUNTING", role: "CASTER", buffs: ["Melee/Range Haste (10%)", "Spell Haste (3%)", "Attack Power %"], debuffs: ["Resistance REDUCTION"] },
            { name: "VOODOO", role: "CASTER", buffs: ["Spell Haste (3%)", "All Damage Done (3%)"], debuffs: ["Attack Speed (Slow)", "Resistance REDUCTION"] },
            { name: "BREWING", role: "HEALER", buffs: ["Spell Haste (3%)", "Replenishment"], debuffs: ["Attack Power Reduction", "Resistance REDUCTION"] }
        ]
    },
    "FELSWORN": {
        classBuffs: ["Stats Flat + Armor (MotW)", "AP Flat (Shout)"],
        classResists: ["Fire", "Shadow"],
        specs: [
            { name: "INFERNAL", role: "CASTER", buffs: ["All Crit (3%)", "Damage done debuff (5%)"], debuffs: ["Spell Hit (3%) DEBUFF", "Spell Dmg Taken (10%)"] },
            { name: "TYRANT", role: "TANK", buffs: ["Melee/Range Haste (10%)", "All Damage Done (3%)", "Raid Wall (Divine Sac)"], debuffs: ["Phys Dmg Taken (4%)", "Attack Power Reduction", "Attack Speed (Slow)", "Damage done debuff (5%)"] },
            { name: "SLAYING", role: "MELEE", buffs: ["Melee/Range Haste (10%)", "Armor (Devo)"], debuffs: ["Healing Reduc (30-50%)", "Cast Slow 30%", "% Armor Debuff", "Damage done debuff (5%)"] }
        ]
    },
    "WITCHHUNTER": {
        classBuffs: ["Stats Flat + Armor (MotW)", "AP Flat (Shout)", "Mp5"],
        classResists: ["Shadow"],
        specs: [
            { name: "INQUISITION", role: "MELEE", buffs: ["Melee/Range Haste (10%)"], debuffs: ["Cast Slow 30%", "Damage done debuff (5%)"] },
            { name: "HOUNDMASTER", role: "CASTER", buffs: ["Spell Haste (3%)", "Attack Power %"], debuffs: ["Cast Slow 30%"] },
            { name: "BLACK KNIGHT", role: "TANK", buffs: ["Replenishment", "Raid Wall (Divine Sac)"], debuffs: ["Cast Slow 30%", "Attack Speed (Slow)"] },
            { name: "BOLTSLINGER", role: "CASTER", buffs: ["All Crit (3%)"], debuffs: ["Healing Reduc (30-50%)", "Cast Slow 30%", "% Armor Debuff"] }
        ]
    },
    "STORMBRINGER": {
        classBuffs: ["Small All Resist", "Flat Intellect", "Mp5", "Concentration"],
        classResists: ["Nature"],
        specs: [
            { name: "MAELSTROM", role: "CASTER", buffs: ["All Damage Done (3%)"], debuffs: ["Spell Dmg Taken (10%)", "Attack Speed (Slow)"] },
            { name: "LIGHTNING", role: "CASTER", buffs: ["All Crit (3%)"], debuffs: ["Spell Crit Taken Debuff (3%)"] },
            { name: "WIND", role: "SUPPORT", buffs: ["Armor (Devo)", "Heroism"], debuffs: [] }
        ]
    },
    "CULTIST": {
        classBuffs: ["Stats % (Kings)", "Flat Intellect", "Flat Spirit", "Dampen Magic"],
        classResists: ["Shadow"],
        specs: [
            { name: "HERETIC", role: "HEALER", buffs: ["Dmg Reduct(-3%)", "Replenishment"], debuffs: [] },
            { name: "DREADNOUGHT", role: "TANK", buffs: ["Attack Speed (Slow)", "Insect Swarm Hit (3%)"], debuffs: ["Attack Power Reduction"] },
            { name: "CORRUPTION", role: "CASTER", buffs: ["Spell Power Flat", "Spell Haste (3%)"], debuffs: ["Spell Hit (3%) DEBUFF", "Insect Swarm Hit (3%)"] },
            { name: "GODBLADE", role: "MELEE", buffs: ["Healing Reduc (30-50%)"], debuffs: ["Spell Dmg Taken (10%)", "Attack Power Reduction"] }
        ]
    },
    "KNIGHTXOROTH": {
        classBuffs: ["Stamina (Fort)", "Flat Strength", "Flat Intellect", "Cost Reduction (5%)"],
        classResists: ["Fire", "Frost", "Shadow", "Arcane"],
        specs: [
            { name: "HELLFIRE", role: "MELEE", buffs: ["Attack Power %", "All Damage Done (3%)", "Spell Crit Taken Debuff (3%)"], debuffs: ["Cast Slow 30%"] },
            { name: "WAR", role: "MELEE", buffs: ["All Crit (3%)"], debuffs: ["Phys Dmg Taken (4%)", "Healing Reduc (30-50%)", "% Armor Debuff"] },
            { name: "DEFIANCE", role: "TANK", buffs: ["Attack Power Reduction", "Attack Speed (Slow)"], debuffs: ["Spell Dmg Taken (10%)", "% Armor Debuff"] }
        ]
    },
    "GUARDIAN": {
        classBuffs: ["Flat Strength"],
        classResists: ["Nature"],
        specs: [
            { name: "VANGUARD", role: "TANK", buffs: ["Dmg Reduct(-3%)", "Attack Speed (Slow)"], debuffs: ["% Armor Debuff", "Attack Power Reduction"] },
            { name: "GLADIATOR", role: "MELEE", buffs: ["Attack Power %"], debuffs: ["Phys Dmg Taken (4%)", "Healing Reduc (30-50%)", "% Armor Debuff"] },
            { name: "INSPIRATION", role: "SUPPORT", buffs: ["Armor (Devo)", "Heroism", "Resistance REDUCTION"], debuffs: ["% Armor Debuff"] }
        ]
    },
    "STARCALLER": {
        classBuffs: ["Flat Intellect", "Burst Mana"],
        classResists: ["Arcane"],
        specs: [
            { name: "MOON PRIEST", role: "HEALER", buffs: ["All Crit (3%)", "Resistance REDUCTION"], debuffs: [] },
            { name: "WARDEN", role: "MELEE", buffs: ["All Crit (3%)", "Resistance REDUCTION"], debuffs: ["Healing Reduc (30-50%)"] },
            { name: "SENTINEL", role: "CASTER", buffs: ["Melee/Range Haste (10%)", "Resistance REDUCTION"], debuffs: ["Spell Dmg Taken (10%)"] },
            { name: "MOON GUARD", role: "TANK", buffs: ["Dmg Reduct(-3%)", "Resistance REDUCTION"], debuffs: ["Spell Dmg Taken (10%)", "Attack Speed (Slow)", "Insect Swarm Hit (3%)"] }
        ]
    },
    "SUNCLERIC": {
        classBuffs: ["Stats % (Kings)", "AP Flat (Shout)", "Spell Power Flat", "Mp5", "Cost Reduction (5%)"],
        classResists: [],
        specs: [
            { name: "BLESSINGS", role: "HEALER", buffs: ["Spell Haste (3%)", "Resistance REDUCTION"], debuffs: [] },
            { name: "VALKYRIE", role: "MELEE", buffs: ["All Damage Done (3%)", "Resistance REDUCTION"], debuffs: ["Attack Speed (Slow)"] },
            { name: "PIETY", role: "CASTER", buffs: ["Replenishment", "Resistance REDUCTION"], debuffs: ["Spell Hit (3%) DEBUFF", "Insect Swarm Hit (3%)"] },
            { name: "SERAPHIM", role: "TANK", buffs: ["6% Healing Taken", "Raid Wall (Divine Sac)"], debuffs: ["Attack Speed (Slow)", "Insect Swarm Hit (3%)", "Damage done debuff (5%)"] }
        ]
    },
    "TEMPLAR": {
        classBuffs: ["Stats % (Kings)", "Flat Agility"],
        classResists: [],
        specs: [
            { name: "ZEALOT", role: "MELEE", buffs: ["Melee/Range Haste (10%)"], debuffs: ["% Armor Debuff"] },
            { name: "CRUSADER", role: "MELEE", buffs: ["All Damage Done (3%)"], debuffs: ["Attack Power Reduction"] },
            { name: "OATHKEEPER", role: "TANK", buffs: ["Attack Power %", "6% Healing Taken", "Raid Wall (Divine Sac)"], debuffs: ["Cast Slow 30%", "Insect Swarm Hit (3%)"] }
        ]
    },
    "PRIMALIST": {
        classBuffs: ["Stats Flat + Armor (MotW)", "Small All Resist", "Flat Agility", "Flat Spirit"],
        classResists: ["Nature", "Arcane"],
        specs: [
            { name: "WILDWALKER", role: "MELEE", buffs: ["Attack Power %"], debuffs: ["Phys Dmg Taken (4%)", "Bleed Dmg Taken (30%)"] },
            { name: "MOUNTAIN KING", role: "TANK", buffs: ["Replenishment", "Phys Dmg Taken (4%)"], debuffs: ["Attack Speed (Slow)", "Insect Swarm Hit (3%)"] },
            { name: "GEOMANCY", role: "CASTER", buffs: ["Spell Haste (3%)", "Spell Hit (3%) DEBUFF"], debuffs: ["Spell Crit Taken Debuff (3%)", "Insect Swarm Hit (3%)"] },
            { name: "GROVEKEEPER", role: "SUPPORT", buffs: ["6% Healing Taken", "Armor (Devo)", "Heroism"], debuffs: ["% Armor Debuff"] }
        ]
    },
    "BLOODMAGE": {
        classBuffs: ["Stamina (Fort)", "Concentration"],
        classResists: [],
        specs: [
            { name: "SANGUINE", role: "CASTER", buffs: ["Spell Haste (3%)"], debuffs: ["Spell Crit Taken Debuff (3%)", "Bleed Dmg Taken (30%)", "Attack Speed (Slow)"] },
            { name: "FLESHWEAVER", role: "SUPPORT", buffs: ["Armor (Devo)", "Heroism"], debuffs: ["Bleed Dmg Taken (30%)"] },
            { name: "ACCURSED", role: "MELEE", buffs: ["Spell Haste (3%)", "All Crit (3%)"], debuffs: ["Bleed Dmg Taken (30%)", "Healing Reduc (30-50%)"] },
            { name: "ETERNAL", role: "TANK", buffs: ["Attack Power %", "6% Healing Taken"], debuffs: ["Bleed Dmg Taken (30%)", "Attack Speed (Slow)", "Insect Swarm Hit (3%)"] }
        ]
    },
    "PYROMANCER": {
        classBuffs: ["Flat Intellect", "Flat Spirit", "Burst Mana"],
        classResists: ["Fire", "Arcane"],
        specs: [
            { name: "FLAMEWEAVING", role: "HEALER", buffs: ["Replenishment"], debuffs: ["Healing Reduc (30-50%)"] },
            { name: "DRACONIC", role: "CASTER", buffs: ["Spell Haste (3%)"], debuffs: ["Spell Hit (3%) DEBUFF", "Healing Reduc (30-50%)"] },
            { name: "INCINERATION", role: "CASTER", buffs: ["All Crit (3%)", "Spell Crit Taken Debuff (3%)"], debuffs: ["Healing Reduc (30-50%)"] }
        ]
    },
    "RANGER": {
        classBuffs: ["Stats Flat + Armor (MotW)", "Flat Agility"],
        classResists: ["Nature"],
        specs: [
            { name: "BRIGAND", role: "MELEE", buffs: ["Melee/Range Haste (10%)"], debuffs: ["Healing Reduc (30-50%)", "Insect Swarm Hit (3%)"] },
            { name: "ARCHERY", role: "CASTER", buffs: ["Melee/Range Haste (10%)"], debuffs: ["Phys Dmg Taken (4%)", "Bleed Dmg Taken (30%)", "Insect Swarm Hit (3%)"] },
            { name: "FARSTRIDER", role: "SUPPORT", buffs: ["Melee/Range Haste (10%)", "Armor (Devo)", "Heroism"], debuffs: ["Attack Power Reduction", "Insect Swarm Hit (3%)"] }
        ]
    },
    "REAPER": {
        classBuffs: ["Small All Resist", "Stamina (Fort)", "Flat Strength"],
        classResists: [],
        specs: [
            { name: "SOUL", role: "MELEE", buffs: [], debuffs: ["Spell Dmg Taken (10%)", "Attack Speed (Slow)", "Insect Swarm Hit (3%)"] },
            { name: "HARVEST", role: "MELEE", buffs: ["All Crit (3%)"], debuffs: ["Healing Reduc (30-50%)", "Attack Power Reduction", "Insect Swarm Hit (3%)"] },
            { name: "DOMINATION", role: "TANK", buffs: ["All Crit (3%)", "Dmg Reduct(-3%)"], debuffs: ["Phys Dmg Taken (4%)", "Attack Speed (Slow)", "Insect Swarm Hit (3%)"] }
        ]
    },
    "RUNEMASTER": {
        classBuffs: ["Stats % (Kings)", "Flat Agility", "Cost Reduction (5%)", "Burst Mana", "Amplify Magic"],
        classResists: ["Fire", "Nature", "Arcane"],
        specs: [
            { name: "GLYPHIC", role: "CASTER", buffs: ["Replenishment"], debuffs: ["Spell Dmg Taken (10%)", "Healing Reduc (30-50%)"] },
            { name: "RIFTBLADE", role: "MELEE", buffs: ["All Damage Done (3%)", "Replenishment"], debuffs: ["Healing Reduc (30-50%)"] },
            { name: "ENGRAVEMENT", role: "MELEE", buffs: ["Melee/Range Haste (10%)", "Replenishment"], debuffs: ["Healing Reduc (30-50%)", "Attack Power Reduction"] }
        ]
    },
    "CHRONOMANCER": {
        classBuffs: ["Flat Intellect", "Flat Spirit", "Burst Mana", "Amplify Magic", "Dampen Magic"],
        classResists: [],
        specs: [
            { name: "TIME", role: "HEALER", buffs: ["Spell Haste (3%)", "Dmg Reduct(-3%)"], debuffs: [] },
            { name: "INFINITE", role: "CASTER", buffs: ["All Damage Done (3%)"], debuffs: ["Spell Hit (3%) DEBUFF", "Spell Dmg Taken (10%)", "Cast Slow 30%"] },
            { name: "ARTIFICER", role: "CASTER", buffs: ["All Crit (3%)", "Replenishment"], debuffs: ["Attack Speed (Slow)", "Insect Swarm Hit (3%)"] }
        ]
    },
    "NECROMANCER": {
        classBuffs: ["Stamina (Fort)", "Spell Power Flat"],
        classResists: ["Fire"],
        specs: [
            { name: "ANIMATION", role: "CASTER", buffs: ["All Damage Done (3%)"], debuffs: ["Healing Reduc (30-50%)", "% Armor Debuff", "Attack Power Reduction", "Attack Speed (Slow)"] },
            { name: "DEATH", role: "CASTER", buffs: ["Spell Haste (3%)"], debuffs: ["Spell Dmg Taken (10%)", "Healing Reduc (30-50%)", "% Armor Debuff", "Attack Power Reduction", "Attack Speed (Slow)"] },
            { name: "RIME", role: "CASTER", buffs: ["All Crit (3%)", "Spell Crit Taken Debuff (3%)"], debuffs: ["Healing Reduc (30-50%)", "% Armor Debuff", "Attack Power Reduction", "Attack Speed (Slow)"] }
        ]
    },
    "VENOMANCER": {
        classBuffs: ["Stats Flat + Armor (MotW)", "Flat Agility", "Flat Spirit"],
        classResists: ["Fire"],
        specs: [
            { name: "STALKING", role: "MELEE", buffs: ["Spell Crit Taken Debuff (3%)", "Cast Slow 30%"], debuffs: ["Spell Dmg Taken (10%)"] },
            { name: "VIZIER", role: "HEALER", buffs: ["6% Healing Taken", "Replenishment"], debuffs: ["Cast Slow 30%"] },
            { name: "FORTITUDE", role: "TANK", buffs: ["Dmg Reduct(-3%)"], debuffs: ["Cast Slow 30%", "Attack Speed (Slow)", "Insect Swarm Hit (3%)"] },
            { name: "ROTWEAVER", role: "CASTER", buffs: ["Spell Haste (3%)"], debuffs: ["Spell Hit (3%) DEBUFF", "Healing Reduc (30-50%)", "Cast Slow 30%"] }
        ]
    },
    "TINKER": {
        classBuffs: ["AP Flat (Shout)", "Mp5", "Burst Mana", "Concentration", "Amplify Magic"],
        classResists: [],
        specs: [
            { name: "DEMOLITION", role: "CASTER", buffs: ["Attack Power %"], debuffs: ["Attack Power Reduction"] },
            { name: "MECHANICS", role: "CASTER", buffs: ["Melee/Range Haste (10%)"], debuffs: ["% Armor Debuff"] },
            { name: "INVENTION", role: "HEALER", buffs: ["Spell Haste (3%)", "Dmg Reduct(-3%)", "6% Healing Taken"], debuffs: [] }
        ]
    }
};

export const UI_CATEGORIES = {
    physicalBuffs: ["Stats % (Kings)", "Stats Flat + Armor (MotW)", "Stamina (Fort)", "Flat Strength", "Flat Agility", "AP Flat (Shout)", "Attack Power %", "Melee/Range Haste (10%)"],
    casterBuffs: ["Flat Intellect", "Flat Spirit", "Spell Power Flat", "Spell Haste (3%)", "Mp5", "Replenishment", "Burst Mana"],
    utilityBuffs: ["All Crit (3%)", "All Damage Done (3%)", "Small All Resist", "Fire", "Frost", "Nature", "Shadow", "Arcane", "Cost Reduction (5%)", "Dmg Reduct(-3%)", "6% Healing Taken", "Concentration", "Amplify Magic", "Dampen Magic", "Armor (Devo)", "Raid Wall (Divine Sac)", "Heroism"],
    physicalDebuffs: ["Phys Dmg Taken (4%)", "Bleed Dmg Taken (30%)", "% Armor Debuff"],
    magicDebuffs: ["Spell Dmg Taken (10%)", "Spell Crit Taken Debuff (3%)", "Spell Hit (3%) DEBUFF", "Resistance REDUCTION"],
    utilityDebuffs: ["Attack Power Reduction", "Attack Speed (Slow)", "Insect Swarm Hit (3%)", "Healing Reduc (30-50%)", "Cast Slow 30%", "Damage done debuff (5%)"]
};

export const DISPLAY_NAMES = {
    "Stats % (Kings)": "10% Stats",
    "Stats Flat + Armor (MotW)": "Minor Armor and All Stats",
    "Stamina (Fort)": "Stamina",
    "Flat Strength": "Strength",
    "Flat Agility": "Agility",
    "Flat Intellect": "Intellect",
    "Flat Spirit": "Spirit",
    "AP Flat (Shout)": "Attack Power",
    "Spell Power Flat": "Spell Power",
    "Attack Power %": "5% Attack Power",
    "Melee/Range Haste (10%)": "10% Melee & Range Haste",
    "Spell Haste (3%)": "3% Spell Haste",
    "All Crit (3%)": "3% Critical Strike (all)",
    "All Damage Done (3%)": "3% Damage Done (all)",
    "Small All Resist": "Small Resistances (all)",
    "Mp5": "Mana Regeneration",
    "Replenishment": "Replenishment",
    "Burst Mana": "Strong Mana Cooldown",
    "Cost Reduction (5%)": "5% Resource Reduction",
    "Dmg Reduct(-3%)": "3% Damage Reduction (all)",
    "6% Healing Taken": "6% Healing Done",
    "Concentration": "Concentration",
    "Amplify Magic": "Amplify Magic",
    "Dampen Magic": "Dampen Magic",
    "Armor (Devo)": "Armor",
    "Raid Wall (Divine Sac)": "Defensive Cooldown (Raid-Wide)",
    "Heroism": "Heroism | Bloodlust",
    "Phys Dmg Taken (4%)": "4% Physical Damage",
    "Spell Dmg Taken (10%)": "10% Spell Damage",
    "Bleed Dmg Taken (30%)": "30% Bleed Damage",
    "Spell Crit Taken Debuff (3%)": "3% Spell Critical Strike Chance",
    "Spell Hit (3%) DEBUFF": "3% Spell Hit",
    "Resistance REDUCTION": "Resistance Reduction",
    "% Armor Debuff": "Armor Reduction",
    "Attack Power Reduction": "Attack Power Reduction",
    "Attack Speed (Slow)": "Attack Speed Slow",
    "Insect Swarm Hit (3%)": "3% Hit Reduction",
    "Healing Reduc (30-50%)": "Healing Reduction",
    "Cast Slow 30%": "Cast Speed Slow",
    "Damage done debuff (5%)": "Damage Done Reduction (5%)"
};

export const BUFF_ALIASES = {
    "Concentration (Berserker)": "Concentration"
};

export const CLASS_ICON_FILES = {
    BARBARIAN: "barbarian",
    WITCHDOCTOR: "witchdoctor",
    FELSWORN: "demonhunter",
    WITCHHUNTER: "witchhunter",
    STORMBRINGER: "stormbringer",
    CULTIST: "cultist",
    KNIGHTXOROTH: "fleshwarden",
    GUARDIAN: "guardian",
    STARCALLER: "starcaller",
    SUNCLERIC: "suncleric",
    TEMPLAR: "monk",
    PRIMALIST: "prophet",
    BLOODMAGE: "sonofarugal",
    PYROMANCER: "pyromancer",
    RUNEMASTER: "spiritmage",
    RANGER: "ranger",
    REAPER: "reaper",
    CHRONOMANCER: "chronomancer",
    NECROMANCER: "necromancer",
    VENOMANCER: "wildwalker",
    TINKER: "tinker"
};

export const SPEC_ICON_FILENAMES = {
    BARBARIAN: {
        ANCESTRY: "_Diablo3_Execute_Druid",
        BRUTALITY: "ability_warrior_endlessrage",
        HEADHUNTING: "ability_hunter_hatchettoss"
    },
    WITCHDOCTOR: {
        SHADOWHUNTING: "ShadowHunter",
        VOODOO: "trade_archaeology_troll_voodoodoll",
        BREWING: "INV_Misc_Cauldron_Nature"
    },
    FELSWORN: {
        INFERNAL: "spell_fire_fireballgreen",
        TYRANT: "Spell_Shadow_ZDemonFormGreen",
        SLAYING: "ability_demonhunter_hatefulstrike"
    },
    WITCHHUNTER: {
        INQUISITION: "inv_misc_trinket6oih_lanterna1",
        HOUNDMASTER: "inv_wolfdraenormountshadow",
        "BLACK KNIGHT": "nhi_brokensword_Border",
        BOLTSLINGER: "inv_weapon_crossbow_21"
    },
    STORMBRINGER: {
        MAELSTROM: "Spell_Frost_SummonWaterElemental",
        LIGHTNING: "Spell_Lightning_LightningBolt01",
        WIND: "ability_skyreach_four_wind"
    },
    CULTIST: {
        HERETIC: "Yogg-SaronIcon",
        DREADNOUGHT: "YshaarjIcon",
        CORRUPTION: "CThunIcon",
        GODBLADE: "NZothIcon"
    },
    KNIGHTXOROTH: {
        HELLFIRE: "ability_paladin_bladeofjustice",
        DEFIANCE: "spell_warlock_soulburn_haunt",
        WAR: "ability_warlock_baneofhavoc"
    },
    GUARDIAN: {
        VANGUARD: "TowerFormation",
        GLADIATOR: "AssaultFormation",
        INSPIRATION: "LineFormation"
    },
    STARCALLER: {
        "MOON PRIEST": "Spell_Frost_ManaRecharge",
        WARDEN: "inv_wand_1h_430nightelf_c_01",
        SENTINEL: "spell_hunter_exoticmunitions_frozen",
        "MOON GUARD": "Spell_Holy_ImprovedResistanceAuras"
    },
    SUNCLERIC: {
        BLESSINGS: "ability_paladin_lightoftheprotector",
        VALKYRIE: "inv_glaive_1h_artifactaldrochi_d_02dual",
        PIETY: "paladin_holy",
        SERAPHIM: "misc_legionfall_paladin"
    },
    TEMPLAR: {
        ZEALOT: "inv_sword_2h_artifactashbringerpurified_d_02",
        CRUSADER: "nhi_holy_toglory_Border",
        OATHKEEPER: "priest_icon_innewill"
    },
    PRIMALIST: {
        WILDWALKER: "inv_hand_1h_artifactursoc_d_01",
        "MOUNTAIN KING": "ability_racial_avatar",
        GEOMANCY: "Ability_Rogue_ThrowingSpecialization",
        GROVEKEEPER: "Spell_Shaman_SpiritLink"
    },
    BLOODMAGE: {
        SANGUINE: "ability_revendreth_warlock",
        FLESHWEAVER: "nhi_bloodhealth_Border",
        ACCURSED: "artifactability_feraldruid_ashamanesbite",
        ETERNAL: "ability_racial_viciousness"
    },
    PYROMANCER: {
        FLAMEWEAVING: "Ability_Warlock_Backdraft",
        DRACONIC: "INV_Misc_Head_Dragon_01",
        INCINERATION: "Ability_Mage_FieryPayback"
    },
    RANGER: {
        BRIGAND: "Ability_Rogue_CutToTheChase",
        ARCHERY: "Ability_Hunter_RunningShot",
        FARSTRIDER: "INV_Ascend_horn"
    },
    REAPER: {
        SOUL: "ability_rogue_ghostpirate",
        HARVEST: "ability_demonhunter_bladedance",
        DOMINATION: "spell_deathknight_frozenruneweapon"
    },
    RUNEMASTER: {
        GLYPHIC: "shaman_talent_elementalblast",
        RIFTBLADE: "Warpblade",
        ENGRAVEMENT: "custom_T_Nhance_RPG_Icons_MagicKeeper_Border"
    },
    CHRONOMANCER: {
        TIME: "spell_mage_altertime",
        INFINITE: "nhi_timewarp_Border",
        ARTIFICER: "achievement_guildperk_workingovertime"
    },
    NECROMANCER: {
        ANIMATION: "Spell_Shadow_NightOfTheDead",
        DEATH: "Spell_Shadow_DeathCoil",
        RIME: "Spell_Frost_Frost"
    },
    VENOMANCER: {
        STALKING: "inv_pet_spiderdemon2",
        VIZIER: "ability_hunter_onewithnature",
        FORTITUDE: "inv_nerubianbeetlepet_green",
        ROT: "_VenomOrb_Green",
        ROTWEAVER: "_VenomOrb_Green"
    },
    TINKER: {
        DEMOLITION: "inv_misc_blackironbomb",
        MECHANICS: "spell_mekkatorque_bot_redwrench",
        INVENTION: "inv_engineering_reavesmodule"
    }
};

export const DISPLAY_ROLES = ["TANK", "HEALER", "SUPPORT", "MELEE", "CASTER"];

export const DISPLAY_ROLE_NAMES = {
    "TANK": "Tank",
    "HEALER": "Healer",
    "SUPPORT": "Support",
    "MELEE": "Melee",
    "CASTER": "Ranged / Caster"
};

export const RAID_ROLE_TARGETS = [
    { key: "TANK", label: "Tanks", target: 2 },
    { key: "HEALER", label: "Healer", target: 2 },
    { key: "SUPPORT", label: "Support", target: 1 },
    { key: "DPS", label: "DPS", target: 5 }
];

export const DEFAULT_ROSTER_SIZE = 25;

export const MAX_ROSTER_SIZE = 25;

export const CLASS_DISPLAY_NAMES = {
    WITCHDOCTOR: "Witch Doctor",
    FELSWORN: "Felsworn",
    WITCHHUNTER: "Witch Hunter",
    STORMBRINGER: "Stormbringer",
    KNIGHTXOROTH: "Knight of Xoroth",
    STARCALLER: "Starcaller",
    SUNCLERIC: "Sun Cleric",
    PRIMALIST: "Primalist",
    BLOODMAGE: "Bloodmage",
    RUNEMASTER: "Runemaster"
};

export const SPEC_DISPLAY_NAMES = {
    BLACKKNIGHT: "Black Knight",
    "BLACK KNIGHT": "Black Knight",
    MOUNTAINKING: "Mountain King",
    "MOUNTAIN KING": "Mountain King",
    "MOON PRIEST": "Moon Priest",
    "MOON GUARD": "Moon Guard",
    ROT: "Rot",
    ROTWEAVER: "Rot"
};
