import { Header, Sidebar } from '@/components/template'
import React from 'react'

const UserTemplate: React.FC = () => {
    return (
        <div className='template'>
            <Header />
            <div className='template-container'>
                <Sidebar />
                <div className="template-container_pages">

                </div>
            </div>
        </div>
    )
}

export default UserTemplate