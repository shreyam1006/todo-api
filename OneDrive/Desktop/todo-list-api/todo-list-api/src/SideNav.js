import React, { useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useHistory } from "react-router";

const SideNav = () => {

  const history=useHistory()
  const [accessToken,setAccessToken]= useState('')
  useEffect(()=>{
    const loginInfo= JSON.parse(localStorage.getItem('login-info'))
    localStorage.setItem('token',loginInfo.token)
    setAccessToken(loginInfo.token)
  },[])

  const bearer='Bearer ' + accessToken
  const logout=async()=>{
    await fetch('https://api-nodejs-todolist.herokuapp.com/user/logout',{
      method:"POST",
      headers:{
        'Authorization': bearer
      }
    }).then(res=>{return res.json})
    localStorage.removeItem('login-info')
    localStorage.removeItem('token')
    history.push('/login')
  }
  return (
    <nav className="navcontainer">
      <h3>.studio</h3>
      <div className="set">
        <div className="navoption">
          <HomeOutlinedIcon fontSize="small" />
          <h5>Overview</h5>
        </div>
        <div className="navoption">
          <BarChartOutlinedIcon fontSize="small" />
          <h5>Stats</h5>
        </div>
        <div className="navoption">
          <FolderOpenOutlinedIcon fontSize="small" />
          <h5>Projects</h5>
        </div>
        <div className="navoption">
          <TextsmsOutlinedIcon fontSize="small" />
          <h5>Chat</h5>
        </div>
        <div className="navoption">
          <InsertInvitationOutlinedIcon fontSize="small" />
          <h5>Calendar</h5>
        </div>
      </div>
      <div className="set">
        <div className="navoption">
          <SettingsOutlinedIcon fontSize="small" />
          <h5>Settings</h5>
        </div>
        <div className="navoption">
          <LogoutOutlinedIcon fontSize="small" />
          <h5 onClick={logout}>Logout</h5>
        </div>
      </div>
    </nav>
  );
};
export default SideNav;
