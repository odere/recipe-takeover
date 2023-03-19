<script type="ts" lang="ts">
	import IngredientGroupComponent from '$lib/components/IngredientGroup/IngredientGroup.svelte';
	import InstructionStep from '$lib/components/InstructionStep/InstructionStep.svelte';
	import type { IngredientGroup } from '$lib/types';

	import '$lib/styles/global-styles.css';

	export let ingredientGroups: IngredientGroup[] = [];
	export let instructionSteps: string[] = [];
</script>

{#if ingredientGroups.length > 0 || ingredientGroups.length > 0}
	<div class="root">
		{#if ingredientGroups.length > 0}
			<ul class="ingredients">
				{#each ingredientGroups as group, i}
					{#key `${i}-${group}`}
						<li class="ingredient-group">
							<IngredientGroupComponent {...group} />
						</li>
					{/key}
				{/each}
			</ul>
		{/if}

		{#if instructionSteps.length > 0}
			<ol class="instructions">
				{#each instructionSteps as instruction, i}
					{#key `${i}-${instruction}`}
						<li><InstructionStep {instruction} /></li>
					{/key}
				{/each}
			</ol>
		{/if}
	</div>
{/if}

<style>
	.root {
		font-size: var(--font-size);
	}

	.ingredients,
	.instructions {
		padding: 0;
	}

	.ingredients > li {
		display: block;
	}

	@media print {
		.root {
			font-size: inherit;
		}
	}
</style>
