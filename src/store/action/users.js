import { CHANGE_SEARCH_FIELD,
		 REQUEST_USERS_PENDING,
		 REQUEST_USERS_SUCCESS,
		 REQUEST_USERS_FAILED,
		 REQUEST_POSTS_PENDING,
		 REQUEST_POSTS_SUCCESS,
		 REQUEST_POSTS_FAILED,
		 UPDATE_POSTS

} from '../action/actionType' 
;
export const setSearchField = (text) =>({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestUsers = () => (dispatch) => {
	dispatch({ type: REQUEST_USERS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_USERS_SUCCESS, payload: data}))
		.catch(error =>dispatch({type:REQUEST_USERS_FAILED, payload:error}))
}

export const requestPosts = (id) => (dispatch) => {
	dispatch({ type: REQUEST_POSTS_PENDING });
	fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_POSTS_SUCCESS, payload: data}))
		.catch(error =>dispatch({type:REQUEST_POSTS_FAILED, payload:error}))

}

export const updatePosts = (post) => (dispatch) =>{
	dispatch({type: UPDATE_POSTS, payload: post})
}