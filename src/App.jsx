import { useState, useEffect } from "react";
import style from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const contactsList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const items = JSON.parse(localStorage.getItem("contacts")) || [];

    if (items.length !== 0) return items;

    return contactsList;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
    console.log(newContact);
  };

  const deleteContact = (id) => {
    console.log(id);
    setContacts((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const filteredTasks = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={style.container}>
      <h1 className={style.header}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredTasks} onDelete={deleteContact} />
    </div>
  );
};

export default App;
