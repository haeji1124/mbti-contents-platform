import React, { useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  XIcon,
} from "react-share";
import { base_url } from "../../App";
import styles from "./shareButtonGroup.module.css";

import copy from "copy-to-clipboard";

export default function ShareButtonGroup({
  testParam,
  resultParam,
  renderTestInfo,
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const success = copy(`${base_url}/${testParam}/result/${resultParam}`);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      alert("URL이 복사되었습니다.");
    }
  };

  return (
    <>
      <h3>친구에게 공유하기</h3>
      <div className={styles.shareButtonDiv}>
        <FacebookShareButton
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtag={`#${renderTestInfo?.info?.mainTitle}`}
          className={styles.socialMediaIcon}
        >
          <FacebookIcon round={true} size={48} />
        </FacebookShareButton>
        <TwitterShareButton
          title={renderTestInfo?.info.mainTitle}
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtags={[renderTestInfo?.info?.mainTitle]}
          className={styles.socialMediaIcon}
        >
          <XIcon round={true} size={48} />
        </TwitterShareButton>
        <button onClick={handleCopy} className={styles.urlShareButton}>
          URL
        </button>
      </div>
    </>
  );
}
