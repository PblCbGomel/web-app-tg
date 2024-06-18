import { Link } from "react-router-dom";

export function NavigationButton({ text, imgSrc, link }) {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "white" }}>
      <figure className={text === "Home" ? "home-btn" : "nav-btn"}>
        <img src={imgSrc} />
        <figcaption>{text}</figcaption>
      </figure>
    </Link>
  );
}
