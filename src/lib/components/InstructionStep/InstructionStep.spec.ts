import { render, fireEvent, screen } from '@testing-library/svelte';

import InstructionStep from './InstructionStep.svelte';

describe('Test InstructionStep.svelte', async () => {
	const props = {
		instruction: 'instruction',
	};

	it('Should render InstructionStep', () => {
		render(InstructionStep, props);

		expect(screen.getByText(props.instruction as string)).toBeInTheDocument();
	});

	it('Should check/uncheck by clicking on checkbox', async () => {
		render(InstructionStep, props);

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
		render(InstructionStep, props);

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
