import React from "react";
import ImageUpload from "../../components/Button/ImageUpload";
import CommonButton from "../../components/Button/CommonButton";
import CommonInput from "../../components/Search/CommonInput";
import CommonTextarea from "../../components/Search/CommonTextarea";

const AddFarm = () => {
    return (
        <div className="w-full flex flex-row gap-5 items-start ">
            <div className="w-1/4">
                <ImageUpload />
            </div>
            <div className="w-3/4 flex flex-col gap-5">
                <p className="text-3xl font-bold mb-5">Thông tin trang trại</p>
                <div className="w-full grid grid-cols-2 gap-5">
                    <CommonInput
                        name={"Tên trang trại"}
                        placeholder={"Tên trang trại..."}
                        type={"text"}
                    />
                    <CommonInput
                        name={"Email"}
                        placeholder={"Email"}
                        type={"text"}
                    />
                    <CommonInput
                        name={"Số điện thoại"}
                        placeholder={"Số điện thoại"}
                        type={"text"}
                    />
                    <CommonInput
                        name={"Link trang web"}
                        placeholder={"Link trang web"}
                        type={"text"}
                    />
                </div>
                <CommonTextarea
                    name={"Mô tả"}
                    placeholder={"Mô tả..."}
                />
                <div className="w-full flex justify-center items-center">
                    <div className="w-1/3">
                        <CommonButton>
                            + THÊM
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFarm;