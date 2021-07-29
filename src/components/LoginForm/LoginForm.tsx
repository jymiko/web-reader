import React from "react";
import image from "../../assets/Aset_halaman_Login.png"
import logo from "../../assets/logo.png"

function LoginForm(){
    return(
        <div className="grid grid-cols-2 gap-10">
            <div>
                <img src={image} alt="login_image"/>
            </div>
            <div className="flex flex-row">
                <div className="w-full mt-24">
                    <img src={logo} alt="logo_gramedia"  className="h-20 mx-auto"/>
                    <h3 className="mt-6 mb-24 mx-40 text-2xl font-bold text-gray-700">Masuk</h3>
                    <form className="mx-40 space-y-4">
                        <div className="flex flex-col space-y-1 border-b-2">
                            <label htmlFor="email" className="font-normal text-gray-600">Email Address</label>
                            <input type="email" id="email" className="px-4 py-2 focus:outline-none"/>
                        </div>
                        <div className="flex flex-col border-b-2">
                            <label htmlFor="password" className="font-normal text-gray-600">Password</label>
                            <input type="password" id="password" className="px-4 py-2 focus:outline-none"/>
                        </div>
                        <div className="text-sm text-blue-400 font-normal">
                            <a href="#">Lupa kata sandi ?</a>
                        </div>
                        <div className="text-center">
                            <button className="bg-gray-300 px-24 py-2 mt-24 rounded-md text-gray-500 font-bold">Masuk</button>
                        </div>
                    </form>
                    <div className="mx-40 mt-40">
                        <p className="text-center">
                            Butuh bantuan ? <a href="#" className="text-blue-300">Hubungi Gramedia Digital Customer Service</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm