import React, {Component} from 'react';

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

class App extends Component {
  render() {

    const contacts = [
      {
        id: "1",
        name: "Kandy",
        email: "kandy254@mylife.mku.ac.ke",
      },
      {
        id: "2",
        name: "Aisha",
        email: "aisha@mylife.mku.ac.ke",
      },
    ]

    return (

      <div className="ui container">
        <Header />
        <AddContact />
        <ContactList contacts={contacts}/>
      </div>
    );
  }
}

export default App;
