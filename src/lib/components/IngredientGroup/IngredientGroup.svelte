<script type="ts" lang="ts">
	import classNames from 'classnames';
	import Ingredient from '$lib/components/Ingredient/Ingredient.svelte';
	import type { IngredientGroup } from '$lib/types';

	export let name: IngredientGroup['name'];
	export let ingredients: IngredientGroup['ingredients'] = [];
	export let checked = false;

	$: rootCn = classNames('root', { checked });

	const onChange = () => {
		checked = !checked;
	};
</script>

{#if ingredients.length > 0}
	<div class={rootCn}>
		<p class="ingredient-group-title">
			<label for={name}>
				<input
					class="ingredient-group-checkbox"
					type="checkbox"
					id={name}
					{checked}
					on:change={onChange}
				/>
				<span class="ingredient-group-name">{name}</span>
			</label>
		</p>
		<ul class="ingredients-list">
			{#each ingredients as ingredient, i}
				{#key `${name}-${ingredient.name}`}
					<li class="ingredients-item">
						<Ingredient {...ingredient} id={`${name}-${ingredient.name}`} />
					</li>
				{/key}
			{/each}
		</ul>
	</div>
{/if}

<style>
	.root {
		display: block;
		margin-bottom: var(--gap-unit);
	}

	label {
		display: block;
	}

	li {
		display: block;
	}

	.ingredients-list {
		padding: 0;
		margin-bottom: 0.5rem;
	}

	.ingredient-group-title {
		font-size: var(--title-font-size);
		margin: 0;
		margin-bottom: 0.25rem;
	}

	.root.checked .ingredients-list {
		display: none;
	}

	@media print {
		.root {
			font-size: inherit;
		}

		.ingredient-group-checkbox {
			display: none;
		}

		.ingredient-group-title {
			font-size: inherit;
		}
	}
</style>
