import React, { useMemo, useState } from "react";
import One from "./Images/One.jpg";
import Two from "./Images/Two.jpg";
import Three from "./Images/Three.jpg";
import Four from "./Images/Four.jpg";
import Five from "./Images/Five.jpg";

const useGalleryStyles = () => {
  return useMemo(
    () => ({
      gallerySection: {
        padding: "6rem 0",
        background: "#faf9f7",
      },
      container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem",
      },
      sectionHeader: {
        textAlign: "center",
        marginBottom: "4rem",
      },
      sectionTitle: {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#1a1a1a",
        marginBottom: "1rem",
        letterSpacing: "2px",
        textTransform: "uppercase",
      },
      sectionSubtitle: {
        fontSize: "1.2rem",
        color: "#777",
        maxWidth: "600px",
        margin: "0 auto",
        fontStyle: "italic",
      },
      galleryGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem",
      },
      galleryItem: {
        position: "relative",
        background: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      },
      galleryImage: {
        width: "100%",
        height: "300px",
        objectFit: "cover",
        transition: "transform 0.3s ease",
      },
      galleryOverlay: {
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background:
          "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)",
        opacity: "0",
        transition: "opacity 0.3s ease",
        display: "flex",
        alignItems: "flex-end",
        padding: "1.5rem",
      },
      galleryCaption: {
        color: "#fff",
        fontSize: "1rem",
        fontWeight: "600",
        textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
      },
      loadMoreButton: {
        display: "block",
        margin: "0 auto",
        background: "linear-gradient(135deg, #87ceeb,#87ceeb)",
        color: "#1a1a1a",
        padding: "15px 30px",
        border: "none",
        borderRadius: "4px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "1px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 16px rgba(212, 175, 55, 0.3)",
      },
      modal: {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: "rgba(0,0,0,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "2000",
        padding: "2rem",
      },
      modalContent: {
        position: "relative",
        maxWidth: "90vw",
        maxHeight: "90vh",
      },
      modalImage: {
        width: "100%",
        height: "auto",
        maxHeight: "90vh",
        objectFit: "contain",
        borderRadius: "8px",
      },
      closeButton: {
        position: "absolute",
        top: "-50px",
        right: "0",
        background: "none",
        border: "none",
        color: "#fff",
        fontSize: "2rem",
        cursor: "pointer",
        padding: "10px",
      },
    }),
    []
  );
};

export const Gallery = () => {
  const styles = useGalleryStyles();
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(6);

  // Sample gallery data - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: One, // Replace with your image paths
      alt: "Classic fade haircut",
      caption: "Classic Fade",
    },
    {
      id: 2,
      src: Two,
      alt: "Beard trim and styling",
      caption: "Beard Trim & Style",
    },
    {
      id: 3,
      src: Three,
      alt: "Modern pompadour",
      caption: "Modern Pompadour",
    },
    {
      id: 4,
      src: Four,
      alt: "Skin fade with design",
      caption: "Skin Fade Design",
    },
    {
      id: 5,
      src: Five,
      alt: "Classic scissor cut",
      caption: "Classic Scissor Cut",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const loadMoreImages = () => {
    setVisibleImages((prev) => Math.min(prev + 6, galleryImages.length));
  };

  const handleLoadMoreHover = (e) => {
    e.target.style.transform = "translateY(-2px)";
    e.target.style.boxShadow = "0 6px 20px rgba(212, 175, 55, 0.4)";
  };

  const handleLoadMoreLeave = (e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "0 4px 16px rgba(212, 175, 55, 0.3)";
  };

  const handleItemHover = (e) => {
    const img = e.currentTarget.querySelector("img");
    const overlay = e.currentTarget.querySelector(".gallery-overlay");
    if (img) img.style.transform = "scale(1.05)";
    if (overlay) overlay.style.opacity = "1";
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
  };

  const handleItemLeave = (e) => {
    const img = e.currentTarget.querySelector("img");
    const overlay = e.currentTarget.querySelector(".gallery-overlay");
    if (img) img.style.transform = "scale(1)";
    if (overlay) overlay.style.opacity = "0";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
  };

  return (
    <section id="gallery" style={styles.gallerySection}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            <span style={{ color: "#87ceeb" }}>Client</span> Gallery
          </h2>
          <p style={styles.sectionSubtitle}>
            Showcasing our finest work and satisfied clients
          </p>
        </div>

        <div style={styles.galleryGrid}>
          {galleryImages.slice(0, visibleImages).map((image) => (
            <div
              key={image.id}
              style={styles.galleryItem}
              onClick={() => handleImageClick(image)}
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={styles.galleryImage}
              />
              <div className="gallery-overlay" style={styles.galleryOverlay}>
                <span style={styles.galleryCaption}>{image.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {visibleImages < galleryImages.length && (
          <button
            style={styles.loadMoreButton}
            onClick={loadMoreImages}
            onMouseEnter={handleLoadMoreHover}
            onMouseLeave={handleLoadMoreLeave}
          >
            Load More
          </button>
        )}
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div style={styles.modal} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeModal}>
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={styles.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
};
