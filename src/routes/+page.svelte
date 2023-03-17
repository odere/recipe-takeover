<script type="ts">
	import { data } from '$lib/data';
	import RecipeTakeover from '$lib/components/RecipeTakeover.svelte';
</script>

<RecipeTakeover ingredientGroups={data.ingredientGroups} instructionSteps={data.instructionSteps} />
