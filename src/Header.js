import React from 'react'
import "./Header.css"
import {Avatar} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import { AccessTimeOutlined, HelpOutline } from '@material-ui/icons'
import { useStateValue } from './StateProvider'
const Header = () => {

    const [{user},dispatch] =useStateValue()
    return (
        <div className="header">
            <div className="header_left">
                <Avatar
                    className="header_avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeOutlined/>
            {/* Avatars for logged in user */}
            {/* time icon */}
            </div>
            <div className="header_search">
                <SearchIcon />
                <input placeholder="Search"/>
                {/* search icon */}
                {/* input */}

            </div>
            <div className="header_right">
                <HelpOutline/>
                {/* help icon */}
            </div>
        </div>
    )
}

export default Header
