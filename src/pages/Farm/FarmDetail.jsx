import React from "react";
import ImageUpload from "../../components/Button/ImageUpload";
import CommonButton from "../../components/Button/CommonButton";

const FarmDetail = () => {
    return (
        <div className="w-full flex flex-row gap-5 items-start ">
            <div className="w-1/4">
                <ImageUpload />
            </div>
            <div className="w-3/4 flex flex-col gap-5">
                <p className="text-3xl font-black mb-5 text-[#7dc642]  ">Công ty Thiên nhiên Việt</p>
                <div className="w-full grid grid-cols-2 gap-5">
                    <div className="w-full flex flex-col gap-2">
                        <p className="font-bold">Tên trang trại</p>
                        <input
                            type="text"
                            placeholder="Tên trang trại..."
                            className="h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <p className="font-bold">Email</p>
                        <input
                            type="text"
                            placeholder="Email..."
                            className="h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <p className="font-bold">Số điện thoại</p>
                        <input
                            type="text"
                            placeholder="Số điện thoại..."
                            className="h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <p className="font-bold">Link trang web</p>
                        <input
                            type="text"
                            placeholder="Link url..."
                            className="h-[50px] border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642] rounded-lg pl-3"
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <p className="font-bold">Mô tả</p>
                    <textarea className="p-3 border border-[#3e3e3e] resize-none rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]" name="comment" cols="30" rows="4" placeholder="Mô tả..."></textarea>
                </div>
                <div className="w-full flex justify-center items-center">
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

export default FarmDetail;