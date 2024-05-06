import React from "react";
import avt from '../../assets/avt.jpg'
import CustomerOrderHistory from "./CustomerOrderHistory";

const CustomerDetail = () => {
    return (
        <div>
            <div className="w-full flex flex-row items-start gap-5">
                <div className="w-1/4">
                    <img
                        src={avt}
                        className="w-full rounded-xl "
                    />
                    <div className="w-full h-[250px] bg-[#3e3e3e] rounded-xl hidden items-center justify-center">
                        <i className="fa-solid fa-user text-9xl text-white"></i>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-3xl mb-3">Thông tin khách hàng</p>
                    <div className="flex flex-row items-start gap-5">
                        <div className="flex flex-col gap-3 font-bold">
                            <p>Họ tên:</p>
                            <p>Số điện thoại</p>
                            <p>Email:</p>
                            <p>Ngày sinh:</p>
                            <p>Ngày tham gia:</p>
                            <p className="text-xl">Tổng tiền đã mua:</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>Phạm Ngọc Quí</p>
                            <p>0912725561</p>
                            <p>quidhtv0149@gmail.com</p>
                            <p>17/08/2003</p>
                            <p>05/05/2004</p>
                            <p className="text-[#7dc642] font-bold text-xl">2.000.000đ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto">
                <CustomerOrderHistory />
            </div>
        </div>
    )
}

export default CustomerDetail;