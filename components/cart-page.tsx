"use client";

import Link from 'next/link';
import { useCart } from '@/components/cart-context';

export function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, clearCart } = useCart();

  return (
    <section className="cart-layout">
      <div className="panel cart-panel">
        <div className="panel-header-row">
          <h2>Shopping cart</h2>
          {items.length > 0 && (
            <button className="ghost-button" onClick={clearCart}>
              Clear cart
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="empty-state">
            <p>Your cart is empty.</p>
            <Link href="/" className="primary-button">
              Browse catalog
            </Link>
          </div>
        ) : (
          <div className="cart-items-list">
            {items.map((item) => (
              <article key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-thumb" />
                <div className="cart-item-copy">
                  <div>
                    <span className="chip light">{item.brand}</span>
                    <h3>{item.name}</h3>
                  </div>
                  <p>{item.fitment.join(' · ')}</p>
                </div>
                <div className="cart-controls">
                  <label>
                    Qty
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                    />
                  </label>
                  <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
                  <button className="text-button" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <CartSummary />
    </section>
  );
}
