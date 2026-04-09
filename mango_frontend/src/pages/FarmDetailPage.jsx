import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProduceCard from '../components/ProduceCard';
import ProduceForm from '../components/ProduceForm';
import {
  fetchFarmerById,
  fetchProduceByFarmerId,
  createProduce,
  updateProduce,
  deleteProduce
} from '../services/api';

const CORAL = '#E8622A';
const CORAL_LIGHT = '#FFF0EA';

const emptyForm = (farmerId) => ({
  name: '',
  category: '',
  quantity: '',
  unit: '',
  pricePerUnit: '',
  description: '',
  farmerId
});

export default function FarmDetailPage() {
  const { id } = useParams();
  const [farmer, setFarmer] = useState(null);
  const [produce, setProduce] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingProduce, setEditingProduce] = useState(null);
  const [formData, setFormData] = useState(emptyForm(id));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => { loadData(); }, [id]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [farmerData, produceData] = await Promise.all([
        fetchFarmerById(id),
        fetchProduceByFarmerId(id)
      ]);
      setFarmer(farmerData);
      setProduce(produceData);
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
      const { farmerId, ...rest } = formData;
      const payload = { ...rest, farmer: { id: parseInt(farmerId || id) } };
      if (editingProduce) {
        await updateProduce(editingProduce.id, payload);
      } else {
        await createProduce(payload);
      }
      closeForm();
      loadData();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const openEdit = (item) => {
    setEditingProduce(item);
    setFormData({
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      unit: item.unit,
      pricePerUnit: item.pricePerUnit,
      description: item.description || '',
      farmerId: item.farmer?.id || id
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingProduce(null);
    setFormData(emptyForm(id));
  };

  const handleDelete = async (itemId) => {
    if (!confirm('Delete this product?')) return;
    try {
      await deleteProduce(itemId);
      loadData();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const categories = ['All Categories', ...new Set(produce.map(p => p.category).filter(Boolean))];

  const filtered = produce.filter(p => {
    const matchesCat = selectedCategory === 'All Categories' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || p.name.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', color: '#6b7280' }}>
      Loading farm...
    </div>
  );

  if (error || !farmer) return (
    <div style={{ padding: '48px', textAlign: 'center' }}>
      <p style={{ color: '#ef4444', marginBottom: '16px' }}>Error: {error}</p>
      <Link to="/farms" style={{ color: CORAL, fontWeight: '600' }}>← All Farms</Link>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Farm Header */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #f0f0f0', padding: '24px 24px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link to="/farms" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#9ca3af',
            textDecoration: 'none',
            fontSize: '0.875rem',
            marginBottom: '20px',
            fontWeight: '500',
          }}>
            ← All Farms
          </Link>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Circular logo */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: CORAL_LIGHT,
                border: '2px solid #f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                fontWeight: '800',
                color: CORAL,
                flexShrink: 0,
              }}>
                {farmer.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 style={{ margin: '0 0 6px', fontSize: '1.5rem', fontWeight: '800', color: '#1a1a1a' }}>
                  {farmer.name}
                </h1>
                {farmer.location && (
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {farmer.location}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={() => setShowAbout(v => !v)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#6b7280',
                fontSize: '0.875rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: 0,
              }}
            >
              About This Farm {showAbout ? '↑' : '↓'}
            </button>
          </div>

          {showAbout && (
            <div style={{ marginTop: '20px', padding: '16px 20px', backgroundColor: '#fafafa', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
              <p style={{ margin: '0 0 8px', color: '#374151', fontSize: '0.9rem', lineHeight: '1.7' }}>
                {farmer.name} is a local South Florida farm dedicated to growing fresh, high-quality produce.
                Connect with us directly for the freshest seasonal offerings.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#6b7280' }}>
                <span>📧 {farmer.email}</span>
                <span>📞 {farmer.phone}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Products Section */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Search + Filters */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '9px 14px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '0.875rem',
              outline: 'none',
              backgroundColor: 'white',
            }}
          />
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            style={{
              padding: '9px 14px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '0.875rem',
              outline: 'none',
              backgroundColor: 'white',
              color: '#374151',
              cursor: 'pointer',
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button
            onClick={() => { setEditingProduce(null); setFormData(emptyForm(id)); setShowForm(true); }}
            style={{
              padding: '9px 18px',
              backgroundColor: CORAL,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '600',
              whiteSpace: 'nowrap',
            }}
          >
            + Add Product
          </button>
        </div>

        {/* Count */}
        <p style={{ margin: '0 0 20px', color: '#6b7280', fontSize: '0.875rem' }}>
          {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          {selectedCategory !== 'All Categories' ? ` in ${selectedCategory}` : ''}
        </p>

        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '64px',
            color: '#6b7280',
            backgroundColor: '#fafafa',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🥦</div>
            <p style={{ margin: 0, fontWeight: '600', color: '#374151' }}>
              {produce.length === 0 ? 'No products listed yet.' : 'No products match your search.'}
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {filtered.map(item => (
              <ProduceCard
                key={item.id}
                produce={item}
                onEdit={openEdit}
                onDelete={handleDelete}
                showActions={true}
              />
            ))}
          </div>
        )}
      </div>

      <ProduceForm
        isOpen={showForm}
        onClose={closeForm}
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleInputChange}
        isEditing={editingProduce !== null}
      />
    </div>
  );
}
