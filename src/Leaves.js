import React, { useState} from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./App.css";
import dp1 from "./img/dp1.png";
import axios from "axios";

const Leaves = () => {
  const [Casualleaves, setCasualleaves] = useState(12);
  const [Medicalleaves, setMedicalleaves] = useState(7);
  const [Menstrualleaves, setMenstrualleaves] = useState(12);
  const [username, setUsername] = useState("");
  //const [Dateofjoining, setDateofjoining] = useState("");

  const getAPI = async () => {
    try {
      const result = await axios.get(
        `https://elonleavemanagement.onrender.com/staff/balanceleaves/${username}`
      );
      console.log(result.data);
      setCasualleaves(result.data.data.Casualleaves);
      setMedicalleaves(result.data.data.Medicalleaves);
      setMenstrualleaves(result.data.data.Menstrualleaves);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const currentDate = new Date();
  //   const dojDate = new Date(Dateofjoining);
  //   const monthsDiff =
  //     (currentDate.getFullYear() - dojDate.getFullYear()) * 12 +
  //     (currentDate.getMonth() - dojDate.getMonth());
  //   const newCasualLeave = clCount - monthsDiff;
  //   const newMedicalLeave = mlCount - monthsDiff;
  //   const newMenstrualLeave = menstrualCount - monthsDiff;
  //   setClCount(newCasualLeave);
  //   setMlCount(newMedicalLeave);
  //   setMenstrualCount(newMenstrualLeave);
  //   getAPI();
  // }, [Dateofjoining]);

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar>
            <Menu className="sidebar">
              <img src={dp1} width={200} height={150} alt="Background" />{" "}
              {/* Added alt attribute */}
              <h5 className="welcome"> Welcome {localStorage.getItem("Name")}</h5>
              <SubMenu label="Details">
                <MenuItem
                  className="sidebarsubmenu"
                  component={<Link to="/editstaffdetails" />}
                >
                  Edit Details
                </MenuItem>
                <MenuItem
                  className="sidebarsubmenu"
                  component={<Link to="/changepassword" />}
                >
                  Change Password
                </MenuItem>
              </SubMenu>
              <SubMenu label="Leave Details">
                <MenuItem
                  className="sidebarsubmenu"
                  component={<Link to="/leaveapply" />}
                >
                  Leave Apply
                </MenuItem>
                {/* <MenuItem
                  className="sidebarsubmenu"
                  component={<Link to="/leaves" />}
                >
                  Leaves
                </MenuItem> */}
                <MenuItem
                  className="sidebarsubmenu"
                  component={<Link to="/leavesreport" />}
                >
                  Leave Report
                </MenuItem>
              </SubMenu>
              <MenuItem component={<Link to="/stafflogout" />}>Logout</MenuItem>
            </Menu>
          </Sidebar>
          <div className="col py-3">
            <div className="p-1 d-flex justify-content-center border lmsheader">
              <h1 className="lmsheaderh1">Leave Details</h1>
            </div>
            <br></br><br></br>
              <table className="table table-stripped table table-bordered">
                <thead>
                  <tr>
                    <th scope="col"> Leaves </th>
                    <th scope="col"> Leaves You Taken </th>
                    <th scope="col"> pending Leaves </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> Casual Leave</td>
                    <td> {Casualleaves}</td> 
                    <td> {12 - Casualleaves}</td>
                  </tr>
                  <tr>
                    <td> Medical Leave</td>
                    <td> {Medicalleaves}</td> 
                    <td> {7 - Medicalleaves}</td>
                  </tr>
                  <tr>
                    <td> Menstrual Leave</td>
                    <td> {Menstrualleaves}</td> 
                    <td> {12 - Menstrualleaves}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Leaves;
