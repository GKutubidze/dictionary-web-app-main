import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./InfoComponent.module.css";
import dictionaryApi from "../api/dictonaryApi";
import playlogo from "../../../public/images/icon-play.svg";
import Image from "next/image";
interface Props {
  word: string;
  setWord: Dispatch<SetStateAction<string>>;
  isFound: boolean;
  setIsFound: Dispatch<SetStateAction<boolean>>;
  isDark: boolean;
}

const InfoComponent = (props: Props) => {
  const [data, setData] = useState<any>(null);
  const { word, setWord, isFound, setIsFound, isDark } = props;
  useEffect(() => {
    const fetchData = async () => {
      if (word) {
        try {
          const result = await dictionaryApi(word);
          setData(result);
          setIsFound(true);
        } catch (error) {
          // Handle errors here, e.g., display an error message to the user
          setIsFound(false);
          console.error("Failed to fetch data from the API", error);
        }
      }
    };

    fetchData();
  }, [word]);

   const audioURL = data?.[0]?.phonetics[1]?.audio;
  const playAudio = () => {
    if (audioURL) {
      const audio = new Audio(audioURL);
      audio.addEventListener("error", (e) => {
        console.error("Audio error", e);
      });
      audio.play().catch((error) => {
        console.error("Failed to play audio", error);
      });
    }
  };
  const definitions = data?.[0].meanings?.[0].definitions;

  return (
    <div className={styles.infoContainer}>
      <div className={styles.wordContainer}>
        <div className={styles.word}>
          <span className={styles.wordSpan}>{data?.[0]?.word}</span>
          <span className={styles.textSpan}>
            {data?.[0]?.phonetics[1]?.text}
          </span>
        </div>
        <div className={styles.phonetic}>
          <Image
            src={playlogo}
            alt=""
            className={styles.PlayImg}
            onClick={playAudio}
          />
        </div>
      </div>
      <div className={styles.partOfSpeech}>
        <div
          className={` ${
            isDark ? styles.whiteBackground : styles.blackBackground
          }`}
        >
          {data?.[0]?.meanings[0]?.partOfSpeech}
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.meaning}>
        <div>
          <p className={styles.meaningContant}>Meaning</p>
        </div>
        <div className={styles.wordMeaning}>
          <ul className={styles.list}>
            {definitions?.map(
              (
                definition: {
                  definition:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | React.PromiseLikeOfReactNode
                    | null
                    | undefined;
                },
                index: React.Key | null | undefined
              ) => (
                <li key={index}>{definition.definition}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
