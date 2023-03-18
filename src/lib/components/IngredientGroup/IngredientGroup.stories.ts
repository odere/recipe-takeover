import type { Meta, StoryObj } from '@storybook/svelte';

import { fruitGroup } from '../../mocks/ingredientGroupsMock';

import IngredientGroup from './IngredientGroup.svelte';

const meta = {
	title: 'Components/IngredientGroup',
	component: IngredientGroup,
	tags: ['autodocs'],
	argTypes: {
		name: {
			table: {
				type: { summary: 'string' }
			},
			type: { name: 'string', required: true }
		}
	},
	args: {
		name: fruitGroup.name,
		ingredients: fruitGroup.ingredients,
	}
} satisfies Meta<IngredientGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
