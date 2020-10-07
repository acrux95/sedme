const reducer = (state, action) => {
    switch(action.type){
        case 'LOGIN_REQUEST':
            return {
              ...state,
              user: action.payload,
              }
        case 'LOGOUT_REQUEST':
          return {
            ...state,
            user: action.payload,
            }
        case 'REGISTER_REQUEST':
            return {
            ...state,
            user: action.payload,
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload)) 
                || state.originals.find(item => item.id === Number(action.payload))
                || []
            }
            
        default:
            return state;
    }
};
export default reducer;
