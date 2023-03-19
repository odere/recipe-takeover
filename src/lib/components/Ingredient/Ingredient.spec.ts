import { render, fireEvent, screen } from '@testing-library/svelte';

import { orange } from '../../mocks/ingredientsMock';

import Ingredient from './Ingredient.svelte';

describe('Test Ingredient.svelte', async () => {
	const props = {
		id: 'ingredientId',
		amount: orange.amount,
		unit: orange.unit,
		name: orange.name
	};

	it('Should render Ingredient', () => {
		render(Ingredient, props);

		expect(screen.getByText(props.name as string)).toBeInTheDocument();
		expect(screen.getByText(props.unit as string)).toBeInTheDocument();
		expect(screen.getByText(props.amount as number)).toBeInTheDocument();
	});

	it('Should check/uncheck ingredient', async () => {
		render(Ingredient, props);

		expect(document.querySelector('.checked')).not.toBeInTheDocument();

		await fireEvent.click(screen.getByText(props.name as string));

		expect(document.querySelector('.checked')).toBeInTheDocument();

		await fireEvent.click(screen.getByText(props.name as string));

		expect(document.querySelector('.checked')).not.toBeInTheDocument();
	});
});
