import React, { useState} from "react";

const UserDropdown = () => {
    const [showDropdown, setDropdown] = useState<Boolean>(false);

    return(
        <>
            <div onClick={()=>setDropdown(!showDropdown)} className="shadow w-full">
                <div className="flex justify-center float-right space-x-3 cursor-pointer">
                    <div className="font-semibold text-white text-lg my-auto">
                        <div className="cursor-pointer">Hello, Jessica</div>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" className="w-full h-full object-cover"/>
                    </div>
                    {showDropdown && 
                        <div className="absolute w-48 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-14">
                            <ul className="space-y-3 dark:text-white">
                                <li className="font-medium">
                                    <a href="#" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                        <div className="mr-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>
                                        Settings
                                    </a>
                                </li>
                                <li className="font-medium">
                                    <a href="#" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                        <div className="mr-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </>
    )
  };
  
  export default UserDropdown;  