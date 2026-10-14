"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // Replace with your actual Web3Forms access key
    formData.append("access_key", "7fb5b5e9-09bb-44cc-b769-363c5d91de75");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className={styles.contactMain}>
      <div className={styles.contactContainer}>
        
        {/* Left Side: Contact Info */}
        <div className={styles.infoBlock}>
          <h1 className={styles.title}>Start a Conversation.</h1>
          <p className={styles.subtitle}>
            Whether you have a specific project in mind or simply want to explore possibilities, 
            our studio is ready to listen.
          </p>
          
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <strong>Studio</strong>
              <p>123 Architecture Blvd<br/></p>
            </div>
            <div className={styles.detailItem}>
              <strong>Direct</strong>
              <p>hello@lumendesigns.com<br/>+234 123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className={styles.formBlock}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Project Details</label>
              <textarea id="message" name="message" rows={5} required className={styles.textarea}></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "submitting"}
              className={styles.submitBtn}
            >
              {status === "submitting" ? "Sending..." : "Submit Inquiry"}
            </button>

            {status === "success" && (
              <p className={styles.successMessage}>Thank you. Our team will be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className={styles.errorMessage}>Something went wrong. Please try emailing us directly.</p>
            )}
          </form>
        </div>

      </div>
    </main>
  );
}