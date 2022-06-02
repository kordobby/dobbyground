

// import : useState, useDispatch, useSeletor, actionFunc

const Component = () => {

  const dispatch = useDispatch();
  
  const { data } = useSelector( (state) => state.reducer );

  // make newData
  const [ newData, setNewData ] = useState({
    id : 0,
    userId : 0,
    completed : "done",
    title : ""
  })

  // onChangeHandler
  const onChangeHandler = (e) => {
    const {value} = e.target;
    newNewData = ({
      ...newData,
      id : data.length +1,
      userId : data.length +1,
      title : value
    })
  }

  // onSubmit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodoFunc(newData));
  }
  


  return (
    <>
    </>
  )
}