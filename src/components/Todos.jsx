import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodo } from '../services/actions/TodosActions';

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => {
        // console.log(state)
        return state.todoR
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTodo())
    }, [])
    // console.log(todos)
    return (
        <div>
            {isLoading || <h2 className='text-3xl my-5'>Alltodo:{todos.length}</h2>}
            <div className='grid grid-cols-3 gap-5'>
                {
                    todos && todos.map((todo, idx) => <div key={idx} className='bg-green-600 text-white rounded-md h-16 flex justify-center items-center p-2'>
                        <h3>
                            {todo.title}
                        </h3>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Todos;