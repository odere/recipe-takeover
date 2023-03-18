<script type="ts" lang="ts">
	import classNames from 'classnames';

	export let instruction = '';
	export let checked = false;

	$: rootCn = classNames('root', { checked });

	const onChange = () => {
		checked = !checked;
	};
</script>

{#if instruction !== ''}
	<label for={instruction} class={rootCn}>
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
