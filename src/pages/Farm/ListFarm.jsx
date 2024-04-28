import React from "react";
import Box from "../../components/Button/Box";
import CommonSearch from "../../components/Search/CommonSearch";
import CommonButton from "../../components/Button/CommonButton";

const ListFarm = () => {
    return (
        <>
            <div className="w-full h-auto gap-5 grid grid-cols-2 mb-5">
                <div className="w-full flex">
                    <CommonButton
                        path={"them-trang-trai"}
                    >
                        + Thêm trang trại
                    </CommonButton>
                </div>
                <CommonSearch />
            </div>
            <div className="grid grid-cols-4 gap-5">
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        </>
    );
}

export default ListFarm;