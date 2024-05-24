"use client";
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    pic: "https://via.placeholder.com/150",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    pic: "https://via.placeholder.com/150",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    pic: "https://via.placeholder.com/150",
    role: "User",
    status: "Active",
  },
  // Add more user objects as needed
];

import Image from "next/image";
import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  pic: string;
  role: string;
  status: string;
}

interface Props {
  users: User[];
  onEditUser: (user: User) => void;
  onDeleteUser: (userId: number) => void;
}

const UserManagementPage = () => {
  const [editedUsers, setEditedUsers] = useState<User[]>([]);

  const handleRoleChange = (userId: number, newRole: string) => {
    setEditedUsers((prevState) => {
      const updatedUsers = prevState.map((user) => {
        if (user.id === userId) {
          return { ...user, role: newRole };
        }
        return user;
      });
      return updatedUsers;
    });
  };

  const handleStatusChange = (userId: number, newStatus: string) => {
    setEditedUsers((prevState) => {
      const updatedUsers = prevState.map((user) => {
        if (user.id === userId) {
          return { ...user, status: newStatus };
        }
        return user;
      });
      return updatedUsers;
    });
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", editedUsers);
    setEditedUsers([]);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center gap-2">
        <input
          type="text"
          name="name"
          value={""}
          placeholder="search user "
          className="mt-1  block p-2 border border-gray-300 rounded-md"
          required
        />

        <button className="btn bg-[#2563eb] text-white">Add New Pet</button>
      </div>
      <h1 className="rancho-regular text-center uppercase text-4xl font-bold my-6">
        All user&apos;s
      </h1>
      <table className="min-w-full divide-y divide-gray-200 " >
        <thead className="bg-slate-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200 bg-slate-50">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={user.pic}
                      alt={user.name}
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {user.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  className="block w-max  border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                  defaultValue={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  className="block w-max border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                  defaultValue={user.status}
                  onChange={(e) => handleStatusChange(user.id, e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => onEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:text-red-900 ml-2"
                  onClick={() => onDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editedUsers.length > 0 && (
        <div className="mt-4 flex justify-end">
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default UserManagementPage;
