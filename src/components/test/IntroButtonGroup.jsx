import React, { useState } from "react";
import { eventSenderGA } from "../../tools/tools";
import { LinkOutlined, HomeOutlined } from "@ant-design/icons";
import styles from "./intro.module.css";
import copy from "copy-to-clipboard";
import { base_url } from "../../App";
import { useNavigate } from "react-router-dom";

export default function IntroButtonGroup({ testParam }) {
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopy = () => {
    const success = copy(`${base_url}/${testParam}`);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      alert("URL이 복사되었습니다.");
      eventSenderGA("Copy", "Copy Url Button", "Intro");
    }
  };
  const onClickGoHomeButton = () => {
    navigate("/");
    eventSenderGA("Copy", "Copy Go-Home Button", "Intro");
  };
  return (
    <div>
      <div>
        <button className={styles.upperButton} onClick={handleCopy}>
          <LinkOutlined />
          &nbsp;링크 복사
        </button>
      </div>
      <div>
        <button className={styles.bottomButton} onClick={onClickGoHomeButton}>
          <HomeOutlined />
          &nbsp;다른 테스트 하러 가기
        </button>
      </div>
    </div>
  );
}
