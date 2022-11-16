import HeroCard from "../components/HeroCard";
import { SliderNewArrivals, SliderPicks } from "../components/Slider";
import Article from "../components/article";
import HeroBrand from "../components/HeroBrand";
import { Routes, Route, Link, Navigate, NavLink } from "react-router-dom";

function Homepage() {
  return (
    <>
      <section className="hero">
        <HeroCard
          type="Dresses"
          photo={require("../img/hero-dresses.jpg")}
        ></HeroCard>
        <HeroCard
          type="Skirts"
          photo={require("../img/hero-skirts.jpg")}
        ></HeroCard>
        <HeroCard
          type="Tops"
          photo={require("../img/hero-tops.jpg")}
        ></HeroCard>
        <HeroCard
          type="Bags"
          photo={require("../img/hero-bags.jpg")}
        ></HeroCard>
        <HeroCard
          type="Swimwear"
          photo={require("../img/hero-swimwear.jpg")}
        ></HeroCard>
        <HeroCard
          type="Shoes"
          photo={require("../img/hero-shoes.jpg")}
        ></HeroCard>
      </section>
      <section className="new-arrivals">
        <SliderNewArrivals name="New arrivals"></SliderNewArrivals>
      </section>
      <section className="presentation">
        <img
          className="presentation-photo"
          src={require("../img/presentation_1.jpg")}
        />
        <img
          className="presentation-photo"
          src={require("../img/presentation_2.jpg")}
        />
      </section>
      <section className="picks">
        <SliderPicks name="Our picks for you"></SliderPicks>
      </section>
      <Article
        title="Eco Aware brands:Exclusively at Dresnote"
        abstract="Science Story is a collaboration between Dressnote and creative thinkers, researchers and brands who are developing cutting-edge materials designed to address the environmental impacts of the textile industry."
        btn="Shop Eco collection"
        photo={require("../img/hero_article.jpg")}
      ></Article>
      <section className="promo-photo">
        <img
          className="promo-photo"
          src={require("../img/hero_swimwear.jpg")}
        />
      </section>
      <section className="hero-brands">
        <HeroBrand photo={require("../img/new-balance-2.png")}></HeroBrand>
        <HeroBrand photo={require("../img/dr-martens.png")}></HeroBrand>
        <HeroBrand photo={require("../img/converse.png")}></HeroBrand>
        <HeroBrand photo={require("../img/steve-madden.png")}></HeroBrand>
        <HeroBrand photo={require("../img/ugg-australia.png")}></HeroBrand>
        <NavLink className="brands-link" to="/brands">
          All brands
        </NavLink>
      </section>
    </>
  );
}

export default Homepage;
