"use client";

import { useState } from 'react';
import { useCart } from '@/components/cart-context';

export function CheckoutForm() {
  const { subtotal } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="panel form-panel">
      <h2>Shipping details</h2>

      {submitted ? (
        <div className="success-box">
          <h3>Order placed successfully</h3>
          <p>
            Your order of <strong>${subtotal.toFixed(2)}</strong> is confirmed. A receipt has been sent to your email.
          </p>
        </div>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="two-column-fields">
            <label>
              <span>First name</span>
              <input type="text" defaultValue="Alex" required />
            </label>
            <label>
              <span>Last name</span>
              <input type="text" defaultValue="Morgan" required />
            </label>
          </div>

          <label>
            <span>Email</span>
            <input type="email" defaultValue="alex@example.com" required />
          </label>

          <label>
            <span>Address</span>
            <input type="text" defaultValue="1287 Market Street" required />
          </label>

          <div className="two-column-fields">
            <label>
              <span>City</span>
              <input type="text" defaultValue="San Francisco" required />
            </label>
            <label>
              <span>ZIP</span>
              <input type="text" defaultValue="94103" required />
            </label>
          </div>

          <label>
            <span>Payment method</span>
            <select defaultValue="card">
              <option value="card">Credit card</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank transfer</option>
            </select>
          </label>

          <button type="submit" className="primary-button wide-button">
            Place order • ${subtotal.toFixed(2)}
          </button>
        </form>
      )}
    </div>
  );
}
