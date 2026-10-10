"use client";

import { useMemo, useState } from 'react';
import { brands, categories, products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { CartSummary } from '@/components/cart-summary';
import { useCart } from '@/components/cart-context';

export default function CatalogPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(1400);
  const { itemCount } = useCart();

  const filtered = useMemo(() => {
    const next = products.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const brandMatch = selectedBrand === 'All' || product.brand === selectedBrand;
      const searchMatch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase()) ||
        product.fitment.some((fit) => fit.toLowerCase().includes(search.toLowerCase()));
      const priceMatch = product.price <= maxPrice;

      return categoryMatch && brandMatch && searchMatch && priceMatch;
    });

    return [...next].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.stock - a.stock;
    });
  }, [search, selectedBrand, selectedCategory, sortBy, maxPrice]);

  return (
    <div className="catalog-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Performance upgrades</p>
          <h1>Upgrade your drive with premium parts.</h1>
        </div>
        <div className="hero-right">
          <div className="mini-stat">
            <strong>{products.length}</strong>
            <span>Products</span>
          </div>
          <div className="mini-stat">
            <strong>{itemCount}</strong>
            <span>In cart</span>
          </div>
        </div>
      </header>

      <section className="catalog-layout">
        <aside className="filters-panel panel">
          <h2>Filters</h2>

          <label className="field">
            <span>Search</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Brake kit, wheel, intake..."
            />
          </label>

          <div className="filter-group">
            <span>Category</span>
            <div className="inline-options">
              {categories.map((category) => (
                <button
                  key={category}
                  className={selectedCategory === category ? 'option active' : 'option'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span>Brand</span>
            <div className="inline-options">
              {brands.map((brand) => (
                <button
                  key={brand}
                  className={selectedBrand === brand ? 'option active' : 'option'}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <label className="field">
            <span>Max price: ${maxPrice}</span>
            <input type="range" min={150} max={1500} step={50} value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} />
          </label>

          <button
            className="ghost-button"
            onClick={() => {
              setSelectedCategory('All');
              setSelectedBrand('All');
              setSearch('');
              setSortBy('featured');
              setMaxPrice(1500);
            }}
          >
            Clear filters
          </button>
        </aside>

        <div className="results">
          <div className="results-toolbar panel">
            <div>
              <strong>{filtered.length}</strong> parts found
            </div>
            <label className="toolbar-select">
              <span>Sort by</span>
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>

          <div className="product-grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <CartSummary />
      </section>
    </div>
  );
}
