import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrderTable = () => {
    const { breadcrumb, setBreadcrumb } = useContext(AppContext)
    const navigate = useNavigate()

    function handleChildSelectBreadcrumb(child) {
        const temp = {
            mainSelect: breadcrumb.mainSelect,
            icon: breadcrumb.icon,
            childSelect: child
        }
        setBreadcrumb(temp)
    }
    const [orderList, setOrderList] = useState([]) 
    useEffect(() => {
        axios.get('http://localhost:8082/orders')
        .then((res) => {
            setOrderList(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };
    const formatDate = (datetime) => {
        const date = new Date(datetime)
        const day = date.getUTCDate()
        const month = date.getUTCMonth() + 1
        const year = date.getUTCFullYear()
        const formattedDay = day < 10 ? '0' + day : day
        const formattedMonth = month < 10 ? '0' + month : month
        const formattedDate = `${formattedDay}/${formattedMonth}/${year}`

        return formattedDate
    }
    return (
        <div>
            <div className="w-full rounded-t-lg overflow-hidden mt-5">
                <table className="w-full table-auto border border-black">
                    <thead className=" bg-[#3e3e3e] h-[50px]">
                        <tr className="text-white">
                            <th>ID</th>
                            <th>Đơn hàng</th>
                            <th>Thông tin</th>
                            <th>
                                <div className="flex flex-row items-center justify-center">
                                    Tổng tiền
                                    <div className="cursor-pointer group">
                                        <svg class="w-4 h-4 ms-1.5 group-hover:text-[#7dc642] duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="flex flex-row items-center justify-center">
                                    Ngày đặt hàng
                                    <div className="cursor-pointer group">
                                        <svg class="w-4 h-4 ms-1.5 group-hover:text-[#7dc642] duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </div>
                                </div>
                            </th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {orderList.map((ele, index) => {
                            return (
                                <tr
                                    key={index}
                                    onClick={() => {
                                        handleChildSelectBreadcrumb("OrderID")
                                        navigate("chi-tiet/OrderID", {
                                            state: ele
                                        })
                                    }}
                                    className="w-full h-auto text-center hover:bg-[#d8d8d8] duration-150 cursor-pointer"
                                >
                                    <td className="font-bold">#{ele._id}</td>
                                    <td>
                                        <div className="flex flex-row items-start justify-center gap-3 py-2">
                                            <div className="flex flex-col items-start font-medium">
                                                {ele.items.map((ele, index) => {
                                                    return (
                                                        <p key={index}>{ele.item.name}</p>  
                                                    )
                                                })}
                                            </div>
                                            <div className="flex flex-col items-start font-medium">
                                                {ele.items.map((ele, index) => {
                                                    return (
                                                        <p key={index}>x{ele.amount}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="flex justify-center items-center py-2">
                                        <div className="text-left">
                                            <p className="font-bold">Họ tên: <span className="font-normal">{ele.user.name}</span></p>
                                            <p className="font-bold">Số điện thoại: <span className="font-normal">{ele.user.phone}</span></p>
                                        </div>
                                    </td>
                                    <td className="font-bold text-[#7dc642]">{formatNumber(ele.total)}đ</td>
                                    <td>{formatDate(ele.createdAt)}</td>
                                    <td className="font-bold text-[#7dc642]">{ele.deliveryStatus === 'Dang van chuyen' ? "Chờ xác nhận" : "Đang giao"}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderTable;