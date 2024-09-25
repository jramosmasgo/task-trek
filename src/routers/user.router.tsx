import UserTemplate from '@/layouts/UserTemplate';
import Calendar from '@/pages/Calendar';
import Dashboard from '@/pages/Dashboard';
import { Project } from '@/pages/Project';
import Tasks from '@/pages/Tasks';
import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

const UserRouter: React.FC = () => {
    const userRoute = createBrowserRouter([
        {
            path: "/",
            element: <UserTemplate />,
            children: [
                {
                    path: "/",
                    element: <Navigate to="overview" />
                },
                {
                    path: "calendar",
                    element: <Calendar />

                },
                {
                    path: "overview",
                    element: <Dashboard />

                },
                {
                    path: "tasks",
                    element: <Tasks />
                },
                {
                    path: "project-details",
                    element: <Project />
                },
            ]
        },
    ]);


    return <RouterProvider router={userRoute} />
}

export default UserRouter