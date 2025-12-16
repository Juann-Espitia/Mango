// FarmerCard.jsx - Displays one farmer card

export default function FarmerCard({ farmer, onEdit, onDelete }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '15px', 
      borderRadius: '8px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'start', 
        marginBottom: '10px' 
      }}>
        <h3 style={{ margin: 0, color:'#666' }}>{farmer.name}</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          {/* Edit Button */}
          <button
            onClick={() => onEdit(farmer)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Edit
          </button>
          {/* Delete Button */}
          <button
            onClick={() => onDelete(farmer.id)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <p style={{ margin: '5px 0', color: '#666' }}>📧 {farmer.email}</p>
      <p style={{ margin: '5px 0', color: '#666' }}>📞 {farmer.phone}</p>
      {farmer.location && <p style={{ margin: '5px 0', color: '#666' }}>📍 {farmer.location}</p>}
    </div>
  );
}