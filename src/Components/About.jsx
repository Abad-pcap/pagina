/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/forest.jpg";

const imageAltText = "space-colonybackground";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a CyberSecurity student studying at Universidad Autonoma Metronpolitana. I enjoy exploring, creating and learning.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Scripting",
  "Linux",
  "Arduino",
  "Cryptography",
  "Information Security",
  "Cybersecurity",
  "Raspberry Pi",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am constantly learning in the exciting world of cybersecurity, information technologies and development with hardware such as Arduino and Raspberry Pi. Although I am not an expert, I am motivated to delve deeper into these fields every day, designing practical solutions and exploring how integrate technological innovation with the protection of systems and data. My goal is to continue growing, acquire new skills and contribute with ideas that combine creativity, functionality and security.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
