import React from "react";
import UserDropdown from "../UserDropdown/UserDropdown";

const Header = () => {
    return (
        <nav className="bg-blue-500 py-2 grid grid-cols-1">
            <div className="text-right my-auto mx-8">
                <UserDropdown/>
            </div>
        </nav>
    )
}

export default Header