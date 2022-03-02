import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { colors, heights } from "../config/genericStyles";
import { LogoGold } from "../config/images";
import { FImageOuter } from "../elements/elements";
import styles from "../styles/Navigation.module.css";

const NavbarOuter = styled.nav`
  background-color: ${colors.black};
  height: ${heights.navbarHeight};
  display: flex;
  align-items: center;
`;
const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  margin: auto;
  padding: 0 15px;
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
  let router = useRouter();
  return (
    <NavbarOuter>
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
