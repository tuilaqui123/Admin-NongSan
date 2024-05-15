import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const AppContext = createContext({})

export const AppProvider = ({ children }) => {

    const [breadcrumb, setBreadcrumb] = useState({
        mainSelect: "Thống kê",
        icon: "fa-solid fa-chart-simple",
        childSelect: ""
    })

    const [farms, setFarms] = useState([])

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

    useEffect(() => {
        fetchFarm()
    }, [])

    return <AppContext.Provider value={{
        breadcrumb, setBreadcrumb,
        farms, setFarms, fetchFarm
    }}>
        {children}
    </AppContext.Provider>
}