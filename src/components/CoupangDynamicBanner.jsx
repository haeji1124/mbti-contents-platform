import React from "react";

export default function CoupangDynamicBanner({ unit }) {
  const unitMapper = {
    introBanner:
      "https://ads-partners.coupang.com/widgets.html?id=941813&template=carousel&trackingCode=AF8998851&subId=&width=680&height=140&tsource=",
    resultBanner:
      "https://ads-partners.coupang.com/widgets.html?id=941813&template=carousel&trackingCode=AF8998851&subId=&width=680&height=140&tsource=",
  };

  return (
    <div>
      <iframe
        src={unitMapper[unit]}
        width="680"
        height="140"
        frameBorder="0"
        scrolling="no"
        referrerPolicy="unsafe-url"
      ></iframe>
    </div>
  );
}
