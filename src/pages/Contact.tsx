import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div className="content-container">
      <h2 className="subtitle-page">Contact</h2>
      <div className="contact-me">
        <p>Please find me on my social media below or send an email to <strong>rafascerqueira.dev@gmail.com</strong></p>
        <p>Thank you for coming here to see what I do and don't forget to follow me to keep up with new skills</p>
        <Link to={"https://www.linkedin.com/in/rafascerqueira/"}>
          <img src="/Linkedin.png" alt="Linkedin" />
        </Link>
        <Link to={"https://github.com/rafascerqueira"}>
          <img src="/Github.png" alt="Github" />
        </Link>
      </div>
    </div>
  );
}
