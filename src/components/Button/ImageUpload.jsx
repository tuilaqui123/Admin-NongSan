import React, { useState } from "react";

const ImageUpload = () => {
    const [uploadImage, setUploadImage] = useState()
    function handleImageChange(event) {
        const file = event.target.files[0];
        const previewURL = URL.createObjectURL(file);
        setUploadImage(previewURL);
    }
    return (
        <div className="w-full">
            <div>
                <input type="file" name="upload_imgs[]" id="upload-img" hidden accept="image/*" onChange={handleImageChange} />
                <label htmlFor="upload-img" className="w-full h-[50px] flex flex-row items-center justify-center rounded-lg bg-[#3e3e3e] hover:bg-[#7dc642] duration-200 gap-2 cursor-pointer border">
                    <i className="fa-solid fa-camera text-white text-xl "></i>
                    <p className="text-white font-medium">Thêm hình ảnh</p>
                </label>
            </div>
            {uploadImage &&
                <div className="w-full relative">
                    <img src={uploadImage} className="w-full rounded-xl shadow-2xl mt-5" />
                    <i className="fa-solid fa-xmark absolute top-2 right-2 bg-white rounded-full px-[2px] cursor-pointer hover:bg-[#fc0307] hover:text-white" onClick={() => setUploadImage()}></i>
                </div>

            }
        </div>
    );
}

export default ImageUpload;