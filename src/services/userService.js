import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.map(user => ({
      id: user.id,
      firstName: user.name.split(" ")[0],
      lastName: user.name.split(" ")[1] || "N/A",
      email: user.email,
      //since department field doesnt exist in jsonplaceholder api, i am using the company name field here. we could have used mock data for that but for the scope of this assignment i used the company name field.
      companyName: user.company?.name || "Unknown"
    }));
  } catch (error) {
    toast.error("Failed to fetch users.");
    return [];
  }
};

export const addUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    toast.success("User added successfully!");
    return response.data;
  } catch (error) {
    toast.error("Error adding user.");
  }
};

export const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, user);
    toast.success("User updated successfully!");
    return response.data;
  } catch (error) {
    toast.error("Error updating user.");
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    toast.success("User deleted successfully!");
  } catch (error) {
    toast.error("Error deleting user.");
  }
};
