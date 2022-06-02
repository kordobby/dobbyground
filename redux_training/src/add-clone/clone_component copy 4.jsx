const Todo = () => {
  const dispatch = useDispatch;

  const { todos } = useSelector ((state) => state.todos );
  const [ newTodo, setNewTodo ] = useState({
    id:0,
    userId : 0,
    title: "",
    completed : false 
  })

  const OnchangeHandler = (e) => {
    const {value} = e.target;
    setNewTodo({
      ...newTodo,
      id: todos.length +1,
      title : value
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
  }








  return (
    <></>
  )
}