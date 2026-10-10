"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/components/cart-context';
import type { Product } from '@/lib/data';

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.badges.length > 0 && (
          <div className="badge-row">
            {product.badges.map((badge) => (
              <span key={badge} className="chip">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="product-content">
        <div className="product-meta-row">
          <span className="chip light">{product.category}</span>
          <span className="rating">★ {product.rating}</span>
        </div>

        <Link href={`/product/${product.id}`} className="product-name-link">
          <h3>{product.name}</h3>
        </Link>

        <p className="product-brand">{product.brand}</p>
        <p className="product-fitment">{product.fitment.join(' · ')}</p>

        <div className="product-footer">
          <div>
            <div className="price">${product.price.toFixed(2)}</div>
            <div className="stock">{product.stock} in stock</div>
          </div>

          <button className="primary-button" onClick={() => addItem(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
