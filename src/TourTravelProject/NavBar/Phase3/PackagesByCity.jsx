import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Phase3/Packages.css";


const PackagesByCity = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    // Fetch all packages to extract unique cities
    axios
      .get(`https://tour-server-0b0i.onrender.com/packages`)
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const uniqueCities = [
            ...new Set(response.data.map((r) => r.city)),
          ];
          setCities(uniqueCities);
        }
      })
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setLoading(true);
    setError(null);

    axios
      .get(`https://tour-server-0b0i.onrender.com/getPackagesByCity/${city}`)
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setPackages(response.data);
        } else {
          setPackages([]);
        }
      })
      .catch((error) => {
        setError("Failed to fetch packages.");
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1 className="packages-title">Tour Packages</h1>

      {/* Dropdown to select a city */}
      <div className="dropdown-container">
        <label>Select a City: </label>
        <select onChange={handleCityChange} value={selectedCity}>
          <option value="">-- Select --</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Loading & Error Messages */}
      {loading && <p className="loading">Loading packages...</p>}
      {error && <p className="error">{error}</p>}

      {/* Restaurant List */}
      <div className="packages-list">
        {packages.length > 0 ? (
          packages.map((packages) => (
            <div key={packages.id} className="packages-card">
              {/* Link to packages details page */}
              <Link to={`/packages/${packages.id}`} className="details-link ">
                <img
                  src={packages.img|| "/default-packages.jpg"} // Default image if not provided
                  alt={packages.Name}
                  className="packages-image"
                />
                <div className="packages-details">
                  <h2>{packages.Name}</h2>
                  <p className="packages-city">📍 {packages.city}</p>
                  <p className="packages-price"> 💰{packages.Price}</p>
                  <p className="packages-description">{packages.discription}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="no-data">No packages found for this city.</p>
        )}
      </div>
    </div>
  );
};

export default PackagesByCity;



