import React, { useEffect, useRef } from "react";

export default function AdsenseUnit({ slot }) {
  const adLoaded = useRef(false);

  useEffect(() => {
    // 이미 로드되었거나 window가 없으면 return
    if (adLoaded.current || !window) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adLoaded.current = true;
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4730740449988520"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
