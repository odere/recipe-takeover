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

	it('Should render ingredient data', () => {
		render(Ingredient, props);

		expect(screen.getByText(props.name as string)).toBeInTheDocument();
		expect(screen.getByText(props.unit as string)).toBeInTheDocument();
		expect(screen.getByText(props.amount as number)).toBeInTheDocument();
	});

	it('Should check/uncheck by clicking on checkbox', async () => {
		render(Ingredient, props);

		expect(document.querySelector('.checked')).not.toBeInTheDocument();

		let checkbox = document.querySelector('input');
		if (checkbox) {
			await fireEvent.click(checkbox);
		}

		expect(document.querySelector('.checked')).toBeInTheDocument();

		checkbox = document.querySelector('input');
		if (checkbox) {
			await fireEvent.click(checkbox);
		}

		expect(document.querySelector('.checked')).not.toBeInTheDocument();
	});

	it('Should check/uncheck by clicking on checkbox label(component wrapper)', async () => {
		render(Ingredient, props);

		expect(document.querySelector('.checked')).not.toBeInTheDocument();

		let label = document.querySelector('label');
		if (label) {
			await fireEvent.click(label);
		}

		expect(document.querySelector('.checked')).toBeInTheDocument();

		label = document.querySelector('label');
		if (label) {
			await fireEvent.click(label);
		}

		expect(document.querySelector('.checked')).not.toBeInTheDocument();
	});
});
