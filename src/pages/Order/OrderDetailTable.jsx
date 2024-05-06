import React from "react";

const OrderDetailTable = () => {
    return (
        <div>
            <div className="w-full rounded-t-lg overflow-hidden">
                <table className="w-full table-auto border border-black">
                    <thead className=" bg-[#3e3e3e] h-[50px]">
                        <tr className="text-white">
                            <th>ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        <tr className="w-full h-[50px] text-center duration-150 cursor-pointer" >
                            <td className="font-bold">#001</td>
                            <td>Rau xà lách</td>
                            <td>40.000đ</td>
                            <td>2</td>
                            <td className="font-bold">80.000đ</td>
                        </tr>
                        <tr className="w-full h-[50px] text-center bg-[#e9e8e8] duration-150 cursor-pointer" >
                            <td className="font-bold">#001</td>
                            <td>Rau xà lách</td>
                            <td>40.000đ</td>
                            <td>2</td>
                            <td className="font-bold">80.000đ</td>
                        </tr>
                        <tr className="w-full h-[50px] text-center duration-150 cursor-pointer" >
                            <td className="font-bold">#001</td>
                            <td>Rau xà lách</td>
                            <td>40.000đ</td>
                            <td>2</td>
                            <td className="font-bold">80.000đ</td>
                        </tr>
                        <tr className="w-full h-[50px] text-center bg-[#e9e8e8] duration-150 cursor-pointer" >
                            <td className="font-bold">#001</td>
                            <td>Rau xà lách</td>
                            <td>40.000đ</td>
                            <td>2</td>
                            <td className="font-bold">80.000đ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderDetailTable;