import axios from "axios";
import { useEffect, useState } from "react";

const CustomerOrderHistory = ({userId}) => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8082/orders/users/${userId}`)
        .then((res) => {
            setOrders(res.data)
            console.log(res.data)
        })
    }, [userId])
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
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
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
                                        <svg className="w-4 h-4 ms-1.5 group-hover:text-[#7dc642] duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </div>
                                </div>
                            </th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {orders.map((e, index) => {
                            console.log(e)
                            return (
                                <tr key={index} className="w-full h-auto text-center hover:bg-[#d8d8d8] duration-150">
                                    <td className="font-bold">#{e._id}</td>
                                    <td>
                                        <div className="flex flex-row items-start justify-center gap-3">
                                            <div className="flex flex-col items-start font-medium">
                                                {e.items.map((e, index) => {
                                                    return (
                                                        <p key={index}>{e.item.name}</p>
                                                    )
                                                })}
                                            </div>
                                            <div className="flex flex-col items-start font-medium">
                                                {e.items.map((e, index) => {
                                                    return (
                                                        <p key={index}>x{e.amount}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="flex justify-center py-2">
                                        <div className="text-left">
                                            <p className="font-bold">Họ tên: <span className="font-normal">{e.customer.name}</span></p>
                                            <p className="font-bold">Email: <span className="font-normal">{e.customer.email}</span></p>
                                            <p className="font-bold">Ngày đặt hàng: <span className="font-normal">{formatDate(e.createdAt)}</span></p>
                                            <p className="font-bold">Số điện thoại: <span className="font-normal">{e.customer.phone}</span></p>
                                            <p className="font-bold">Địa chỉ: <span className="font-normal">{e.customer.address}</span></p>
                                        </div>
                                    </td>
                                    <td className="font-bold text-[#7dc642]">{formatNumber(e.intoMoney)} đ</td>
                                    <td className="font-bold text-[#7dc642]">{e.deliveryStatus === 'Dang van chuyen' ? "Chờ xác nhận" : "Đang giao"}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomerOrderHistory;