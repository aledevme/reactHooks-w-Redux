
const counter = (state = {
    number: 0
}, action) => {
    switch(action.type){
        case "INCREMENT": 
            return {
                ...state,
                number: state.number
            }
        case "DECREMENT":
            return {
                ...state,
                number: state.number
            }
        default:
            return state
    }  
} 

export default counter