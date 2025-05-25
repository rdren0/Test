import React, { useMemo } from "react";
import Main from "../Images/IMG_20240809_175552.jpg";

const useAboutStyles = () => {
  return useMemo(
    () => ({
      aboutPronunciation: {
        fontStyle: "italic",
        color: "#777",
        marginBottom: "1rem",
        fontSize: "1.2rem",
      },
      aboutIntro: {
        fontSize: "1.2rem",
        fontWeight: "500",
        marginBottom: "2rem",
      },
      aboutClosing: {
        fontStyle: "italic",
        fontWeight: "600",
        color: "#3ebaac",
        fontSize: "1.1rem",
        marginTop: "2rem",
      },
      aboutImage: {
        position: "relative",
        width: "100%",
        height: "500px",
        overflow: "hidden",
        border: "4px solid #3ebaac",
        borderRadius: "8px",
      },
      aboutImagePhoto: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "sepia(10%) brightness(1.1) contrast(1.1)",
      },
    }),
    []
  );
};

export const About = () => {
  const styles = useAboutStyles();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>
              My name is <span className="accent">Shelsey</span>
            </h2>
            <p style={styles.aboutPronunciation}>(shell-sea)</p>
            <p style={styles.aboutIntro}>
              A barber who cruises around in a '69 VW bug gratefully on her way
              to meet Loveland's grooming expectations for nearly a decade.
            </p>

            <p>
              I want to welcome you into The Sweetest Barber Suite in the
              Sweetheart City!
            </p>

            <p>
              Offering a service fit for every white collar, blue collar to tie
              dyed collar! Specializing in men's haircutting and shaving, Beetle
              Barber's desire is to deliver detailed and consistent work time
              after time.
            </p>

            <p>
              It all starts with a thorough consultation, followed by a
              meticulously efficient cutting process paired with a few jokes and
              barbershop banter. Resulting in what we think you'll find a
              valuable and intentional service.
            </p>

            <p style={styles.aboutClosing}>
              Loveland, we are grateful to have you and your loved ones in our
              chair.
            </p>
          </div>
          <div className="about-image">
            <div style={styles.aboutImage}>
              <img
                src={Main}
                alt="Shelsey at Beetle Barber shop"
                style={styles.aboutImagePhoto}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
