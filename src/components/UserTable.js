import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/userService";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import "../styles/UserTable.css";

const UserTable = ({ onEdit }) => {
  const [users, setUsers] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const confirmDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
    setDeleteId(null);
  };

  return (
    <div>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.companyName}</td>
              <td>
                <BiSolidEditAlt
                  title="Edit"
                  className="action-icon"
                  onClick={() => onEdit(user)}
                />
                <MdDelete
                  title="Delete"
                  className="action-icon"
                  onClick={() => setDeleteId(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Popup */}
      {deleteId && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to delete this user?</p>
            <button onClick={() => confirmDelete(deleteId)}>Yes</button>
            <button onClick={() => setDeleteId(null)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
