// dispatch.................
// useSelector
const TodoList = () => {

const dispatch = useDispatch;

const { todos } = useSelector((state) => state.reducer);  /// 내 리듀서는 reducer

const [newTodo, setNewTodo] = useState ({
  id:0,
  userId:0,
  titld :"",
  completed : false // 여기서 안바뀜
})

const onChangeHandler = (e) => {
  const { value } = e.target;
  setNewTodo({
    ...newTodo,
    id: todos.length +1
    //.....
    title : value
  })
};

const onSubmitHandler = (e) => {
  e.preventDefault();
  dispatch(addToDo(newTodo));
}







  return (
    <>
    </>
  );
}