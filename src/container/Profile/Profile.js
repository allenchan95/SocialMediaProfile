import React, { Component } from 'react';
import ProfileNav from '../../component/profileNav/profileNav';
import Content from '../../component/Content/Content';
import Modal from '../../component/Modal/Modal';
import DataForm from '../../component/ProfileDataForm/ProfileDataForm';
import PostForm from '../../component/PostForm/PostForm';
import SreachForm from '../../component/SearchForm/SearchForm';


class Profile extends Component {
	state = {

		showModal: false,
		Modalstyle : "Modal ModalClosed",
		ProfileStyle: "Profile ProfileOpen",
		showUpdateForm: false,
		showIcon:false,
		showPostForm:false,
		posts:[],
		showSearch:true,
		userIconURL :  'https://pbs.twimg.com/profile_images/1105852053493088258/keQ6njSw_400x400.jpg',
		userName : '',
		intro: '',
		location: '',
		website: 'https://burgerbuilder-e577c.firebaseapp.com/',
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
		console.log("on onShowPostForm");
		this.setState({...this.state,showIcon:false,showModal:!this.state.showModal, Modalstyle : "Modal ModalOpen",showPostForm:true})
	}
	onShowSearchForm = () => {
		console.log("on show search form");
		this.setState({...this.state,showIcon:false,showModal:false,showPostForm:false,showSearch:true, Modalstyle : "Modal ModalClosed"})
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
	onCardClicked = (name,intro,location) => {
		this.setState({
			...this.state,
			userName:name,
			intro:intro,
			location:location,
			showSearch:false
		})
	}




  render() {
    return (
      <div className="Profile">
      	   <ProfileNav  showSearch={this.state.showSearch} onShowSearchFormClicked={this.onShowSearchForm} onPostFormClick={this.onShowPostForm} onUpdateFormClick={this.onShowUpdateForm} IconUrl={this.state.userIconURL} onIconClick={this.onShowIcon}  onNewPost={this.onSubmitNewPost}/>
      	   <Modal show={this.state.showModal} style={this.state.Modalstyle} closed={()=>this.onCloseModal()}>
      	   		{ this.state.showUpdateForm ? <DataForm  updateForm={this.onSubmitForm} icon={this.state.userIconURL} name={this.state.userName} intro={this.state.intro}  location= {this.state.location} website={this.state.website}  closed={()=>this.onCloseModal()} /> :null
      	   		} 
      	   		{this.state.showIcon ? <img src={this.state.userIconURL} alt='icon' />:null}
      	   		{this.state.showPostForm ? <PostForm updateForm={this.onSubmitNewPost}  closed={()=>this.onCloseModal()} />:null}
      	   </Modal>
           {this.state.showSearch? <SreachForm onCardClicked={this.onCardClicked} /> : <Content name={this.state.userName} intro={this.state.intro}  location= {this.state.location} website={this.state.website} posts={this.state.posts} />}
      </div>
    );
  }
}

export default Profile;
