// FarmersPage.jsx - Main farmers page with all logic

import { useState, useEffect } from 'react';
import FarmerList from '../components/FarmerList';
import FarmerForm from '../components/FarmerForm';
import { fetchFarmers, createFarmer, updateFarmer, deleteFarmer } from '../services/api';

export default function FarmersPage() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingFarmer, setEditingFarmer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  // Fetch farmers on component mount
  useEffect(() => {
    loadFarmers();
  }, []);

  // Load farmers from API
  const loadFarmers = async () => {
    try {
      setLoading(true);
      const data = await fetchFarmers();
      setFarmers(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission (create or update)
  const handleSubmit = async () => {
    try {
      if (editingFarmer) {
        await updateFarmer(editingFarmer.id, formData);
      } else {
        await createFarmer(formData);
      }
      
      setShowForm(false);
      setEditingFarmer(null);
      setFormData({ name: '', email: '', phone: '', location: '' });
      loadFarmers();
      
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  // Open form in CREATE mode
  const handleAdd = () => {
    setEditingFarmer(null);
    setFormData({ name: '', email: '', phone: '', location: '' });
    setShowForm(true);
  };

  // Open form in EDIT mode
  const handleEdit = (farmer) => {
    setEditingFarmer(farmer);
    setFormData({
      name: farmer.name,
      email: farmer.email,
      phone: farmer.phone,
      location: farmer.location || ''
    });
    setShowForm(true);
  };

  // Delete a farmer
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this farmer?')) {
      return;
    }
    
    try {
      await deleteFarmer(id);
      loadFarmers();
    } catch (err) {
      alert('Error deleting farmer: ' + err.message);
    }
  };

  // Handle form close
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingFarmer(null);
    setFormData({ name: '', email: '', phone: '', location: '' });
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading farmers...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px' 
      }}>
        <h1>Mango</h1>
        <button 
          onClick={handleAdd}
          style={{
            padding: '10px 20px',
            backgroundColor: '#22c55e',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Add Farmer
        </button>
      </div>

      <p>Total farmers: {farmers.length}</p>
      
      <FarmerList 
        farmers={farmers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <FarmerForm
        isOpen={showForm}
        onClose={handleCloseForm}
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleInputChange}
        isEditing={editingFarmer !== null}
      />
    </div>
  );
}