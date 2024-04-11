import React, {useState, useEffect } from "react";
import "./Style.css";

export default function TableEffect() {
  const [TableData, setTableData] = useState([]);
  
  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(()=>{
    fetch(URL)
    .then((res)=>{
      return res.json()
    })
    .then(datas => {
      // console.log(datas[0])
      // console.log(datas[1])
      setTableData(datas);
    })
  },[])
  console.log(TableData);
  return (
    <div className="w-[95%] overflow-x-auto mx-auto my-10">
      <table className="table-auto m-auto w-full border-collapse text-roboto">
        <caption className="caption-top mb-6 text-blue-900  font-bold text-3xl">
          User Information
        </caption>
        <thead className="text-sm sm:text-xl">
          <tr>
            <th className="border border-blue-900">ID</th>
            <th className="border border-blue-900">Name</th>
            <th className="border border-blue-900">Email</th>
            <th className="border border-blue-900">City</th>
            <th className="border border-blue-900 ">Phone</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-xl overflow-hidden">
        {TableData.map((TableInfo,ind, arr) => {
            return (
              <tr key={ind} className="hover:border-[0.6rem] transition-all">
                <td className="border border-blue-900">#{TableInfo.id}</td>
                <td className="border border-blue-900">{TableInfo.name}</td>
                <td className="border border-blue-900">
                  <a href="mailto:jayan@gmail.com">{TableInfo.email}</a>
                </td>
                <td className="border border-blue-900">
                  {TableInfo.address.city}
                </td>
                <td className="border border-blue-900">
                  <a href="tel:7435963476">{TableInfo.phone}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
