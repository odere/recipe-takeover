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
