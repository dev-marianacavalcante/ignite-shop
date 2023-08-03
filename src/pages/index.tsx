//Home
import React from "react";

import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "../styles/pages/home";

import Image from "next/image";

import camiseta1 from "../assets/camisetas/shirt-1.png";
import camiseta2 from "../assets/camisetas/shirt-2.png";
import camiseta3 from "../assets/camisetas/shirt-3.png";
import camiseta4 from "../assets/camisetas/shirt-4.png";

import "keen-slider/keen-slider.min.css";

export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <pre>{JSON.stringify(props.list)}</pre>

      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta4} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    props: {
      list: [1, 2, 3],
    },
  };
};
