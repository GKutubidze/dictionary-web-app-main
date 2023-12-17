"use client";

import styles from "./page.module.css";
import Header from "./components/Layout/Header";
import SearchComponent from "./components/SearchComponent";
import InfoComponent from "./components/InfoComponent";
import { useEffect, useState } from "react";
import { Open_Sans, Roboto_Mono, Roboto_Serif } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import NotFoundComponent from "./components/NotFoundComponent";

const openSans = Open_Sans({ subsets: ["latin"] });
const mono = Roboto_Mono({ subsets: ["latin"] });
const serif = Roboto_Serif({ subsets: ["latin"] });

export default function Home() {
  const [font, setFont] = useState<NextFont>(openSans);
  const [word, setWord] = useState<string>("");
  const [fontNumber, setFontNumber] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isFound, setIsFound] = useState<boolean>(true);
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    if (fontNumber === 0) {
      setFont(openSans);
    } else if (fontNumber === 1) {
      setFont(mono);
    } else if (fontNumber === 2) {
      setFont(serif);
    }
  }, [fontNumber]);

  return (
    <main
      className={`${styles.main} ${font.className} ${
        isDark ? styles.whiteBackground : styles.blackBackground
      }`}
    >
      {isFound ? (
        <>
          <Header
            setFontNumber={setFontNumber}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isDark={isDark}
            setIsDark={setIsDark}
          />
          <SearchComponent word={word} setWord={setWord} />
          <InfoComponent
            word={word}
            setWord={setWord}
            isFound={isFound}
            setIsFound={setIsFound}
            isDark={isDark}
          />
        </>
      ) : (
        <>
          <Header
            setFontNumber={setFontNumber}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isDark={isDark}
            setIsDark={setIsDark}
          />
          <SearchComponent word={word} setWord={setWord} />
          <NotFoundComponent />
        </>
      )}
    </main>
  );
}
