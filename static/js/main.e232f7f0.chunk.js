(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={Input:"Input_Input__32Ded",Label:"Input_Label__GrCtG",InputElement:"Input_InputElement__14dWf",Invalid:"Input_Invalid__21Tnp",ValidationError:"Input_ValidationError__35Dq2"}},11:function(e,t,a){e.exports={wrapper:"PostForm_wrapper__vzYkd",Button:"PostForm_Button__MQ79L",ImageList:"PostForm_ImageList__3HGEO",Image:"PostForm_Image__1c1Gs"}},18:function(e,t,a){e.exports={ImageContainer:"Image_ImageContainer__YGYOW",ImageBorder:"Image_ImageBorder__2uG-f",Image:"Image_Image__1pfzQ"}},23:function(e,t,a){},24:function(e,t,a){e.exports={ModalImage:"ImageGallery_ModalImage__1w_A2",ImageGallery:"ImageGallery_ImageGallery__2Pp9u"}},34:function(e,t,a){e.exports={Loader:"Spinner_Loader__29jS-","lds-dual-ring":"Spinner_lds-dual-ring__2Jy7v"}},36:function(e,t,a){e.exports={Button:"ProfileDataForm_Button__X6vC1"}},37:function(e,t,a){e.exports=a.p+"static/media/image-upload.83c59c46.png"},39:function(e,t,a){e.exports=a(74)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},5:function(e,t,a){e.exports={ImageFormContainer:"ImageUpload_ImageFormContainer__1DfrD",ImageForm:"ImageUpload_ImageForm__3W_PZ",ImageIcon:"ImageUpload_ImageIcon__2hNDT",img:"ImageUpload_img__3loqt",open:"ImageUpload_open__1XuCH",Input:"ImageUpload_Input__1_2M3",Button:"ImageUpload_Button__2Iswq",Form:"ImageUpload_Form__1OiRG",tag:"ImageUpload_tag__2LDcS"}},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),l=a.n(r),i=(a(44),a(12)),c=a(13),s=a(17),u=a(15),m=a(16),d=(a(45),a(2)),p=(a(46),a(4)),h=a(23),g=a.n(h),f=a(34),v=a.n(f),E=function(){return o.a.createElement("div",{className:v.a.Loader})},S=a(35),_=a.n(S),I=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},b=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},w=function(e){return function(t){setTimeout(function(){t(b())},1e3*e)}},y=Object(p.b)(function(e){return{token:e.auth.token,isAuthenticated:null!==e.auth.token,userId:e.auth.userId,loading:e.auth.loading}},function(e){return{onLogout:function(){return e(b())},onAuth:function(t,a,n){return e(function(e,t,a){return function(n){n({type:"AUTH_START"});var o={email:e,password:t,returnSecureToken:!0},r="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAXrU6Nlxlu3jibtiCMZQ8EpvVWZGzmC3w";a||(r="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAXrU6Nlxlu3jibtiCMZQ8EpvVWZGzmC3w"),_.a.post(r,o).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("userId",e.data.localId),localStorage.setItem("expirationDate",t),n(I(e.data.idToken,e.data.localId)),n(w(e.data.expiresIn))}).catch(function(e){n({type:"AUTH_FAIL",error:e.response.data.error})})}}(t,a,n))}}})(function(e){return o.a.createElement("div",{className:g.a.appcontainer},o.a.createElement("div",{className:g.a.nav},o.a.createElement("ul",null,e.loading?o.a.createElement(E,null):e.isAuthenticated?o.a.createElement("li",{onClick:function(){return e.onLogout()}},o.a.createElement("div",null,"SIGNOUT")):o.a.createElement("li",{onClick:function(){return e.onAuth("a@gmail.com","123123",!1)}},o.a.createElement("div",null,"SIGNIN")),o.a.createElement("li",null,o.a.createElement("button",{className:"button",onClick:e.onSearchClicked},"Search")))),e.children)}),C=Object(p.b)(function(e){return{isAuthenticated:null!==e.auth.token}},null)(function(e){return o.a.createElement("div",{className:"app-container"},o.a.createElement("div",{className:"container"},o.a.createElement(y,{className:"Nav",onSearchClicked:e.onShowSearchFormClicked}),o.a.createElement("div",{className:"bg"}),e.showSearch?null:o.a.createElement("nav",{className:"nav"},o.a.createElement("div",{className:"icon-container"},o.a.createElement("img",{className:"icon",src:e.IconUrl,alt:"icon",onClick:e.onIconClick})),o.a.createElement("div",{className:"profileNav"},e.isAuthenticated?o.a.createElement("ul",null,o.a.createElement("li",{onClick:e.onUpdateFormClick},o.a.createElement("p",null,"UPDATE PROFILE")),o.a.createElement("li",{onClick:e.onPostFormClick},o.a.createElement("p",null,"NEW POST"))):null))))}),O=(a(70),function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"name"},e.name),o.a.createElement("div",{className:"tag"},e.intro),o.a.createElement("div",{className:"tag"},e.location),o.a.createElement("div",{className:"tag"},o.a.createElement("a",{href:e.website,target:"_blank",rel:"noopener noreferrer"},"@",e.name)),o.a.createElement("div",{className:"tag"},"Joined May 2009"))}),N=(a(71),a(1)),j=a(24),U=a.n(j),k=(a(72),function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:e.style},e.children),e.show?o.a.createElement("div",{className:"Backdrop",onClick:e.closed}):null)}),T=a(18),F=a.n(T),M=function(e){return o.a.createElement("div",{className:F.a.ImageContainer},o.a.createElement("div",{className:F.a.ImageBorder},o.a.createElement("img",{className:F.a.Image,src:e.url,alt:"userImage",onClick:e.clicked})))},P=function(e){var t=Object(n.useState)(!1),a=Object(N.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),c=Object(N.a)(i,2),s=c[0],u=c[1],m=Object(n.useState)("Modal ModalClosed"),d=Object(N.a)(m,2),p=d[0],h=d[1],g=function(e){h("Modal ModalClosed"===p?"Modal ModalOpen":"Modal ModalClosed"),u(e),l(!r)};return o.a.createElement("div",null,o.a.createElement(k,{style:p,show:r,closed:function(){return g(s)}},r?o.a.createElement("img",{className:U.a.ModalImage,src:s,alt:"icon"}):null),o.a.createElement("div",{className:U.a.ImageGallery},e.imageList.map(function(e){return o.a.createElement(M,{key:e.config.id,url:e.config.url,clicked:function(){return g(e.config.url)}})})))},L=function(e){var t=[];for(var a in e.imageList)t.push({id:a,config:e.imageList[a]});return o.a.createElement("div",{className:"Project"},o.a.createElement("h3",null,e.title),o.a.createElement("div",{className:"content-body"},o.a.createElement("p",null,e.content.split("\n").map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("br",null))})," "),o.a.createElement("div",{className:"ImageList"},o.a.createElement(P,{imageList:t})),o.a.createElement("div",{className:"date"},e.date," ")))},A=(a(73),function(e){var t=[];for(var a in e.posts)t.push({id:a,config:e.posts[a]});var n=o.a.createElement("div",{className:"item2"},t.map(function(e){return o.a.createElement(L,{key:e.id,title:e.config.title,content:e.config.body,date:e.config.date,imageList:e.config.imageList})}));return o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{className:"item1"},o.a.createElement(O,{name:e.name,intro:e.intro,location:e.location,website:e.website})),n)}),R=a(10),x=a.n(R),D=function(e){var t=null,a=[x.a.InputElement];e.invalid&&e.shouldValidate&&e.touched&&a.push(x.a.Invalid);var n=null;switch(e.invalid&&e.touched&&(n=o.a.createElement("p",{className:x.a.ValidationError},"Please enter a valid value!")),e.elementType){case"input":t=o.a.createElement("input",Object.assign({className:a.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}));break;case"textarea":t=o.a.createElement("textarea",Object.assign({className:a.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}));break;case"select":t=o.a.createElement("select",{className:a.join(" "),onChange:e.changed,value:e.value},e.elementConfig.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=o.a.createElement("input",Object.assign({className:a.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}))}return o.a.createElement("div",null,o.a.createElement("label",{className:x.a.Label},e.label),t,n)},G=a(36),B=a.n(G),Q=function(e,t){return Object(d.a)({},e,t)},z=function(e,t){var a=!0;if(!t)return!0;if(t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),t.isEmail){a=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&a}if(t.isNumeric){a=/^\d+$/.test(e)&&a}if(t.isImage){a=/\.(jpg|png|gif)/.test(e)&&a}return a},H=function(e){var t=Object(n.useState)({icon:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Icon"},value:e.icon,validation:{required:!0,isImage:!1},valid:!1,touched:!1},name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:e.name,validation:{required:!0,minLength:4},valid:!1,touched:!1},intro:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Introduction"},value:e.intro,validation:{required:!0,maxLength:100},valid:!1,touched:!1},location:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Location"},value:e.location,validation:{required:!0},valid:!1,touched:!1}}),a=Object(N.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),c=Object(N.a)(i,2),s=c[0],u=c[1],m=[];for(var p in r)m.push({id:p,config:r[p]});var h=o.a.createElement("div",null,m.map(function(e){return o.a.createElement(D,{label:e.id,key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value?e.config.value:"",invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var a=Object(d.a)({},r),n=Object(d.a)({},a[t]);n.value=e.target.value,n.touched=!0,a[t]=n,n.valid=z(n.value,n.validation);var o=!0;for(var i in a)a[i].value&&(a[i].valid=z(a[i].value,a[i].validation)),o=a[i].valid&&o;u(o),l(a)}(t,e.id)}})}),o.a.createElement("button",{className:B.a.Button,onClick:function(){console.log("submit"),e.updateForm(r.icon.value,r.name.value,r.intro.value,r.location.value),e.closed()},disabled:!s},"Update"));return o.a.createElement("div",null,h)},q=a(11),V=a.n(q),W=a(5),Y=a.n(W),Z=a(37),J=a.n(Z),X=function(e){var t=Object(n.useState)(!1),a=Object(N.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),c=Object(N.a)(i,2),s=c[0],u=c[1],m=Object(n.useState)(!1),d=Object(N.a)(m,2),p=d[0],h=d[1],g=Object(n.useState)(!1),f=Object(N.a)(g,2),v=f[0],E=f[1],S=o.a.createElement("div",{className:Y.a.ImageForm},r?o.a.createElement("div",null,o.a.createElement("input",{className:Y.a.Input,type:"text",placeholder:"YOUR IMAGE URL HERE",onChange:function(e){var t=z(e.target.value,{isImage:!0});E(!0),h(t),u(e.target.value)}}),o.a.createElement("button",{className:Y.a.Button,disabled:!p,onClick:function(){e.upload("sadas",s),l(!r),E(!1),h(!1),console.log(s)}},"OKAY"),!p&&v?o.a.createElement("div",{className:Y.a.tag},"PLEASE ENTER VAILD IMAGE URL "):null):o.a.createElement("div",{className:Y.a.ImageIcon},o.a.createElement("img",{className:Y.a.img,src:J.a,alt:"icon",onClick:function(){l(!r),E(!1),h(!1)}})));return o.a.createElement("div",{className:Y.a.ImageFormContainer},S)},$=function(e){var t=Object(n.useState)({Title:{elementType:"input",elementConfig:{type:"text",placeholder:"POST TITLE"},value:e.icon,validation:{required:!0},valid:!1,touched:!1},Content:{elementType:"textarea",elementConfig:{type:"textarea",placeholder:"POST CONTENT"},value:e.name,validation:{required:!0,maxLength:200},valid:!1,touched:!1}}),a=Object(N.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),c=Object(N.a)(i,2),s=c[0],u=c[1],m=Object(n.useState)([]),p=Object(N.a)(m,2),h=p[0],g=p[1],f=[];for(var v in r)f.push({id:v,config:r[v]});var E=o.a.createElement("div",{className:V.a.wrapper},f.map(function(e){return o.a.createElement(D,{label:e.id,key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value?e.config.value:"",invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var a=Object(d.a)({},r),n=Object(d.a)({},a[t]);n.value=e.target.value,n.touched=!0,a[t]=n,n.valid=z(n.value,n.validation);var o=!0;for(var i in a)a[i].value&&(a[i].valid=z(a[i].value,a[i].validation)),o=a[i].valid&&o;u(o),l(a)}(t,e.id)}})}),o.a.createElement("div",{className:V.a.ImageList},h.map(function(e,t){return o.a.createElement("div",{onClick:function(){!function(e){var t=h[e],a=h.filter(function(e){return e!==t});g(a)}(t)},key:e.id,className:V.a.Image}," ",o.a.createElement("img",{src:e.url,alt:"uploaded"}))})),o.a.createElement(X,{upload:function(e,t){var a=[];for(var n in h)a.push({id:n,url:h[n].url});a.push({id:e,url:t}),g(a)}}),o.a.createElement("button",{className:V.a.Button,onClick:function(){console.log("submit"),e.updateForm(r.Title.value,r.Content.value,(new Date).toLocaleString(),h),e.closed()},disabled:!s},"Update"));return o.a.createElement("div",null,E)},K=a(9),ee=a.n(K),te=Object(p.b)(function(e){return{searchField:e.user.searchField,users:e.user.robots,isPending:e.user.isPending,error:e.user.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestUsers:function(){return e(function(e){e({type:"REQUEST_USERS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_USERS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_USERS_FAILED",payload:t})})})}}})(function(e){Object(n.useEffect)(function(){e.onRequestUsers()},[]);var t=e.users.filter(function(t){return t.username.toLowerCase().includes(e.searchField.toLowerCase())}),a=o.a.createElement("div",null,o.a.createElement("div",{className:ee.a.cardList},t.length>0?null:o.a.createElement("div",{className:ee.a.message},"NO RESULTS FOUND"),t.map(function(a,n){return o.a.createElement("div",{className:ee.a.card,key:n,onClick:function(){return e.onCardClicked(t[n].username,t[n].name,t[n].email,t[n].id)}},o.a.createElement("img",{src:"https://robohash.org/".concat(t[n].username),alt:"avatar"}),o.a.createElement("br",null),t[n].username)})));return o.a.createElement("div",null,o.a.createElement("div",{className:ee.a.searchForm},o.a.createElement("input",{className:ee.a.searchBar,type:"text",value:e.searchField,placeholder:"keywords",onChange:function(t){return e.onSearchChange(t)}})),a)}),ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showModal:!1,Modalstyle:"Modal ModalClosed",ProfileStyle:"Profile ProfileOpen",showUpdateForm:!1,showIcon:!1,showPostForm:!1,posts:[],showSearch:!0,userIconURL:"https://pbs.twimg.com/profile_images/1105852053493088258/keQ6njSw_400x400.jpg",userName:"",intro:"",location:"",website:"https://burgerbuilder-e577c.firebaseapp.com/"},a.onShowModal=function(){a.setState({showModal:!a.state.showModal,Modalstyle:"Modal ModalOpen"})},a.onCloseModal=function(){a.setState({showModal:!1,Modalstyle:"Modal ModalClosed",showUpdateForm:!1,showIcon:!1,showPostForm:!1})},a.onShowUpdateForm=function(){a.setState(Object(d.a)({},a.state,{showUpdateForm:!0,showModal:!a.state.showModal,Modalstyle:"Modal ModalOpen"}))},a.onCloseUpdateForm=function(){a.setState(Object(d.a)({},a.state,{showUpdateForm:!1,showModal:!a.state.showModal,Modalstyle:"Modal ModalOpen"}))},a.onShowIcon=function(){a.setState(Object(d.a)({},a.state,{showIcon:!0,showModal:!a.state.showModal,Modalstyle:"Modal ModalOpen"}))},a.onShowPostForm=function(){console.log("on onShowPostForm"),a.setState(Object(d.a)({},a.state,{showIcon:!1,showModal:!a.state.showModal,Modalstyle:"Modal ModalOpen",showPostForm:!0}))},a.onShowSearchForm=function(){console.log("on show search form"),a.setState(Object(d.a)({},a.state,{showIcon:!1,showModal:!1,showPostForm:!1,showSearch:!0,Modalstyle:"Modal ModalClosed"}))},a.onSubmitForm=function(e,t,n,o){console.log(e),a.setState(Object(d.a)({},a.state,{userIconURL:e,userName:t,intro:n,location:o}))},a.onSubmitNewPost=function(e,t,n,o){a.props.onUpdatePost({title:e,body:t,date:n,imageList:o})},a.onCardClicked=function(e,t,n,o){a.setState(Object(d.a)({},a.state,{userName:e,intro:t,userIconURL:"https://robohash.org/".concat(e),location:n,showSearch:!1})),a.props.onRequestUsers(o)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Profile"},o.a.createElement(C,{showSearch:this.state.showSearch,onShowSearchFormClicked:this.onShowSearchForm,onPostFormClick:this.onShowPostForm,onUpdateFormClick:this.onShowUpdateForm,IconUrl:this.state.userIconURL,onIconClick:this.onShowIcon,onNewPost:this.onSubmitNewPost}),o.a.createElement(k,{show:this.state.showModal,style:this.state.Modalstyle,closed:function(){return e.onCloseModal()}},this.state.showUpdateForm?o.a.createElement(H,{updateForm:this.onSubmitForm,icon:this.state.userIconURL,name:this.state.userName,intro:this.state.intro,location:this.state.location,website:this.state.website,closed:function(){return e.onCloseModal()}}):null,this.state.showIcon?o.a.createElement("img",{src:this.state.userIconURL,alt:"icon"}):null,this.state.showPostForm?o.a.createElement($,{updateForm:this.onSubmitNewPost,closed:function(){return e.onCloseModal()}}):null),this.state.showSearch?o.a.createElement(te,{onCardClicked:this.onCardClicked}):o.a.createElement(A,{name:this.state.userName,intro:this.state.intro,location:this.state.location,website:this.state.website,posts:this.props.posts}))}}]),t}(n.Component),ne=Object(p.b)(function(e){return{posts:e.user.posts,error:e.user.error}},function(e){return{onRequestUsers:function(t){return e(function(e){return function(t){t({type:"REQUEST_POSTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/posts?userId=".concat(e)).then(function(e){return e.json()}).then(function(e){return t({type:"REQUEST_POSTS_SUCCESS",payload:e})}).catch(function(e){return t({type:"REQUEST_POSTS_FAILED",payload:e})})}}(t))},onUpdatePost:function(t){return e(function(e){return function(t){t({type:"UPDATE_POSTS",payload:e})}}(t))}}})(ae),oe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignin()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ne,null))}}]),t}(n.Component),re=Object(p.b)(null,function(e){return{onTryAutoSignin:function(){return e(function(e){var t=localStorage.getItem("token");if(t){var a=new Date(localStorage.getItem("expirationDate"));if(a<=new Date)e(b());else{var n=localStorage.getItem("userId");e(I(t,n)),e(w((a.getTime()-(new Date).getTime())/1e3))}}else e(b())})}}})(oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=a(6),ie=a(38),ce={token:null,userId:null,error:null,email:null,name:null,loading:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return function(e,t){return Q(e,{token:null,userId:null,error:null,email:null,name:null,loading:!0})}(e);case"AUTH_SUCCESS":return function(e,t){return Q(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case"AUTH_FAIL":return function(e,t){return Q(e,{error:t.error,loading:!1})}(e,t);case"AUTH_LOGOUT":return function(e,t){return Q(e,{token:null,userId:null,error:null,email:null,name:null})}(e);default:return e}},ue={isPending:!1,robots:[],error:"",searchField:"",posts:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_USERS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_USERS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_USERS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});case"REQUEST_POSTS_PENDING":return Object.assign({},e,{posts:"",isPending:!0});case"REQUEST_POSTS_SUCCESS":return Object.assign({},e,{posts:t.payload,isPending:!1});case"REQUEST_POSTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});case"UPDATE_POSTS":var a=e.posts;return a.push(t.payload),Object.assign({},e,{posts:a,isPending:!1});default:return e}},de=le.d,pe=Object(le.c)({auth:se,user:me}),he=Object(le.e)(pe,de(Object(le.a)(ie.a))),ge=o.a.createElement(p.a,{store:he},o.a.createElement(re,null));l.a.render(ge,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__2LIzA",searchBar:"SearchForm_searchBar__1p90T",cardList:"SearchForm_cardList__1sGSd",card:"SearchForm_card__KaDoO",message:"SearchForm_message__1sW7k"}}},[[39,1,2]]]);
//# sourceMappingURL=main.e232f7f0.chunk.js.map