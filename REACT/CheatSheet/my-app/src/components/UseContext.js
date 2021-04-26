import {useContext} from 'react'
import {GlobalContext} from "../App"

export default function UseContext() {

    const msg = useContext(GlobalContext)

    return (
        <div>
            <h1>{msg}</h1>
        </div>
    )
}
