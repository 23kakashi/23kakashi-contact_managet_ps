import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import notify from "../utils/notify";
import { ContactData } from "../types/contact.types";
import { useNavigate } from "react-router-dom";

const ContactDataInit = {
  name: "",
  mobile: "",
  email: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactData>(ContactDataInit);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    if (name === "mobile") {
      let finalString;
      if (value.length >= 10) {
        let res = event.target.value.replace(/[^0-9]/gi, "");
        finalString = res.slice(0, 10);
      } else {
        finalString = event.target.value.replace(/[^0-9]/gi, "");
      }
      setFormData({
        ...formData,
        [name]: finalString,
      });
    } else if (name === "name") {
      const res = event.target.value.replace(/[^a-z ]/gi, "");
      setFormData({
        ...formData,
        [name]: res,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        notify("New contact added");
        navigate("/");
      })
      .catch(() => {
        notify("Something went wrong");
      });
  };

  return (
    <>
      <div className={styles.contactform}>
        {/* <ToastContainer /> */}
        <form
          action=""
          data-testid="regForm"
          className={styles.form}
          onSubmit={handleFormSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            inputProps={{ "data-testid": "name" }}
            name="name"
            type="text"
            style={{ marginBottom: "10px" }}
            size="small"
            variant="outlined"
            required
            onChange={handleChange}
            autoComplete="off"
            value={formData.name}
          />
          <TextField
            id="outlined-basic"
            label="Mobile"
            name="mobile"
            type="text"
            inputProps={{ maxLength: "10", "data-testid": "mobile" }}
            style={{ marginBottom: "10px" }}
            size="small"
            variant="outlined"
            required
            value={formData.mobile}
            onChange={handleChange}
            autoComplete="off"
          />
          <TextField
            id="outlined-basic"
            inputProps={{ "data-testid": "email" }}
            label="Email"
            name="email"
            type="email"
            style={{ marginBottom: "10px" }}
            size="small"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <Button variant="contained" type="submit" data-testid="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
