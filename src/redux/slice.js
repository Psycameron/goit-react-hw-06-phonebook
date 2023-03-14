import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],

  filter: '',
};

export const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const selectContacts = state => state.phoneBook.contacts;
export const selectFilter = state => state.phoneBook.filter;

export const { addContact, deleteContact } = phoneBookSlice.actions;
export const { filter } = filterSlice.actions;
