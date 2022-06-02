const TodosHome = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);

  const [newtodo, setNewtodo] = useState ({
    id: 0,
    userId: 0,
    titld: "",
    completed: false
  })

  const OnchageHandler = (event) => {
    const {value} = event.target;
    setNewtodo({
      ...newTodo,
      id: todos.length+1,
      userId: todos.length +1,
      title : value
    })
  }

  const OnsubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(newTodo));
    }

  return (
    <>
    </>
  );
}

