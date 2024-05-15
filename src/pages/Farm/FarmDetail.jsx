import React, { useState, useEffect, useContext } from "react";
import ImageUpload from "../../components/Button/ImageUpload";
import CommonButton from "../../components/Button/CommonButton";
import CommonInput from "../../components/Search/CommonInput";
import CommonTextarea from "../../components/Search/CommonTextarea";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const FarmDetail = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { fetchFarm } = useContext(AppContext)


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const [uploadImage, setUploadImage] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8082/farms/${params.farmID}`)
            .then((res) => {
                console.log(res.data)
                setName(res.data.name)
                setEmail(res.data.email)
                setPhone(res.data.phone)
                setLink(res.data.link)
                setDescription(res.data.info)
                setUploadImage(res.data.image)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [params.farmID])

    async function handleUpdate() {
        const temp = {
            name: name,
            email: email,
            phone: phone,
            link: link,
            info: description
        }

        axios
            .put(`http://localhost:8082/farms/${params.farmID}`,
                temp
            )
            .then((res) => {
                console.log(res.data);
                alert("Cập nhật trang trại thành công")
                navigate('/trang-trai')
            })
            .catch((err) => console.log(err))
            .finally(async () => {
                await fetchFarm()
            })
    }

    async function handleDelete() {
        axios
            .delete(`http://localhost:8082/farms/${params.farmID}`
            )
            .then((res) => {
                console.log(res.data);
                alert("Xoá trang trại thành công")
                navigate('/trang-trai')
            })
            .catch((err) => console.log(err))
            .finally(async () => {
                await fetchFarm()
            })
    }

    return (
        <div className="w-full flex flex-row gap-5 items-start ">
            <div className="w-1/4">
                <img
                    src={uploadImage}
                    className="border border-[#3e3e3e] rounded-md"
                />
            </div>
            <div className="w-3/4 flex flex-col gap-5">
                <div className="w-full flex flex-row items-center justify-between mb-5">
                    <p className="text-3xl font-bold">Thông tin trang trại</p>
                    <div className="w-1/3">
                        <CommonButton
                            hoverColor={"[#ff0000]"}
                            onclick={handleDelete}
                        >
                            Xoá trang trại
                        </CommonButton>
                    </div>
                </div>
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
                            onclick={handleUpdate}
                        >
                            + CẬP NHẬT
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FarmDetail;