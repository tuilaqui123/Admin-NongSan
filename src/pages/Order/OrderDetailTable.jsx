import React from "react";

const OrderDetailTable = ({product}) => {
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };
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
                        {product.map((ele, index) => {
                            return (
                                <tr key={index} className="w-full h-[50px] text-center duration-150 cursor-pointer" >
                                    <td className="font-bold">#{ele._id}</td>
                                    <td>{ele.item.name}</td>
                                    <td>{formatNumber(ele.item.price)}đ</td>
                                    <td>{ele.amount}</td>
                                    <td className="font-bold">{formatNumber(ele.item.price*ele.amount)}đ</td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderDetailTable;