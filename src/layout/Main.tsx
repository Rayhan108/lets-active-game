import MainHeader from "@/ui-components/MainHeader/MainHeader";
import { Sidebar } from "@/ui-components/Sidebar/Sidebar";

import { useState } from "react";

import { Outlet } from "react-router-dom";


const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
        <div className=" h-[100%] text-white">
     <div>
  
            <MainHeader toggleSidebar={toggleSidebar} />
     </div>
      {/* Main Content */}
      <div className="flex  overflow-hidden min-h-screen w-[100%]">
       {/* Sidebar  */}
    <div className="w-[20%]">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>

          <div className="w-[100%] overflow-x-hidden overflow-y-auto   bg-[#F4F5F9]">
          <Outlet></Outlet>
        </div>
  
      </div>
    </div>
  );
};

export default Main;
