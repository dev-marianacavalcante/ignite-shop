import { useRouter } from "next/router";
import React from "react";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          asperiores placeat sint labore similique, voluptate consequuntur
          quidem facere molestias tenetur eos, quam, aspernatur culpa fuga!
          Debitis quo enim ipsam nobis!
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
