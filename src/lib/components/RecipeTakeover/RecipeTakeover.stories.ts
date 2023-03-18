import type { Meta, StoryObj } from '@storybook/svelte';

import { fruitSaladRecipe } from '../../mocks/recipeMock';
import { getRandomRecipe } from '../../mocks/utils/generate-random-recipe';

import RecipeTakeover from './RecipeTakeover.svelte';

const meta = {
	title: 'Components/RecipeTakeover',
	component: RecipeTakeover,
	tags: ['autodocs'],
	args: {
		ingredientGroups: fruitSaladRecipe.ingredientGroups,
		instructionSteps: fruitSaladRecipe.instructionSteps,
	}
} satisfies Meta<RecipeTakeover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RandomRecipe: Story = {
	args: {
		ingredientGroups: getRandomRecipe().ingredientGroups,
		instructionSteps: getRandomRecipe().instructionSteps,
	}
};
