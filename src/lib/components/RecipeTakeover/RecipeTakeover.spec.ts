import { render, screen } from '@testing-library/svelte';

import { fruitSaladRecipe } from '../../mocks/recipeMock';

import RecipeTakeover from './RecipeTakeover.svelte';

describe('Test InstructionStep.svelte', async () => {
	const props = {
		ingredientGroups: fruitSaladRecipe.ingredientGroups,
		instructionSteps: fruitSaladRecipe.instructionSteps
	};

	const firstGroupName = props.ingredientGroups[0].name;
	const firstIngredientName = props.ingredientGroups[0].ingredients[0].name as string;
	const firstInstructionStep = props.instructionSteps[0];

	it('Should render InstructionStep', () => {
		render(RecipeTakeover, props);

		expect(screen.getByText(firstGroupName)).toBeInTheDocument();
		expect(screen.getByText(firstIngredientName)).toBeInTheDocument();
		expect(screen.getByText(firstInstructionStep)).toBeInTheDocument();
	});

	it('Should not render ingredient groups', async () => {
		render(RecipeTakeover, {
			...props,
			ingredientGroups: []
		});

		expect(screen.queryByText(firstGroupName)).toBeNull();
		expect(screen.queryByText(firstIngredientName)).toBeNull();
	});

	it('Should not render instruction steps', async () => {
		render(RecipeTakeover, {
			...props,
			instructionSteps: []
		});

		expect(screen.queryByText(firstInstructionStep)).toBeNull();
	});
});
