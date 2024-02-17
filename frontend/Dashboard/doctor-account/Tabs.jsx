import {useContext} from "react"
import {BiMenu} from "react-icons/bi"
import { authContext } from "../../src/context/AuthContext"
import { useNavigate } from "react-router-dom"
const Tabs=({tab, setTab})=>{
    const navigate = useNavigate()
    const {dispatch} = useContext(authContext)
    const handleLogout = ()=>{
        dispatch({type: 'LOGOUT'})
        navigate('/')
    }

    return <div>
        {/* <span className="lg:hidden">
            <BiMenu className="w-6 h-6 cursor-pointer" />
        </span> */}
        <div className=" lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
            <button onClick={()=>setTab('overview')} className={`${tab==='overview' ? "bg-purpleColor text-primaryColor" : "bg-transparent text-headingColor"} w-full btn mt-0 rounded-md text-textColor`}>Overview</button>
            <button onClick={()=>setTab('appointments')} className={`${tab==='appointments' ? "bg-purpleColor text-primaryColor" : "bg-transparent text-headingColor"} w-full btn mt-0 rounded-md text-textColor`}>Appointments</button>
            <button onClick={()=>setTab('settings')} className={`${tab==='settings' ? "bg-purpleColor text-primaryColor" : "bg-transparent text-headingColor"} w-full btn mt-0 rounded-md text-textColor`}>Settings</button>
            
            <div className="mt-[100px] w-full">
                        <button onClick={handleLogout} className='w-full bg-primaryColor p-3 rounded-md' >Logout</button>
                        <button className="w-full bg-yellowColor mt-4 p-3 rounded-md">Delete account</button>
                    </div>
        </div>
</div>
}
export default Tabs