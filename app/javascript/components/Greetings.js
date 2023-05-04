import React, { useEffect, useState } from "react";
import axios from "axios";
const Greetings = () => {
  const [data, setData] = useState([]); // 1
  const fetchData = async () => {
    const result = await axios.get("http://localhost:3000/greetings");
    setData(result.data);
  };
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Greetings</h1>
      <ul>
        {data.map((
          item // 2
        ) =>
          <li key={item.id}>
            {item.message}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Greetings;
