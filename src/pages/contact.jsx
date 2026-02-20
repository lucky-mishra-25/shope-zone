function Contact() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form>
        <input placeholder="Your Name" /><br /><br />
        <input placeholder="Email" /><br /><br />
        <textarea placeholder="Message"></textarea><br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
