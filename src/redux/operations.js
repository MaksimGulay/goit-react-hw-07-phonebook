// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export async function getContacts() {
  const baseURL = 'https://65242edeea560a22a4e98d0e.mockapi.io';
  try {
    const response = await axios?.get(`${baseURL}/contacts`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
