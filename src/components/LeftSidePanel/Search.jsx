import { useContext, useEffect } from "react"
import { HomeContext } from "../../context/HomeContextProvider"
import useDebounce from "../../hook/useDebounce"
import Image from "../Common/Image"
import Input from "../Common/Input"
import searchIcon from "./../../assets/images/search-icon.svg"

export default () => {

    const { searchValue, setSearchValue, setResult } = useContext(HomeContext)

    const debounceSearch = useDebounce(searchValue, 1000);

    const changeSearchValueHandler = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        if (debounceSearch) {
            setResult(debounceSearch)
        }
    }, [debounceSearch])

    const getMyIPHandler = () => {
        setResult("")
        setSearchValue("")
    }

    return (
        <div className="flex justify-between items-center py-5 px-5 bg-[#F2F2F2] rounded-[20px]">
            <div className="flex w-5/6">
                <Image
                    src={searchIcon}
                    alt="search-icon"
                    width={22}
                />
                <Input
                    className="w-full bg-transparent pl-5 text-[15px] font-manrope text-primary-dark-color placeholder:text-secondary-gray-color"
                    type="search"
                    placeholder="Search for IP Track ..."
                    value={searchValue}
                    onChange={changeSearchValueHandler}
                />
            </div>

            <button
                className="text-primary-dark-color text-[15px] font-semibold font-manrope"
                onClick={getMyIPHandler}
            >
                My IP
            </button>
        </div>
    )
}