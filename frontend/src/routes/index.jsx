import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '../pages/home.jsx'
import NotFound from '../pages/404'
import Cart from '../pages/cart'
import Payment from '../pages/payment'

// Malika's Routes
import AddCourses from '../pages/AddCourses'
import DisplayCourses from '../pages/DisplayCourses'
import InstructorDash from '../pages/instructorDash/InstructorDash'
import InstructorUpdate from '../pages/instructorDash/UpdateInstructor'
import InstructorCourses from '../pages/instructorDash/InstructorCourses'
import EmpRegister from '../pages/register/empregister'
import Emplogin from '../pages/login/emplogin'

import Addreview from '../pages/addreview'
import Login from '../pages/login/loginselect'
import Cuslogin from '../pages/login/cuslogin'
import Adminlogin from '../pages/login/adminlogin'
import Register from '../pages/register/regselect'
import CusRegister from '../pages/register/cusregister'
import CusDash from '../pages/cusdash/dash'
import CusUpdate from '../pages/cusdash/cusupdate'
import CusDanger from '../pages/cusdash/cusdanger'
import AdminDash from '../pages/admindash/dash'
import AdminDashboard from '../pages/AdminDashboard'
import MyProfile from '../pages/userProfile/MyProfile'
import CourseView from '../pages/courseView.jsx'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/AddCourses" element={<AddCourses />} /> 
        <Route path="/DisplayCourses" element={<DisplayCourses />} /> 
        <Route path="/addreview/:id" element={<Addreview />} /> 


        {/* Login Selection */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/cuslogin" element={<Cuslogin />} />
        <Route path="/login/emplogin" element={<Emplogin />} />
        <Route path="/login/adminlogin" element={<Adminlogin />} />

        {/* Register Selection */}
        <Route path="/register" element={<Register />} />
        <Route path="/register/cusregister" element={<CusRegister />} />
        <Route path="/register/empregister" element={<EmpRegister />} />

        {/* Seller Dashboard */}
        <Route path="/empdash" element={<EmpDash />} />
        <Route path="/empdash/empupdate/:id" element={<EmpUpdate />} />
        <Route path="/empdash/empdanger/:id" element={<EmpDanger />} />

					{/* Instructor Dashboard */}
					<Route path="/instructorDash" element={<InstructorDash />} />
          <Route path="/instructorUpdate" element={<InstructorUpdate />} />
          <Route path="/instructorCourses" element={<InstructorCourses />} />
          
					{/* Customer Dashboard */}
					<Route path="/cusdash" element={<CusDash />} />
					<Route path="/cusdash/cusupdate/:id" element={<CusUpdate />} />
					<Route path="/cusdash/cusdanger" element={<CusDanger />} />
          
					{/* Admin Dashboard */}
					<Route path="/admindash" element={<AdminDash />} />
          <Route path='/admin' element={<AdminDashboard/>}/>


        <Route path="/myprofile/:id" element={<MyProfile />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
