// ProduceForm.jsx - Form for create/edit produce

import { useState, useEffect } from 'react';
import { fetchFarmers } from '../services/api';

export default function ProduceForm({ 
  isOpen, 
  onClose, 
  onSubmit, 
  formData, 
  onChange, 
  isEditing 
}) {
  const [farmers, setFarmers] = useState([]);
  const [loadingFarmers, setLoadingFarmers] = useState(true);

  // Fetch farmers for dropdown when form opens
  useEffect(() => {
    if (isOpen) {
      loadFarmers(); // load farmers when form opens
    }
  }, [isOpen]);

  const loadFarmers = async () => {
    try {
      setLoadingFarmers(true);
      const data = await fetchFarmers();
      setFarmers(data);
    } catch (err) {
      console.error('Error loading farmers:', err);
    } finally {
      setLoadingFarmers(false);
    }
  };

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        width: '400px',
        maxWidth: '90%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <h2 style={{ marginTop: 0 }}>
          {isEditing ? 'Edit Produce' : 'Add New Produce'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          {/* Produce Name */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Name: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
              placeholder="e.g., Tomatoes"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Category */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Category: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={onChange}
              required
              placeholder="e.g., Vegetables"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Quantity */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Quantity: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={onChange}
              required
              min="0"
              placeholder="0"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Unit */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Unit: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="unit"
              value={formData.unit}
              onChange={onChange}
              required
              placeholder="e.g., lbs, kg, boxes"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Price Per Unit */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Price Per Unit: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="number"
              name="pricePerUnit"
              value={formData.pricePerUnit}
              onChange={onChange}
              required
              min="0.01"
              step="0.01"
              placeholder="0.00"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={onChange}
              placeholder="Optional description"
              rows="3"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            />
          </div>

          {/* FARMER DROPDOWN */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Farmer: <span style={{ color: 'red' }}>*</span>
            </label>
            {loadingFarmers ? (
              <p style={{ fontSize: '14px', color: '#666' }}>Loading farmers...</p>
            ) : (
              <select
                name="farmerId"
                value={formData.farmerId}
                onChange={onChange}
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              >
                <option value="">-- Select a Farmer --</option>
                {farmers.map((farmer) => (
                  <option key={farmer.id} value={farmer.id}>
                    {farmer.name} ({farmer.location})
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '10px 20px',
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#22c55e',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {isEditing ? 'Update Produce' : 'Create Produce'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}