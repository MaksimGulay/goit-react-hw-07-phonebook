// App.jsx
import { ContactForm } from './contact_form/ContactForm';
import { ContactList } from './contact_list/ContactList';
import { Filter } from './filter/Filter';
import { Heading1, Heading2 } from './app-style';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoading, getError } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Heading1>Phonebook</Heading1>
      <ContactForm />
      <Heading2>Contacts</Heading2>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      <ContactList />
    </div>
  );
};
