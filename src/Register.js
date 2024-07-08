import React, { useContext, useState } from 'react';
import { Mycontext } from '../Mycontext';
const Register = () => {
  const { users, setUsers } = useContext(Mycontext);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    username: "",
    password: "",
  });
  const [registered, setRegistered] = useState(false); // State to track registration status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUsers([...users, formData]); // Add new user data to context
    setRegistered(true); // Set registration status to true
    console.log(users);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        {registered && <p className="text-green-600 mt-2 text-center">Registered successfully!</p>}
      </div>
    </div>
  );
};

export default Register;