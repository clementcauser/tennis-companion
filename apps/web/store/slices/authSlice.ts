import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  CreateUserDtoInput,
  ICreateUserDtoOutput,
  User,
} from '@tennis-companion/domain';
import { toast } from 'react-toastify';
import { RootState } from '..';
import presenters from '../../di';

interface UserState {
  user: User | null;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  error: null,
};

export const registerUserWithEmailAndPasswordThunk = createAsyncThunk<
  ICreateUserDtoOutput,
  CreateUserDtoInput & { onSuccess: () => void }
>('users/create', async ({ onSuccess, ...payload }) => {
  try {
    await presenters.user.createUser(payload);

    onSuccess();
  } catch (error) {
    const err = error as string;

    throw Error(err);
  }
});

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUserWithEmailAndPasswordThunk.pending, (state) => {
      state.user = null;
      state.error = null;

      toast('Création de votre compte en cours...', {
        toastId: registerUserWithEmailAndPasswordThunk.name,
      });
    });
    builder.addCase(
      registerUserWithEmailAndPasswordThunk.rejected,
      (state, { error }) => {
        state.user = null;
        state.error = error.message;

        toast.update(registerUserWithEmailAndPasswordThunk.name, {
          render: error.message,
          type: 'error',
        });
      }
    );
    builder.addCase(
      registerUserWithEmailAndPasswordThunk.fulfilled,
      (state) => {
        state.error = null;

        toast.update(registerUserWithEmailAndPasswordThunk.name, {
          render: 'Votre compte a été créé avec succès ! 🎉',
          type: 'success',
        });
      }
    );
  },
});

export const currentUserSelector = (state: RootState) => state.auth.user;
export const userErrorSelector = (state: RootState) => state.auth.error;

export default authSlice.reducer;
