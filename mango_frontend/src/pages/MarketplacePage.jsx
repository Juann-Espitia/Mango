import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProduceCard from '../components/ProduceCard';
import { fetchProduce } from '../services/api';

const CORAL = '#E8622A';

export default function MarketplacePage() {
  const [produce, setProduce] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProduce()
      .then(data => { setProduce(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  const categories = ['All Categories', ...new Set(produce.map(p => p.category).filter(Boolean))];

  const filtered = produce.filter(p => {
    const matchesCategory = selectedCategory === 'All Categories' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ padding: '48px 24px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1a1a1a', margin: '0 0 10px' }}>
            Marketplace
          </h1>
          <p style={{ color: '#6b7280', margin: '0 0 32px', fontSize: '0.95rem' }}>
            {produce.length} fresh product{produce.length !== 1 ? 's' : ''} from South Florida farms
          </p>

          {/* Search + Filters */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search products..."
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
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              style={{
                padding: '10px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '0.9rem',
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
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 64px' }}>
        {loading && (
          <div style={{ textAlign: 'center', padding: '64px', color: '#6b7280' }}>
            Loading products...
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
            backgroundColor: '#fafafa',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🥦</div>
            <p style={{ margin: '0 0 8px', fontWeight: '600', color: '#374151' }}>
              {produce.length === 0 ? 'No products available yet.' : 'No products match your search.'}
            </p>
            {produce.length === 0 && (
              <Link to="/farms" style={{ color: CORAL, fontWeight: '600', fontSize: '0.9rem' }}>
                Visit a farm profile to add products →
              </Link>
            )}
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {filtered.map(item => (
              <ProduceCard
                key={item.id}
                produce={item}
                onEdit={() => {}}
                onDelete={() => {}}
                showActions={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
