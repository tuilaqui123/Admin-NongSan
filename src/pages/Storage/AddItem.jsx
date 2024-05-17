import React, { useContext, useState } from "react";
import ImageUpload from "../../components/Button/ImageUpload";
import CommonButton from "../../components/Button/CommonButton";
import CommonInput from "../../components/Search/CommonInput";
import CommonSelect from "../../components/Search/CommonSelect";
import CommonTextarea from "../../components/Search/CommonTextarea";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddItem = () => {

    const { farms, fetchItem } = useContext(AppContext)
    const navigate = useNavigate()

    const itemType = [
        {
            "name": "Thịt tươi"
        },
        {
            "name": "Hải sản"
        },
        {
            "name": "Rau củ"
        },
        {
            "name": "Trái cây"
        },
        {
            "name": "Gói nguyên liệu"
        }
    ]

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")
    const [farm, setFarm] = useState("")
    const [unit, setUnit] = useState("")
    const [unitText, setUnitText] = useState("")
    const [tag, setTag] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [description, setDescription] = useState("")
    const [procedure, setProcedure] = useState("")
    const [nutrition, setNutrition] = useState("")
    const [preservation, setPreservation] = useState("")
    const [uploadImage, setUploadImage] = useState()


    async function handleAddItem() {
        if (!uploadImage) {
            console.error("Hình ảnh chưa được chọn");
            return;
        }
        const formData = new FormData()
        formData.append("name", name)
        formData.append("type", type)
        formData.append("price", price)
        formData.append("unit", unit)
        formData.append("unitText", unitText)
        formData.append("description", description)
        formData.append("tag", tag)
        formData.append("quantity", quantity)
        formData.append("procedure", procedure)
        formData.append("nutrition", nutrition)
        formData.append("preservation", preservation)
        formData.append("image", uploadImage)

        axios
            .post("http://localhost:8082/items",
                formData
                ,
                { headers: { "Content-Type": "multipart/form-data" } }
            )
            .then((res) => {
                console.log(res.data);
                alert("Thêm sản phẩm thành công")
                navigate('/kho')
            })
            .catch((err) => console.log(err))
            .finally(async () => {
                await fetchItem()
            })

    }

    return (
        <div className="w-full flex flex-row gap-5 items-start ">
            <div className="w-1/4">
                <ImageUpload
                    setUploadImage={setUploadImage}
                />
            </div>
            <div className="w-3/4 flex flex-col gap-5">
                <p className="text-3xl font-bold">Thông tin sản phẩm</p>
                <div className="w-full grid grid-cols-2 gap-5">
                    <CommonInput
                        name={"Tên sản phẩm"}
                        placeholder={"Tên sản phẩm"}
                        type={"text"}
                        text={name}
                        setText={setName}
                    />
                    <CommonSelect
                        name={"Loại"}
                        title={"Loại"}
                        data={itemType}
                        text={type}
                        setText={setType}
                    />
                    <CommonInput
                        name={"Giá"}
                        placeholder={"Giá"}
                        type={"number"}
                        text={price}
                        setText={setPrice}
                    />
                    <CommonSelect
                        name={"Nông trại"}
                        title={"Nông trại"}
                        data={farms}
                        text={farm}
                        setText={setFarm}
                    />
                    <CommonInput
                        name={"Đơn vị"}
                        placeholder={"Đơn vị"}
                        type={"text"}
                        text={unit}
                        setText={setUnit}
                    />
                    <CommonInput
                        name={"Chi tiết đơn vị"}
                        placeholder={"Chi tiết đơn vị"}
                        type={"text"}
                        text={unitText}
                        setText={setUnitText}
                    />
                    <CommonInput
                        name={"Nhãn giảm giá"}
                        placeholder={"Nhãn giảm giá %"}
                        type={"number"}
                        text={tag}
                        setText={setTag}
                    />
                    <CommonInput
                        name={"Số lượng"}
                        placeholder={"Số lượng"}
                        type={"number"}
                        text={quantity}
                        setText={setQuantity}
                    />
                </div>
                <CommonTextarea
                    name={"Mô tả"}
                    placeholder={"Mô tả"}
                    text={description}
                    setText={setDescription}
                />
                <CommonTextarea
                    name={"Quy trình"}
                    placeholder={"Quy trình"}
                    text={procedure}
                    setText={setProcedure}
                />
                <CommonTextarea
                    name={"Giá trị dinh dương & công dụng"}
                    placeholder={"Giá trị dinh dương & công dụng"}
                    text={nutrition}
                    setText={setNutrition}
                />
                <CommonTextarea
                    name={"Cách bảo quản & sử dụng"}
                    placeholder={"Cách bảo quản & sử dụng"}
                    text={preservation}
                    setText={setPreservation}
                />
                <div className="w-full flex justify-center items-center">
                    <div className="w-1/3">
                        <CommonButton
                            hoverColor={"[#7dc642]"}
                            onclick={handleAddItem}
                        >
                            + THÊM
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddItem;