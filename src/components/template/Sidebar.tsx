import React from 'react'
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa'
import { GoTasklist } from 'react-icons/go'
import { MdDashboard } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const Sidebar: React.FC = () => {
    const { pathname } = useLocation();
    const linkActive = (route: string) => pathname === route ? 'sidebar-menu_item-active' : '';

    return (
        <div className='sidebar bg-background'>
            <div className="sidebar-header">
                <div className='sidebar-header_details'>
                    <img src="https://media.istockphoto.com/id/1303877287/vector/paper-checklist-and-pencil-flat-pictogram.jpg?s=612x612&w=0&k=20&c=NoqPzn94VH2Pm7epxF8P5rCcScMEAiGQ8Hv_b2ZwRjY=" alt="" />
                    <div className="sidebar-header_details-name">
                        <h3>To do App</h3>
                        <span className='color-primary'>Current Project</span>
                    </div>
                </div>
                <FaChevronRight className='color-text' />
            </div>
            <div className="sidebar-menu">
                <Link to="overview">
                    <div className={`sidebar-menu_item ${linkActive('/overview')}`}>
                        <MdDashboard />
                        <p>Overview</p>
                    </div>
                </Link>
                <Link to="tasks">
                    <div className={`sidebar-menu_item ${linkActive('/tasks')}`}>
                        <GoTasklist />
                        <p>Tasks</p>
                    </div>
                </Link>
                <Link to="calendar">
                    <div className={`sidebar-menu_item ${linkActive('/calendar')}`}>
                        <FaCalendarAlt />
                        <p>Calendar</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar