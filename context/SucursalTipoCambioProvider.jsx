import axios from "axios";
import { createContext, useState } from "react"
import clientAxios from "../config/axios";

import { formatDateOk, formatearFecha, lastFecha } from "../helpers/helpers"

const SucursalTipoCambioContext = createContext()

const SucursalTipoCambioProvider = ({children}) => {

    const [sucursal, setSucursal] = useState(null)
    const [tipoCambioBySucursales, setTipoCambioBySucursales] = useState([])
    const [loading, setLoading] = useState(false)
    const [modalFormChangeDate, setModalFormChangeDate] = useState(false)
    const [currentRate, setCurrentRate] = useState({})

    const submitSucursal = async idSucursal => {
        await searchTipoCambio(idSucursal)
    }

    const searchTipoCambio = async idSucursal => {
        setTipoCambioBySucursales({})
        setLoading(true)
        try {
            // //console.log(idSucursal)
            const urlData = `/dates/${idSucursal}`
            // let url = `http://localhost:4000/api/dates/${idSucursal}`;
            //console.log(urlData)
            const { data } = await clientAxios(urlData)
            console.log(data)
            setTipoCambioBySucursales(data)
            console.log(tipoCambioBySucursales)
        } catch (error) {
            //console.log(`Error: ${error}`)
        }
        setLoading(false)
    }

    const submitUpdateCurrentRate = async idSucursal => {
        await updateTipoCambio(idSucursal)
    }

    const updateTipoCambio = async idSucursal => {
        //console.log(idSucursal)
        //console.log(modalFormChangeDate)
        try {
            const url = `/dates/${idSucursal.generateId}`
            const { data } = await clientAxios.put(url, idSucursal)
            // //console.log(data)
            const changeRateUpdate = tipoCambioBySucursales.map(tipoCambioState => tipoCambioState.RateDate === data.RateDate ? data : tipoCambioState)
            setTipoCambioBySucursales(changeRateUpdate)
            setModalFormChangeDate(false)
            // //console.log(`clickk here`)
        } catch (error) {
            //console.log(`Error: ${error}`)
        }
    }

    const handleEditModal = infoCurrency => {
        //console.log(infoCurrency)
        setCurrentRate(infoCurrency)
        setModalFormChangeDate(!modalFormChangeDate)
    }

    return (
        <SucursalTipoCambioContext.Provider
            value={{
                sucursal,
                setSucursal,
                submitSucursal,
                tipoCambioBySucursales,
                loading,
                modalFormChangeDate,
                handleEditModal,
                currentRate,
                submitUpdateCurrentRate,
                
            }}
        >
            {children}
        </SucursalTipoCambioContext.Provider>
    )
}

export {
    SucursalTipoCambioProvider
}

export default SucursalTipoCambioContext