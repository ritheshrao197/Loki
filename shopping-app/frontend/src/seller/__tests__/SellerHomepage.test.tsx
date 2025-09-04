import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SellerHomepage from '../SellerHomepage';

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('SellerHomepage', () => {
  test('renders hero section with correct title', () => {
    render(<SellerHomepage />);
    const heroTitle = screen.getByText(/Grow Your Business. Sell Directly to Lakhs of Buyers./i);
    expect(heroTitle).toBeInTheDocument();
  });

  test('renders value proposition section', () => {
    render(<SellerHomepage />);
    const valuePropTitle = screen.getByText(/Why Sell With Us/i);
    expect(valuePropTitle).toBeInTheDocument();
  });

  test('renders who can sell section', () => {
    render(<SellerHomepage />);
    const whoCanSellTitle = screen.getByText(/Who Can Sell?/i);
    expect(whoCanSellTitle).toBeInTheDocument();
  });

  test('renders how it works section', () => {
    render(<SellerHomepage />);
    const howItWorksTitle = screen.getByRole('heading', { name: /How It Works/i });
    expect(howItWorksTitle).toBeInTheDocument();
  });

  test('renders earnings section', () => {
    render(<SellerHomepage />);
    const earningsTitle = screen.getByText(/Your Shop, Your Profits./i);
    expect(earningsTitle).toBeInTheDocument();
  });

  test('renders testimonials section', () => {
    render(<SellerHomepage />);
    const testimonialText = screen.getByText(/I used to sell only in my local market/i);
    expect(testimonialText).toBeInTheDocument();
  });

  test('renders CTA section', () => {
    render(<SellerHomepage />);
    const ctaTitle = screen.getByText(/Don't Just Sell. Grow Your Brand./i);
    expect(ctaTitle).toBeInTheDocument();
  });

  test('renders footer with correct content', () => {
    render(<SellerHomepage />);
    const footerTagline = screen.getByText(/Your Products. Your Customers. Your Growth./i);
    expect(footerTagline).toBeInTheDocument();
  });
});