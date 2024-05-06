import React, { useContext } from "react";
import Box from "../../components/Button/Box";
import CommonSearch from "../../components/Search/CommonSearch";
import CommonButton from "../../components/Button/CommonButton";
import { AppContext } from "../../context/AppContext";

const ListFarm = () => {
    const { breadcrumb, setBreadcrumb } = useContext(AppContext)

    function handleChildSelectBreadcrumb(child) {
        const temp = {
            mainSelect: breadcrumb.mainSelect,
            icon: breadcrumb.icon,
            childSelect: child
        }
        setBreadcrumb(temp)
    }

    return (
        <>
            <div className="w-full h-auto gap-5 grid grid-cols-2 mb-5">
                <div className="w-full flex">
                    <CommonButton
                        path={"them-trang-trai"}
                        onclick={() => handleChildSelectBreadcrumb("Thêm trang trại")}
                        hoverColor={"[#7dc642]"}
                    >
                        + Thêm trang trại
                    </CommonButton>
                </div>
                <CommonSearch />
            </div>
            <div className="grid grid-cols-4 gap-5">
                <Box
                    path={"chinh-sua/id09123213"}
                    name={"Công ty Thiên nhiên Việt"}
                />
                <Box
                    path={"chinh-sua/id09123213"}
                    name={"Công ty Thiên nhiên Việt"}
                />
                <Box
                    path={"chinh-sua/id09123213"}
                    name={"Công ty Thiên nhiên Việt"}
                />
                <Box
                    path={"chinh-sua/id09123213"}
                    name={"Công ty Thiên nhiên Việt"}
                />
                <Box
                    path={"chinh-sua/id09123213"}
                    name={"Công ty Thiên nhiên Việt"}
                />
                <Box
                    path={"chinh-sua/id09123213"}
                    name={"Công ty Thiên nhiên Việt"}
                />
            </div>
        </>
    );
}

export default ListFarm;