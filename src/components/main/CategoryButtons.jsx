import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./CategoryButtons.module.css";

export default function CategoryButtons() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState("kor");

  useEffect(() => {
    const currentLang = searchParams.get("lang") || "kor";
    setLanguage(currentLang);
  }, [searchParams]);

  const onCategoryButtonClick = (category) => {
    if (category === "all") {
      navigate(`/?lang=${language}`);
    } else if (category === "love" || category === "characteristic") {
      navigate(`/?lang=${language}&cat=${category}`);
    } else {
      alert("잘못된 카테고리입니다.");
      navigate(`/?lang=${language}`);
    }
  };

  return (
    <>
      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("all")}
      >
        전체
      </button>
      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("love")}
      >
        연애
      </button>
      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("characteristic")}
      >
        성격
      </button>
    </>
  );
}
