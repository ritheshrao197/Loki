import React, { useState } from 'react';
import './ProductForm.css';

interface ProductFormData {
  name: string;
  description: string;
  price: string;
  category: string;
  stock: string;
  images: File[];
}

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    images: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        images: Array.from(e.target.files || [])
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product form submitted:', formData);
    // Implementation for submitting product data
  };

  return (
    <div className="product-form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="stock">Stock Quantity</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              min="0"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="home">Home & Kitchen</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="beauty">Beauty</option>
            <option value="sports">Sports & Outdoors</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="images">Product Images</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageChange}
            multiple
            accept="image/*"
          />
          <div className="image-preview">
            {formData.images.map((file, index) => (
              <div key={index} className="preview-item">
                {file.name}
              </div>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="submit-btn">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;