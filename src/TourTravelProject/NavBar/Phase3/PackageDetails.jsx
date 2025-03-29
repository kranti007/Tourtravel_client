

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Phase3/Packages.css";

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [packages, setPackages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios
  .get(`https://tour-server-0b0i.onrender.com/packages/${id}`)
  .then((response) => {
    setPackages(response.data.package); // Ensure correct data extraction
    setLoading(false);
  })
  .catch(() => {
    setError("Failed to fetch packages details.");
    setLoading(false);
  });

  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="packages-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">⬅ Go Back</button>

      <h1 className="packages-title">{packages.Name}</h1>
      <img
        src={packages.img || "/default-packages.jpg"}
        alt={packages.Name}
        className="packages-detail-image"
      />
      <p className="packages-city">📍 Location: {packages.city}</p>
      <p className="packages-description">
        {packages.discription}
      </p>
    </div>
  );
};

export default PackageDetails;

