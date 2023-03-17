<script type="ts" lang="ts">
	export let instruction: string = '';
	export let checked = false;

	$: checkedClassName = checked ? 'checked' : '';

	const onChange = () => {
		checked = !checked;
	};
</script>

{#if instruction !== ''}
	<label for={instruction} class={`root ${checkedClassName}`}>
		<input
			class="instruction-step-checkbox"
			type="checkbox"
			id={instruction}
			{checked}
			on:change={onChange}
		/>
		<span class="ingredients-item-amount">{instruction}</span>
	</label>
{/if}

<style>
	.root {
		display: block;
		margin-bottom: var(--gap-unit);
	}

	.root.checked {
		text-decoration: var(--checked-text-decoration);
	}

	label {
		display: block;
	}

	@media print {
		.root {
			font-size: inherit;
		}

		.ingredients-item-checkbox {
			display: none;
		}
	}
</style>
