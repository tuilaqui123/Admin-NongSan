import React from "react";

const CustomerOrderHistory = () => {
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
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        <tr className="w-full h-auto text-center hover:bg-[#d8d8d8] duration-150">
                            <td className="font-bold">#001</td>
                            <td>
                                <div className="flex flex-row items-start justify-center gap-3">
                                    <div className="flex flex-col items-start font-medium">
                                        <p>Rau xà lách</p>
                                        <p>Tôm sú bình định</p>
                                        <p>Cam tươi hà giang</p>
                                    </div>
                                    <div className="flex flex-col items-start font-medium">
                                        <p>x1</p>
                                        <p>x1</p>
                                        <p>x1</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex flex-row items-start justify-center gap-2 py-1">
                                    <div className="flex flex-col items-end font-bold">
                                        <p>Tên người đặt hàng:</p>
                                        <p>Ngày đặt hàng:</p>
                                        <p>Số điện thoại:</p>
                                        <p>Địa chỉ:</p>
                                        <div></div>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p>Phạm Ngọc Quí</p>
                                        <p>05/05/2023</p>
                                        <p>0912725561</p>
                                        <p>121/2C, Khu phố 2, Phường 4</p>
                                        <p>Huyện Châu Thành, Tỉnh Bến Tre</p>
                                    </div>
                                </div>
                            </td>
                            <td>12/05/2004</td>
                            <td className="font-bold text-[#7dc642]">Đã giao</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomerOrderHistory;