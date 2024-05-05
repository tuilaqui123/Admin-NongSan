import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import StatusBox from "../../components/Display/StatusBox";
import CommonButton from "../../components/Button/CommonButton";
import CommonSearch from "../../components/Search/CommonSearch";
import VoucherTable from "./VoucherTable";

const ListVoucher = () => {
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
        <div>
            {/* so luong ma, tong tien giam gia */}

            <div className="w-full grid grid-cols-3 gap-5">
                <StatusBox />
                <StatusBox />
            </div>
            <div className="w-full h-auto gap-5 grid grid-cols-2 my-5">
                <div className="w-full flex gap-5">
                    <CommonButton
                        path={"them-ma-giam-gia"}
                        onclick={() => handleChildSelectBreadcrumb("Thêm mã giảm giá")}
                    >
                        + Thêm mã giảm giá
                    </CommonButton>
                </div>
                <CommonSearch />
            </div>
            <div className="w-full h-auto">
                <VoucherTable />
            </div>
        </div>
    );
}

export default ListVoucher;