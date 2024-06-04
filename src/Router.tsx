import { Routes, Route } from "react-router-dom"
import { DashboardPage } from "./pages/Dashboard/Dashboard"
import { LoginPage } from "./pages/Login/Login"
import { RegisterPage } from "./pages/Register/Register"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='*' element={<LoginPage />} />
            <Route path='/' element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    )
}