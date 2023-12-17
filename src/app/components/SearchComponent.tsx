"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import searchLogo from "../../../public/images/icon-search.svg";
import styles from "./SearchComponent.module.css";
import Image from "next/image";
interface Props {
  word: string;
  setWord: Dispatch<SetStateAction<string>>;
}
const SearchComponent = (props: Props) => {
  const { word, setWord } = props;
  const [tempWord, setTempWord] = useState<string>("");
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search"
        onChange={(e) => {
          setTempWord(e.target.value);
        }}
      />
      <span className={styles.searchIcon}>
        <Image
          src={searchLogo}
          alt="Search"
          onClick={() => {
            setWord(tempWord);
          }}
        />
      </span>
    </div>
  );
};

export default SearchComponent;
