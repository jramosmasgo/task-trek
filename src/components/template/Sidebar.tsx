import React from 'react'
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa'
import { GoTasklist } from 'react-icons/go'
import { MdDashboard } from 'react-icons/md'

const Sidebar: React.FC = () => {
    return (
        <div className='sidebar bg-background'>
            <div className="sidebar-header">
                <div className='sidebar-header_details'>
                    <img src="https://media.istockphoto.com/id/1303877287/vector/paper-checklist-and-pencil-flat-pictogram.jpg?s=612x612&w=0&k=20&c=NoqPzn94VH2Pm7epxF8P5rCcScMEAiGQ8Hv_b2ZwRjY=" alt="" />
                    <div className="sidebar-header_details-name">
                        <h3 >To do App</h3>
                        <span className='color-primary'>Project Name</span>
                    </div>
                </div>
                <FaChevronRight className='color-text' />
            </div>
            <div className="sidebar-menu">
                <div className='sidebar-menu_item  sidebar-menu_item-active'>
                    <MdDashboard />
                    <p>Overview</p>
                </div>
                <div className='sidebar-menu_item'>
                    <GoTasklist />
                    <p>Tasks</p>
                </div>
                <div className='sidebar-menu_item'>
                    <FaCalendarAlt />
                    <p>Calendar</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar