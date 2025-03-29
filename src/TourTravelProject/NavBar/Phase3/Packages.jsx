import React, { useEffect, useState } from "react";
import axios from "axios";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://tour-server-0b0i.onrender.com/packages`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (Array.isArray(response.data)) {
          setPackages(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setPackages([]); // Fallback to an empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="packages-container">
      <h2 className="packages-title">Tour Packages</h2>
      <ul>
        {Array.isArray(packages) && packages.length > 0 ? (
          packages.map((packages) => (
            // <li key={packages.id}>
            //   <strong>{packages.packages}</strong> - {packages.city}
            // </li>
            <li key={packages.id}>
              <strong>
                <a href={`/packages/${packages.id}`}>{packages.Name}</a>
              </strong> - {packages.city}

              <p>
                <a href={`/getPackagesByCity/${packages.city}`}>
                  See more packages in {packages.city}
                </a>
              </p>

            </li>

            
          ))
        ) : (
          <p>No packages available.</p>
        )}
      </ul>

      
    </div>
  );
};

export default Packages;
