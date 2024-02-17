
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/CounterActions";


const Counter = () => {
    const count = useSelector((state) => state.counterR.count)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }

    return (
        <>

            <div className="">
                <p className="text-3xl font-semibold mb-3">
                    count:  {count}
                </p>
                <div className="flex justify-center">
                    <button className="border p-1 text-white bg-green-600 rounded-md mr-3" onClick={() => handleIncrement()}>
                        Increment
                    </button>
                    <button className="border p-1 text-white bg-green-600 rounded-md mr-3" onClick={() => handleDecrement()}>
                        Decrement
                    </button>
                    <button className="border p-1 text-white bg-green-600 rounded-md mr-3" onClick={() => handleReset()}>
                        Reset
                    </button>
                </div>


            </div>

        </>
    )
};

export default Counter;