import "./form.css";
import { useState } from "react"

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${name} / ${email}`)
  }

  return (
    <section className="contact-form">
      <form onSubmit={handleSubmit} className="form">
        <span>Hey {name}</span>
        <h2>Contact Us</h2>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          name="name"
          value={name}
          id="name"
          placeholder="Jon Doe"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Jondoe@example.com"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          placeholder="Leave a comment..."
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export { Form };
