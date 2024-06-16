import "./navigation.css";
import { Link } from "react-router-dom";

export function NavigationMenu() {
  return (
    <nav>
      <div className="homeWrapper">
        <Link to="/">
          <div className="home btn"></div>
        </Link>
      </div>
      <div className="otherWrapper">
        <Link to="/shop">
          <div className="shop btn"></div>
        </Link>
        <Link to="/tasks">
          <div className="tasks btn"></div>
        </Link>
        <Link to="/frens">
          <div className="frens btn"></div>
        </Link>
      </div>
    </nav>
  );
}
