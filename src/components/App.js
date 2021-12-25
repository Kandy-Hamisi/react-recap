import React, {useState} from 'react';


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

    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
      console.log(contact);
    }

    return (

      <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} />
      </div>
    );
}

export default App;
