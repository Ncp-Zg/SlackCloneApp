import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExitToApp,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import db, { auth } from "./firebase";
import { actionTypes } from "./reducer";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [{user},dispatch]=useStateValue()

  useEffect(() => {
    //run this code when the sidebar compoennt load
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  const logout = ()=>{
    auth.signOut();
    dispatch({
      type:actionTypes.RESET_USER
    })
  }

  return (
    
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>user</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      <div className="sidebar_logout" onClick={logout}><ExitToApp/> &nbsp; Logout</div>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & Reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SidebarOption Icon={PeopleAlt} title="People & User groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      
      <div className="sidebar_channels">
        <SidebarOption Icon={Add} addChannelOption={true} title="Add Channel" />

      {/* Connetc to dB and list all the cahnnels */}
      {/* <SidebarOption ... /> */}
      {channels.map((channel) => (
        <SidebarOption key={channel.id} title={channel.name} id={channel.id} />
      ))}
    </div>
    
      </div>
      
  );
};

export default Sidebar;
