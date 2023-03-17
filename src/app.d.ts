// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		export interface Ingredient {
			alternativeName?: string;
			amount?: number;
			comment?: string;
			ingredientId?: string;
			name?: string;
			unit?: string;
		}
		
		export interface IngredientGroup {
			ingredients: Ingredient[];
			name: string;
			showGroupTitle?: boolean;
		}
		
		export interface Recipe {
			ingredientGroups: IngredientGroup[];
			instructionSteps: string[];
			portions: number;
		}
	}
}

export {};
