export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2> Visits are by appointment only</h2>
          <p>Located inside The Suites at Shear NV Salon</p>
        </div>

        <div
          style={{
            maxWidth: "480px",
            margin: "0 auto 4rem auto",
            background: "#2c2c2c",
            border: "2px solid #d4af37",
            borderRadius: "8px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "1rem",
          }}
        >
          <div
            style={{
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <iframe
              title="Map"
              style={{
                width: "320px",
                height: "320px",
                frameborder: "0",
                scrolling: "no",
                marginheight: "0",
                marginwidth: "0",
              }}
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1461%20E%20Eisenhower%20Blvd,%20Loveland,%20CO%2080537+(Located%20at)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
          1461 E Eisenhower Blvd Suite 106 Loveland, Colorado 80537
        </div>

        <div
          style={{
            textAlign: "center",
            margin: "4rem auto",
            maxWidth: "600px",
          }}
        >
          <div
            style={{
              background: "#2c2c2c",
              border: "2px solid #333",
              borderRadius: "8px",
              padding: "3rem 2rem",
              transition: "border-color 0.3s ease",
            }}
          >
            <a
              href="https://square.site/book/AEAPGYZE9KXJG/shelsey-sybrandts-loveland-co"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #d4af37, #b8941f)",
                color: "#1a1a1a",
                padding: "20px 40px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.3rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 16px rgba(212, 175, 55, 0.3)",
                fontFamily: "Arial, sans-serif",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 8px 24px rgba(212, 175, 55, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 16px rgba(212, 175, 55, 0.3)";
              }}
            >
              Book Appointment
            </a>
          </div>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Location</h3>
            <p>
              <a
                href="https://goo.gl/maps/tCXUsJVuJ9zb85tNA"
                style={{ color: "#d4af37", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                1461 E Eisenhower Blvd
                <br />
                Suite 106
                <br />
                Loveland, Colorado 80537
              </a>
            </p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">🕒</div>
            <h3>Hours</h3>
            <p>
              Sunday: Closed
              <br />
              Monday: Closed
              <br />
              Tuesday: 12pm-8pm
              <br />
              Wednesday: 9am-6pm
              <br />
              Thursday: 9am-6pm
              <br />
              Friday: 9am-6pm
              <br />
              Every Other Saturday: 9am-1:40pm
            </p>
          </div>
        </div>
        <div
          style={{
            margin: "4rem auto",
            maxWidth: "600px",
            textAlign: "center",
          }}
        ></div>
        <div
          style={{
            textAlign: "center",
            marginTop: "4rem",
          }}
        >
          <h3
            style={{
              color: "#d4af37",
              fontSize: "2rem",
              marginBottom: "2rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Follow Us
          </h3>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.facebook.com/beetlebarber"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "120px",
                height: "120px",
                background: "#2c2c2c",
                border: "2px solid #333",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af37",
                textDecoration: "none",
                transition: "all 0.3s ease",
                fontSize: "3rem",
              }}
              onMouseOver={(e) => {
                e.target.style.borderColor = "#d4af37";
                e.target.style.background = "#333";
              }}
              onMouseOut={(e) => {
                e.target.style.borderColor = "#333";
                e.target.style.background = "#2c2c2c";
              }}
            >
              📘
              <span style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                Facebook
              </span>
            </a>

            <a
              href="https://www.instagram.com/beetlebarber/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "120px",
                height: "120px",
                background: "#2c2c2c",
                border: "2px solid #333",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af37",
                textDecoration: "none",
                transition: "all 0.3s ease",
                fontSize: "3rem",
              }}
              onMouseOver={(e) => {
                e.target.style.borderColor = "#d4af37";
                e.target.style.background = "#333";
              }}
              onMouseOut={(e) => {
                e.target.style.borderColor = "#333";
                e.target.style.background = "#2c2c2c";
              }}
            >
              📷
              <span style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                Instagram
              </span>
            </a>

            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "120px",
                height: "120px",
                background: "#2c2c2c",
                border: "2px solid #333",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af37",
                textDecoration: "none",
                transition: "all 0.3s ease",
                fontSize: "3rem",
              }}
              onMouseOver={(e) => {
                e.target.style.borderColor = "#d4af37";
                e.target.style.background = "#333";
              }}
              onMouseOut={(e) => {
                e.target.style.borderColor = "#333";
                e.target.style.background = "#2c2c2c";
              }}
            >
              😊
              <span style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                Reviews
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
