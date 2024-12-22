import React, { useState, useEffect } from "react";
import { statuses } from "../database/mockDb";

export const Modal = ({ contract, onClose, onSave }) => {
  const [form, setForm] = useState(contract || {});
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Handle theme change and persist it in localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme); // Update theme in DOM
  }, [theme]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center">
      <div
        className={`p-6 rounded shadow-lg w-1/3 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="text-right cursor-pointer" onClick={onClose}>
          X
        </div>
        <h2 className="text-lg font-bold mb-4">Edit Contract</h2>
        <form onSubmit={handleSubmit}>
          <label className={`block mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Client Name:
            <input
              name="clientName"
              value={form.clientName || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </label>
          <label className={`block mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Status:
            <select
              name="status"
              value={form.status || ""}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
       
      </div>
    </div>
  );
};
