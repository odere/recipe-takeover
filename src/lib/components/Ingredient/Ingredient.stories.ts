import type { Meta, StoryObj } from '@storybook/svelte';

import { orange } from '../../mocks/ingredientsMock';

import Ingredient from './Ingredient.svelte';

const meta = {
	title: 'Components/Ingredient',
	component: Ingredient,
	tags: ['autodocs'],
	argTypes: {
		id: {
			table: {
				type: { summary: 'string' }
			},
			type: { name: 'string', required: true }
		}
	},
	args: {
		id: orange.ingredientId,
		amount: orange.amount,
		unit: orange.unit,
		name: orange.name || orange.alternativeName
	}
} satisfies Meta<Ingredient>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
