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

	it('Should check/uncheck instruction step', async () => {
		render(InstructionStep, props);

		expect(document.querySelector('.checked')).not.toBeInTheDocument();
		
		await fireEvent.click(screen.getByText(props.instruction as string));

		expect(document.querySelector('.checked')).toBeInTheDocument();
		
		await fireEvent.click(screen.getByText(props.instruction as string));

		expect(document.querySelector('.checked')).not.toBeInTheDocument();
	});
});
