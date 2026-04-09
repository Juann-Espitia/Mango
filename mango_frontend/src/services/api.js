// api.js - All API calls in one place

const API_BASE_URL = 'http://localhost:8080/api';

// ==================== FARMER API CALLS ====================

export const fetchFarmers = async () => {
  const response = await fetch(`${API_BASE_URL}/farmers`);
  if (!response.ok) throw new Error('Failed to fetch farmers');
  return response.json();
};

export const fetchFarmerById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/farmers/${id}`);
  if (!response.ok) throw new Error('Failed to fetch farmer');
  return response.json();
};

export const createFarmer = async (farmerData) => {
  const response = await fetch(`${API_BASE_URL}/farmers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(farmerData),
  });
  if (!response.ok) throw new Error('Failed to create farmer');
  return response.json();
};

export const updateFarmer = async (id, farmerData) => {
  const response = await fetch(`${API_BASE_URL}/farmers/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(farmerData),
  });
  if (!response.ok) throw new Error('Failed to update farmer');
  return response.json();
};

export const deleteFarmer = async (id) => {
  const response = await fetch(`${API_BASE_URL}/farmers/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete farmer');
};

// ==================== PRODUCE API CALLS ====================

export const fetchProduce = async () => {
  const response = await fetch(`${API_BASE_URL}/produce`);
  if (!response.ok) throw new Error('Failed to fetch produce');
  return response.json();
};

export const fetchProduceByFarmerId = async (farmerId) => {
  const response = await fetch(`${API_BASE_URL}/produce/farmer/${farmerId}`);
  if (!response.ok) throw new Error('Failed to fetch produce');
  return response.json();
};

export const createProduce = async (produceData) => {
  const response = await fetch(`${API_BASE_URL}/produce`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(produceData),
  });
  if (!response.ok) throw new Error('Failed to create produce');
  return response.json();
};

export const updateProduce = async (id, produceData) => {
  const response = await fetch(`${API_BASE_URL}/produce/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(produceData),
  });
  if (!response.ok) throw new Error('Failed to update produce');
  return response.json();
};

export const deleteProduce = async (id) => {
  const response = await fetch(`${API_BASE_URL}/produce/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete produce');
};
