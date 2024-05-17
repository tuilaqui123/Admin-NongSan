import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import clsx from 'clsx'
import axios from "axios";
const VoucherTable = () => {
    const { breadcrumb, setBreadcrumb, vouchers, fetchFarm } = useContext(AppContext)
    const navigate = useNavigate()

    function handleChildSelectBreadcrumb(child) {
        const temp = {
            mainSelect: breadcrumb.mainSelect,
            icon: breadcrumb.icon,
            childSelect: child
        }
        setBreadcrumb(temp)
    }

    async function handleDeleteVoucher(id) {
        axios
            .delete(`http://localhost:8082/vouchers/${id}`
            )
            .then((res) => {
                console.log(res.data);
                alert("Xoá mã giảm giá thành công")
                navigate('/ma-giam-gia')
            })
            .catch((err) => console.log(err))
            .finally(async () => {
                await fetchFarm()
            })
    }

    return (
        <div className="w-full rounded-t-lg overflow-hidden">
            <table className="w-full table-auto border border-black">
                <thead className=" bg-[#3e3e3e] h-[50px]">
                    {/* mã voucher, text, số tiền của mã, số lượng mã, hạn sử dụng,  button(xoá/sửa(thay đổi/số lượng/điều kiện)) */}
                    {/* hạn sử dụng có thể là ngày, tháng, giờ hoặc vv, xét theo realtime */}
                    <tr className="text-white">
                        <th>Mã</th>
                        <th>Điều kiện</th>
                        <th>Phần trăm giảm</th>
                        <th>Số lượng</th>
                        <th>Hạn sử dụng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {vouchers.map((value, index) => {
                        return (
                            <tr
                                // className="w-full h-[70px] text-center bg-[#eeeeee] hover:bg-[#d8d8d8] duration-150"
                                key={index}
                                className={clsx({
                                    "w-full h-[70px] text-center bg-[#eeeeee] hover:bg-[#d8d8d8] duration-150": index % 2 == 0,
                                    "w-full h-[70px] text-center hover:bg-[#d8d8d8] duration-150": index % 2 != 0
                                })}
                            >
                                <td className="font-black text-[#7dc642]">#{value.name}</td>
                                <td>{value.conditionText}</td>
                                <td>{value.percent}%</td>
                                <td className="text-[#ff0000] font-black">{value.quantity}</td>
                                <td>{value.date.substring(0, 10)}</td>
                                <td>
                                    <i onClick={() => handleDeleteVoucher(value._id)} class="fa-solid fa-circle-xmark text-2xl mr-3 hover:text-[#ff0000] cursor-pointer duration-200"></i>
                                    <Link
                                        to={`chinh-sua/${value._id}`}
                                        onClick={() => handleChildSelectBreadcrumb(`#${value.name}`)}
                                    >
                                        <i class="fa-solid fa-gear text-2xl hover:text-blue-700 cursor-pointer duration-200"></i>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default VoucherTable;