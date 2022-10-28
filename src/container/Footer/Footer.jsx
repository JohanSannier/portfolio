import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import emailjs from "@emailjs/browser";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = () => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendEmail();
  };

  return (
    <>
      <h2 className="head-text">Boire un café & Discutez avec moi</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:johan.sanniercaffier@gmail.com" className="p-text">
            johan.sanniercaffier@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="téléphone" />
          <a href="tel:+33 123 456 789" className="p-text">
            +33 123 456 789
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="app__flex">
              <input
                type="text"
                className="p-text"
                placeholder="Votre nom"
                name="name"
                value={name}
                onChange={handleChangeInput}
                required
              />
            </div>
            <div className="app__flex">
              <input
                type="email"
                className="p-text"
                placeholder="Votre email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                className="p-text"
                placeholder="Votre message"
                value={message}
                onChange={handleChangeInput}
                required
              ></textarea>
            </div>
            <button className="p-text">
              {loading ? "Envoie en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Merci de m'avoir contacté !</h3>
        </div>
      )}
      <div className="copyright">
        <p className="p-text">@2022 JOHAN SANNIER</p>
        <p className="p-text">Tous droits réservés</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
