import { useContext } from "react"
import { HomeContext } from "../../context/HomeContextProvider"
import Api from "./../../api"
import Image from "../Common/Image"

export default () => {

    const { result } = useContext(HomeContext)

    const { isLoading, dataIP } = Api(result)

    return (
        dataIP.success
            ? (
                <div className="my-16 py-4">
                    <div className="flex justify-between items-start mb-16">
                        <div className="font-manrope">
                            <span className="text-secondary-gray-color text-[15px] font-normal inline-block pb-3"> IP Address </span>
                            <h4 className="text-primary-dark-color text-3xl font-bold">
                                {
                                    !isLoading ? dataIP.ip : "Loading ..."
                                }
                            </h4>
                        </div>
                        {
                            !isLoading && <Image className="rounded-lg" src={dataIP.flag.img} alt="flag-icon" width={55} />
                        }
                    </div>

                    <div className="flex justify-between items-start mb-16">
                        <div className="font-manrope">
                            <span className="text-secondary-gray-color text-[15px] font-normal inline-block pb-3"> Location </span>
                            <h4 className="text-primary-dark-color text-3xl font-bold">
                                {
                                    !isLoading ? `${dataIP.country}, ${dataIP.region.split(" ")[0]}, ${dataIP.city}` : "Loading ..."
                                }
                            </h4>
                        </div>
                    </div>

                    <div className="flex justify-between items-start mb-16">
                        <div className="font-manrope">
                            <span className="text-secondary-gray-color text-[15px] font-normal inline-block pb-3"> Capital </span>
                            <h4 className="text-primary-dark-color text-3xl font-bold">
                                {
                                    !isLoading ? `${dataIP.capital}` : "Loading ..."
                                }
                            </h4>
                        </div>
                    </div>

                    <div className="flex justify-between items-start mb-16">
                        <div className="font-manrope">
                            <span className="text-secondary-gray-color text-[15px] font-normal inline-block pb-3"> Time Zone </span>
                            <h4 className="text-primary-dark-color text-3xl font-bold">
                                {
                                    !isLoading ? `${dataIP.timezone.id}, ${dataIP.timezone.utc}` : "Loading ..."
                                }
                            </h4>
                        </div>
                    </div>

                    <div className="flex justify-between items-start mb-16">
                        <div className="font-manrope">
                            <span className="text-secondary-gray-color text-[15px] font-normal inline-block pb-3"> Borders Country </span>
                            <h4 className="text-primary-dark-color text-3xl font-bold">
                                {
                                    !isLoading ? `${dataIP.borders.split(",").slice(0, 7)}` : "Loading ..."
                                }
                            </h4>
                        </div>
                    </div>
                </div>
            )
            : (
                <div className="my-16 py-4">
                    <h4 className="text-primary-dark-color text-3xl font-bold">
                        {dataIP.message}
                    </h4>
                </div>
            )
    )
}