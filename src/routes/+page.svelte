<script type="ts">
	import { getRandomRecipe } from '$lib/mocks/utils/generate-random-recipe';
	import RecipeTakeover from '$lib/components/RecipeTakeover/RecipeTakeover.svelte';

	const { portions, ...data } = getRandomRecipe();
</script>

<RecipeTakeover ingredientGroups={data.ingredientGroups} instructionSteps={data.instructionSteps} />
