import React from "react";

const StatusBox = ({ bg, title, value, statistics, statisticsText }) => {
    return (
        <div className="w-full h-[150px] flex flex-col justify-between bg-slate-800 rounded-lg p-3">
            <div>
                <p className="text-xl font-bold text-white">Số lượng mã</p>
                <p className="text-5xl font-bold text-[#7dc642] mb-1">560</p>
            </div>
            <p className="text-sm text-white font-medium"><span className="text-red-500 text-lg pr-[2px]">10%</span> doanh thu</p>
        </div>
    );
}

export default StatusBox;