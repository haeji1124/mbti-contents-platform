import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/loading-animation.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loading({ mbtiScore, currentTest }) {
  const navigate = useNavigate();
  const [finalQuery, setFinalQuery] = useState("");
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const mbtiPairs = [
      ["E", "I"],
      ["N", "S"],
      ["T", "F"],
      ["J", "P"],
    ];

    let resultType = "";

    console.log(currentTest);
    console.log(mbtiScore);
    for (let pair of mbtiPairs) {
      let firstType = pair[0];
      let secondType = pair[1];
      let firstTypeScore = mbtiScore[firstType];
      let secondTypeScore = mbtiScore[secondType];

      firstTypeScore > secondTypeScore
        ? (resultType += firstType)
        : (resultType += secondType);
    }

    console.log(resultType);
    const resultQuery = currentTest?.results?.find(
      (result) => result?.type === resultType
    )?.query;

    setFinalQuery(resultQuery);
  }, [mbtiScore, currentTest]);

  const loadingTime = 3700;
  useEffect(() => {
    let timeout = setTimeout(() => {
      finalQuery &&
        navigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
    }, loadingTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [loadingTime, navigate, finalQuery, currentTest?.info?.mainUrl]);
  return <Lottie options={defaultOption} style={{ marginTop: "10rem" }} />;
}
