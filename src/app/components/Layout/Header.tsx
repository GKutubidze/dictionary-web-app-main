"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import style from "./Header.module.css";
import booklogo from "../../../../public/images/logo.svg";
import arrowlogo from "../../../../public/images/icon-arrow-down.svg";
import moonlogo from "../../../../public/images/icon-moon.svg";
import Image from "next/image";
import { ConditionalDropDown } from "../ConditionalDropDown";
interface Props {
  setFontNumber: Dispatch<SetStateAction<number>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}
const Header = (props: Props) => {
  const { setFontNumber, isOpen, setIsOpen, isDark, setIsDark } = props;
  const [font, setFont] = useState<string>("Sans-serif");
  return (
    <div className={style.header}>
      <div className={style.fontContainer}>
        <Image src={booklogo} alt="" />
        <div className={style.menu}>
          <div className={style.arrow}>
            <button
              className={`${style.fontButton} ${
                isDark ? style.whiteBackground : style.blackBackground
              }`}
            >
              {font}
            </button>
            <Image
              src={arrowlogo}
              alt=""
              className={style.arrowLogo}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
          {isOpen && (
            <ConditionalDropDown
              setFontNumber={setFontNumber}
              setFont={setFont}
            />
          )}
        </div>
      </div>
      <div className={style.modeSwitch}>
        <label className={style.switch}>
          <input
            type="checkbox"
            onClick={() => {
              setIsDark(!isDark);
            }}
          />
          <span className={`${style.slider} ${style.round}`}></span>
        </label>
        <Image src={moonlogo} alt="" />
      </div>
    </div>
  );
};

export default Header;
