import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'

const SideMenu = () => {
    return(
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 px-6">
                <div className="md:flex-col md:items-stretch md:h-24 md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    <Link
                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        to="/"
                    >
                        <img src={Logo} alt="Gramedia Digital" />
                    </Link>
                </div>
                <hr className="my-4 md:min-w-full" />
                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                GRASINDO
                </h6>
                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    <li className="items-center">
                        <Link
                        className={
                            "text-xs uppercase py-3 font-bold block " +
                            (window.location.href.indexOf("/dashboard") !== -1
                            ? "text-white hover:text-white bg-blue-500 text-center rounded"
                            : "text-gray-700 hover:text-gray-500 text-center")
                        }
                        to="/dashboard"
                        >
                        Paket Grasindo Kelas 1
                        </Link>
                    </li>
                    <li className="items-center">
                        <Link
                        className={
                            "text-xs uppercase py-3 font-bold block " +
                            (window.location.href.indexOf("/dashboard/paket-2") !== -1
                            ? "text-blue-500 hover:text-blue-600 text-center rounded"
                            : "text-gray-700 hover:text-gray-500 text-center")
                        }
                        to="/admin/dashboard"
                        >
                        Paket Grasindo Kelas 2
                        </Link>
                    </li>
                    <li className="items-center">
                        <Link
                        className={
                            "text-xs uppercase py-3 font-bold block " +
                            (window.location.href.indexOf("/dashboard/paket-3") !== -1
                            ? "text-blue-500 hover:text-blue-600 text-center rounded"
                            : "text-gray-700 hover:text-gray-500 text-center")
                        }
                        to="/admin/dashboard"
                        >
                        Paket Grasindo Kelas 3
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideMenu