import React, { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";

const Home = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleSave = () => {
    setEditingUser(null);
    setShowForm(false);
    setRefresh(!refresh);
  };

  const handleClose = () => {
    setEditingUser(null);
    setShowForm(false);
  }

  return (
    <div className="container">
      <div className="table-header">
        <h2>List Of Users</h2>
        <button onClick={() => setShowForm(true)}>Add User</button>
      </div>
      <UserTable key={refresh} onEdit={handleEdit} />
      {showForm && <UserForm user={editingUser} onSave={handleSave} onClose={handleClose} />}
    </div>
  );
};

export default Home;
