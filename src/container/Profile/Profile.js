import React, { Component } from 'react';
import ProfileNav from '../../component/profileNav/profileNav';
import Content from '../../component/Content/Content';
import Modal from '../../component/Modal/Modal';
import DataForm from '../../component/ProfileDataForm/ProfileDataForm';
import PostForm from '../../component/PostForm/PostForm';

class Profile extends Component {
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
		showPostForm:false,
		posts:[]
		}
	


	onShowModal = () =>{
		this.setState( {showModal:!this.state.showModal, Modalstyle : "Modal ModalOpen" });
	}
	onCloseModal = () => {
		this.setState( {showModal:false , Modalstyle : "Modal ModalClosed" ,showUpdateForm:false, showIcon:false,showPostForm:false});
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
	onShowPostForm = () => {
		this.setState({...this.state,showIcon:false,showModal:!this.state.showModal, Modalstyle : "Modal ModalOpen",showPostForm:true})
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
	onSubmitNewPost = (title,content,date) =>{
		const posts =this.state.posts.slice();
		posts.push({title:title,content:content,date:date});  
		this.setState({...this.state,
					posts:posts})
		
	} 
	


  render() {
    return (
      <div className="Profile">
      	   <ProfileNav onPostFormClick={this.onShowPostForm} onUpdateFormClick={this.onShowUpdateForm} IconUrl={this.state.userIconURL} onIconClick={this.onShowIcon}  onNewPost={this.onSubmitNewPost}/>
      	   <Modal show={this.state.showModal} style={this.state.Modalstyle} closed={()=>this.onCloseModal()}>
      	   		{ this.state.showUpdateForm ? <DataForm  updateForm={this.onSubmitForm} icon={this.state.userIconURL} name={this.state.userName} intro={this.state.intro}  location= {this.state.location} website={this.state.website}  closed={()=>this.onCloseModal()} /> :null
      	   		} 
      	   		{this.state.showIcon ? <img src={this.state.userIconURL} alt='icon' />:null}
      	   		{this.state.showPostForm ? <PostForm updateForm={this.onSubmitNewPost}  closed={()=>this.onCloseModal()} />:null}
      	   </Modal>
           <Content name={this.state.userName} intro={this.state.intro}  location= {this.state.location} website={this.state.website} posts={this.state.posts} />
      </div>
    );
  }
}

export default Profile;
