import { useState } from 'react'
import './App.css'

const categories = [
  { name: 'Dresses', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Jackets', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' },
  { name: 'Essentials', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
]

const products = [
  {
    name: 'Everyday Linen Set',
    price: 29,
    oldPrice: 48,
    tag: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Street Chic Jacket',
    price: 39,
    oldPrice: 59,
    tag: 'New In',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Soft Knit Sweater',
    price: 24,
    oldPrice: 40,
    tag: 'Hot Deal',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Mini Trend Dress',
    price: 34,
    oldPrice: 52,
    tag: 'Limited',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
]

const reasons = [
  'Premium quality at wallet-friendly prices',
  'Fast shipping on all orders over $50',
  'Easy returns within 14 days',
]

function App() {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => setCartCount((count) => count + 1)

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">M</div>
          <div>
            <p className="brand-name">Mariams clothing</p>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#new">New In</a>
          <a href="#women">Women</a>
          <a href="#men">Men</a>
          <a href="#sale">Sale</a>
        </nav>

        <div className="header-actions">
          <button type="button" className="ghost-btn">Login</button>
          <button type="button" className="cart-btn">
            Cart ({cartCount})
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Affordable style, everyday</p>
            <h1>Dress beautifully without overspending.</h1>
            <p className="hero-text">
              Discover modern essentials, statement pieces, and everyday outfits
              made for comfort, confidence, and value.
            </p>

            <div className="hero-actions">
              <button type="button" className="primary-btn">
                Shop collection
              </button>
              <button type="button" className="secondary-btn">
                View deals
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>12k+</strong>
                <span>happy shoppers</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>average rating</span>
              </div>
              <div>
                <strong>2 day</strong>
                <span>delivery</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Featured fashion collage">
            <div className="visual-card main-card">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
                alt="Woman in fashionable outfit"
              />
            </div>
            <div className="floating-card">
              <span>Summer Edit</span>
              <strong>Up to 50% off</strong>
            </div>
          </div>
        </section>

        <section className="categories-section" id="women">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Shop by style</p>
              <h2>Trending collections</h2>
            </div>
            <a href="#sale">View all</a>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article key={category.name} className="category-card">
                <img src={category.image} alt={category.name} />
                <div className="card-overlay">
                  <span>{category.name}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="products-section" id="sale">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Popular picks</p>
              <h2>Fresh arrivals under $40</h2>
            </div>
            <a href="#new">See all</a>
          </div>

          <div className="product-grid">
            {products.map((item) => (
              <article key={item.name} className="product-card">
                <div className="product-image-wrap">
                  <img src={item.image} alt={item.name} />
                  <span className="product-tag">{item.tag}</span>
                </div>
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <div className="price-row">
                    <span className="price">${item.price}</span>
                    <span className="old-price">${item.oldPrice}</span>
                  </div>
                  <button type="button" onClick={addToCart}>
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="promo-banner">
          <div>
            <p className="eyebrow">This week only</p>
            <h2>Free shipping on orders over $50</h2>
          </div>
          <button type="button" className="primary-btn small-btn">
            Shop now
          </button>
        </section>

        <section className="features-section">
          <div className="section-heading center-heading">
            <div>
              <p className="eyebrow">Why shoppers love us</p>
              <h2>Affordable quality you can count on</h2>
            </div>
          </div>

          <div className="feature-list">
            {reasons.map((reason) => (
              <div key={reason} className="feature-item">
                <span className="checkmark">✓</span>
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="newsletter-section">
          <div>
            <p className="eyebrow">Stay in style</p>
            <h2>Get weekly fashion drops and exclusive deals.</h2>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" aria-label="Email address" />
            <button type="submit" className="primary-btn small-btn">
              Join now
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="brand-wrap">
          <div className="brand-mark">M</div>
          <div>
            <p className="brand-name">Mariams clothing</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
        </div>
      </footer>
    </div>
  )
}

export default App
