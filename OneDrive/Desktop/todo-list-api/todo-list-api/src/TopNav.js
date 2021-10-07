import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const TopNav = () => {
  // const [userInfo,setUserInfo]=useState()
  // useEffect(async()=>{
    
  //   const reponse=await setUserInfo(JSON.parse(localStorage.getItem('login-info')).user)
  //   console.log(reponse)
  // },[])
  return (
    <div className="topnavcontainer">
      <div className="topnavoptions">
        <div className="option"><SearchOutlinedIcon /></div>
        <div className="option"><input type="text" placeholder="Search" /></div>
      </div>
      <div className="topnavoptions">
        <HelpOutlineOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <select>
          <option value="name">{JSON.parse(localStorage.getItem('login-info')).user.name}</option>
          <option value="profile">Profile</option>
          <option value="settings">Settings</option>
          <option value="logout">Logout</option>
        </select>
        <AccountCircleOutlinedIcon/>
      </div>
    </div>
  );
};

export default TopNav;
