import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './ProfilePage.css';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main Street',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, you would save the data to a backend here
    alert('Profile updated successfully!');
  };

  return (
    <div>
      <Navbar userType="buyer" />
      <main className="profile-page">
        <div className="profile-container">
          <h1>My Profile</h1>
          
          <div className="profile-content">
            <div className="profile-section">
              <div className="section-header">
                <h2>Personal Information</h2>
                <button 
                  className="edit-btn"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>
              
              {isEditing ? (
                <form onSubmit={handleSubmit} className="profile-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="save-btn">Save Changes</button>
                  </div>
                </form>
              ) : (
                <div className="profile-info">
                  <div className="info-row">
                    <span className="label">Name:</span>
                    <span>{profileData.firstName} {profileData.lastName}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Email:</span>
                    <span>{profileData.email}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Phone:</span>
                    <span>{profileData.phone}</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="profile-section">
              <div className="section-header">
                <h2>Address Book</h2>
                <button className="edit-btn">Manage</button>
              </div>
              
              <div className="address-list">
                <div className="address-card">
                  <div className="address-info">
                    <p><strong>Home</strong></p>
                    <p>{profileData.firstName} {profileData.lastName}</p>
                    <p>{profileData.address}</p>
                    <p>{profileData.city}, {profileData.state} {profileData.zipCode}</p>
                  </div>
                  <div className="address-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="profile-section">
              <div className="section-header">
                <h2>Order History</h2>
                <button className="view-all-btn">View All</button>
              </div>
              
              <div className="order-history">
                <div className="order-item">
                  <div className="order-info">
                    <p><strong>Order #ORD-001</strong></p>
                    <p>Placed on: June 15, 2023</p>
                    <p>Status: Delivered</p>
                  </div>
                  <div className="order-total">
                    <p>Total: $37.98</p>
                  </div>
                </div>
                
                <div className="order-item">
                  <div className="order-info">
                    <p><strong>Order #ORD-002</strong></p>
                    <p>Placed on: June 10, 2023</p>
                    <p>Status: Delivered</p>
                  </div>
                  <div className="order-total">
                    <p>Total: $24.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;