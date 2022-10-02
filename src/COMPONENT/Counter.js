import React, { useReducer} from 'react'


let initialState = {
  firstCount:0,
  secondCount:10
};

const reducer = (state,action) =>{
  switch(action.type){
    case "increament":
      return {...state,firstCount:state.firstCount + action.payload};
    case "decreament":
      return {...state,firstCount:state.firstCount - action.payload}
    case "increament2":
      return{
        ...state,
        secondCount:state.secondCount + action.payload

      }
    case "decreament2":
      return{
        ...state,
        secondCount:state.secondCount - action.payload
      }
    default:
      return state;
  }
}

const Counter = () => {
   const [count , dispatch] = useReducer(reducer,initialState)

  return (
    <>

         <button onClick={()=>dispatch({type:'increament',payload:1})}>increamentbyone=: {count.firstCount} </button>
         <br></br>
         <button onClick={()=>dispatch({type:'decreament',payload:1})}>Decreamentbyone=: {count.firstCount} </button>
          <br></br>
         <button onClick={()=>dispatch({type:'increament',payload:5})}>increamentbyfive=: {count.firstCount} </button>
         <br></br>
         <button onClick={()=>dispatch({type:'decreament',payload:5})}>Decreamentbyfive=: {count.firstCount} </button>
             <br></br>
         <button onClick={()=>dispatch({type:'increament2',payload:2})}>second counter increament=:{count.secondCount} </button>
         <br></br>
         <button onClick={()=>dispatch({type:'increament2',payload:2})}>second counter decreament=:{count.secondCount}</button>
        


      
    </>
  )
}

export default Counter
