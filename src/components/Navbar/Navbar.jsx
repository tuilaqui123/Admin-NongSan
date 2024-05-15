import React, { useContext, useEffect, useState } from "react";
import logo from '../../assets/logo.png'
import logoLeaf from '../../assets/logo-leaf.png'
import NavButton from "../Button/NavButton";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Navbar = ({ navSlide }) => {
    const navigate = useNavigate()
    const { setBreadcrumb } = useContext(AppContext)
    const [select, setSelect] = useState(1)
    useEffect(() => {
        navigate("/thong-ke")
    }, [])

    const handleBreadcrumbChange = (newBreadcrumb) => {
        setBreadcrumb(newBreadcrumb);
    }

    return (
        <div
            // className="fixed w-1/4 h-screen p-3 border"
            className={clsx({
                "fixed w-1/4 h-screen p-3": navSlide,
                "fixed w-auto h-screen p-3": !navSlide
            })}
        >
            <div
                // className="w-[68px] h-full shadow-2xl p-2 bg-[#3e3e3e] rounded-xl"
                className={clsx({
                    "w-auto h-full shadow-2xl p-2 bg-[#3e3e3e] rounded-xl flex flex-col items-center": navSlide,
                    "w-[68px] h-full shadow-2xl p-2 bg-[#3e3e3e] rounded-xl flex flex-col items-center": !navSlide
                })}
            >
                <div
                    // className="w-full h-auto p-5 flex flex-col items-center"
                    className={clsx({
                        "w-full h-[100px] p-5 flex flex-col items-center": navSlide,
                        "w-full h-[100px] flex flex-col items-center justify-center": !navSlide
                    })}
                >
                    {navSlide ? (
                        <img
                            src={logo}
                            className="w-full"
                        />
                    ) : (
                        <img
                            src={logoLeaf}
                            className="w-full"
                        />
                    )}
                </div>
                <div
                    // className="w-3/4 border-b mt-5"
                    className={clsx({
                        "w-3/4 border-b mt-5": navSlide,
                        "w-full border-b mt-5": !navSlide
                    })}
                ></div>
                <div
                    // className="w-auto flex flex-col gap-3 mt-5 border"
                    className={clsx({
                        "w-full flex flex-col gap-3 mt-5": navSlide,
                        "w-[50px] flex flex-col gap-3 mt-5": !navSlide
                    })}
                >
                    <NavButton
                        icon={"fa-solid fa-chart-simple"}
                        name={"Thống kê"}
                        path={"/thong-ke"}
                        badge={12}
                        onclick={() => setSelect(1)}
                        position={1}
                        select={select}
                        navSlide={navSlide}
                        onBreadcrumbChange={handleBreadcrumbChange}
                    />
                    <NavButton
                        icon={"fa-solid fa-box"}
                        name={"Đơn hàng"}
                        path={"/don-hang"}
                        badge={12}
                        onclick={() => setSelect(2)}
                        position={2}
                        select={select}
                        navSlide={navSlide}
                        onBreadcrumbChange={handleBreadcrumbChange}
                    />
                    <NavButton
                        icon={"fa-solid fa-users"}
                        name={"Khách hàng"}
                        path={"/khach-hang"}
                        badge={12}
                        onclick={() => setSelect(3)}
                        position={3}
                        select={select}
                        navSlide={navSlide}
                        onBreadcrumbChange={handleBreadcrumbChange}
                    />
                    <NavButton
                        icon={"fa-solid fa-warehouse"}
                        name={"Kho nông sản"}
                        path={"/kho"}
                        onclick={() => setSelect(4)}
                        position={4}
                        select={select}
                        navSlide={navSlide}
                        onBreadcrumbChange={handleBreadcrumbChange}
                    />
                    <NavButton
                        icon={"fa-brands fa-envira"}
                        name={"Trang trại"}
                        path={"/trang-trai"}
                        onclick={() => setSelect(5)}
                        position={5}
                        select={select}
                        navSlide={navSlide}
                        onBreadcrumbChange={handleBreadcrumbChange}
                    />
                    <NavButton
                        icon={"fa-solid fa-tag"}
                        name={"Mã giảm giá"}
                        path={"/ma-giam-gia"}
                        onclick={() => setSelect(6)}
                        position={6}
                        select={select}
                        navSlide={navSlide}
                        onBreadcrumbChange={handleBreadcrumbChange}
                    />
                    <NavButton
                        icon={"fa-solid fa-bars-progress"}
                        name={"Quản lý web"}
                        path={"/quan-ly-web"}
                        onclick={() => setSelect(7)}
                        position={7}
                        select={select}
                        navSlide={navSlide}
                        onBreadcrumbChange={handleBreadcrumbChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;