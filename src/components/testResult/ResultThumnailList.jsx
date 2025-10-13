import { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link } from "react-router-dom";

export default function ResultThumnailList({ testParam }) {
  const [testList, setTestList] = useState(TESTS);
  return (
    <div>
      {testList
        .filter((test) => test?.info?.mainUrl != testParam)
        .map((item) => (
          <Link to={`/${item?.info?.mainUrl}`} key={`/${item?.info?.mainUrl}`}>
            <img
              src={item?.info?.thumbImage}
              alt={item?.info?.mainTitle}
              style={{ width: "100%" }}
            />
          </Link>
        ))}
    </div>
  );
}
