import React, { useContext, useState } from "react";
import ImageUpload from "../../components/Button/ImageUpload";
import CommonButton from "../../components/Button/CommonButton";
import CommonInput from "../../components/Search/CommonInput";
import CommonTextarea from "../../components/Search/CommonTextarea";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFarm = () => {
    const { fetchFarm } = useContext(AppContext)
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const [uploadImage, setUploadImage] = useState()

    async function handleAddFarm() {
        if (!uploadImage) {
            console.error("Hình ảnh chưa được chọn");
            return;
        }
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("phone", phone)
        formData.append("link", link)
        formData.append("info", description)
        formData.append("image", uploadImage)

        axios
            .post("http://localhost:8082/farms",
                formData
                ,
                { headers: { "Content-Type": "multipart/form-data" } }
            )
            .then((res) => {
                console.log(res.data);
                alert("Thêm trang trại thành công")
                navigate('/trang-trai')
            })
            .catch((err) => console.log(err))
            .finally(async () => {
                await fetchFarm()
            })
    }


    return (
        <form>
            <div className="w-full flex flex-row gap-5 items-start ">
                <div className="w-1/4">
                    <ImageUpload
                        setUploadImage={setUploadImage}
                    />
                </div>
                <div className="w-3/4 flex flex-col gap-5">
                    <p className="text-3xl font-bold mb-5">Thông tin trang trại</p>
                    <div className="w-full grid grid-cols-2 gap-5">
                        <CommonInput
                            name={"Tên trang trại"}
                            placeholder={"Tên trang trại..."}
                            type={"text"}
                            text={name}
                            setText={setName}
                        />
                        <CommonInput
                            name={"Email"}
                            placeholder={"Email"}
                            type={"text"}
                            text={email}
                            setText={setEmail}
                        />
                        <CommonInput
                            name={"Số điện thoại"}
                            placeholder={"Số điện thoại"}
                            type={"text"}
                            text={phone}
                            setText={setPhone}
                        />
                        <CommonInput
                            name={"Link trang web"}
                            placeholder={"Link trang web"}
                            type={"text"}
                            text={link}
                            setText={setLink}
                        />
                    </div>
                    <CommonTextarea
                        name={"Mô tả"}
                        placeholder={"Mô tả..."}
                        text={description}
                        setText={setDescription}
                    />
                    <div className="w-full flex justify-center items-center">
                        <div className="w-1/3">
                            <CommonButton
                                hoverColor={"[#7dc642]"}
                                onclick={handleAddFarm}
                            >
                                + THÊM
                            </CommonButton>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    );
}

export default AddFarm;