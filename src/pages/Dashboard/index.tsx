import TasksList from '@/components/shared/TasksList';
import React from 'react'

const Dashboard: React.FC = () => {
    return (
        <div className='dashboard'>
            <h2>Vista General  To do list</h2>
            <div className="dashboard-container ">
                <TasksList title='Tasks List' />
                <TasksList title='In process' />
                <TasksList title='Finished' />
            </div>
        </div>
    )
}

export default Dashboard;