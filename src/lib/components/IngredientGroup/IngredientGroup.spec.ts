import { render, fireEvent, screen } from '@testing-library/svelte';

import { fruitGroup } from '../../mocks/ingredientGroupsMock';

import IngredientGroup from './IngredientGroup.svelte';

describe('Test IngredientGroup.svelte', async () => {
	const props = {
		name: fruitGroup.name,
		ingredients: fruitGroup.ingredients
	};

	const firstIngredientName = props.ingredients[0].name as string;
	const groupName = props.name as string;

	it('Should render IngredientGroup', () => {
		render(IngredientGroup, props);

		expect(screen.getByText(groupName)).toBeInTheDocument();
		expect(screen.getByText(firstIngredientName)).toBeInTheDocument();
	});

	it('Should check/uncheck ingredient', async () => {
		render(IngredientGroup, props);

		expect(document.querySelector('.checked')).not.toBeInTheDocument();

		await fireEvent.click(screen.getByText(firstIngredientName));

		expect(document.querySelector('.checked')).toBeInTheDocument();

		await fireEvent.click(screen.getByText(firstIngredientName));

		expect(document.querySelector('.checked')).not.toBeInTheDocument();
	});

	it('Should show/hide ingredients', async () => {
		render(IngredientGroup, props);

		expect(screen.getByText(firstIngredientName)).toBeInTheDocument();

		await fireEvent.click(screen.getByText(groupName));

		expect(screen.queryByText(firstIngredientName)).toBeNull();

		await fireEvent.click(screen.getByText(groupName));

		expect(screen.getByText(firstIngredientName)).toBeInTheDocument();
	});
});
