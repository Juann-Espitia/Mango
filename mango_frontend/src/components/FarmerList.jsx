// FarmerList.jsx - Displays grid of farmer cards

import FarmerCard from './FarmerCard';

export default function FarmerList({ farmers, onEdit, onDelete }) {
  if (farmers.length === 0) {
    return <p>No farmers found. Add your first farmer!</p>;
  }

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
      gap: '20px' 
    }}>
      {farmers.map((farmer) => (
        <FarmerCard
          key={farmer.id}
          farmer={farmer}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}