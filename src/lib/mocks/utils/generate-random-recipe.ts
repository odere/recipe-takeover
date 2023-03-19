import type { Ingredient, IngredientGroup, Recipe } from '../../types';

const getRandomNumber = (min = 2, max = 3) => Math.floor(Math.random() * max) || min;

const createIngredient = (amount: number, name: string): Ingredient => ({
	amount,
	name
});

const createIngredientGroup = (name: string): IngredientGroup => ({
	name,
	ingredients: Array.from({ length: getRandomNumber(3, 10) }, (_, ingredientIndex) =>
		createIngredient((ingredientIndex + 1) * 100, `Ingredient ${ingredientIndex + 1}`)
	)
});

const generateInstruction = (): string =>
	Array.from({ length: getRandomNumber(5, 30) }, () => 'Instruction').join(' ');

export const getRandomRecipe = (): Recipe => ({
	ingredientGroups: Array.from({ length: getRandomNumber(2, 4) }, (_, groupIndex) =>
		createIngredientGroup(`Group ${groupIndex + 1}`)
	),
	instructionSteps: Array.from({ length: getRandomNumber(5, 10) }, () => generateInstruction()),
	portions: getRandomNumber(1, 13)
});
