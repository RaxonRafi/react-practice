import React, { useState } from "react";
import FormComp from "../components/FormComp";
import { useTolet } from "../Services/Context/ToletContext";

const Tolets = () => {
  const { listings, deleteListing } = useTolet();
  const [editData, setEditData] = useState(null);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-let Listings</h1>

      {editData && (
        <div className="mb-6">
          <FormComp editData={editData} setEditData={setEditData} />
        </div>
      )}

      {listings.length === 0 ? (
        <p>No listings available.</p>
      ) : (
        listings.map((listing) => (
          <div key={listing.id} className="border p-4 mb-4 rounded shadow">
            <h2 className="font-bold">{listing.name} — {listing.area}</h2>
            <p>{listing.description}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => setEditData(listing)}
                className="bg-yellow-400 text-white px-4 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteListing(listing.id)}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Tolets;
