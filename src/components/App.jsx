// App.jsx
import { ContactForm } from './contact_form/ContactForm';
import { ContactList } from './contact_list/ContactList';
import { Filter } from './filter/Filter';
import { Heading1, Heading2 } from './app-style';

export const App = () => {
  return (
    <div>
      <Heading1>Phonebook</Heading1>
      <ContactForm />
      <Heading2>Contacts</Heading2>
      <Filter />
      <ContactList />
    </div>
  );
};
