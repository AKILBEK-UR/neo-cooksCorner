import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipesAPI } from '../../api/recipes'; // Adjust import path as needed

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async ({ categoryId, page = 0, size = 10, sort = [] }, { rejectWithValue }) => {
    try {
      const response = await fetchRecipesAPI(categoryId, page, size, sort);
      return response.data.content; // Adjust based on the structure of your API response
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : { message: 'An error occurred' });
    }
  }
);

const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload; // Update recipes with fetched data
        state.error = null;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Store the error message
      });
  },
});

export default recipeSlice.reducer;

export const selectRecipes = (state) => state.recipe.recipes;
export const selectRecipesLoading = (state) => state.recipe.isLoading;
export const selectRecipesError = (state) => state.recipe.error;
