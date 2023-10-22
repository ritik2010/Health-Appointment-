import {createBrowserRouter}from 'react-router-dom'
import Admin from '../components/Admin/Admin';
import UserProfile from '../components/User/UserProfile/UserProfile';
import UserBookAppointment from '../components/User/UserBookAppointment/UserBookAppointment';
import DoctorProfile from '../components/Doctor/DoctorProfile/DoctorProfile';
import DoctorSetOppointment from '../components/Doctor/DoctorSetAppointment/DoctorSetAppointment';
import DoctorAppointment from '../components/Doctor/DoctorAppointment/DoctorAppointment';
import Login from '../components/Auth/Login';
import DoctorComponent from '../components/Doctor/DoctorCmp';
import UserComponent from '../components/User/UserComponent';

const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path:'/user',
      element:<UserComponent/>,
      children:[
        {
          path:'/user',
          element:<UserProfile/>
        },
        {
          path:'/user/bookAppointment',
          element:<UserBookAppointment/>
        },
        {
          path:'/user/appointment',
          element:<UserProfile/>
        }
        ]
     },
     {
      path:'/doctor',
      element:<DoctorComponent/>,
      children:[
        {
          path:'/doctor',
          element:<DoctorProfile/>
        },
        {
          path:'/doctor/setAppointment',
          element:<DoctorSetOppointment/>
        },
        {
          path:'/doctor/appointment',
          element:<DoctorAppointment/>
        }
      ]
      },
      {
        path:'/',
        element:<Admin/>
      },
  ]);
 
  export default mainRouter;