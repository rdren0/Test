import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Services } from "./Components/Services";
import { Contact } from "./Components/Contact";
import { About } from "./Components/About";
import { Home } from "./Home";
import { Gallery } from "./Components/Gallery";

const BeetleBarber = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e) => {
      if (e.target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.pageYOffset > 100) {
        header.style.background = "rgba(26, 26, 26, 0.98)";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
      } else {
        header.style.background = "rgba(26, 26, 26, 0.95)";
        header.style.boxShadow = "none";
      }
    };

    // Service card animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.addEventListener("click", handleNavClick);
    window.addEventListener("scroll", handleScroll);

    document.querySelectorAll(".service-card").forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });

    return () => {
      document.removeEventListener("click", handleNavClick);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        lineHeight: "1.6",
        color: "#2c2c2c",
        background: "#faf9f7",
        fontWeight: "400",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #2c2c2c;
            background: #faf9f7;
            font-weight: 400;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(26, 26, 26, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            transition: all 0.3s ease;
          }

          nav {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 2rem 0;
          }
          .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 1.6rem;
            font-weight: bold;
            color: #87ceeb;
            letter-spacing: 0.5px;
          }

          .bug-icon {
            width: 28px;
            height: 18px;
            background: #87ceeb;
            border-radius: 14px 14px 5px 5px;
            position: relative;
            opacity: 0.8;
          }

          .bug-icon::before {
            content: '';
            position: absolute;
            width: 3px;
            height: 3px;
            background: #1a1a1a;
            border-radius: 50%;
            top: 5px;
            left: 5px;
            box-shadow: 14px 0 #1a1a1a;
          }

          .bug-icon::after {
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            background: #1a1a1a;
            border-radius: 50%;
            bottom: -2px;
            left: 3px;
            box-shadow: 15px 0 #1a1a1a;
          }

          .nav-links {
            display: flex;
            list-style: none;
            gap: 2.5rem;
            align-items: center;
          }

          .nav-links a {
            text-decoration: none;
            color: #f5f5f5;
            font-weight: 500;
            font-size: 0.95rem;
            transition: color 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-family: 'Arial', sans-serif;
          }

          .nav-links a:hover {
            color: #87ceeb;
          }

          .book-btn {
            background: linear-gradient(135deg, #87ceeb);
            color: #1a1a1a !important;
            padding: 12px 24px;
            border-radius: 4px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgb(32, 111, 142);
          }

          .book-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(71, 122, 215, 0.4);
          }

          .hero {
            min-height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), 
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23222"/><g fill="%23333" opacity="0.3"><rect x="10" y="10" width="2" height="80"/><rect x="30" y="10" width="2" height="80"/><rect x="50" y="10" width="2" height="80"/><rect x="70" y="10" width="2" height="80"/><rect x="90" y="10" width="2" height="80"/></g></svg>');
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            color: white;
            position: relative;
          }

          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%);
          }

          .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
          }

          .hero h1 {
            font-size: clamp(3rem, 6vw, 5.5rem);
            font-weight: bold;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            color: #f5f5f5;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
            letter-spacing: 2px;
          }

          .hero .accent {
            color: #87ceeb;
            font-style: italic;
          }

          .hero p {
            font-size: 1.4rem;
            margin-bottom: 3rem;
            line-height: 1.6;
            font-style: italic;
            color: #e0e0e0;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
          }

          .cta-group {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .cta-primary {
            background: linear-gradient(135deg, #87ceeb,rgb(41, 135, 172));
            color: #1a1a1a;
            padding: 18px 36px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(19, 54, 182, 0.3);
            font-family: 'Arial', sans-serif;
          }

          .cta-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(19, 54, 182, 0.3);
          }

          .cta-secondary {
            background: transparent;
            color: #f5f5f5;
            padding: 18px 36px;
            border: 2px solid #87ceeb;
            border-radius: 4px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            font-family: 'Arial', sans-serif;
          }

          .cta-secondary:hover {
            background: #87ceeb;
            color: #1a1a1a;
          }

          .services {
            padding: 6rem 0;
            background: #1a1a1a;
            color: #f5f5f5;
          }

          .section-header {
            text-align: center;
            margin-bottom: 4rem;
          }

          .section-header h2 {
            font-size: 3rem;
            font-weight: bold;
            color: #87ceeb;
            margin-bottom: 1rem;
            letter-spacing: 2px;
            text-transform: uppercase;
          }

          .section-header p {
            font-size: 1.2rem;
            color: #ccc;
            max-width: 600px;
            margin: 0 auto;
            font-style: italic;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .service-card {
            background: #2c2c2c;
            border: 2px solid #333;
            padding: 2.5rem 2rem;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, transparent, #87ceeb, transparent);
            transition: left 0.5s ease;
          }

          .service-card:hover {
            transform: translateY(-5px);
            border-color: #87ceeb;
            background: #333;
          }

          .service-card:hover::before {
            left: 100%;
          }

          .service-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            color: #87ceeb;
          }

          .service-card h3 {
            font-size: 1.5rem;
            font-weight: bold;
            color: #f5f5f5;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .service-card p {
            color: #ccc;
            line-height: 1.6;
          }

          .about {
            padding: 6rem 0;
            background: #faf9f7;
          }

          .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }

          .about-text h2 {
            font-size: 3rem;
            font-weight: bold;
            color: #1a1a1a;
            margin-bottom: 2rem;
            letter-spacing: 1px;
          }

          .about-text h2 .accent {
            color: #87ceeb;
            font-style: italic;
          }

          .about-text p {
            font-size: 1.1rem;
            color: #555;
            line-height: 1.8;
            margin-bottom: 1.5rem;
          }

          .about-image {
            position: relative;
          }

          .image-placeholder {
            width: 100%;
            height: 400px;
            background: linear-gradient(45deg, #1a1a1a 25%, #2c2c2c 25%, #2c2c2c 50%, #1a1a1a 50%, #1a1a1a 75%, #2c2c2c 75%);
            background-size: 20px 20px;
            border: 4px solid #87ceeb;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #87ceeb;
            font-size: 4rem;
            position: relative;
          }

          .image-placeholder::before {
            content: '';
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            border: 2px solid #87ceeb;
          }

          .contact {
            padding: 6rem 0;
            background: #1a1a1a;
            color: #f5f5f5;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .contact-card {
            text-align: center;
            padding: 2rem;
            background: #2c2c2c;
            border: 2px solid #333;
            transition: all 0.3s ease;
          }

          .contact-card:hover {
            border-color: #87ceeb;
            background: #333;
          }

          .contact-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #87ceeb;
          }

          .contact-card h3 {
            font-size: 1.3rem;
            font-weight: bold;
            color: #f5f5f5;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .contact-card p {
            color: #ccc;
            font-size: 1rem;
            line-height: 1.5;
          }

          footer {
            background: #0d0d0d;
            color: #999;
            padding: 2.5rem 0;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 2rem;
          }

          .footer-logo {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #87ceeb;
            font-weight: bold;
            font-size: 1.2rem;
          }

          .footer-text {
            text-align: center;
            flex: 1;
          }

          .social-links {
            display: flex;
            gap: 1rem;
          }

          .social-links a {
            width: 40px;
            height: 40px;
            background: #2c2c2c;
            border: 1px solid #444;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #87ceeb;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .social-links a:hover {
            background: #87ceeb;
            color: #1a1a1a;
            border-color: #87ceeb;
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }

            .hero h1 {
              font-size: 2.5rem;
            }

            .about-content {
              grid-template-columns: 1fr;
              gap: 3rem;
            }

            .services-grid {
              grid-template-columns: 1fr;
            }

            .cta-group {
              flex-direction: column;
              align-items: center;
            }

            .footer-content {
              text-align: center;
              flex-direction: column;
            }
          }

          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <header>
        <nav className="container">
          <div className="logo">
            <img
              src={logo}
              alt="Beetle Barber Logo"
              style={{
                width: "28px",
                height: "18px",
                opacity: "0.8",
                filter: "invert(1)",
              }}
            />
            Beetle Barber
          </div>
          <ul className="nav-links">
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#gallery">Gallery</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li>
              <a
                href="https://square.site/book/AEAPGYZE9KXJG/shelsey-sybrandts-loveland-co"
                className="book-btn"
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Home />

        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img
                src={logo}
                alt="Beetle Barber Logo"
                style={{
                  width: "28px",
                  height: "18px",
                  opacity: "0.8",
                  filter: "invert(1)",
                }}
              />
              Beetle Barber
            </div>
            <div className="footer-text">
              <p>
                &copy; 2025 Beetle Barber. The Sweetest Barber Suite in the
                Sweetheart City.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeetleBarber;
