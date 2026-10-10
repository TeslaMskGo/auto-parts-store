"use client";

import Link from 'next/link';
import { useCart } from '@/components/cart-context';
import type { Product } from '@/lib/data';

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <section className="detail-layout">
      <div className="detail-gallery panel">
        <img src={product.image} alt={product.name} className="detail-image" />
      </div>

      <div className="detail-copy">
        <div className="detail-header-row">
          <div className="chip light">{product.category}</div>
          <div className="rating">★ {product.rating}</div>
        </div>

        <h2>{product.name}</h2>
        <div className="detail-brand">{product.brand}</div>
        <p className="detail-description">{product.description}</p>

        <div className="detail-price-block">
          <div className="price large">${product.price.toFixed(2)}</div>
          <div className="stock">{product.stock} in stock</div>
        </div>

        <div className="detail-fitment">
          <h3>Compatible models</h3>
          <div className="inline-options">
            {product.fitment.map((fit) => (
              <span className="option" key={fit}>
                {fit}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-actions">
          <button className="primary-button" onClick={() => addItem(product)}>
            Add to cart
          </button>
          <Link href="/" className="ghost-button">
            Continue shopping
          </Link>
        </div>
      </div>

      <aside className="detail-specs panel">
        <h3>Specifications</h3>
        <ul>
          {product.specs.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
