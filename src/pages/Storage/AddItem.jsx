import React from "react";
import ImageUpload from "../../components/Button/ImageUpload";
import CommonButton from "../../components/Button/CommonButton";
import CommonInput from "../../components/Search/CommonInput";
import CommonSelect from "../../components/Search/CommonSelect";
import CommonTextarea from "../../components/Search/CommonTextarea";

const AddItem = () => {
    return (
        <div className="w-full flex flex-row gap-5 items-start ">
            <div className="w-1/4">
                <ImageUpload />
            </div>
            <div className="w-3/4 flex flex-col gap-5">
                <p className="text-3xl font-bold">Thông tin sản phẩm</p>
                <div className="w-full grid grid-cols-2 gap-5">
                    <CommonInput
                        name={"Tên sản phẩm"}
                        placeholder={"Tên sản phẩm"}
                        type={"text"}
                    />
                    <CommonSelect
                        name={"Loại"}
                        title={"Loại"}
                    />
                    <CommonInput
                        name={"Giá"}
                        placeholder={"Giá"}
                        type={"number"}
                    />
                    <CommonSelect
                        name={"Nông trại"}
                        title={"Nông trại"}
                    />
                    <CommonInput
                        name={"Đơn vị"}
                        placeholder={"Đơn vị"}
                        type={"text"}
                    />
                    <CommonInput
                        name={"Chi tiết đơn vị"}
                        placeholder={"Chi tiết đơn vị"}
                        type={"text"}
                    />
                    <CommonInput
                        name={"Nhãn giảm giá"}
                        placeholder={"Nhãn giảm giá %"}
                        type={"number"}
                    />
                    <CommonInput
                        name={"Số lượng"}
                        placeholder={"Số lượng"}
                        type={"number"}
                    />
                </div>
                <CommonTextarea
                    name={"Mô tả"}
                    placeholder={"Mô tả"}
                />
                <CommonTextarea
                    name={"Quy trình"}
                    placeholder={"Quy trình"}
                />
                <CommonTextarea
                    name={"Giá trị dinh dương & công dụng"}
                    placeholder={"Giá trị dinh dương & công dụng"}
                />
                <CommonTextarea
                    name={"Cách bảo quản & sử dụng"}
                    placeholder={"Cách bảo quản & sử dụng"}
                />
                <div className="w-full flex justify-center items-center">
                    <div className="w-1/3">
                        <CommonButton
                            hoverColor={"[#7dc642]"}
                        >
                            + THÊM
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddItem;