<script type="ts" lang="ts">
	import { getRandomRecipe } from '$lib/mocks/utils/generate-random-recipe';
	import RecipeTakeover from '$lib/components/RecipeTakeover/RecipeTakeover.svelte';

	const data = getRandomRecipe();
</script>

<RecipeTakeover ingredientGroups={data.ingredientGroups} instructionSteps={data.instructionSteps} />
