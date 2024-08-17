import plant from '../plant.json'
import { combineReducers } from 'redux'

export const cartReducer = (state=[], action) => {
    let index
    let check = false

    let newState = [...state]
    console.log('new State: ', newState)
    switch(action.type){
        case 'add' :
            state.forEach((e) => {
                if(e.plant_id == action.payload.id){
                    check = true
                    index = state.indexOf(e)
                }
            })
            // check ? state[index].quantity += +action.payload.num : state.push({plant_id:action.payload.id, quantity: +action.payload.num, price: action.payload.price})
            return check ? [...state.slice(0,index), {plant_id:action.payload.id, quantity: state[index].quantity + +action.payload.num, price: action.payload.price}, ...state.slice(index + 1)] : [...state, {plant_id:action.payload.id, quantity: +action.payload.num, price: action.payload.price}];
        case 'del' :
            state.forEach((e) => {
                if(e.plant_id == action.payload){
                    index = state.indexOf(e)
                    state = state.slice(0,index).concat(state.slice(index + 1,state.length))
                    return state;
                }
            })
            return state;
        case 'dec' :
            state.forEach((e) => {
                if(e.plant_id == action.payload.id){
                    index = state.indexOf(e)
                }
            })
            // state[index].quantity > 1 ? state[index].quantity -= 1 : state = state.slice(0,index).concat(state.slice(index + 1,state.length))

            return state[index].quantity > 1 ? [...state.slice(0,index), {plant_id:action.payload.id, quantity: state[index].quantity - 1, price: action.payload.price}, ...state.slice(index + 1)] : state = state.slice(0,index).concat(state.slice(index + 1,state.length));
        case 'inc' :
            state.forEach((e) => {
                if(e.plant_id == action.payload.id){
                    index = state.indexOf(e)
                }
            })
            return [...state.slice(0,index), {plant_id:action.payload.id, quantity: state[index].quantity + 1, price: action.payload.price}, ...state.slice(index + 1)];
        default :
            return state;
    }
}

export const plantReducer = (state=plant['plants'], action) => {
    switch(action.type){
        default :
            return state

    }
}

export const allRed = combineReducers({
    cartReducer,
    plantReducer
})

// make full list of the items on the store with zero quantity to it and each item's id represents its index in the list.