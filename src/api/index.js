import axios from "axios"
import { useEffect, useState } from "react"

export const Url = axios.create({
    baseURL: "http://ipwho.is/"
})

export default (value) => {

    const [dataIP, setDataIP] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const getDataIP = async () => {
        try {
            setIsLoading(true)
            const res = await Url.get(value)
            setDataIP(res.data)
            setIsLoading(false)
        } catch (err) {
            console.log(err);
            setError("Invalid IP address")
            setIsLoading(false)
            throw new Error("Invalid IP address")
        }
    }

    useEffect(() => {
        getDataIP()
    }, [value])

    return {
        isLoading,
        dataIP,
        error
    }
}