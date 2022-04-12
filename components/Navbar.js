import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { colors, heights } from "../config/genericStyles";
import { LogoGold } from "../config/images";
import { FImageOuter } from "../elements/elements";

const NavbarOuter = styled.nav`
  background-color: ${colors.black};
  height: ${heights.navbarHeight};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 99;
  @media (max-width: 991px) {
    height: 100vh;
  }
`;
const CloseMobMenu = styled.div`
  color: ${colors.brown};
  position: absolute;
  top: 0;
  right: 0;
`;
const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  margin: auto;
  padding: 0 15px;
  background-color: ${colors.black};
  @media (max-width: 991px) {
    width: 100%;
    position: fixed;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 100%;
  }
`;
const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  color: ${colors.gold};
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
    margin: 20px auto;
    & .hi {
      margin: 4px auto;
    }
  }
  & .hi {
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
  }
  & .hi:hover {
    border-bottom: 1px solid ${colors.gold};
  }
`;
const LangUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 50px;
`;
const LangLi = styled.li`
  text-transform: uppercase;
  color: ${colors.gold};
`;
const Navbar = ({ navItems }) => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  let router = useRouter();

  return (
    <NavbarOuter className={isMobMenuOpen ? "aaaaa" : ""}>
      <CloseMobMenu onClick={() => setIsMobMenuOpen(false)}>X</CloseMobMenu>
      <NavbarInner>
        <Link href="/">
          <a>
            <FImageOuter
              imgWidth={"130px"}
              imgHeight={"60px"}
              whichCursor={"pointer"}
            >
              <Image
                priority
                objectFit="contain"
                src={LogoGold}
                layout="fill"
                alt="Fitides Logo Gold"
              />
            </FImageOuter>
          </a>
        </Link>
        <NavLinks>
          {navItems.map((item, idx) => (
            <Link href={item.pageUrl} key={idx}>
              <a className="hi">{item.pageName}</a>
            </Link>
          ))}
        </NavLinks>

        <LangUl>
          {router.locales.map((locale) => (
            <LangLi key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </LangLi>
          ))}
        </LangUl>
      </NavbarInner>
    </NavbarOuter>
  );
};

export default Navbar;
