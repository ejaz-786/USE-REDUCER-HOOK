
export const reducer = (state,action) =>{


    switch(action.type){
        case 'INCREAMENT':
            return{
               ...state,
               state:state + 1

            }
        case 'DECREAMENT':
            return{
                ...state,
                state:state - 1
            }
        default:
            return state
    }
}