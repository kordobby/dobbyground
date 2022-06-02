const dispatch = useDispatch();

const { todos } = userSelector((state) => state.todos);

const [newTodo, setNewTodo] = useState({
  id: 0,
  userId : 0,
  title : "",
  completed : false
})

const onChangeHandler = (event) => {
  const {value} = event.target;
  setNewTodo({
    ...state,
    id:todos.length+1,
    userId : todos.length+1,
    title : value
  })
}

const onSubmitHandler = (event) => {
  event.preventDefault();
  dispatch(addTodo(newTodo));

  return (
    <></>
  )

}

export default TodosHome;