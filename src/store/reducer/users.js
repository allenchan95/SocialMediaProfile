import { CHANGE_SEARCH_FIELD,
		 REQUEST_USERS_PENDING,
		 REQUEST_USERS_SUCCESS,
		 REQUEST_USERS_FAILED

} from '../action/actionType' ;

const intialStateRobot = {
		isPending : false,
		robots : [],
		error : '',
		searchField: ''
	}



const requestRobots = (state=intialStateRobot,action={}) =>{
	switch(action.type){
		case REQUEST_USERS_PENDING:
			return Object.assign({},state,{isPending: true})
		case REQUEST_USERS_SUCCESS:
			return Object.assign({},state,{robots: action.payload, isPending: false})
		case REQUEST_USERS_FAILED:
			return Object.assign({},state,{error: action.payload, isPending: false})
		case  CHANGE_SEARCH_FIELD:
			 return Object.assign({}, state, {searchField:action.payload});
		default:
			return state;
	}

}

export default requestRobots;



