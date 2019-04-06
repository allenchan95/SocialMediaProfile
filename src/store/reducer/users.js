import { CHANGE_SEARCH_FIELD,
		 REQUEST_USERS_PENDING,
		 REQUEST_USERS_SUCCESS,
		 REQUEST_USERS_FAILED,
		 REQUEST_POSTS_PENDING,
		 REQUEST_POSTS_SUCCESS,
		 REQUEST_POSTS_FAILED,
		 UPDATE_POSTS

} from '../action/actionType' ;

const intialStateRobot = {
		isPending : false,
		robots : [],
		error : '',
		searchField: '',
		posts : []
	}



const requestRobots = (state=intialStateRobot,action={}) =>{
	switch(action.type){
		case REQUEST_USERS_PENDING:
			return Object.assign({},state,{isPending: true})
		case REQUEST_USERS_SUCCESS:
			return Object.assign({},state,{robots: action.payload, isPending: false})
		case REQUEST_USERS_FAILED:
			return Object.assign({},state,{error: action.payload, isPending: false})
		case REQUEST_POSTS_PENDING:
			return Object.assign({},state,{isPending: true})
		case REQUEST_POSTS_SUCCESS:
			return Object.assign({},state,{posts: action.payload, isPending: false})
		case REQUEST_POSTS_FAILED:
			return Object.assign({},state,{error: action.payload, isPending: false})
		case  CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField:action.payload})
		case UPDATE_POSTS:
			{	
				const newPosts = state.posts;
				newPosts.push(action.payload);
				return Object.assign({},state,{posts: newPosts, isPending: false})
			}

		default:
			return state;
	}

}

export default requestRobots;



