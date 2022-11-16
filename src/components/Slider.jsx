import { SliderCard, Arrow } from "./SliderCard";

function SliderNewArrivals({ name }) {
  return (
    <div className="slider">
      <h2 className="slider-name">{name}</h2>
      <div className="slider-toggle">
        <Arrow className="arrow"></Arrow>
        <Arrow className="arrow arrow-right"></Arrow>
      </div>
      <div className="slider-cards">
        <SliderCard
          brand="ZARA"
          product="Patterned suite"
          price="$75.90"
          photo={require("../img/slider_1.jpg")}
        ></SliderCard>
        <SliderCard
          brand="Desigual"
          product="Ethnic dress with embroidery"
          price="$139.90"
          photo={require("../img/slider_2.jpg")}
        ></SliderCard>
        <SliderCard
          brand="ZARA"
          product="Patchwork mini skirt"
          price="$55.90"
          photo={require("../img/slider_3.jpg")}
        ></SliderCard>
        <SliderCard
          brand="Monki"
          product="Ultramarine culottes"
          price="$62.90"
          photo={require("../img/slider_4.jpg")}
        ></SliderCard>
      </div>
    </div>
  );
}

function SliderPicks({ name }) {
  return (
    <div className="slider">
      <h2 className="slider-name">{name}</h2>
      <div className="slider-toggle">
        <Arrow className="arrow"></Arrow>
        <Arrow className="arrow arrow-right"></Arrow>
      </div>
      <div className="slider-cards">
        <SliderCard
          brand="Reclaimed Vintage"
          product="Lounge style pleated suit"
          price="$82.90"
          photo={require("../img/slider_5.jpg")}
        ></SliderCard>
        <SliderCard
          brand="Ted Baker"
          product="Cropped suit in pink"
          price="$36.90"
          photo={require("../img/slider_6.jpg")}
        ></SliderCard>
        <SliderCard
          brand="Monki"
          product="Fine knit mini dress"
          price="$42.00"
          photo={require("../img/slider_7.jpg")}
        ></SliderCard>
        <SliderCard
          brand="People tree"
          product="Printed mini shirt dress"
          price="$35.90"
          photo={require("../img/slider_8.jpg")}
        ></SliderCard>
      </div>
    </div>
  );
}

export { SliderNewArrivals, SliderPicks };
