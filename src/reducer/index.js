import AddTask from "../action"

const initialState = {
    title: ''
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case 'ADD_TASK': return {
            title: state.title
        }

        default: return state;
    }

}

export default reducer;