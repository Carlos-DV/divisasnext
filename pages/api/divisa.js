import clientAxios from "../../config/axios"

export default async function handler(req, res) {
    try {
        const urlData = `/dates/${idSucursal}`
        const { data } = await clientAxios(urlData)
    } catch (error) {
        //console.log(`Error: ${error}`)
    }
  }