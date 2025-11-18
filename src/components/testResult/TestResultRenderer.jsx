import React, { useState } from "react";
import AffiliateButton from "../AffiliateButton";
import styles from "../AffiliateButton.module.css";

export default function TestResultRenderer({ renderResultInfo }) {
  const [isOpened, setIsOpened] = useState(false);
  console.log(isOpened);

  return (
    <div>
      <h3>결과는...</h3>
      <div
        className={styles.resultImageDiv}
        style={{ height: isOpened ? "100%" : "15rem" }}
      >
        <img
          style={{ width: "100%" }}
          src={renderResultInfo?.img_src}
          alt={renderResultInfo?.type}
        />
      </div>
      {!isOpened && <AffiliateButton setIsOpened={setIsOpened} />}
    </div>
  );
}
