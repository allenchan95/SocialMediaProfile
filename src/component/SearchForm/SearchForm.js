import React,{useEffect} from 'react';
import classes from './SearchForm.module.css';
import { connect } from 'react-redux';
import {requestUsers,setSearchField} from '../../store/action/users'
const searchForm = (props) => {


useEffect(()=>{
  props.onRequestUsers();

},[])
const filterRobots =  props.users.filter(robot =>{
      return robot.username.toLowerCase().includes(props.searchField.toLowerCase());
    })
console.log(filterRobots);

const form= <div> 
    <div className={classes.cardList}>
      {  
        filterRobots.map((user,i) => {
          return (
        
            <div className={classes.card}
               key={i} 
              onClick={()=>props.onCardClicked(filterRobots[i].username,filterRobots[i].name,filterRobots[i].email,filterRobots[i].id)}
             >
           
             <img src = {`https://robohash.org/${filterRobots[i].username}`} alt='avatar' />
             <br/>
             {filterRobots[i].username}
             </div>
             
           );
        })
      }  
      </div>
    </div>

return (
	<div>
	<div className={classes.searchForm}>
		<input type='text' value={props.searchField} placeholder='keywords' onChange={(event)=>props.onSearchChange(event)}/>
    </div>
    {form}
    </div>
      );
 }

const mapStateToPrpos = (state) => {
  return {
    searchField: state.user.searchField,
    users: state.user.robots,
    isPending: state.user.isPending,
    error: state.user.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestUsers: () => dispatch(requestUsers())
    }
}

export default connect(mapStateToPrpos,mapDispatchToProps)(searchForm);