import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipesAPI } from '../../api/recipes';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetchRecipesAPI(data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
        state.recipes = action.payload;
        state.error = null;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default recipeSlice.reducer;

// Selectors
export const selectRecipes = (state) => state.recipes.recipes;
export const selectRecipesLoading = (state) => state.recipes.isLoading;
export const selectRecipesError = (state) => state.recipes.error;
