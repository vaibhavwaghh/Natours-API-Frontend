import "./App.css";
const Footer = () => (
  <footer className="footer">
    <div className="footer__logo">
      <img
        style={{ width: "100px", height: "auto" }}
        src="/img/Tours-web-hub.jpg"
        alt="Natours logo"
      />
    </div>
    <ul className="footer__nav">
      <li>
        <a href="https://www.linkedin.com/in/vaibhav--wagh">About us</a>
      </li>
      <li>
        <a href="https://github.com/vaibhavwaghh/natours-api">Download Code</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/vaibhav--wagh">Contact</a>
      </li>
    </ul>
    <p className="footer__copyright">Copyrights are reserved by VAIBHAV WAGH</p>
  </footer>
);

export default Footer;
