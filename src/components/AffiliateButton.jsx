import React from "react";
import styles from "./AffiliateButton.module.css";

export default function AffiliateButton({ setIsOpened }) {
  const onButtonClick = () => {
    setIsOpened(true);
  };
  return (
    <a href="https://www.naver.com" target="_blank" rel="noreferrer noopener">
      <div className={styles.coverDiv}>
        <button onClick={onButtonClick} className={styles.coverButton}>
          버튼 누르고 콘텐츠 보기
        </button>
      </div>
    </a>
  );
}
