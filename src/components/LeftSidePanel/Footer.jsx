import Image from "../Common/Image"

import arrowLeftRightIcon from "./../../assets/images/arrows-left-right-icon.svg"

export default () => {
    return (
        <div className="flex justify-between items-center">
            <div className="font-manrope">
                <h5 className="text-primary-dark-color text-lg font-semibold"> IP Tracker </h5>
                <span className="text-secondary-gray-color text-[13px] font-normal"> by Mohammad Ahrari </span>
            </div>
            <div className="bg-white p-3 shadow-gray-light-shadow rounded-xl absolute right-0 translate-x-1/2" role="button">
                <Image src={arrowLeftRightIcon} alt="arrow-left-right-icon" width={19} />
            </div>
        </div>
    )
}