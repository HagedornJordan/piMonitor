//import ToolCard from "./toolCard";
//import axiosInstance from "../helpers/axios";
import React, { useState } from 'react';


const sp = ",  "

const RefreshButton = (props) => {
  const [items, setItems] = useState(0);

  const getResults = async () => {
    const res = await fetch("http://192.168.86.25:8080/api/airQuality");
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
                      <li> {item.date + sp + item.temperature + sp + item.pressure + sp +item.humidity + sp + item.gas + "ohm"} </li>
                    ))
                }
            </ul>
      </div>
    </div>
  );
};

export default RefreshButton;
