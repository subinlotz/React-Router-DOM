import React from 'react'
import { Link } from 'react-router'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Our Website</h1>
        <p>
          Discover amazing content and services tailored just for you. Explore our website to learn more.
        </p>
       <Link to='dashboard'><button className="explore-button">Dashboard</button></Link> 
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h2>Feature One</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-card">
          <h2>Feature Two</h2>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="feature-card">
          <h2>Feature Three</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
        
      </section>
    </div>
  )
}

export default Home
