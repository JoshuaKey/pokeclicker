import { PokemonNameType } from '../pokemons/PokemonNameType';
import { TranslationVars } from '../translation/Translation';

export type LogContent = {
    key: LogContentKey,
    vars?: TranslationVars
};

// These should match the translation keys in the translation repo
export enum LogContentKey {
    'notTranslated' = 'notTranslated',
    'earnedAchievement' = 'earnedAchievement',
    'escapedShiny' = 'escapedShiny',
    'escapedShinyDupe' = 'escapedShinyDupe',
    'escapedWild' = 'escapedWild',
    'encounterShiny' = 'encounterShiny',
    'encounterShinyDupe' = 'encounterShinyDupe',
    'encounterWild' = 'encounterWild',
    'gainBattleFrontierReward' = 'gainBattleFrontierReward',
    'gainBattleFrontierPoints' = 'gainBattleFrontierPoints',
    'hatchedShiny' = 'hatchedShiny',
    'hatchedShinyDupe' = 'hatchedShinyDupe',
    'unableToPayHatcheryHelper' = 'unableToPayHatcheryHelper',
    'unableToPayFarmHand' = 'unableToPayFarmHand',
    'registeredBerry' = 'registeredBerry',
    'shinyWander' = 'shinyWander',
    'shinyWanderDupe' = 'shinyWanderDupe',
    'wildWander' = 'wildWander',
    'fluteRanOutOfGems' = 'fluteRanOutOfGems',
    'purchasedShiny' = 'purchasedShiny',
    'purchasedShinyDupe' = 'purchasedShinyDupe',
    'evolvedShiny' = 'evolvedShiny',
    'evolvedShinyDupe' = 'evolvedShinyDupe',
    'captured' = 'captured',
    'capturedShiny' = 'capturedShiny',
    'capturedShinyDupe' = 'capturedShinyDupe',
    'enemyDrop' = 'enemyDrop',
    'roamer' = 'roamer',
    'roamerShiny' = 'roamerShiny',
    'roamerShinyDupe' = 'roamerShinyDupe',
    'completedQuest' = 'completedQuest',
    'completedQuestWithPoints' = 'completedQuestWithPoints',
    'questLevelUp' = 'questLevelUp',
    'resistantToPokerus' = 'resistantToPokerus',
}

export const createLogContent = {
    notTranslated: (vars: { text: string }) => ({ key: LogContentKey.notTranslated, vars }),
    earnedAchievement: (vars: { name: string }) => ({ key: LogContentKey.earnedAchievement, vars }),
    escapedShiny: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.escapedShiny, vars }),
    escapedShinyDupe: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.escapedShinyDupe, vars }),
    escapedWild: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.escapedWild, vars }),
    encounterShiny: (vars: { location: string, pokemon: PokemonNameType }) => ({ key: LogContentKey.encounterShiny, vars }),
    encounterShinyDupe: (vars: { location: string, pokemon: PokemonNameType }) => ({ key: LogContentKey.encounterShinyDupe, vars }),
    encounterWild: (vars: { location: string, pokemon: PokemonNameType }) => ({ key: LogContentKey.encounterWild, vars }),
    gainBattleFrontierReward: (vars: { reward: string, stage: string }) => ({ key: LogContentKey.gainBattleFrontierReward, vars }),
    gainBattleFrontierPoints: (vars: { points: string, stage: string }) => ({ key: LogContentKey.gainBattleFrontierPoints, vars }),
    hatchedShiny: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.hatchedShiny, vars }),
    hatchedShinyDupe: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.hatchedShinyDupe, vars }),
    unableToPayHatcheryHelper: (vars: { currency: string, name: string }) => ({ key: LogContentKey.unableToPayHatcheryHelper, vars }),
    unableToPayFarmHand: (vars: { name: string }) => ({ key: LogContentKey.unableToPayFarmHand, vars }),
    registeredBerry: (vars: { berry: string }) => ({ key: LogContentKey.registeredBerry, vars }),
    shinyWander: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.shinyWander, vars }),
    shinyWanderDupe: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.shinyWanderDupe, vars }),
    wildWander: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.wildWander, vars }),
    fluteRanOutOfGems: (vars: { flute: string }) => ({ key: LogContentKey.fluteRanOutOfGems, vars }),
    purchasedShiny: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.purchasedShiny, vars }),
    purchasedShinyDupe: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.purchasedShinyDupe, vars }),
    evolvedShiny: (vars: { basePokemon: PokemonNameType, evolvedPokemon: PokemonNameType }) => ({ key: LogContentKey.evolvedShiny, vars }),
    evolvedShinyDupe: (vars: { basePokemon: PokemonNameType, evolvedPokemon: PokemonNameType }) => ({ key: LogContentKey.evolvedShinyDupe, vars }),
    captured: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.captured, vars }),
    capturedShiny: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.capturedShiny, vars }),
    capturedShinyDupe: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.capturedShinyDupe, vars }),
    enemyDrop: (vars: { pokemon: PokemonNameType, item: string }) => ({ key: LogContentKey.enemyDrop, vars }),
    roamer: (vars: { location: string, pokemon: PokemonNameType }) => ({ key: LogContentKey.roamer, vars }),
    roamerShiny: (vars: { location: string, pokemon: PokemonNameType }) => ({ key: LogContentKey.roamerShiny, vars }),
    roamerShinyDupe: (vars: { location: string, pokemon: PokemonNameType }) => ({ key: LogContentKey.roamerShinyDupe, vars }),
    completedQuest: (vars: { quest: string }) => ({ key: LogContentKey.completedQuest, vars }),
    completedQuestWithPoints: (vars: { quest: string, points: string }) => ({ key: LogContentKey.completedQuestWithPoints, vars }),
    questLevelUp: (vars: { level: string }) => ({ key: LogContentKey.questLevelUp, vars }),
    resistantToPokerus: (vars: { pokemon: PokemonNameType }) => ({ key: LogContentKey.resistantToPokerus, vars }),
};