import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function creatCard(contact){
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://i.pinimg.com/736x/03/44/81/0344817b1680dc98644230d6d2032746.jpg" />
      {contacts.map(creatCard)}
    </div>
  );
}

export default App;
