import Link from 'next/link';
import { CartPage } from '@/components/cart-page';

export default function CartRoute() {
  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand-wrap">
          <Link href="/" className="brand-mark">V</Link>
          <div>
            <p className="eyebrow">Your order</p>
            <h1 className="brand-name">VoltDrive</h1>
          </div>
        </div>
        <nav className="topnav">
          <Link href="/">Catalog</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
      </header>

      <CartPage />
    </main>
  );
}
