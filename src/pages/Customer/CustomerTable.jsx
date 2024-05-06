import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import avt from '../../assets/avt.jpg'

const CustomerTable = () => {
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
                    <tr className="text-white">
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>
                            <div className="flex flex-row items-center justify-center">
                                Ngày tham gia
                                <div className="cursor-pointer group">
                                    <svg class="w-4 h-4 ms-1.5 group-hover:text-[#7dc642] duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className="flex flex-row items-center justify-center">
                                Tổng tiền đã mua
                                <div className="cursor-pointer group">
                                    <svg class="w-4 h-4 ms-1.5 group-hover:text-[#7dc642] duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                </div>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    <tr className="w-full h-auto text-center hover:bg-[#d8d8d8] duration-150 ">
                        <td className="flex flex-row p-2 gap-2">
                            <img
                                src={avt}
                                className="w-[50px] rounded-full"
                            />
                            <div className="text-left">
                                <p className="font-bold">Phạm Ngọc Quí</p>
                                <p>quidhtv0149@gmail.com</p>
                            </div>
                        </td>
                        <td>0912725561</td>
                        <td>12/02/2023</td>
                        <td className="font-bold text-[#7dc642]">50.000đ</td>
                        <td className="px-5">
                            <Link
                                to={`chinh-sua/customerID`}
                                onClick={() => handleChildSelectBreadcrumb("Phạm Ngọc Quí")}
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

export default CustomerTable;