import { Avatar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import "./header.css"
import { useStateValue } from './StateProvider'



function Header() {
    const [{user},dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className="header_left">
                <Search />
                <input type="text" placeholder="Search for Artists, Songs" />
            </div>
            <div className="header_right">
                <Avatar  src={user?.images[0].url} />
                <h4>{user?.display_name}</h4>
            </div>



        </div>
    )
}

export default Header
