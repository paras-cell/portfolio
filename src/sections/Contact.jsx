import { useRef } from "react";
import emailjs from "emailjs-com";
import "./css/contact.css";
import "./css/base.css";

function About() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // ✅ Send notification email to yourself
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("Notification email sent:", result.text);

        // ✅ Send auto-reply email to the user
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
            {
              name: name,
              email: email,
              message: message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then((res) => {
            console.log("Auto-reply sent:", res.text);
            alert("Message sent! We’ll get back to you soon.");
          })
          .catch((error) => {
            console.error("Auto-reply error:", error.text);
          });
      })
      .catch((error) => {
        console.error("Notification email error:", error.text);
        alert("Failed to send message.");
      });

    e.target.reset();
  };

  return (
    <div className="info-section">
      <h1 className="auto-show-d section-title">CONTACT ME</h1>
      <div className="info-cards-about">
        <div className="auto-comeleft card-about connect-card">
          <h1>Connect with Me</h1>
          <div className="social-links ">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.instagram.com/paras_31__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-me">
                <img
                  className="connect-icon contact-img"
                  src="/insta.png"
                  alt="insta"
                />
                Instagram{" "}
                <p style={{ top: "43%", left: "34%", fontSize: "x-small" }}>
                  paras_31
                </p>
              </div>
            </a>
            <a
              style={{ textDecoration: "none", color: "white"}}
              href="https://www.linkedin.com/in/paras-kumar-26410426b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-me">
                <img
                  style={{background:"white"}}
                  className="connect-icon contact-img"
                  src="/linkedin.png"
                  alt="linkedin"
                />
                LinkedIn
                <p style={{ top: "40%", left: "37%", fontSize: "x-small" }}>
                  Paras kumar
                </p>
              </div>
            </a>

            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://github.com/paras-cell"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-me">
                <img
                  style={{ borderRadius: "8px", background: "white" }}
                  className="connect-icon contact-img"
                  src="githublogo.png"
                  alt="github"
                />
                GitHub
                <p style={{ top: "40%", left: "41%", fontSize: "x-small" }}>
                  Paras-cell
                </p>
              </div>
            </a>

            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=paraskumar19025@gmail.com"
              target="-blank" 
            >
              <div className="contact-me">
                <img
                  style={{ borderRadius: "10px" }}
                  className="connect-icon contact-img"
                  src="/gmail.png"
                  alt="github"
                />
                Email
                <p style={{ top: "42%", left: "40%", fontSize: "x-small" }}>
                  paraskumar19025
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="auto-comeright card-about ">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h1>Send message</h1>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="form-text"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
            <button className="form-but" type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="auto-comeleft card-about passion-card">
          <h1>My Passion for Coding</h1>
          <p>
            Coding excites me because it lets me solve problems and build things
            from scratch. I love exploring new technologies and continuously
            improving my skills to create impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
