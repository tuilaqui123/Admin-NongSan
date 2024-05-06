import React, { useContext } from "react";
import CommonButton from "../../components/Button/CommonButton";
import CommonSearch from "../../components/Search/CommonSearch";
import { AppContext } from "../../context/AppContext";
import CommonSelect from "../../components/Search/CommonSelect";
import SearchTag from "../../components/Search/SearchTag";
import Item from "../../components/Item/Item";

const StorageList = () => {
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
            <div className="w-full h-auto gap-5 grid grid-cols-6">
                {/* tim kiem, loai san pham, tag, nhan~, nong trai */}
                <CommonSelect
                    title={"Loại"}
                />
                <CommonSelect
                    title={"Nhãn"}
                />
                <div className="col-span-2">
                    <CommonSelect
                        title={"Nông trại"}
                    />
                </div>
                <div className="col-span-2">
                    <CommonSearch />
                </div>
            </div>
            <div className="w-full grid grid-cols-5 mt-5">
                <div className="col-span-4 grid grid-cols-7 gap-3">
                    <div className="col-span-1">
                        <p className="font-bold w-auto">Tìm kiếm:</p>
                        <CommonButton>
                            Reset
                        </CommonButton>
                    </div>
                    <div className="col-span-6 flex flex-row flex-wrap w-auto items-start gap-2">
                        <SearchTag />
                        <SearchTag />
                        <SearchTag />
                        <SearchTag />
                        <SearchTag />
                    </div>
                </div>
                <div className="col-span-1">
                    <CommonButton
                        path={"them-san-pham"}
                        onclick={() => handleChildSelectBreadcrumb("Thêm sản phẩm")}
                    >
                        + Thêm sản phẩm
                    </CommonButton>
                </div>
            </div>
            <div className="w-full h-auto grid grid-cols-4 gap-5 mt-5">
                <Item
                    path={"chinh-sua/id0912312"}
                    onclick={() => handleChildSelectBreadcrumb("Rau xà lách")}
                />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default StorageList;