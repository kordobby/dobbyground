import { getValue } from "@testing-library/user-event/dist/utils";

const Todo = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector( (state) => state.todos );

  const [ newTodo, setNewTodo ] = useState({
    id: 0,
    userId: 0,
    title : "",
    completed : false
  });

  const onChangeTodoTitleInput = (e) => {
    const { value } = event.target;
    setNewTodo({
      ...newTodo,
      id : todos.length +1,
      userId : todos.length +1,
      title : value
    })
    }
  
  const onSubmitNewTodo = (e) => {
    event.preventDefault();
    dispatch(addTodo(newTodo));
  };

  


  return (

  )
}