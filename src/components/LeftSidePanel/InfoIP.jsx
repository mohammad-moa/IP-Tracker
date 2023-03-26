import Image from "../Common/Image"

import flagIcon from "./../../assets/images/flag-icon.svg"

export default () => {
    return (
        <div className="my-16 py-4">
            <div className="flex justify-between items-start mb-16">
                <div className="font-manrope">
                    <span className="text-secondary-gray-color text-[15px] font-normal inline-block pb-3"> IP Address </span>
                    <h4 className="text-primary-dark-color text-3xl font-bold"> 192.192.192.192 </h4>
                </div>
                <Image className="rounded-lg" src={flagIcon} alt="flag-icon" width={55} />
            </div>

            <div className="flex justify-between items-start mb-16">
                <div className="font-manrope">
                    <span className="text-secondary-gray-color text-[15px] font-normal inline-block pb-3"> Location </span>
                    <h4 className="text-primary-dark-color text-3xl font-bold"> Iran , Fars , Shiraz </h4>
                </div>
            </div>

            <div className="flex justify-between items-start mb-16">
                <div className="font-manrope">
                    <span className="text-secondary-gray-color text-[15px] font-normal inline-block pb-3"> Capital </span>
                    <h4 className="text-primary-dark-color text-3xl font-bold"> Tehran </h4>
                </div>
            </div>

            <div className="flex justify-between items-start mb-16">
                <div className="font-manrope">
                    <span className="text-secondary-gray-color text-[15px] font-normal inline-block pb-3"> Time Zone </span>
                    <h4 className="text-primary-dark-color text-3xl font-bold"> Asia/Tehran , +4:30 </h4>
                </div>
            </div>

            <div className="flex justify-between items-start mb-16">
                <div className="font-manrope">
                    <span className="text-secondary-gray-color text-[15px] font-normal inline-block pb-3"> currency </span>
                    <h4 className="text-primary-dark-color text-3xl font-bold"> Iranian Rials (ریال) </h4>
                </div>
            </div>
        </div>
    )
}