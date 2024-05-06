import React from "react";
import CommonButton from "../../components/Button/CommonButton";
import CommonInput from "../../components/Search/CommonInput";
import CommonSelect from "../../components/Search/CommonSelect";

const AddVoucher = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-11/12 flex flex-col gap-5 pt-5">
                <p className="text-3xl font-bold mb-5">Thông tin mã giảm giá</p>
                <div className="w-full grid grid-cols-3 gap-5">
                    <CommonInput
                        name={"Mã giảm giá"}
                        placeholder={"#"}
                        type={"text"}
                    />
                    <CommonInput
                        name={"Điều kiện"}
                        placeholder={"Điều kiện"}
                        type={"text"}
                    />
                    <CommonSelect
                        name={"Loại"}
                        title={"Loại"}
                    />
                    <CommonInput
                        name={"Phần trăm giảm"}
                        placeholder={"Phần trăm giảm %"}
                        type={"number"}
                    />
                    <CommonInput
                        name={"Số tiền giảm"}
                        placeholder={"Số tiền giảm"}
                        type={"number"}
                    />
                    <CommonInput
                        name={"Số lượng mã"}
                        placeholder={"Số lượng mã"}
                        type={"number"}
                    />
                    <CommonInput
                        name={"Ngày hết hạn"}
                        type={"date"}
                    />

                </div>
                <div className="w-full flex flex-row items-center justify-center mt-20">
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

export default AddVoucher;