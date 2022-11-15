import React, { useState, useEffect } from "react";
import styles from "../styles/Dashboard.module.css";
import Contact from "./Contact";
import { ContactDataReceived } from "../types/contact.types";
import notify from "../utils/notify";

const Dashboard = () => {
  const [contacts, setContacts] = useState<ContactDataReceived[]>([]);

  const handleDelete = (id: number): void => {
    fetch(`http://localhost:8000/contact/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        notify("contact removed");
        getContacts();
      })
      .catch(() => {
        notify("something went wrong");
      });
  };

  const handleUpdate = (id: number, formData: ContactDataReceived) => {
    fetch(`http://localhost:8000/contact/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        notify("Contact Updated");
        getContacts();
      })
      .catch(() => {
        notify("Something went wrong");
      });
  };

  const getContacts = () => {
    fetch(`http://localhost:8000/contact`)
      .then((res) => {
        res.json().then((data) => {
          setContacts([...data]);
        });
      })
      .catch((err) => {
        notify("something went wrong");
      });
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <section className={styles.dashboard} data-testid="dashboardContainer">
      {contacts.map((contact: ContactDataReceived, index) => (
        <Contact
          key={index}
          {...contact}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </section>
  );
};

export default Dashboard;
