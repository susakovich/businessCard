export default function RenderButtons() {
  return (
    <div className="buttons-wrapper">
      <a className="email-btn" href="mailto:office@susakovich.dev">
        <img src="../src/assets/Mail.png" alt="email logo" /> Email
      </a>
      <a
        className="linkedIn-btn"
        href="https://www.linkedin.com/in/susakovich/"
        target="blank"
      >
        <img src="../src/assets/Linkedin.png" alt="email logo" /> LinkedIn
      </a>
    </div>
  );
}
