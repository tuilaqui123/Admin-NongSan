import React from "react";
import avt from '../../assets/avt.jpg'
import OrderDetailTable from "./OrderDetailTable";
import CommonButton from "../../components/Button/CommonButton";
import { useLocation } from "react-router-dom";
import axios from "axios";

const OrderDetail = () => {
    const location = useLocation()
    const order = location.state || ""
    console.log(order)
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };
    const changeStatus = () => {
        axios.put(`http://localhost:8082/changeStatus/${order._id}`)
        .then((res) => {
            console.log(res.data)
            location.reload()
        })
        .catch(err => console.log(err));
    }
    return (
        <div className="pb-10">
            <div className="w-full h-auto mb-5">
                <div className="w-full flex flex-row items-center justify-between mb-3">
                    <p className="font-bold text-3xl">Thông tin đơn hàng </p>
                    <div className="w-1/4">
                        <CommonButton
                            hoverColor={"[#ff0000]"}
                        >
                            Xoá đơn hàng
                        </CommonButton>
                    </div>
                </div>
                <OrderDetailTable product={order.items}/>
            </div>
            <p className="font-bold text-3xl mb-3">Thông tin đặt hàng</p>
            <div className="w-full flex flex-row items-start gap-3">
                <div className="w-[70%]">
                    <div className="w-full flex flex-row gap-3 border border-[#3e3e3e] rounded-xl p-2">
                        <div className="w-[100px] h-[100px]">
                            <img
                                src={avt}
                                className="w-full h-full rounded-xl"
                            />
                            <div className="w-full h-[100px] bg-[#3e3e3e] rounded-xl hidden items-center justify-center">
                                <i className="fa-solid fa-user text-9xl text-white"></i>
                            </div>
                        </div>
                        <div className="w-auto flex flex-col ">
                            <p className="font-bold">Họ tên: <span className="font-normal">{order.customer.name}</span></p>
                            <p className="font-bold">Email: <span className="font-normal">{order.customer.email}</span></p>
                            <p className="font-bold">Số điện thoại: <span className="font-normal">{order.customer.phone}</span></p>
                            <p className="font-bold">Địa chỉ: <span className="font-normal">{order.customer.address}</span></p>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] flex flex-col items-center border border-[#3e3e3e] py-3 rounded-lg">
                    <p className="font-bold text-3xl mb-5 text-center">Tóm tắt</p>
                    <div className="w-full px-3 flex flex-col items-center gap-3">
                        <p className="w-full flex flex-row justify-between items-center font-bold text-lg">Tạm tính: <span>{formatNumber(order.total)}đ</span></p>
                        <p className="w-full flex flex-row justify-between items-center font-bold text-lg">Mã giảm giá: <span className="text-red-600">-{order.voucher ? order.total*(order.voucher.percent/100) : 0}đ</span></p>
                        <div className="border-b-2 border-[#3e3e3e] w-3/4 my-2 justify-self-center"></div>
                        <p className="w-full flex flex-row justify-between items-center font-bold text-xl">Tổng tiền: <span className="text-[#7dc642]">{formatNumber(order.intoMoney)}đ</span></p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-center mt-5">
                <div className="w-1/4">
                    <CommonButton
                        hoverColor={"[#7dc642]"}
                        path={"/don-hang"}
                        onclick={changeStatus}
                    >
                        Xác nhận đơn hàng
                    </CommonButton>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail;