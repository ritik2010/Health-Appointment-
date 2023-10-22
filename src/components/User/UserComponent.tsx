import { Outlet } from "react-router-dom";
import Header from "../../common/Header";
import { HeaderLinkType } from "../../common/commonType";

const UserComponent =()=>{

    const doctorLink:HeaderLinkType[]=[
        {
            btPath:"/user",
            btName:'Profile',
            btType:"bt-success"
        },
        {
            btPath:'/user/bookAppointment',
            btName:'Book Appointment',
            btType:"bt-success"
        },
        {
            btPath:'/user/appointment',
            btName:'Appointment',
            btType:"bt-success"
        },
    ]
    return(
        <div>
            User
            <Header headerLink={doctorLink} />
            <Outlet/>
        </div>
    )
} 

export default UserComponent;