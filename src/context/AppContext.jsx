import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const AppContext = createContext({})

export const AppProvider = ({ children }) => {

    const [breadcrumb, setBreadcrumb] = useState({
        mainSelect: "Đơn hàng",
        icon: "fa-solid fa-chart-simple",
        childSelect: ""
    })

    const [farms, setFarms] = useState([])
    const [items, setItems] = useState([])
    const [vouchers, setVouchers] = useState([])
    const [orders, setOrders] = useState([])

    //farm
    const fetchFarm = () => {
        axios.get("http://localhost:8082/farms")
            .then((res) => {
                setFarms(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //item
    const fetchItem = () => {
        axios.get("http://localhost:8082/items")
            .then((res) => {
                setItems(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const fetchVoucher = () => {
        axios.get("http://localhost:8082/vouchers")
            .then((res) => {
                setVouchers(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const fetchOrder = () => {
        axios.get("http://localhost:8082/orders")
            .then((res) => {
                setOrders(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchFarm()
        fetchItem()
        fetchVoucher()
        fetchOrder()
    }, [])


    return <AppContext.Provider value={{
        breadcrumb, setBreadcrumb,
        farms, setFarms, fetchFarm,
        items, setItems, fetchItem,
        vouchers, setVouchers, fetchVoucher,
        orders, setOrders, fetchOrder
    }}>
        {children}
    </AppContext.Provider>
}