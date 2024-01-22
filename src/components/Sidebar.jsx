import React, { useEffect, useState } from "react";
import Piechart from "./Piechart";
import Header from "./Header";
import Graph from "./Graph";
import Table from "./Table";
import ProfileCard from "./ProfileCard";
import Pagination from "./Pagination";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

const Sidebar = () => {
  const [tableData, setTableData] = useState({});
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "No of users",
        data: [],
        backgroundColor: "blue",
        borderColor: "rgb(37, 150, 190)",
        borderWidth: 2,
      },
    ],
  });

  const [userDataPie, setUserDataPie] = useState({
    labels: [],
    datasets: [
      {
        label: "No of users",
        data: [],
        backgroundColor: [
          "#24c373",
          "#b9efd4",
          "#7edcad",
          "#78cfa4",
          "#71d2a2",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pieChartDataResponse = await axios.get(`${BASE_URL}/pie-chart`);
        const graphDataResponse = await axios.get(`${BASE_URL}/graph`);
        const tableDataResponse = await axios.get(`${BASE_URL}/table`);
        setTableData(tableDataResponse);

        setUserData({
          labels: graphDataResponse.data.map((data) => data.x),
          datasets: [
            {
              label: "No of users",
              data: graphDataResponse.data.map((data) => data.y),
              backgroundColor: "blue",
              borderColor: "rgb(37, 150, 190)",
              borderWidth: 2,
            },
          ],
        });

        setUserDataPie({
          labels: pieChartDataResponse.data.map((data) => data.label),
          datasets: [
            {
              label: "No of users",
              data: pieChartDataResponse.data.map((data) => data.value),
              backgroundColor: [
                "#24c373",
                "#b9efd4",
                "#7edcad",
                "#78cfa4",
                "#71d2a2",
              ],
              borderColor: "white",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-24 relative" : "w-64 relative"
        } duration-300  h-auto bg-dark-blue }`}
      >
        <div className="flex flex-col w-[50%] m-auto h-48">
          <img src="/Assets/Briefcase.png" alt="" width={100} height={100} />
          <img src="/Assets/StatBoard.png" alt="" width={100} height={100} />
        </div>
        <div className="absolute right-0 top-10">
          <img
            onClick={() => setOpen(!open)}
            src="/Assets/arrow.png"
            alt=""
            width={25}
            height={25}
            className={`cursor-pointer rounded-full  bg-slate-100 ${
              open && "rotate-180"
            }`}
          />
        </div>
        <div className="nav_tabs grid place-items-center mt-10 absolute right-0">
          <ul className="space-y-5">
            <li className="active flex gap-3">
              <img src="/Assets/Circled Menu.png" alt="" />
              <h6>Dashboard</h6>
            </li>
            <li className="text-white flex gap-3">
              {" "}
              <img src="/Assets/Support.png" alt="" />
              Support
            </li>
            <li className="text-white flex gap-3">
              {" "}
              <img src="/Assets/Puzzle.png" alt="" />
              Plugins
            </li>
            <li className="text-white flex gap-3">
              {" "}
              <img src="/Assets/Help.png" alt="" />
              Help
            </li>
          </ul>
        </div>
        <div className="absolute  bottom-0 text-red-500 text-center bg-white w-full px-3 py-2">
          <div className="flex justify-center">
            <button className="flex gap-2">
              <h6>logout</h6>
              <img src="/Assets/Shutdown.png" alt="" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="table_charts">
        <div className="container">
          <Header />
          <div className="flex sm:flex-row flex-col gap-5 mt-2">
            <Graph pieData={userData} />
            <Piechart pieData={userDataPie} />
          </div>
          <div className="flex sm:flex-row flex-col gap-3 mt-3 ">
            <Table tableData={tableData} />
            <ProfileCard />
          </div>

          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
