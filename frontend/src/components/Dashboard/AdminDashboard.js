// src/components/Dashboard/AdminDashboard.js
import React from 'react';
import ChildDetails from './Tracking/ChildDetails';
import ChildList from './Tracking/ChildList'
function AdminDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>.
      <ChildDetails />
      {/* Add admin dashboard functionality here */}
    </div>
  );
}

export default AdminDashboard;
