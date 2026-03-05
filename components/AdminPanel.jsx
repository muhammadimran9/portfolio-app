'use client';

import { useState } from 'react';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Wrong password!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-card border rounded-lg p-8 w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full p-3 rounded-lg border"
              required
            />
            <button type="submit" className="w-full mt-4 p-3 bg-primary text-primary-foreground rounded-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <p className="text-muted">Admin functionality coming soon...</p>
        </div>
      </div>
    </div>
  );
}
