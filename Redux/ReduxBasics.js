const redux = require('redux');

const createStore = redux.createStore;
const inicialState = {


    toolsProps: {
        perfil: { title: "Perfil", href: "/Profile" },
        usuarios: { title: "Usuarios", href: "/Users" },
        cursos: { title: "Cursos", href: "/Curses" },
        grupos: { title: "Encontrar Grupo", href : "/Groups" },
    },

counter: 0,

}
//Reducer
const rootReducer = (state = inicialState, action) => {


    if (action.type === 'START_COUNTER') {
        return {
            ...state,
            counter: 0,

        }
    }


    if (action.type === 'INC_COUNTER') {

        return {
            ...state,
            counter: state.counter + 1,

        }

    }
    if (action.type === 'ADD_COUNTER') {

        return {
            ...state,
            counter: state.counter + action.value,

        }

    }

    return (state)
}
//Store 

const store = createStore(rootReducer);
console.log("[State Setting]", store.getState())
//Subscription

store.subscribe(() => {
    console.log('[Subscription]', store.getState())
});
//Dispathing Actions
store.dispatch({ type: 'START_COUNTER', value: 0 })
store.dispatch({ type: 'INC_COUNTER' })
store.dispatch({ type: 'ADD_COUNTER', value: 10 })
console.log(store.getState())
