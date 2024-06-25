import { useEffect, useState } from "react";
import "./food.css";

export function FoodComponent() {
  const [food, setFood] = useState([
    { src: "./images/fire.png", title: "Мяу 300g" },
    { src: "./images/streak.png", title: "Не мяу 150g" }, //пустое по умолчанию
  ]);

  useEffect(() => {
    //запрос на данные по еде, полученный массив в setFood() передать
  });

  return (
    <div class="carousel-wrapper">
      {food.length ? (
        food.map((f) => {
          return (
            <div className="food-wrapper swiper-slide">
              <img src={f.src} width={"120"} height={"120"} />
              <p>{f.title}</p>
            </div>
          );
        })
      ) : (
        <h2>Food not found</h2>
      )}
    </div>
  );
}
