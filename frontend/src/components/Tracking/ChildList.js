// src/components/Tracking/ChildList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChildList() {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/children`);
        setChildren(response.data);
      } catch (error) {
        console.error('Error fetching children:', error);
      }
    };

    fetchChildren();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Children List</h1>
      <ul>
        {children.map((child) => (
          <li key={child._id} className="border p-2 mb-2">
            {child.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChildList;
