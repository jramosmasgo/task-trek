import React, { useState } from 'react'
import { IoMdAdd, IoMdClose } from 'react-icons/io';
import { TiThMenu } from 'react-icons/ti'

interface TasksListProps {
    title: string;
}

const TasksList: React.FC<TasksListProps> = ({ title }) => {
    const [addNewTask, setAddNewTask] = useState<boolean>(false);

    const openInputNewTask = () => {
        setAddNewTask(true)
    }

    const closeInputNewTask = () => {
        setAddNewTask(false)
    }

    return (
        <div className='task-list'>
            <div className="task-list_header">
                <TiThMenu />
                <h2>{title}</h2>
            </div>
            <div className="task-list_footer">
                {
                    addNewTask ?
                        <div className='task-list_footer-add' >
                            <input type="text" name="" id="" placeholder='Input a name for this task' />
                            <div>
                                <button className='btn-primary'>Add task</button>
                                <div onClick={() => closeInputNewTask()}>
                                    <IoMdClose className='pointer' />
                                </div>
                            </div>
                        </div> :
                        <button className='task-list_footer-button' onClick={() => openInputNewTask()}>
                            <IoMdAdd />
                            <p>Add New Task</p>
                        </button>
                }
            </div>
        </div>
    )
}

export default TasksList