import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const VoucherTable = () => {
    const { breadcrumb, setBreadcrumb } = useContext(AppContext)

    function handleChildSelectBreadcrumb(child) {
        const temp = {
            mainSelect: breadcrumb.mainSelect,
            icon: breadcrumb.icon,
            childSelect: child
        }
        setBreadcrumb(temp)
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
                        <th>Tổng tiền</th>
                        <th>Số lượng</th>
                        <th>Hạn sử dụng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    <tr className="w-full h-[70px] text-center bg-[#eeeeee] hover:bg-[#d8d8d8] duration-150">
                        <td className="font-black text-[#7dc642]">#abcxyz</td>
                        <td>Cho hoá đơn trên 100.000đ</td>
                        <td>50.000đ</td>
                        <td className="text-[#ff0000] font-black">50</td>
                        <td>15/05/2003</td>
                        <td>
                            <i class="fa-solid fa-circle-xmark text-2xl mr-3 hover:text-[#ff0000] cursor-pointer duration-200"></i>
                            <Link
                                to={`chinh-sua/abcxyz`}
                                onClick={() => handleChildSelectBreadcrumb("#abcxyz")}
                            >
                                <i class="fa-solid fa-gear text-2xl hover:text-blue-700 cursor-pointer duration-200"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr className="w-full h-[70px] text-center hover:bg-[#d8d8d8] duration-150 ">
                        <td className="font-black text-[#7dc642]">#abcxyz</td>
                        <td>Cho hoá đơn trên 100.000đ</td>
                        <td>50.000đ</td>
                        <td className="text-[#ff0000] font-black">50</td>
                        <td>15/05/2003</td>
                        <td>
                            <i class="fa-solid fa-circle-xmark text-2xl mr-3 hover:text-[#ff0000] cursor-pointer duration-200"></i>
                            <Link
                                to={`chinh-sua/abcxyz`}
                                onClick={() => handleChildSelectBreadcrumb("#abcxyz")}
                            >
                                <i class="fa-solid fa-gear text-2xl hover:text-blue-700 cursor-pointer duration-200"></i>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default VoucherTable;