import { useId } from "react"

export default (props) => {

    const id = useId()

    return (
        <input
            id={id}
            name={id}
            {...props}
        />
    )
}