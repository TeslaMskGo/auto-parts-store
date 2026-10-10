import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import ProductDetail from '@/components/product-detail';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand-wrap">
          <Link href="/" className="brand-mark">V</Link>
          <div>
            <p className="eyebrow">EV performance</p>
            <h1 className="brand-name">VoltDrive</h1>
          </div>
        </div>
        <nav className="topnav">
          <Link href="/">Catalog</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
      </header>

      <ProductDetail product={product} />
    </main>
  );
}
