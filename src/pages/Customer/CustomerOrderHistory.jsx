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
                            <td className="flex justify-center py-2">
                                <div className="text-left">
                                    <p className="font-bold">Họ tên: <span className="font-normal">Phạm Ngọc Quí</span></p>
                                    <p className="font-bold">Email: <span className="font-normal">quidhtv0149@gmail.com</span></p>
                                    <p className="font-bold">Ngày đặt hàng: <span className="font-normal">05/05/2023</span></p>
                                    <p className="font-bold">Số điện thoại: <span className="font-normal">0912725561</span></p>
                                    <p className="font-bold">Địa chỉ: <span className="font-normal">121/2C, Khu phố 2, Phường 4</span></p>
                                    <p><span>Huyện Châu Thành, Tỉnh Bến Tre</span></p>
                                </div>
                            </td>
                            <td className="font-bold text-[#7dc642]">1.200.000đ</td>
                            <td className="font-bold text-[#7dc642]">Đã giao</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomerOrderHistory;