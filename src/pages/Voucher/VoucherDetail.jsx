import { useContext, useEffect, useState } from "react";
import CommonButton from "../../components/Button/CommonButton";
import CommonInput from "../../components/Search/CommonInput";

import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

const VoucherDetail = () => {

    const { fetchVoucher } = useContext(AppContext)
    const navigate = useNavigate()
    const params = useParams()

    const [name, setName] = useState("")
    const [conditionText, setConditionText] = useState("")
    const [conditionValue, setConditionValue] = useState(0)
    const [percent, setPercent] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [date, setDate] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8082/vouchers/${params.voucherID}`)
            .then((res) => {
                console.log(res.data)
                setName(res.data.name)
                setConditionText(res.data.conditionText)
                setConditionValue(res.data.conditionValue)
                setPercent(res.data.percent)
                setQuantity(res.data.quantity)
                setDate(res.data.date.substring(0, 10))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [params.voucherID])

    async function handleUpdateVoucher() {
        axios
            .put(`http://localhost:8082/vouchers/${params.voucherID}`, {
                name: name,
                conditionText: conditionText,
                conditionValue: conditionValue,
                percent: percent,
                quantity: quantity,
                date: date

            })
            .then((res) => {
                console.log(res.data);
                alert("Cập nhật mã giảm giá thành công thành công")
                navigate('/ma-giam-gia')
            })
            .catch((err) => console.log(err))
            .finally(async () => {
                await fetchVoucher()
            })

    }

    return (
        <div className="w-full flex justify-center">
            <div className="w-11/12 flex flex-col gap-5 pt-5">
                <p className="text-3xl font-bold mb-5">Thông tin mã giảm giá</p>
                <div className="w-full grid grid-cols-3 gap-5">
                    <CommonInput
                        name={"Mã giảm giá"}
                        placeholder={"#"}
                        type={"text"}
                        text={name}
                        setText={setName}
                    />
                    <CommonInput
                        name={"Điều kiện"}
                        placeholder={"Điều kiện"}
                        type={"text"}
                        text={conditionText}
                        setText={setConditionText}
                    />
                    <CommonInput
                        name={"Phần trăm giảm"}
                        placeholder={"Phần trăm giảm %"}
                        type={"number"}
                        text={percent}
                        setText={setPercent}
                    />
                    <CommonInput
                        name={"Số tiền đơn hàng phải đạt"}
                        placeholder={"Số tiền tối thiểu"}
                        type={"number"}
                        text={conditionValue}
                        setText={setConditionValue}
                    />
                    <CommonInput
                        name={"Số lượng mã"}
                        placeholder={"Số lượng mã"}
                        type={"number"}
                        text={quantity}
                        setText={setQuantity}
                    />
                    <CommonInput
                        name={"Ngày hết hạn"}
                        type={"date"}
                        text={date}
                        setText={setDate}
                    />


                </div>
                <div className="w-full flex flex-row items-center justify-center mt-20">
                    <div className="w-1/3">
                        <CommonButton
                            hoverColor={"[#7dc642]"}
                        >
                            + CẬP NHẬT
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VoucherDetail;