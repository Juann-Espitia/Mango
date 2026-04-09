import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FarmerForm from '../components/FarmerForm';
import { fetchFarmers, createFarmer, updateFarmer, deleteFarmer } from '../services/api';

const CORAL = '#E8622A';
const CORAL_LIGHT = '#FFF0EA';
const CORAL_BORDER = '#FECBB0';

export default function FarmsPage() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingFarmer, setEditingFarmer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', location: '' });

  useEffect(() => { loadFarmers(); }, []);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (editingFarmer) {
        await updateFarmer(editingFarmer.id, formData);
      } else {
        await createFarmer(formData);
      }
      closeForm();
      loadFarmers();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const openAdd = () => {
    setEditingFarmer(null);
    setFormData({ name: '', email: '', phone: '', location: '' });
    setShowForm(true);
  };

  const openEdit = (farmer) => {
    setEditingFarmer(farmer);
    setFormData({ name: farmer.name, email: farmer.email, phone: farmer.phone, location: farmer.location || '' });
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingFarmer(null);
    setFormData({ name: '', email: '', phone: '', location: '' });
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this farm?')) return;
    try {
      await deleteFarmer(id);
      loadFarmers();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const filtered = farmers.filter(f =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (f.location && f.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Page Header */}
      <div style={{ padding: '48px 24px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1a1a1a', margin: '0 0 10px' }}>
            The Farms
          </h1>
          <p style={{ color: '#6b7280', margin: '0 0 32px', fontSize: '0.95rem' }}>
            Click and Browse{' '}
            <span style={{ color: CORAL, fontWeight: '500' }}>our</span>
            {' '}network of local farms and find the freshest produce near you.
          </p>

          {/* Search + Add */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Search farms..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                minWidth: '220px',
                padding: '10px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '0.9rem',
                outline: 'none',
                backgroundColor: 'white',
              }}
            />
            <button
              onClick={openAdd}
              style={{
                padding: '10px 20px',
                backgroundColor: CORAL,
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
            >
              + Add Farm
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 64px' }}>
        {loading && (
          <div style={{ textAlign: 'center', padding: '64px', color: '#6b7280' }}>
            Loading farms...
          </div>
        )}
        {error && (
          <div style={{ textAlign: 'center', padding: '32px', color: '#ef4444' }}>
            Error: {error}
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '64px',
            color: '#6b7280',
            backgroundColor: '#f9f9f9',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🌾</div>
            <p style={{ margin: '0 0 8px', fontWeight: '600', color: '#374151' }}>
              {searchQuery ? 'No farms match your search.' : 'No farms registered yet.'}
            </p>
            {!searchQuery && (
              <p style={{ margin: 0, fontSize: '0.875rem' }}>Add the first farm to get started.</p>
            )}
          </div>
        )}

        {!loading && !error && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filtered.map(farmer => (
              <div key={farmer.id} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                padding: '20px 24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {/* Circular avatar */}
                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: CORAL_LIGHT,
                    border: '2px solid #f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1.4rem',
                    fontWeight: '800',
                    color: CORAL,
                  }}>
                    {farmer.name.charAt(0).toUpperCase()}
                  </div>

                  {/* Farm info */}
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#1a1a1a' }}>
                        {farmer.name}
                      </h3>
                      <span style={{
                        fontSize: '0.7rem',
                        color: CORAL,
                        backgroundColor: CORAL_LIGHT,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontWeight: '600',
                        border: `1px solid ${CORAL_BORDER}`,
                      }}>
                        New
                      </span>
                    </div>
                    {farmer.location && (
                      <p style={{ margin: '0 0 6px', color: '#6b7280', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {farmer.location}
                      </p>
                    )}
                    <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: '#9ca3af' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        New
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
                    <button
                      onClick={() => openEdit(farmer)}
                      style={{
                        padding: '5px 12px',
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(farmer.id)}
                      style={{
                        padding: '5px 12px',
                        backgroundColor: '#fef2f2',
                        color: '#ef4444',
                        border: '1px solid #fecaca',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                      }}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/farms/${farmer.id}`}
                      style={{
                        padding: '5px 16px',
                        backgroundColor: CORAL,
                        color: 'white',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                      }}
                    >
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <FarmerForm
        isOpen={showForm}
        onClose={closeForm}
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleInputChange}
        isEditing={editingFarmer !== null}
      />
    </div>
  );
}
