import "./navigation.css";
import { NavigationButton } from "./button";

const navigationInfo = [
  { text: "Shop", imgSrc: "./navBtns/shop.png", link: "/shop" },
  { text: "Tasks", imgSrc: "./navBtns/tasks.png", link: "/tasks" },
  { text: "Frens", imgSrc: "./navBtns/frens.png", link: "/frens" },
];

export function NavigationMenu() {
  return (
    <nav>
      <div className="homeWrapper">
        <NavigationButton
          text={"Home"}
          imgSrc={"./navBtns/home.png"}
          link={"/"}
        />
      </div>
      <div className="otherWrapper">
        {navigationInfo.map((info) => {
          return (
            <NavigationButton
              key={info.text}
              text={info.text}
              imgSrc={info.imgSrc}
              link={info.link}
            />
          );
        })}
      </div>
    </nav>
  );
}
