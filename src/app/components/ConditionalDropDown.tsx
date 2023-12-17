import React, { Dispatch, SetStateAction } from "react";
import styles from "../components/ConditonalDropDown.module.css";
interface Props {
  setFontNumber: Dispatch<SetStateAction<number>>;
  setFont: React.Dispatch<React.SetStateAction<string>>;
}
export const ConditionalDropDown = (props: Props) => {
  const { setFontNumber, setFont } = props;

  return (
    <div className={styles.conditionalDropdown}>
      <ul className={styles.fontList}>
        <li
          onClick={() => {
            setFontNumber(0);
            setFont("Sans Serif");
          }}
        >
          Sans Serif
        </li>
        <li
          onClick={() => {
            setFontNumber(1);
            setFont("Serif");
          }}
        >
          Serif
        </li>
        <li
          onClick={() => {
            setFontNumber(2);
            setFont("Mono");
          }}
        >
          Mono
        </li>
      </ul>
    </div>
  );
};
