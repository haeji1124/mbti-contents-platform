import React, { useEffect, useState } from "react";
import AffiliateButton from "../AffiliateButton";
import styles from "../AffiliateButton.module.css";
import Cookies from "js-cookie";

export default function TestResultRenderer({ renderResultInfo }) {
  const [isOpened, setIsOpened] = useState(false);
  const [affiliateCookie, setAffiliateCookie] = useState(
    Cookies.get("affiliate")
  );
  console.log(isOpened);

  useEffect(() => {
    setAffiliateCookie(Cookies.get("affiliate"));
  }, []);

  return (
    <div>
      <h3>결과는...</h3>
      <div
        className={styles.resultImageDiv}
        style={{ height: isOpened || affiliateCookie ? "100%" : "15rem" }}
      >
        <img
          style={{ width: "100%" }}
          src={renderResultInfo?.img_src}
          alt={renderResultInfo?.type}
        />
      </div>
      {!(isOpened || affiliateCookie) && (
        <AffiliateButton setIsOpened={setIsOpened} />
      )}
    </div>
  );
}
