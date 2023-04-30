import { useContext } from "react";
// import AlertContext from "../context/AlertProvider";
import AlertContext from "../context/AlertProvider"

const useAlert = () => {
    return useContext(AlertContext)
}

export default useAlert