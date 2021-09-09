import produce from 'immer';
import createReducer from "./reducerUtil";
import User from '../../models/user'
const initialState = 

    User("sara")


const userReducer = {
    changeName(state, action) {
        state.name =action.payload;
    }
    
}


export default produce((state, action) => createReducer(state, action, userReducer), initialState);