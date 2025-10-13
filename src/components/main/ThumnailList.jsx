import { useState, useEffect } from "react";
import { TESTS } from "../../data/TESTS";
import { Link, useSearchParams } from "react-router-dom";
import { base_url } from "../../App";

export default function ThumnailList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [testList, setTestList] = useState(TESTS);

  useEffect(() => {
    const currentLanguage = searchParams.get("lang") || "kor";
    const normalizedLanguage =
      currentLanguage.charAt(0).toUpperCase() +
      currentLanguage.slice(1).toLowerCase();
    // "jp"인 경우 "JP"로 변환
    const finalLanguage =
      normalizedLanguage === "Jp" ? "JP" : normalizedLanguage;

    const currentCategory = searchParams.get("cat");

    if (currentCategory) {
      const filteredTests = TESTS.filter(
        (test) =>
          test?.info?.lang === finalLanguage &&
          test?.info?.category === currentCategory
      );
      setTestList(filteredTests);
    } else {
      const filteredTests = TESTS.filter(
        (test) => test?.info?.lang === finalLanguage
      );
      setTestList(filteredTests);
    }
  }, [searchParams]);

  return (
    <>
      {testList?.map((test) => (
        <Link
          to={`${base_url}/${test?.info?.mainUrl}`}
          key={test?.info?.mainUrl}
        >
          <img
            src={test?.info?.thumbImage}
            alt={test?.info?.mainUrl}
            style={{ width: "100%" }}
          />
        </Link>
      ))}
    </>
  );
}
