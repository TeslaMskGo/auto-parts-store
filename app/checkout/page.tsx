import Link from 'next/link';
import { CartSummary } from '@/components/cart-summary';
import { CheckoutForm } from '@/components/checkout-form';

export default function CheckoutPage() {
  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand-wrap">
          <Link href="/" className="brand-mark">V</Link>
          <div>
            <p className="eyebrow">Checkout</p>
            <h1 className="brand-name">Velocity Parts</h1>
          </div>
        </div>
        <nav className="topnav">
          <Link href="/">Catalog</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
      </header>

      <section className="checkout-layout">
        <CheckoutForm />
        <CartSummary compact />
      </section>
    </main>
  );
}
