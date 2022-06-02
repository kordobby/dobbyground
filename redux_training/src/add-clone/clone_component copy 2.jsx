import { useDispatch, useSeletor } from "react-redux";
import { addTodo } from "....";

const TodoHome = () => {
  const dispatch = useDispatch();

  const { todos } = useSeletor((state) => state.todos);

  const [newTodo, setNewTodo] = useState({
    id:0,
    userId:0,
    title : "",
    completed : false
  })

  const newTodoInputHandler = (e) => {
    const {value} = event.target;
    setNewTodo({
      ...newTodo,
      id : todos.length +1,
      userId : todos.length +1
      title : value
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(AddTodo(newTodo));
  }
  return ();
}