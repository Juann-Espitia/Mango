import { Link } from 'react-router-dom';

const CORAL = '#E8622A';
const CORAL_LIGHT = '#FFF0EA';
const CORAL_BORDER = '#FECBB0';

export default function ProduceCard({ produce, onEdit, onDelete, showActions = true }) {
  const formatPrice = (price) => `$${parseFloat(price).toFixed(2)}`;

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}>
      {/* Placeholder image area */}
      <div style={{
        height: '130px',
        backgroundColor: CORAL_LIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        fontSize: '2.5rem',
      }}>
        🌿
        {/* In Stock badge */}
        <span style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: produce.quantity > 0 ? '#dcfce7' : '#fef2f2',
          color: produce.quantity > 0 ? '#15803d' : '#ef4444',
          fontSize: '0.65rem',
          fontWeight: '700',
          padding: '3px 8px',
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.3px',
        }}>
          {produce.quantity > 0 ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      <div style={{ padding: '16px' }}>
        {/* Category */}
        <p style={{ margin: '0 0 4px', fontSize: '0.72rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.4px', fontWeight: '500' }}>
          {produce.category}
        </p>

        {/* Name */}
        <h3 style={{ margin: '0 0 8px', color: '#1a1a1a', fontSize: '0.95rem', fontWeight: '700', lineHeight: '1.3' }}>
          {produce.name}
        </h3>

        {/* Price */}
        <p style={{ margin: '0 0 12px', fontSize: '1rem', fontWeight: '800', color: '#1a1a1a' }}>
          {formatPrice(produce.pricePerUnit)}
          <span style={{ fontSize: '0.75rem', fontWeight: '400', color: '#9ca3af' }}>
            {' '}/{produce.unit}
          </span>
        </p>

        {/* Farmer link */}
        {produce.farmer && (
          <p style={{ margin: '0 0 12px', fontSize: '0.8rem', color: '#9ca3af' }}>
            <Link
              to={`/farms/${produce.farmer.id}`}
              style={{ color: CORAL, fontWeight: '500', textDecoration: 'none' }}
            >
              {produce.farmer.name}
            </Link>
            {produce.farmer.location && ` · ${produce.farmer.location}`}
          </p>
        )}

        {/* View Details button */}
        {!showActions && (
          <Link
            to={`/farms/${produce.farmer?.id}`}
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '8px',
              border: `1.5px solid ${CORAL}`,
              color: CORAL,
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: '600',
            }}
          >
            View Details
          </Link>
        )}

        {/* Admin actions */}
        {showActions && (
          <div style={{
            display: 'flex',
            gap: '8px',
            borderTop: '1px solid #f3f4f6',
            paddingTop: '12px',
          }}>
            <button
              onClick={() => onEdit(produce)}
              style={{
                flex: 1,
                padding: '6px',
                backgroundColor: '#f3f4f6',
                color: '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: '500',
              }}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(produce.id)}
              style={{
                flex: 1,
                padding: '6px',
                backgroundColor: '#fef2f2',
                color: '#ef4444',
                border: '1px solid #fecaca',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: '500',
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
