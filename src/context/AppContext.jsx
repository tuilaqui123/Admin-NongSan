import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
    const [breadcrumb, setBreadcrumb] = useState({
        mainSelect: "Thống kê",
        icon: "fa-solid fa-chart-simple",
        childSelect: ""
    })

    console.log(breadcrumb)

    return <AppContext.Provider value={{
        breadcrumb, setBreadcrumb
    }}>
        {children}
    </AppContext.Provider>
}