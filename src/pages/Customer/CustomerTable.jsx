import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import avt from '../../assets/avt.jpg'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CustomerTable = () => {
    const [customers, setCustomers] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8082/customers')
        .then((res) => {
            setCustomers(res.data)
        })
    }, [])
    const { breadcrumb, setBreadcrumb } = useContext(AppContext)
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
    function handleChildSelectBreadcrumb(child) {
        const temp = {
            mainSelect: breadcrumb.mainSelect,
            icon: breadcrumb.icon,
            childSelect: child
        }
        setBreadcrumb(temp)
    }
    const navigateToDetail = (customer) => {
        handleChildSelectBreadcrumb(customer.customer.name || customer.customer.email)
        navigate(`chi-tiet/${customer.customer._id}`, {
            state: customer
        })
    }
    return (
        <div className="w-full rounded-t-lg overflow-hidden">
            <table className="w-full table-auto border border-black">
                <thead className=" bg-[#3e3e3e] h-[50px]">
                    <tr className="text-white">
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>
                            <div className="flex flex-row items-center justify-center">
                                Ngày tham gia
                                <div className="cursor-pointer group">
                                    <svg className="w-4 h-4 ms-1.5 group-hover:text-[#7dc642] duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className="flex flex-row items-center justify-center">
                                Tổng tiền đã mua
                                <div className="cursor-pointer group">
                                    <svg className="w-4 h-4 ms-1.5 group-hover:text-[#7dc642] duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </div>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {customers.map((ele, index) => {
                        return (
                            <tr key={index} className="w-full h-auto text-center hover:bg-[#d8d8d8] duration-150 ">
                                <td className="flex flex-row p-2 gap-2">
                                    <img
                                        src={avt}
                                        className="w-[50px] rounded-full"
                                    />
                                    <div className="text-left">
                                        <p className="font-bold">{ele.customer.name}</p>
                                        <p>{ele.customer.email}</p>
                                    </div>
                                </td>
                                <td>{ele.customer.phone}</td>
                                <td>{formatDate(ele.customer.createdAt)}</td>
                                <td className="font-bold text-[#7dc642]">{formatNumber(ele.totalIntoMoney)}đ</td>
                                <td className="px-5">
                                    <div
                                        onClick={() => navigateToDetail(ele)}
                                    >
                                        <i className="fa-solid fa-gear text-2xl hover:text-blue-700 cursor-pointer duration-200"></i>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerTable;