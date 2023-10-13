import React from 'react'
import { Route, Routes } from "react-router-dom"
import ContactPage from '../pages/ContactPage/ContactPage'
import HomePage from "../pages/HomePage/HomePage"
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutme" element={<ProfilePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    )
}

export default AppRoutes