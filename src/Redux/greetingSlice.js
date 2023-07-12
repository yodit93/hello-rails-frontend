import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: '',
  error: '',
  isLoading: false,
};

const url = 'http://127.0.0.1:3000/api/v1/greeting';
export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async (_, { rejectWithValue }) => {
  try {
    const response = await axios(url);
    return response.data.message;
  } catch (err) {
    return rejectWithValue('Unable to fetch data');
  }
});
const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGreeting.fulfilled, (state, { payload }) => {
        const data = payload;
        return {
          ...state,
          greeting: data,
          isLoading: false,
        };
      })
      .addCase(fetchGreeting.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }));
  },
});

export default greetingSlice.reducer;
