import React from 'react'
import { CiBellOn, CiSettings } from 'react-icons/ci'
import { FaChevronDown } from 'react-icons/fa'
import { GrTask } from 'react-icons/gr'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdOutlineAddBox } from 'react-icons/md'
import { PiGridFourThin } from 'react-icons/pi'

const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className='header-title v-center'>
                <div className="header-title_logo space-between">
                    <GrTask />
                    <h3>TaskTrek</h3>
                </div>
                <div className="header-title_menu v-center">
                    <div className="menu-item v-center">
                        <p>My Projects</p>
                        <FaChevronDown />
                    </div>
                    <div className="menu-item v-center">
                        <p>Collaborators</p>
                        <FaChevronDown />
                    </div>
                </div>
                <button className='btn-primary-icon button-add'>
                    <MdOutlineAddBox size={20} />
                    New Project
                </button>
            </div>
            <div className='header-menu v-center'>
                <div className='header-menu_icons v-center'>
                    <PiGridFourThin className='color-text' size={20} />
                    <CiSettings className='color-text' size={20} />
                    <CiBellOn className='color-text' size={20} />
                </div>
                <div className="header-menu_user v-center">
                    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
                    <IoMdArrowDropdown className='color-text' size={20} />
                </div>

            </div>
        </div>
    )
}

export default Header