import logo from "./logo.svg";

export const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <img
              src={logo}
              alt="Beetle Barber Logo"
              style={{
                height: "80px",
                width: "auto",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3)) invert(1)",
                maxWidth: "200px",
              }}
            />
          </div>
          <h1>
            <span className="accent">BEETLE BARBER</span>
          </h1>
          <p
            style={{
              fontSize: "1.6rem",
              fontStyle: "italic",
              marginBottom: "3rem",
            }}
          >
            Welcome to The Sweetest Barber Suite in the Sweetheart City!
          </p>
          <div className="cta-group">
            <a
              href="https://square.site/book/AEAPGYZE9KXJG/shelsey-sybrandts-loveland-co"
              className="cta-primary"
            >
              Book Appointment
            </a>
            <a href="#about" className="cta-secondary">
              Meet Shelsey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
