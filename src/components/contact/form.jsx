import "./form.css";

const Form = () => {
  return (
    <section className="contact-form">
      <form action="" className="form">
        <h2>Contact Us</h2>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Jon Doe"
          required
        />
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          name="email"
          id="email"
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
