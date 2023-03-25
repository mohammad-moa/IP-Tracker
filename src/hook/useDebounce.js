import { useEffect, useState } from "react"

export default (value, delay) => {
    const [debounceSearch, setDebounceSearch] = useState(value)

    useEffect(() => {
        let setTime = setTimeout(() => {
            setDebounceSearch(value)
        }, delay);

        return () => clearTimeout(setTime)
    }, [value, delay])

    return debounceSearch
}