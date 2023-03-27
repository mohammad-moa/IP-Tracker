import Footer from "./Footer"
import InfoIP from "./InfoIP"
import Search from "./Search"

export default () => {

    return (
        <div className="w-1/3 p-10 relative 2xl:h-screen">
            <Search />
            <InfoIP />
            <Footer />
        </div>
    )
}