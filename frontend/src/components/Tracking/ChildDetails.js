// src/components/Tracking/ChildDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ChildDetails() {
  const { id } = useParams();
  const [child, setChild] = useState(null);

  useEffect(() => {
    const fetchChild = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/children/${id}`);
        setChild(response.data);
      } catch (error) {
        console.error('Error fetching child details:', error);
      }
    };

    fetchChild();
  }, [id]);

  return (
    <div className="p-4">
      {child ? (
        <div>
          <h1 className="text-2xl font-bold">Child Details</h1>
          <p><strong>Name:</strong> {child.name}</p>
          <p><strong>Age:</strong> {child.age}</p>
          <p><strong>Class:</strong> {child.class}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ChildDetails;
