// ProduceCard.jsx - Display one produce item

export default function ProduceCard({ produce, onEdit, onDelete }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '15px', 
      borderRadius: '8px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {/* TODO: Display produce information */}
      {/* 
        Show:
        - produce.name
        - produce.category
        - produce.quantity and produce.unit
        - produce.pricePerUnit (format as currency: $3.99)
        - produce.description (if it exists)
        - produce.farmer.name (THIS is the farmer's name!)
        - produce.farmer.location
      */}
      
      <h3>{produce.name}</h3>
      
      {/* TODO: Add more fields here! */}
      
      {/* Edit and Delete buttons */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
        <button
          onClick={() => onEdit(produce)}
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
        <button
          onClick={() => onDelete(produce.id)}
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
  );
}