import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { colors, heights } from "../config/genericStyles";
import { LogoGold, LogoWhite } from "../config/images";
import { FImageOuter } from "../elements/elements";
import { useWindowSize } from "../util/fHooks";

const NavbarOuter = styled.nav`
  background-color: ${colors.red};
  height: ${heights.navbarHeight};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 99;
  @media (max-width: 991px) {
    /* height: ${heights.navbarHeight}; */
  }
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  margin: auto;
  padding: 0 15px;
  background-color: ${colors.red};
  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    padding-bottom: 0;
    height: 100%;
  }
`;
const LeftSide = styled.div`
  max-width: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%;
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 70%;
  width: 100%;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${heights.navbarHeight};
    left: -100%;
    transition: all 0.3s ease;
    background-color: ${colors.red};
    max-width: 100%;
    height: calc(100vh - ${heights.navbarHeight});
    &.navOpen {
      left: 0;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  color: ${colors.white};
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
    border-bottom: 1px solid ${colors.white};
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
  color: ${colors.white};
`;

const CloseMobMenu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: ${colors.white};
  position: absolute;
  right: 20px;
  transform: translateY(calc (50% - 30px));
  height: 24px;
  & span {
    display: block;
    border: 1px solid ${colors.white};
    width: 40px;
    height: 4px;
    background-color: ${colors.white};
    border-radius: 10px;
    transition: all 0.3s ease;
    opacity: 1;
  }
  &.active {
    & span:first-child {
      transform: rotate(135deg) translateY(-7px) translateX(9px);
    }
    & span:nth-child(2) {
      transform: translateX(-20px);
      opacity: 0;
    }
    & span:last-child {
      transform: rotate(-135deg) translateY(5px) translateX(6px);
    }
  }
`;

const Navbar = ({ navItems }) => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  let router = useRouter();
  const { width } = useWindowSize();

  return (
    <NavbarOuter>
      {width < 991 && (
        <CloseMobMenu
          onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
          className={isMobMenuOpen ? "active" : ""}
        >
          <span></span>
          <span></span>
          <span></span>
        </CloseMobMenu>
      )}
      <NavbarInner>
        <LeftSide>
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
                  src={LogoWhite}
                  layout="fill"
                  alt="Fitides Logo Gold"
                />
              </FImageOuter>
            </a>
          </Link>
        </LeftSide>
        <RightSide className={isMobMenuOpen ? "navOpen" : ""}>
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
        </RightSide>
      </NavbarInner>
    </NavbarOuter>
  );
};

export default Navbar;
