import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Cart } from "../Cart";

import { HeaderContainer } from "./styles";
import logoImg from "../../assets/logo.svg";

export function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      {showCartButton && <Cart />}
    </HeaderContainer>
  );
}
