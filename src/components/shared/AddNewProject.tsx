import React from 'react'

const AddNewProject: React.FC = () => {
    return (
        <div className='form' style={{ width: "300px" }}>
            <div className="form-control">
                <label htmlFor="">Title</label>
                <input type="text" placeholder='Input a project name...' />
            </div>
            <div className="form-control">
                <label htmlFor="">Description</label>
                <input type="text" placeholder='Describe your project...' />
            </div>
            <div className="form-control">
                <label htmlFor="">DeadLine</label>
                <input type="date" placeholder='' />
            </div>
            <div className="form-control">
                <label htmlFor="">Members</label>
                <input type="text" placeholder='Input a email member...' />
            </div>
        </div>
    )
}

export default AddNewProject