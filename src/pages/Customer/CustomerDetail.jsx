import avt from '../../assets/avt.jpg'
import CustomerOrderHistory from "./CustomerOrderHistory";
import { useLocation } from 'react-router-dom';

const CustomerDetail = () => {
    const location = useLocation()
    const state = location.state || ""

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
            <div className="w-full flex flex-row items-start gap-5">
                <div className="w-1/4">
                    <img
                        src={avt}
                        className="w-full rounded-xl "
                    />
                    <div className="w-full h-[250px] bg-[#3e3e3e] rounded-xl hidden items-center justify-center">
                        <i className="fa-solid fa-user text-9xl text-white"></i>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-3xl mb-3">Thông tin khách hàng</p>
                    <div className="flex flex-row items-start gap-5">
                        <div className="flex flex-col gap-3 font-bold">
                            <p>Họ tên:</p>
                            <p>Số điện thoại</p>
                            <p>Email:</p>
                            <p>Ngày sinh:</p>
                            <p>Ngày tham gia:</p>
                            <p className="text-xl">Tổng tiền đã mua:</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>{state.customer.name}</p>
                            <p>{state.customer.phone}</p>
                            <p>{state.customer.email}</p>
                            <p>{formatDate(state.customer.birthday)}</p>
                            <p>{formatDate(state.customer.createdAt)}</p>
                            <p className="text-[#7dc642] font-bold text-xl">{formatNumber(state.totalIntoMoney)} đ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto">
                <CustomerOrderHistory userId={state.customer._id}/>
            </div>
        </div>
    )
}

export default CustomerDetail;