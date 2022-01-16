import React, {useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  

    // const contacts = [
    //   {
    //     id: "1",
    //     name: "Kandy",
    //     email: "kandy254@mylife.mku.ac.ke",
    //   },
    //   {
    //     id: "2",
    //     name: "Aisha",
    //     email: "aisha@mylife.mku.ac.ke",
    //   },
    // ]
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);

    // gets contact from the AddContact component
    const addContactHandler = (contact) => {
      console.log(contact);
      setContacts([...contacts, { id: uuid(), ...contact }]);
    };

    const removeContactHandler = (id) => {
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });

      setContacts(newContactList);
    };

    // useEffect hook to retrieve contacts from the local storage
    useEffect(() => {
      const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

      if(retrieveContacts) setContacts(retrieveContacts);
    }, []);

    // useEffect hook to store the contacts into the local storage
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
      
    }, [contacts]);

    return (

      <div className="ui container">
        <Router>
          <Header />
          <Routes>
            <Route path="/add" component={AddContact} />
            <Route path="/" component={ContactList} />
          </Routes>
        {/* <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
        </Router>
        
        
      </div>
    );
}

export default App;
