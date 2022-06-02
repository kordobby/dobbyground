

// import { useSelector, useDispatch } from ' redux?? 어디더라'
// import addTodoFunc from '../reducer'

const TodoComponent = () => {

//dispatch
const dispatch = useDispatch();

//useSelector
const { todos } = useSelector( (state) => (state.reducer))

// set New data
const [newData, setNewData] = useState({
  id: 0,
  userId :0,
  title : "",
  completed: false
})

// Handler : onSubmit & onChange
const onChangeHandler = (e) => {
  const { value } = e.target;
  setNewData({
    ...newData,
    id : todos.length +1,
    userId : todos.length +1,
    title : value
  })
}

const onSubmitHandler = (e) => {
  e.preventDefault();
  dispatch(addTodoFunc(newData));
}





  return (
    <>
    </>
  )
}