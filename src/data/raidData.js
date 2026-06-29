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
        ANCESTRY: "spell_brew_wheat",
        BRUTALITY: "_Orc_06",
        HEADHUNTING: "inv_axe_2h_artifactmaw_d_01"
    },
    WITCHDOCTOR: {
        SHADOWHUNTING: "ShadowHunter",
        VOODOO: "trade_archaeology_troll_voodoodoll",
        BREWING: "INV_Misc_Cauldron_Nature"
    },
    FELSWORN: {
        INFERNAL: "_AuraCloak_Felfire",
        TYRANT: "ability_demonhunter_demonictrample",
        SLAYING: "inv_sword_1h_artifactfelomelorn_d_03dual"
    },
    WITCHHUNTER: {
        INQUISITION: "Spell_Shadow_ShadowandFlame",
        HOUNDMASTER: "custom_14_summon_dogs_Border",
        "BLACK KNIGHT": "novart_physical_ability_(49)_Border",
        BOLTSLINGER: "_d3preparation"
    },
    STORMBRINGER: {
        MAELSTROM: "ability_shawaterelemental_reform",
        LIGHTNING: "nhi_frozenlightning_Border",
        WIND: "inv_progenitorelemental_black"
    },
    CULTIST: {
        HERETIC: "Yogg-SaronIcon",
        DREADNOUGHT: "YshaarjIcon",
        CORRUPTION: "CThunIcon",
        GODBLADE: "NZothIcon"
    },
    KNIGHTXOROTH: {
        HELLFIRE: "5_sumimparmy_Border",
        DEFIANCE: "Ability_Warlock_ImprovedDemonicTactics",
        WAR: "warrior_skullbanner"
    },
    GUARDIAN: {
        VANGUARD: "_Human_06",
        GLADIATOR: "epic_rpg_icon_pack_brutal_icon_0001s_0000_warrior_Border",
        INSPIRATION: "ACHIEVEMENT_GUILDPERK_EVERYONES_A_HERO"
    },
    STARCALLER: {
        "MOON PRIEST": "custom_T_Nhance_RPG_Icons_MagicMoonBuff_Border",
        WARDEN: "inv_pet_wardenowl",
        SENTINEL: "_Diablo3_ArrowRain_Mage",
        "MOON GUARD": "artifactability_balancedruid_newmoon"
    },
    SUNCLERIC: {
        BLESSINGS: "item_holyspark",
        VALKYRIE: "inv_valkiergoldpet",
        PIETY: "custom_T_Nhance_RPG_Icons_HolyMeditation_Border",
        SERAPHIM: "ability_paladin_conviction"
    },
    TEMPLAR: {
        ZEALOT: "custom_Paladinskill_24_Border",
        CRUSADER: "nhi_firesword_Border",
        OATHKEEPER: "inv_staff_2h_nazmirraid_d_01"
    },
    PRIMALIST: {
        WILDWALKER: "ability_druid_ripandtear",
        "MOUNTAIN KING": "ability_racial_avatar",
        GEOMANCY: "inv_custom_hearthstone_fire",
        GROVEKEEPER: "ui_darkshore_warfront_alliance_keeper_of_the_grove"
    },
    BLOODMAGE: {
        SANGUINE: "epic_rpg_icon_pack_blood_0003s_0000_hand_Border",
        FLESHWEAVER: "inv_misc_food_legion_gooamber_pool",
        ACCURSED: "nhi_foreshadowblood_Border",
        ETERNAL: "ability_racial_viciousness"
    },
    PYROMANCER: {
        FLAMEWEAVING: "custom_T_Phoenix_Border",
        DRACONIC: "inv_misc_head_dragon_bronze",
        INCINERATION: "nhi_corruptionfire_Border"
    },
    RANGER: {
        BRIGAND: "ability_rogue_energeticrecovery",
        ARCHERY: "inv_archaeology_70_tauren_stonewoodbow",
        FARSTRIDER: "inv_legion_faction_dreamweavers"
    },
    REAPER: {
        SOUL: "nhi_souldarkening_Border",
        HARVEST: "ability_revendreth_deathknight",
        DOMINATION: "nhi_ghosthand_Border"
    },
    RUNEMASTER: {
        GLYPHIC: "70_inscription_vantus_rune_azure",
        RIFTBLADE: "trade_archaeology_zinrokh_sword",
        ENGRAVEMENT: "novart_magicspell_(14)_Border"
    },
    CHRONOMANCER: {
        TIME: "inv_trinket_80_kultiras02a",
        INFINITE: "achievement_boss_infinitecorruptor",
        ARTIFICER: "achievement_guildperk_workingovertime"
    },
    NECROMANCER: {
        ANIMATION: "_Undead_03",
        DEATH: "Spell_Shadow_PlagueCloud",
        RIME: "WC3LichOriginal"
    },
    VENOMANCER: {
        STALKING: "_D3corpsespiders",
        VIZIER: "achievement_boss_eldernadox",
        FORTITUDE: "inv_nerubianbeetlepet_green",
        ROT: "WeaverForm",
        ROTWEAVER: "WeaverForm"
    },
    TINKER: {
        DEMOLITION: "inv_eng_bombfire",
        MECHANICS: "inv_engineering_815_uberspanner",
        INVENTION: "inv_plate_mechagnome_c_01shoulder"
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
