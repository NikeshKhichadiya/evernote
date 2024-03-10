import Home from "../../Pages/Home";
import Sidebar from "../Components/Sidebar";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const Layout = () => {

    return (
        <div className="grid grid-cols-5">

            <div>
                <Sidebar />
            </div>

            <div className="col-span-4">

                <Router>

                    <Routes>

                        <Route path="/home/:id" element={<Home />} />

                        <Route path="*" element={<Navigate replace to="/home" />} />

                    </Routes>

                </Router>

                <Home />

            </div>

        </div>
    )

}

export default Layout;