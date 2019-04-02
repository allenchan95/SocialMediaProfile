import React, { Component } from 'react';
import './App.css';
import ProfileNav from './compontents/profileNav/profileNav';
import Content from './compontents/Content/Content';
import Modal from './compontents/Modal/Modal';
import DataForm from './compontents/ProfileDataForm/ProfileDataForm';
class App extends Component {
	state = {
		userIconURL :  'https://pbs.twimg.com/profile_images/1105852053493088258/keQ6njSw_400x400.jpg',
		userName : 'ALLEN',
		intro: 'HI THIS IS ALLEN',
		location: 'LOCATION',
		website: 'https://burgerbuilder-e577c.firebaseapp.com/',
		showModal: false,
		Modalstyle : "Modal ModalClosed",
		ProfileStyle: "Profile ProfileOpen",
		showUpdateForm: false,
		showIcon:false,
		posts:[
			{
				title:'project1',
				content: 'content'
			},
			{
				title:'project2',
				content: 'content'
			}
		]
		}
	


	onShowModal = () =>{
		this.setState( {showModal:!this.state.showModal, Modalstyle : "Modal ModalOpen" });
	}
	onCloseModal = () => {
		this.setState( {showModal:false , Modalstyle : "Modal ModalClosed" ,showUpdateForm:false, showIcon:false});
	}
	onShowUpdateForm = () => {
		this.setState({...this.state,showUpdateForm:true,showModal:!this.state.showModal, Modalstyle : "Modal ModalOpen"})
	}
	onCloseUpdateForm = () => {
		this.setState({...this.state,showUpdateForm:false,showModal:!this.state.showModal, Modalstyle : "Modal ModalOpen", })
	}
	onShowIcon = () => {
		this.setState({...this.state,showIcon:true,showModal:!this.state.showModal, Modalstyle : "Modal ModalOpen"})
	}

	onSubmitForm = (url,name,intro,location) => {
		console.log(url);
		this.setState({
			...this.state,
			userIconURL: url,
			userName:name,
			intro:intro,
			location:location
		})
	}
	onSubmitNewPost = () =>{
		const posts =this.state.posts.slice();
		posts.push({title:'NEW',content:"NEW"});  
		this.setState({...this.state,
					posts:posts})
		
	} 
	


  render() {
    return (
      <div className="App">
      	   <ProfileNav onUpdateFormClick={this.onShowUpdateForm} IconUrl={this.state.userIconURL} onIconClick={this.onShowIcon}  onNewPost={this.onSubmitNewPost}/>
      	   <Modal show={this.state.showModal} style={this.state.Modalstyle} closed={()=>this.onCloseModal()}>
      	   		{ this.state.showUpdateForm ? <DataForm  updateForm={this.onSubmitForm} icon={this.state.userIconURL} name={this.state.userName} intro={this.state.intro}  location= {this.state.location} website={this.state.website}  closed={()=>this.onCloseModal()} /> :null
      	   		} 
      	   		{this.state.showIcon ? <img src={this.state.userIconURL} alt='icon' />:null}
      	   </Modal>
           <Content name={this.state.userName} intro={this.state.intro}  location= {this.state.location} website={this.state.website} posts={this.state.posts}/>

      </div>
    );
  }
}

export default App;
