import React from "react";
import CommonButton from "../../components/Button/CommonButton";

const AddVoucher = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-11/12 flex flex-col gap-5 pt-5">
                <p className="text-3xl font-bold mb-5">Thông tin mã giảm giá</p>
                <div className="w-full grid grid-cols-3 gap-5">
                    <div className="w-full flex flex-col gap-2">
                        <p className=" font-bold">Mã giảm giá</p>
                        <input
                            type="text"
                            placeholder="#......"
                            className="w-full h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <p className=" font-bold">Điều kiện</p>
                        <input
                            type="text"
                            placeholder="Số tiền đơn hàng phải đạt..."
                            className="w-full h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                        />
                    </div>
                    {/* đơn hàng đặt giá trị nhất định(giảm tiền hoặc % hoá đơn) */}
                    <div className="w-full flex flex-col gap-2">
                        <p className=" font-bold">Loại</p>
                        <input
                            type="text"
                            placeholder="Loại... (selection) / giảm tiền - % đơn hàng"
                            className="w-full h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                        />
                    </div>
                    {/*  */}
                    <div className="w-full flex flex-col gap-2">
                        <p className=" font-bold">Phần trăm giảm</p>
                        <input
                            type="text"
                            placeholder="Phần trăm giảm..."
                            className="w-full h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                        />
                    </div>
                    {/* check render 1 trong 2 dựa theo loại */}

                    <div className="w-full flex flex-col gap-2">
                        <p className=" font-bold">Số tiền giảm</p>
                        <input
                            type="text"
                            placeholder="Số tiền giảm giảm..."
                            className="w-full h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                        />
                    </div>
                    {/*  */}
                    <div className="w-full flex flex-col gap-2">
                        <p className=" font-bold">Số lượng mã</p>
                        <input
                            type="number"
                            placeholder="Số lượng mã"
                            className="w-full h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <p className=" font-bold">Ngày hết hạn</p>
                        <input
                            type="date"
                            placeholder="Ngày hết hạn"
                            className="w-full h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                        />
                    </div>
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