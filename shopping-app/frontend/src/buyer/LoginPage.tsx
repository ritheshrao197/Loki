import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [loginMethod, setLoginMethod] = useState<'mobile' | 'email' | 'social'>('mobile');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleMobileLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showOtpInput) {
      // Request OTP
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setShowOtpInput(true);
        alert(`OTP sent to ${mobileNumber}`);
      }, 1000);
    } else {
      // Verify OTP
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        alert('Login successful!');
        navigate('/'); // Redirect to home page
      }, 1000);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await login(email, password);
      navigate('/'); // Redirect to home page
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: 'google' | 'apple' | 'facebook') => {
    setIsLoading(true);
    // Simulate social login
    setTimeout(() => {
      setIsLoading(false);
      alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login successful!`);
      navigate('/'); // Redirect to home page
    }, 1000);
  };

  const handleResendOtp = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`OTP resent to ${mobileNumber}`);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to continue shopping</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="login-methods">
          <button 
            className={`method-btn ${loginMethod === 'mobile' ? 'active' : ''}`}
            onClick={() => setLoginMethod('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`method-btn ${loginMethod === 'email' ? 'active' : ''}`}
            onClick={() => setLoginMethod('email')}
          >
            Email
          </button>
          <button 
            className={`method-btn ${loginMethod === 'social' ? 'active' : ''}`}
            onClick={() => setLoginMethod('social')}
          >
            Social
          </button>
        </div>

        {loginMethod === 'mobile' && (
          <form className="login-form" onSubmit={handleMobileLogin}>
            {!showOtpInput ? (
              <>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
                <button type="submit" className="login-btn" disabled={isLoading}>
                  {isLoading ? 'Sending OTP...' : 'Send OTP'}
                </button>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="otp">OTP</label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    required
                  />
                </div>
                <div className="otp-actions">
                  <button type="submit" className="login-btn" disabled={isLoading}>
                    {isLoading ? 'Verifying...' : 'Verify OTP'}
                  </button>
                  <button type="button" className="resend-btn" onClick={handleResendOtp} disabled={isLoading}>
                    Resend OTP
                  </button>
                </div>
              </>
            )}
          </form>
        )}

        {loginMethod === 'email' && (
          <form className="login-form" onSubmit={handleEmailLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </form>
        )}

        {loginMethod === 'social' && (
          <div className="social-login">
            <button 
              className="social-btn google"
              onClick={() => handleSocialLogin('google')}
              disabled={isLoading}
            >
              <span className="social-icon">G</span>
              Continue with Google
            </button>
            <button 
              className="social-btn apple"
              onClick={() => handleSocialLogin('apple')}
              disabled={isLoading}
            >
              <span className="social-icon"></span>
              Continue with Apple
            </button>
            <button 
              className="social-btn facebook"
              onClick={() => handleSocialLogin('facebook')}
              disabled={isLoading}
            >
              <span className="social-icon">f</span>
              Continue with Facebook
            </button>
          </div>
        )}

        <div className="signup-link">
          <p>Don't have an account? <a href="/register">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;