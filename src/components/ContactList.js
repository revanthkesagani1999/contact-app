import React, {useRef} from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
    const inputEle = useRef();
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const getSearchTerm = () => {
      props.searchKeyword(inputEle.current.value);
  }

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
      <div className="main">
          <h2>Contact List
              <Link to="/add">
              <button className="ui button blue right floated">Add Contact</button>
              </Link>
          </h2>
      <div className="ui search">
          <div className="ui icon input">
              <input type="text" ref={inputEle} placeholder="Search contacts" className="prompt" value={props.term} onChange={getSearchTerm}/>
              <i className="search icon"></i>
          </div>
      </div>
  <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No contacts available"}</div>
  </div>);
};

export default ContactList;
