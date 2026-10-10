"use client";

import Link from 'next/link';
import { useCart } from '@/components/cart-context';

export function CartSummary({ compact = false }: { compact?: boolean }) {
  const { items, subtotal, itemCount } = useCart();

  return (
    <aside className={compact ? 'summary-card compact' : 'summary-card'}>
      <div className="summary-header">
        <h3>{compact ? 'Order summary' : 'Cart summary'}</h3>
        <span>{itemCount} items</span>
      </div>

      <div className="summary-lines">
        {items.length === 0 ? (
          <p className="empty-copy">Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="summary-row">
              <span>
                {item.name} × {item.quantity}
              </span>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))
        )}
      </div>

      <div className="divider" />

      <div className="summary-total">
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>

      {!compact && (
        <Link href="/checkout" className="primary-button wide-button">
          Continue to checkout
        </Link>
      )}
    </aside>
  );
}
