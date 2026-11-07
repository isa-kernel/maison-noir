"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Info } from "lucide-react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General enquiry");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) return <div className={styles.success} role="status" aria-live="polite"><CheckCircle2 size={34} /><p className={styles.kicker}>MESSAGE PREVIEW</p><h3 className="display-heading">Thanks for<br /><em>reaching out.</em></h3><p>This is a front-end demonstration. Your message has not been sent because a verified contact endpoint has not yet been connected.</p><button type="button" onClick={() => { setSent(false); setName(""); setEmail(""); setSubject("General enquiry"); setMessage(""); }}>Write another message</button></div>;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.kicker}>SEND A NOTE</p><h3 className="display-heading">We are<br /><em>listening.</em></h3>
      <label>Your name<input required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" /></label>
      <label>Email address<input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /></label>
      <label>What is this about?<select value={subject} onChange={(event) => setSubject(event.target.value)}><option>General enquiry</option><option>Private dining</option><option>Events and celebrations</option><option>Feedback</option><option>Partnership</option></select></label>
      <label>Your message<textarea required rows={5} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Tell us a little about it..." /></label>
      <div className={styles.notice}><Info size={17} /><p>Prototype only: this form displays a preview and does not transmit personal information.</p></div>
      <button type="submit">Preview message <span aria-hidden="true">↗</span></button>
    </form>
  );
}
