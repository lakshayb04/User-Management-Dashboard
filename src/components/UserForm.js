import React, { useState } from "react";
import { addUser, updateUser } from "../services/userService";
import "../styles/UserForm.css";

const UserForm = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    user || { firstName: "", lastName: "", email: "", department: "" }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    user ? await updateUser(user.id, formData) : await addUser(formData);
    onSave();
    handleClose();
  };

  const handleClose = async(e) => {
    e.preventDefault();
    onClose();
    setFormData({ firstName: "", lastName: "", email: "", department: "" });
  };

  return (
    <div className="model">
      <div className="model-content">
        <h2>{user ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
          <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" required />
          <button type="submit">{user ? "Update" : "Add"} User</button>
        </form>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default UserForm;
