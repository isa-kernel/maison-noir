"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Info } from "lucide-react";
import styles from "./ReservationForm.module.css";

type FormState = { name: string; email: string; phone: string; date: string; time: string; guests: string; occasion: string; notes: string };
const initialState: FormState = { name: "", email: "", phone: "", date: "", time: "", guests: "2", occasion: "", notes: "" };

export default function ReservationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [today, setToday] = useState("");
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    setToday(`${year}-${month}-${day}`);
  }, []);
  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <CheckCircle2 size={34} strokeWidth={1.4} />
        <p className={styles.kicker}>REQUEST PREVIEW</p>
        <h3 className="display-heading">Your evening<br /><em>starts here.</em></h3>
        <p>This is a front-end demonstration. Your details have not been sent and no table has been reserved.</p>
        <div className={styles.summary}><strong>{form.name}</strong><span>{form.date} · {form.time} · {form.guests} guests</span><span>{form.email}</span></div>
        <button type="button" className={styles.submit} onClick={() => { setSubmitted(false); setForm(initialState); }}>Make another request</button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formHeading}><p className={styles.kicker}>RESERVATION REQUEST</p><h3 className="display-heading">Let's find<br /><em>your moment.</em></h3></div>
      <div className={styles.grid}>
        <label className={styles.field}>Full name<input autoComplete="name" name="name" required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" /></label>
        <label className={styles.field}>Email address<input autoComplete="email" name="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" /></label>
        <label className={styles.field}>Phone number<input autoComplete="tel" name="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+254 ..." /></label>
        <label className={styles.field}>Number of guests<select name="guests" value={form.guests} onChange={(e) => update("guests", e.target.value)}>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}</select></label>
        <label className={styles.field}>Preferred date<input name="date" type="date" min={today} required value={form.date} onChange={(e) => update("date", e.target.value)} /></label>
        <label className={styles.field}>Preferred time<select name="time" required value={form.time} onChange={(e) => update("time", e.target.value)}><option value="">Select a time</option>{["12:00", "13:00", "14:00", "17:00", "18:00", "19:00", "20:00", "21:00"].map((time) => <option key={time} value={time}>{time}</option>)}</select></label>
        <label className={`${styles.field} ${styles.full}`}>Occasion <span className={styles.optional}>OPTIONAL</span><select name="occasion" value={form.occasion} onChange={(e) => update("occasion", e.target.value)}><option value="">Just because</option><option>Birthday</option><option>Anniversary</option><option>Business dinner</option><option>Family gathering</option><option>Other celebration</option></select></label>
        <label className={`${styles.field} ${styles.full}`}>Anything we should know? <span className={styles.optional}>OPTIONAL</span><textarea name="notes" rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Dietary needs, seating preferences or a special request..." /></label>
      </div>
      {/* <div className={styles.notice}><Info size={17} /><p>This form is currently a prototype. Submitting it only displays a local preview; no request is transmitted.</p></div> */}
      <button className={styles.submit} type="submit">Preview reservation request <span aria-hidden="true">↗</span></button>
      <p className={styles.terms}>A request is not a confirmed booking. Availability and details must be confirmed by the restaurant.</p>
    </form>
  );
}
