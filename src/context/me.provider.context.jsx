import { createContext, useState } from "react"

export const MeContext = createContext();

export const MeProviderContext = ({ children }) => {
    const dataMe = JSON.parse(localStorage.getItem('user-auth'));
    const [me, setMe] = useState(dataMe || null);

    return (
        <MeContext value={{ me, setMe }}>
            {children}
        </MeContext>
    )
}