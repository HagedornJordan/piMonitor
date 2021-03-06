//import ToolCard from "./toolCard";
//import axiosInstance from "../helpers/axios";
import React, { useState } from 'react';


const sp = ",  "

const RefreshButton = (props) => {
  const [items, setItems] = useState(0);

  const getResults = async () => {
    const res = await fetch("https://216.49.121.239:8000/api/airQuality");
    const data = await res.json();
    console.log(data.data);
    setItems(data);
    return data
}
return (
    <div>
      <div className="flex-1">
        <div className="flex justify-center">
          <button onClick={getResults} > Refresh </button>
        </div>
      </div>
      <div>
      <ul>
                {
                    items && items.data.map(item => (
                      <li key={item.date}> {item.date + sp + item.temperature + sp + item.pressure + sp +item.humidity + sp + item.gas + "ohm"} </li>
                    ))
                }
            </ul>
      </div>
    </div>
  );
};

export default RefreshButton;
