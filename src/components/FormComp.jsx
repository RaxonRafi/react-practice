import React, { useState, useEffect } from "react";
import { useTolet } from "../Services/Context/ToletContext";


const FormComp = ({ editData, setEditData }) => {
  const { addListing, updateListing } = useTolet();
  const [formData, setFormData] = useState({
    name: "",
    area: "",
    description: "",
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData({ name: "", area: "", description: "" });
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      updateListing({ ...formData, id: editData.id });
      setEditData(null);
    } else {
      addListing(formData);
    }

    setFormData({ name: "", area: "", description: "" });
  };

  return (
    <div className="border border-gray-50 shadow-lg rounded-lg p-4 bg-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="text-lg">Your name</label>
          <input
            type="text"
            name="name"
            className="border border-gray-200 w-full mt-1 p-2 rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="area" className="text-lg">Your Area</label>
          <input
            type="text"
            name="area"
            className="border border-gray-200 w-full mt-1 p-2 rounded-md"
            value={formData.area}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="description" className="text-lg">Description</label>
          <textarea
            name="description"
            className="border border-gray-200 w-full mt-1 p-2 rounded-md"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className={`text-white ${editData ? "bg-green-600" : "bg-blue-700"} hover:opacity-90 px-5 py-2.5 rounded-lg`}
        >
          {editData ? "Update" : "Submit"}
        </button>
        {editData && (
          <button
            type="button"
            onClick={() => setEditData(null)}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default FormComp;
