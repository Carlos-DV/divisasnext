import { useContext } from "react";

import SucursalTipoCambioContext from "../context/SucursalTipoCambioProvider";

const useSucursalTipoCambio = () => {
    return useContext(SucursalTipoCambioContext)
}

export default useSucursalTipoCambio