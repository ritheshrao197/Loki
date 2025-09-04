import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './ReviewsPage.css';

interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
}

const ReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      userName: 'Alex Johnson',
      rating: 5,
      comment: 'Absolutely love this product! The quality is exceptional and it arrived quickly. Will definitely buy again.',
      date: '2023-06-10',
      helpful: 24,
      verified: true
    },
    {
      id: 2,
      userName: 'Sarah Miller',
      rating: 4,
      comment: 'Very good product overall. The material feels premium and the design is exactly as shown in the pictures.',
      date: '2023-06-05',
      helpful: 18,
      verified: true
    },
    {
      id: 3,
      userName: 'Mike Thompson',
      rating: 3,
      comment: 'It\'s okay, but not as impressive as I expected. The sizing runs a bit small, so consider ordering up.',
      date: '2023-05-28',
      helpful: 9,
      verified: false
    },
    {
      id: 4,
      userName: 'Emma Wilson',
      rating: 5,
      comment: 'Outstanding quality! I\'ve been using this for a month now and it still looks brand new. Highly recommend!',
      date: '2023-05-20',
      helpful: 31,
      verified: true
    }
  ]);

  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: ''
  });

  const [sortOption, setSortOption] = useState('newest');

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.comment.trim()) {
      const review: Review = {
        id: reviews.length + 1,
        userName: 'You',
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0],
        helpful: 0,
        verified: true
      };
      
      setReviews([review, ...reviews]);
      setNewReview({ rating: 5, comment: '' });
    }
  };

  const handleHelpfulClick = (id: number) => {
    setReviews(reviews.map(review => 
      review.id === id 
        ? { ...review, helpful: review.helpful + 1 } 
        : review
    ));
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortOption) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'highest':
        return b.rating - a.rating;
      case 'lowest':
        return a.rating - b.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const ratingCounts = [0, 0, 0, 0, 0, 0]; // Index 0 unused, 1-5 for ratings
  reviews.forEach(review => {
    ratingCounts[review.rating]++;
  });

  return (
    <div>
      <Navbar userType="buyer" />
      <main className="reviews-page">
        <div className="container">
          <div className="page-header">
            <h1>Customer Reviews</h1>
            <p>Read what our customers are saying</p>
          </div>

          <div className="reviews-content">
            {/* Rating Summary */}
            <div className="rating-summary">
              <div className="average-rating">
                <div className="rating-value">{averageRating.toFixed(1)}</div>
                <div className="rating-stars">
                  {'★'.repeat(Math.floor(averageRating))}
                  {'☆'.repeat(5 - Math.floor(averageRating))}
                </div>
                <div className="rating-count">{reviews.length} reviews</div>
              </div>
              
              <div className="rating-distribution">
                {[5, 4, 3, 2, 1].map(rating => (
                  <div key={rating} className="rating-bar">
                    <span className="rating-label">{rating} star</span>
                    <div className="bar-container">
                      <div 
                        className="bar-fill" 
                        style={{ width: `${(ratingCounts[rating] / reviews.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="rating-count">{ratingCounts[rating]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Review Form */}
            <div className="add-review-section">
              <h2>Share Your Experience</h2>
              <form className="review-form" onSubmit={handleReviewSubmit}>
                <div className="rating-input">
                  <label>Rating:</label>
                  <div className="star-rating">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span
                        key={star}
                        className={`star ${star <= newReview.rating ? 'filled' : ''}`}
                        onClick={() => setNewReview({...newReview, rating: star})}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="review">Your Review:</label>
                  <textarea
                    id="review"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    placeholder="Share your thoughts about this product..."
                    rows={4}
                    required
                  />
                </div>
                
                <button type="submit" className="submit-review-btn">
                  Submit Review
                </button>
              </form>
            </div>

            {/* Reviews List */}
            <div className="reviews-section">
              <div className="reviews-header">
                <h2>Customer Reviews</h2>
                <div className="sort-options">
                  <label htmlFor="sort">Sort by:</label>
                  <select 
                    id="sort" 
                    value={sortOption} 
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="highest">Highest Rating</option>
                    <option value="lowest">Lowest Rating</option>
                    <option value="helpful">Most Helpful</option>
                  </select>
                </div>
              </div>
              
              <div className="reviews-list">
                {sortedReviews.map(review => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h4>{review.userName}</h4>
                        <div className="review-date">{review.date}</div>
                      </div>
                      <div className="review-rating">
                        <div className="stars">
                          {'★'.repeat(review.rating)}
                          {'☆'.repeat(5 - review.rating)}
                        </div>
                        {review.verified && (
                          <span className="verified-badge">Verified Purchase</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="review-content">
                      <p>{review.comment}</p>
                    </div>
                    
                    <div className="review-actions">
                      <button 
                        className="helpful-btn"
                        onClick={() => handleHelpfulClick(review.id)}
                      >
                        Helpful ({review.helpful})
                      </button>
                      <button className="report-btn">Report</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReviewsPage;