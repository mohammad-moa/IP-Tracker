import LeftSidePanel from "../components/LeftSidePanel"
import RightSidePanel from "../components/RightSidePanel"

export default () => {
    return (
        <div className="flex justify-between items-start">
            <LeftSidePanel />
            <RightSidePanel />
        </div>
    )
}