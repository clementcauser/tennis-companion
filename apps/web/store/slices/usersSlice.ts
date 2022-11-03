import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  CreateUserDtoInput,
  CreateUserDtoOutput,
  User,
} from '@tennis-companion/domain';
import presenters from '../../di';

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';

interface UserState {
  user: User | null;
  status: RequestState;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
};

export const createUserThunk = createAsyncThunk<
  CreateUserDtoOutput,
  CreateUserDtoInput
>('users/create', async (payload) => {
  return presenters.user.createUser(payload);
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserThunk.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(createUserThunk.rejected, (state) => {
      state.status = 'rejected';
    });
    builder.addCase(createUserThunk.fulfilled, (state) => {
      state.status = 'fulfilled';
    });
  },
});

export default userSlice.reducer;
