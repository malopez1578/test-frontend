import{R as e,a as t,c as a,b as s,d as r,u as c,e as l,g as n,r as o,f as i,h as m,P as d}from"./vendor.6b3a5d4e.js";var u="_main_18yic_1",_="_c-figure_j91wt_1",g="_c-image_j91wt_7",p="_c-user_j91wt_14",E="_c-user_text_j91wt_22";const v=({image:t,text:a})=>e.createElement("div",{className:p},e.createElement("p",{className:E},a),e.createElement("figure",{className:_},e.createElement("img",{className:g,src:t||"https://via.placeholder.com/150",alt:"imagen de perfil"})));t.interceptors.request.use((e=>(e.headers["app-id"]="61148597089c64bddb565e8e",e)));const f=a("posts/get",(async()=>{var e;return(await(e="post",t.get(`https://dummyapi.io/data/v1/${e}`))).data.data})),x=s({name:"getPosts",initialState:{listPosts:[]},extraReducers:{[f.fulfilled]:(e,{payload:t})=>{e.listPosts.push(...t)},[f.rejected]:(e,{payload:t})=>{},[f.pending]:(e,{payload:t})=>{}}}).reducer,N=s({name:"getPosts",initialState:{userProfile:{}},reducers:{setUserProfile(e,{payload:t}){e.userProfile=(null==t?void 0:t.profileObj)||{}}}}),{setUserProfile:P}=N.actions,w=r({getPostsReducer:x,getUserReducer:N.reducer}),h="443487308616-8puo8krnuakc6g65roott9q8sat6s9ql.apps.googleusercontent.com",y=()=>{const{userProfile:t}=c((e=>e.getUserReducer)),a=l();return e.createElement("div",null,t.name?e.createElement(n.exports.GoogleLogout,{clientId:h,buttonText:"Logout",onLogoutSuccess:e=>{a(P(e))}}):e.createElement(n.exports.GoogleLogin,{clientId:h,buttonText:"Login",onSuccess:e=>{a(P(e)),(e=>{let t=1e3*(e.tokenObj.expires_in||3300);const a=async()=>{const s=await e.reloadAuthResponse();t=1e3*(s.expires_in||3300),localStorage.setItem("authToken",s.id_token),setTimeout(a,t)};setTimeout(a,t)})(e)},onFailure:e=>{console.log("🚀 ~ file: index.js ~ line 9 ~ onFailure ~ res",e)},cookiePolicy:"single_host_origin",isSignedIn:!0}))};var k="_c-nav_3u6ye_1";const j=()=>{const{userProfile:t}=c((e=>e.getUserReducer));return console.log("🚀 ~ file: Nav.jsx ~ line 10 ~ Nav ~ userProfile",t),e.createElement("nav",{className:k},t.name&&e.createElement(v,{image:t.imageUrl,text:t.name}),e.createElement(y,null))};var b="_c-header_t2ua9_1",R="_c-logo_t2ua9_9";const S=()=>e.createElement("header",{className:b},e.createElement("div",{className:R},e.createElement("h6",null,"Blog Frontend")),e.createElement(j,null));var I={"c-card":"_c-card_13wet_1","c-card_image":"_c-card_image_13wet_10","c-card_tags":"_c-card_tags_13wet_22","c-card_text":"_c-card_text_13wet_40"};const U=({image:t,tags:a,text:s,owner:r,likes:c})=>{const l=`${r.firstName} ${r.lastName}`;return e.createElement("div",{className:I["c-card"]},e.createElement("div",{className:I["c-card_image"]},e.createElement("img",{src:t,alt:"Imagen referente al post."})),e.createElement("div",{className:I["c-card_info"]},e.createElement("div",{className:I["c-card_user"]},e.createElement(v,{image:r.picture,text:l})),e.createElement("div",{className:I["c-card_text"]},e.createElement("p",null,s))),e.createElement("div",{className:I["c-card_tags"]},a&&a.map(((t,a)=>e.createElement("span",{key:a},t)))))};var L="_c-main_1s7j4_1";const T=()=>{const{listPosts:t}=c((e=>e.getPostsReducer));return e.createElement("main",{className:L},t&&t.map((t=>e.createElement(U,{key:t.id,image:t.image,tags:t.tags,text:t.text,owner:t.owner,likes:t.likes}))))};function q(){const t=l();return o.exports.useEffect((()=>{t(f())}),[]),e.createElement("div",{className:u},e.createElement(S,null),e.createElement(T,null))}const F=i({reducer:w,middleware:e=>e({serializableCheck:!1})});m.render(e.createElement(d,{store:F},e.createElement(e.StrictMode,null,e.createElement(q,null))),document.getElementById("root"));