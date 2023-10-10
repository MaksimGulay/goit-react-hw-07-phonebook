// operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65242edeea560a22a4e98d0e.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const respons = await axios.get('/contacts');
      return respons.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (name, number, thunkAPI) => {
    try {
      const respons = await axios.post('/contacts', name, number);
      return respons.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (Id, thunkAPI) => {
    try {
      const respons = await axios.delete(`/contacts/${Id}`);
      return respons.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
