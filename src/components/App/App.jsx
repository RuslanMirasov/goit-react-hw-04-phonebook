import { useState, useEffect } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = event => {
    const filterValue = event.target.value;
    setFilter(filterValue);
  };

  const onFormSubmit = newContact => {
    const isSameName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isSameName) return alert(`${isSameName.name} is already in contacts`);
    setContacts(prevState => [{ ...newContact, id: nanoid() }, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const getFilteredContacts = (contactsArr, filterArr) => {
    return contactsArr.filter(contact =>
      contact.name.toLowerCase().includes(filterArr.toLowerCase())
    );
  };

  return (
    <main className={css.main}>
      <h1 hidden>React HW-04-Phonebook</h1>

      <Section title="Phonebook">
        <ContactForm handleFormSubmit={onFormSubmit} />
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter name={filter} handleFilterChange={handleFilterChange} />
            <ContactList
              contacts={getFilteredContacts(contacts, filter)}
              onDeleteContact={deleteContact}
            />
          </>
        ) : (
          <Notification message="There is no contacts in Phonebook!"></Notification>
        )}
      </Section>
    </main>
  );
}
