import { Outlet } from "react-router-dom";
// import Header from "../common/Header";

const MainComponent =()=>{
    return(
        <div className="m-5">
            {/* <h1>Main Component</h1> */}
            {/* <Header/> */}
            <Outlet/>
        </div>
    )
}

export default MainComponent;