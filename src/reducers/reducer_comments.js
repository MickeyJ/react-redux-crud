import { 
  GET_COMMENTS, 
  ADD_COMMENT, 
  DELETE_COMMENT,
} from '../actions/index'

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    
    case GET_COMMENTS:
      return { ...state, all: action.payload.data};
    
    case ADD_COMMENT:
      return { all: [action.payload.data[0], ...state.all]};
    
    case DELETE_COMMENT:
      return { ...state, all: state.all.filter(x => (
          x.id !== action.payload.data[0]
        ))};
    default:
      return state
  }
}
