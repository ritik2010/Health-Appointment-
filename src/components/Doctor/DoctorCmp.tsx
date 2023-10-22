import { Outlet } from "react-router-dom";
import Header from "../../common/Header";
import { HeaderLinkType } from "../../common/commonType";

const DoctorComponent =()=>{
    const doctorLinks:HeaderLinkType[]=[
        {
            btPath:"/doctor",
            btName:'Profile',
            btType:"bt-success"
        },
        {
            btPath:'/doctor/setAppointment',
            btName:'Set Appointment',
            btType:"bt-success"
        },
        {
            btPath:'/doctor/appointment',
            btName:'Appointment',
            btType:"bt-success"
        },
    ]
    return(
        <div>
            Doctor
            <Header headerLink={doctorLinks}/>
            <Outlet/>
        </div>
    )
}

export default DoctorComponent;