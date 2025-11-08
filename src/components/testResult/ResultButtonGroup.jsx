import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { base_url } from "../../App";
import { LinkOutlined, RedoOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./resultButtonGroup.module.css";
import { eventSenderGA } from "../../tools/tools";
export default function ResultButtonGroup({
  testParam,
  resultParam,
  renderTestInfo,
}) {
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopy = () => {
    const success = copy(`${base_url}/${testParam}/result/${resultParam}`);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      alert("URL이 복사되었습니다.");
      eventSenderGA("Copy", "Copy Url Button", "Result");
    }
  };

  const onClickRedoButton = () => {
    navigate(`/${testParam}`);
    eventSenderGA("Copy", "Copy Re-Do Button", "Result");
  };

  const onClickGoHomeButton = () => {
    navigate("/");
    eventSenderGA("Copy", "Copy Go-Home Button", "Result");
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.upperDiv}>
        <button className={styles.upperButton} onClick={handleCopy}>
          <LinkOutlined />
          &nbsp;링크 복사
        </button>
        <button className={styles.upperButton} onClick={onClickRedoButton}>
          <RedoOutlined />
          &nbsp;다시 하기
        </button>
      </div>
      <div className={styles.bottomDiv}>
        <button className={styles.bottomButton} onClick={onClickGoHomeButton}>
          <HomeOutlined />
          &nbsp;다른 테스트 하러 가기
        </button>
      </div>
    </div>
  );
}
