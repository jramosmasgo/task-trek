import { Header, Sidebar } from '@/components/template'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserTemplate: React.FC = () => {
    return (
        <div className='template'>
            <Header />
            <div className='template-container'>
                <Sidebar />
                <div className="template-container_pages">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserTemplate