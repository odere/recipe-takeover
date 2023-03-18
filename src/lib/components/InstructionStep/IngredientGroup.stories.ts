import type { Meta, StoryObj } from '@storybook/svelte';

import InstructionStep from './InstructionStep.svelte';

const meta = {
	title: 'Components/InstructionStep',
	component: InstructionStep,
	tags: ['autodocs'],
	args: {
		instruction:
			'Cut off the skin of the melon and cut the melon flesh into even pieces. Cut the tomatoes into slices or pieces. Clean and divide the strawberries. Mix melon, tomatoes and strawberries on a plate. Drizzle over a drizzle of olive oil and a few drops of vinegar. Season lightly with salt and black pepper.'
	}
} satisfies Meta<InstructionStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
