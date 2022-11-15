import { ContactDataReceived } from "../types/contact.types";
import styles from "../styles/Contact.module.css";
import { Edit, Delete } from "@mui/icons-material";
import { useState } from "react";
import { TextField, Button } from "@mui/material";

const capitaliseFirstChar = (string: string): string => {
  let capitalised = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalised;
};

interface handleDeleteProps extends ContactDataReceived {
  handleDelete(id: number): void;
  handleUpdate(id: number, formData: ContactDataReceived): void;
}

const Contact: React.FC<handleDeleteProps> = ({
  id,
  name,
  mobile,
  email,
  handleDelete,
  handleUpdate,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<ContactDataReceived>({
    id,
    name,
    mobile,
    email,
  });

  const handleInputChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.charCode > 47 && event.charCode < 58) {
    } else {
      event.preventDefault();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleUpdate = (event: React.SyntheticEvent) => {
  //   event.preventDefault();
  //   fetch(`http://localhost:8000/contact/${id}`, {
  //     method: "PUT",
  //     headers: {"content-type": "application/json"},
  //     body: JSON.stringify(formData)
  //   })
  //     .then(() => {notify("Contact Updated")})
  //     .catch(() => {notify("Something went wrong")});
  // };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div className={styles.contactContainer}>
      {isEdit ? (
        <form action="" className={styles.form}>
          <TextField
            id="outlined-basic"
            label="Name"
            name="name"
            type="text"
            style={{ marginBottom: "10px" }}
            size="small"
            variant="outlined"
            required
            onChange={handleChange}
            defaultValue={name}
            autoComplete="off"
          />
          <TextField
            id="outlined-basic"
            label="Mobile"
            onKeyPress={handleInputChange}
            name="mobile"
            type="tel"
            inputProps={{ maxLength: "10" }}
            style={{ marginBottom: "10px" }}
            size="small"
            defaultValue={mobile}
            variant="outlined"
            required
            onChange={handleChange}
            autoComplete="off"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            type="email"
            style={{ marginBottom: "10px" }}
            size="small"
            defaultValue={email}
            variant="outlined"
            onChange={handleChange}
            autoComplete="off"
          />
          <Button
            variant="contained"
            type="button"
            onClick={() => {
              handleUpdate(id, formData);
              handleEdit();
            }}
          >
            Update
          </Button>
          <Button variant="contained" type="button" onClick={handleEdit}>
            Cancel
          </Button>
        </form>
      ) : (
        <div>
          <span className={styles.name}>{capitaliseFirstChar(name)}</span>
          <span className={styles.iconEdit} onClick={handleEdit}>
            <Edit sx={{ fontSize: 20 }} />
          </span>
          <span
            className={styles.iconDelete}
            onClick={() => {
              handleDelete(id);
            }}
          >
            <Delete sx={{ fontSize: 20 }} />
          </span>
          <p className={styles.contactDetail}>Mobile: {mobile}</p>
          <p className={styles.contactDetail}>Email: {email}</p>
        </div>
      )}

      <div className={styles.avatar}>
        <img src="https://via.placeholder.com/80" alt="avatar" />
      </div>
    </div>
  );
};

export default Contact;
