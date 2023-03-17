<script type="ts" lang="ts">
	export let amount: App.Ingredient['amount'] = 0;
	export let name: App.Ingredient['name'] = '';
	export let unit: App.Ingredient['unit'] = 'g';
	export let id: string;
	export let checked = false;

	$: checkedClassName = checked ? 'checked' : '';

	const onChange = () => {
		checked = !checked;
	};
</script>

{#if name !== ''}
	<label for={id} class={`root ${checkedClassName}`}>
		<input class="ingredients-item-checkbox" type="checkbox" {id} {checked} on:change={onChange} />
		<span class="ingredients-item-amount">{amount}</span>
		<span class="ingredients-item-unit">{unit}</span>
		<span class="ingredients-item-name">{name}</span>
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

	@media print {
		.root {
			font-size: inherit;
		}

		.ingredients-item-checkbox {
			display: none;
		}
	}
</style>
