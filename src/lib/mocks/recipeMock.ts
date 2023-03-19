import type { Recipe } from '../types';

import { fruitGroup } from './ingredientGroupsMock';

export const fruitSaladRecipe: Recipe = {
	portions: 10,
	ingredientGroups: [fruitGroup],
	instructionSteps: ['Cut fruits into accurate cubes', 'Mix it all in a bowl']
};
