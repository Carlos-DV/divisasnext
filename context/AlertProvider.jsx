import { createContext, useState } from "react";

const AlertContext = createContext()

const AlertProvider = ({children}) => {

    const [alertContext, setAlertContext] = useState({})

    const handleAlert = (msg, error) => {
        // //console.log(msg, error)
            setAlertContext({
                msg,
                error,
            })
            setTimeout(() => {
                setAlertContext({})
            }, 3000);
    }
    
    return (
        <AlertContext.Provider
            value={{
                handleAlert,
                alertContext,
                setAlertContext,
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}

export {
    AlertProvider
}

export default AlertContext