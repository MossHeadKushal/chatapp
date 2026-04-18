import SideBar from "../components/SideBar";
import ChatContainer from "../components/ChatContainer";

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden">
        <SideBar/>
    
    <div className="flex-1 flex flex-col overflow-hidden">
        <ChatContainer/>
    </div>
    </div>
  )
}

export default Home