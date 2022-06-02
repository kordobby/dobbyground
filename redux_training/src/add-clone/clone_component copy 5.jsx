const Todo = () => {

  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);

  const [ newTodo, setNewTodo ] = useState({
    id: 0,
    userId: 0,
    titie : "",
    completed : false
  })

  const onChangeHandler = (event) => {
    const {value} = event.target;
    setNewTodo({
      ...newTodo,
      id : todos.length+1,
      userId : todos.length+1,
      title : value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(newTodo));
  };
  

  return (
    <></>
  )
}