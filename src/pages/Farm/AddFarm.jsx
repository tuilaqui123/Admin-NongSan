import React from "react";
import ImageUpload from "../../components/Button/ImageUpload";
import CommonButton from "../../components/Button/CommonButton";

const AddFarm = () => {
    return (
        <div className="w-full flex flex-row gap-5 items-start pb-5">
            <div className="w-1/4">
                <ImageUpload />
            </div>
            <div className="w-3/4 flex flex-col gap-5">
                <p className="text-3xl font-bold mb-5">Thông tin trang trại</p>
                <div className="w-full flex flex-row items-start">
                    <p className="w-1/5 font-bold">Tên trang trại</p>
                    <input
                        type="text"
                        placeholder="Tên trang trại..."
                        className="w-2/3 h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                    />
                </div>
                <div className="w-full flex flex-row items-start">
                    <p className="w-1/5 font-bold">Email</p>
                    <input
                        type="text"
                        placeholder="Email..."
                        className="w-2/3 h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                    />
                </div>
                <div className="w-full flex flex-row items-start">
                    <p className="w-1/5 font-bold">Số điện thoại</p>
                    <input
                        type="text"
                        placeholder="Số điện thoại..."
                        className="w-2/3 h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                    />
                </div>
                <div className="w-full flex flex-row items-start">
                    <p className="w-1/5 font-bold">Link trang web</p>
                    <input
                        type="text"
                        placeholder="Link url..."
                        className="w-2/3 h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                    />
                </div>
                <div className="w-full flex flex-row items-start">
                    <p className="w-1/5 font-bold">Mô tả</p>
                    <textarea className="w-2/3 p-3 border border-[#3e3e3e] resize-none rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]" name="comment" cols="30" rows="5" placeholder="Mô tả..."></textarea>
                </div>
                <div className="w-full flex flex-row items-start">
                    <div className="w-1/5"></div>
                    <div className="w-1/3">
                        <CommonButton>
                            + THÊM
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFarm;