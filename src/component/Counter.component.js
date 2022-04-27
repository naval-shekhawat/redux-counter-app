import { useDispatch, useSelector} from "react-redux"
import {increment, decrement, reset} from "./../actions/counter.action"
import {Button } from "react-bootstrap"

function Counter () {

    let dispatch = useDispatch();
    let count = useSelector((state) => state.count)

    return (
        <div>
            <h2>{count}</h2>
            <Button variant="primary" className="m-2" onClick={() => dispatch(increment())}>INCREMENT</Button>
            <Button variant="primary" className="m-2" onClick={() => dispatch(decrement())}>DECREMENT</Button>
            <Button variant="secondary" className="m-2" onClick={() => dispatch(reset())}>RESET</Button>
        </div>
    )
}

export default Counter