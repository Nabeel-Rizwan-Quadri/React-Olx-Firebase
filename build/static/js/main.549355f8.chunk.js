(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{59:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c(38),r=c.n(a),s=(c(59),c(30)),i=c(18),j=c(50),o=c(11),l=c(0),u=c.n(l),b=c(1),d=c(16),h=c(51),O=c(13),p=c(37);Object(h.a)({apiKey:"AIzaSyCABm4So3ommIUzXhKhKCe8oErz87GRFA4",authDomain:"auth-b432f.firebaseapp.com",projectId:"auth-b432f",storageBucket:"auth-b432f.appspot.com",messagingSenderId:"431034569828",appId:"1:431034569828:web:a12d94b9a7866e5cc33b71"});var x=Object(i.b)(),f=Object(O.g)(),m=Object(p.b)();function g(e){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(u.a.mark((function e(t){var c,n,a,r,s,j,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.email,n=t.password,a=t.fullName,r=t.age,s=t.phoneNumber,t.photoURL,e.next=3,Object(i.a)(x,c,n);case 3:return j=e.sent,o=j.user.uid,e.next=7,Object(i.f)(x.currentUser,{displayName:a});case 7:return e.next=9,Object(O.j)(Object(O.d)(f,"users",o),{fullName:a,email:c,age:r,uid:o,phoneNumber:s});case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(u.a.mark((function e(t,c){var n,a,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.d)(x,t,c);case 2:return n=e.sent,a=n.user.uid,r=Object(O.d)(f,"users",a),e.next=7,Object(O.e)(r);case 7:return(s=e.sent).exists()?console.log("Loggedin"):console.log("No such document!"),e.abrupt("return",Object(d.a)({uid:a},s.data()));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(b.a)(u.a.mark((function e(t){var c,n,a,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Firebase Before: ",t),c=t.images,n=[],a=0;case 4:if(!(a<c.length)){e.next=15;break}return r=Object(p.c)(m,"ads/"+c[a].name),e.next=8,Object(p.d)(r,c[a]);case 8:return e.next=10,Object(p.a)(r);case 10:s=e.sent,n.push(s);case 12:a++,e.next=4;break;case 15:return t.images=n,e.next=18,Object(O.a)(Object(O.b)(f,"ads"),t);case 18:alert("Data added successfully!");case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(u.a.mark((function e(t){var c,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=[],!t){e.next=9;break}return n=Object(O.i)(Object(O.b)(f,"ads"),Object(O.k)("title","==",t)),e.next=5,Object(O.f)(n);case 5:e.sent.forEach((function(e){var t=e.data();c.push(Object(d.a)(Object(d.a)({},t),{},{id:e.id}))})),e.next=14;break;case 9:return a=Object(O.i)(Object(O.b)(f,"ads"),Object(O.h)("createdAt","desc")),e.next=12,Object(O.f)(a);case 12:e.sent.forEach((function(e){var t=e.data();c.push(Object(d.a)(Object(d.a)({},t),{},{id:e.id}))}));case 14:return e.abrupt("return",c);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return S.apply(this,arguments)}function S(){return(S=Object(b.a)(u.a.mark((function e(t,c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("firebase edit: ",c),e.next=3,Object(i.f)(x.currentUser,{displayName:c.fullName});case 3:return console.log("Auth profile",x.currentUser),alert("Auth profile updated"),e.next=7,Object(O.j)(Object(O.d)(f,"users",t),c);case 7:alert("Data edited successfully!");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return L.apply(this,arguments)}function L(){return(L=Object(b.a)(u.a.mark((function e(t){var c,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],n={},a=Object(O.i)(Object(O.b)(f,"users")),e.next=5,Object(O.f)(a);case 5:for(e.sent.forEach((function(e){var t=e.data();c.push(t)})),r=0;r<c.length;r++)c[r].uid===t&&(n=c[r]);return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return I.apply(this,arguments)}function I(){return(I=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Ad deleted with ad id: ",t),e.next=3,Object(O.c)(Object(O.d)(f,"ads",t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return R.apply(this,arguments)}function R(){return(R=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i.e)(x);case 3:window.location.reload(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function T(e){return X.apply(this,arguments)}function X(){return(X=Object(b.a)(u.a.mark((function e(t){var c,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(O.d)(f,"ads",t),e.next=3,Object(O.e)(n);case 3:return a=e.sent,c=a.data(),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return U.apply(this,arguments)}function U(){return(U=Object(b.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=[],!t){e.next=9;break}return n=Object(O.i)(Object(O.b)(f,"ads"),Object(O.k)("uid","==",t)),e.next=5,Object(O.f)(n);case 5:e.sent.forEach((function(e){var t=e.data();c.push(Object(d.a)(Object(d.a)({},t),{},{id:e.id}))})),e.next=10;break;case 9:console.log("uid undefined");case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(66);var H=c(3);var M=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],j=s[1],l=Object(n.useState)(""),d=Object(o.a)(l,2),h=d[0],O=d[1],p=Object(n.useState)(),x=Object(o.a)(p,2),f=x[0],m=x[1],v=Object(n.useState)(),_=Object(o.a)(v,2),y=_[0],w=_[1],k=Object(n.useState)(""),C=Object(o.a)(k,2),E=C[0],S=C[1],A=Object(n.useState)("login"),L=Object(o.a)(A,2),P=L[0],I=L[1],D=function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g({email:c,password:i,fullName:h,age:f,phoneNumber:y,photoURL:E});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(c,i);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(H.jsx)("div",{className:"auth_body",children:Object(H.jsxs)("div",{className:"auth_view",children:[Object(H.jsx)("h1",{children:"OLX APP"}),Object(H.jsx)("div",{className:"auth_card",children:Object(H.jsxs)(H.Fragment,{children:["login"===P&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("h1",{style:{color:"wheat",padding:15},children:"Login"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{className:"auth_input",onChange:function(e){return a(e.target.value)},type:"email",placeholder:"Enter your email"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{className:"auth_input",onChange:function(e){return j(e.target.value)},type:"password",placeholder:"Enter your password"}),Object(H.jsx)("br",{}),Object(H.jsx)("button",{className:"auth_btn",onClick:R,children:"Login"}),Object(H.jsx)("br",{}),Object(H.jsx)("button",{className:"auth_btn",onClick:function(){I("signup")},children:"Dont Have an Account Register!"})]}),"signup"===P&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("h1",{style:{color:"wheat",padding:15},children:"Sign up"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{className:"auth_input",onChange:function(e){return O(e.target.value)},type:"name",placeholder:"Enter your name"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{className:"auth_input",onChange:function(e){return m(e.target.value)},type:"number",placeholder:"Enter your age"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{className:"auth_input",onChange:function(e){return w(e.target.value)},type:"number",placeholder:"Enter your phone no"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{onChange:function(e){return S(e.target.value)},type:"file"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{className:"auth_input",onChange:function(e){return a(e.target.value)},type:"email",placeholder:"Enter your email"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{className:"auth_input",onChange:function(e){return j(e.target.value)},type:"password",placeholder:"Enter your password"}),Object(H.jsx)("br",{}),Object(H.jsx)("button",{className:"auth_btn",onClick:D,children:"Sign up"}),Object(H.jsx)("br",{}),Object(H.jsx)("button",{className:"auth_btn",onClick:function(){I("login")},children:"click here for login"})]})]})})]})})},F=c(17);c(68);var G=function(e){var t=e.searchedItem;Object(n.useEffect)(Object(b.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:c=e.sent,s(c);case 4:case"end":return e.stop()}}),e)}))),[t]);var c=Object(n.useState)([]),a=Object(o.a)(c,2),r=a[0],s=a[1],i=Object(F.g)();return Object(H.jsxs)("div",{className:"allpost_body",children:[t?Object(H.jsxs)("h1",{children:['Search results for "',t,'"']}):Object(H.jsx)("h1",{children:"Product Listings"}),Object(H.jsx)("div",{className:"grid-container",children:r.map((function(e,t){return Object(H.jsxs)("div",{onClick:function(){return t=e.id,void i.push("/details/".concat(t));var t},children:[Object(H.jsx)("img",{height:"300",width:"300",alt:"ad image",src:e.images[0]?e.images[0]:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"}),Object(H.jsxs)("div",{className:"product__cardbody",children:[Object(H.jsx)("br",{}),Object(H.jsxs)("h3",{children:["Product Name: ",e.title]}),Object(H.jsx)("br",{}),Object(H.jsxs)("h3",{children:["Price: ",e.price,"/-"]}),Object(H.jsx)("br",{})]})]})}))})]})},J=c(23);function K(e){return{type:"REMOVE_SEARCHEDITEM",data:e}}c(70);var z=function(){var e=Object(s.b)(),t=function(){e(K())};return Object(H.jsx)("div",{children:Object(H.jsx)("nav",{className:"nav",children:Object(H.jsxs)("ul",{className:"ul",children:[Object(H.jsx)("li",{onClick:t,className:"li",children:Object(H.jsx)(J.b,{to:"/",children:"All categories"})}),Object(H.jsx)("li",{onClick:t,className:"li",children:Object(H.jsx)(J.b,{to:"/",children:"Cars"})}),Object(H.jsx)("li",{onClick:t,className:"li",children:Object(H.jsx)(J.b,{to:"/",children:"Phones"})}),Object(H.jsx)("li",{onClick:t,className:"li",children:Object(H.jsx)(J.b,{to:"/",children:"Others"})}),Object(H.jsx)("li",{onClick:t,className:"li",children:Object(H.jsx)(J.b,{to:"/createad",children:"Sell"})})]})})})};c(71);var V=function(){var e,t=Object(i.b)(),c=Object(F.g)(),a=Object(s.b)(),r=Object(n.useState)(),j=Object(o.a)(r,2),l=j[0],u=j[1],b=Object(n.useState)(""),d=Object(o.a)(b,2),h=d[0],O=d[1],p=Object(s.c)((function(e){return e.themeReducer.theme})),x=Object(s.c)((function(e){return e.searchReducer.searchedItem}));console.log("header searcheditem: ",x),Object(i.c)(t,(function(t){t?(e=t.displayName,u(e)):console.log("Header no user")}));var f=function(){console.log(h),a(function(e){return{type:"UPDATE_SEARCHEDITEM",data:e}}(h)),c.push("/")},m=function(){a(K()),O(""),c.push("/")},g=function(e){a(function(e){return{type:"UPDATE_THEME",data:e}}(e)),console.log("theme color",p),console.log("on click color",e)};return Object(H.jsx)("div",{className:"header_App",children:l?Object(H.jsxs)("div",{style:{background:p},className:"headder",children:[Object(H.jsx)("img",{onClick:m,width:"50",height:"30",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"}),Object(H.jsx)("input",{className:"search",placeholder:"Search products by name",onChange:function(e){return O(e.target.value)}}),Object(H.jsx)("button",{onClick:f,className:"searchButton",children:"Search"}),Object(H.jsx)("br",{}),Object(H.jsxs)("div",{class:"dropdown",children:[Object(H.jsx)("button",{class:"dropbtn",children:l}),Object(H.jsxs)("div",{class:"dropdown-content",children:[Object(H.jsx)("a",{onClick:function(){c.push("/editinfo")},children:"Edit Info"}),Object(H.jsx)("a",{onClick:function(){c.push("/currentuserads")},children:"My Ads"}),Object(H.jsx)("a",{className:"logout",onClick:D,children:"Logout"})]})]}),Object(H.jsxs)("div",{class:"dropdown",children:[Object(H.jsx)("button",{class:"dropbtn",children:"Select Theme"}),Object(H.jsxs)("div",{class:"dropdown-content",children:[Object(H.jsx)("a",{onClick:function(){return g("white")},children:"Light Theme"}),Object(H.jsx)("a",{onClick:function(){return g("grey")},children:"Dark Theme"})]})]})]}):Object(H.jsxs)("div",{className:"headder",children:[Object(H.jsx)("img",{onClick:m,width:"100",height:"50",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png "}),Object(H.jsx)("input",{className:"search",placeholder:"Search products by name",onChange:function(e){return O(e.target.value)}}),Object(H.jsx)("button",{className:"searchButton",onClick:f,children:"Search"}),Object(H.jsx)("br",{}),Object(H.jsx)("button",{onClick:function(){c.push("/auth")},className:"searchButton",children:"Login"}),Object(H.jsxs)("div",{class:"dropdown",children:[Object(H.jsx)("button",{class:"dropbtn",children:"Select Theme"}),Object(H.jsxs)("div",{class:"dropdown-content",children:[Object(H.jsx)("a",{onClick:function(){return g("white")},children:"Light Theme"}),Object(H.jsx)("a",{onClick:function(){return g("grey")},children:"Dark Theme"})]})]})]})})};c(72);var W=function(){return Object(H.jsx)("div",{children:Object(H.jsxs)("footer",{className:"footer__parent",id:"footer",children:[Object(H.jsx)("div",{className:"footer__main container-fluid",children:Object(H.jsxs)("div",{className:"section__parent row",children:[Object(H.jsxs)("section",{className:"footer__section col-lg-3 col-md-3 col-sm-6",children:["Popular Categories",Object(H.jsxs)("ul",{children:[Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Cars"})}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Flats for rent"})}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Jobs"})}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Mobile Phones"})})]})]}),Object(H.jsxs)("section",{className:"footer__section col-lg-2 col-md-2 col-sm-6",children:["Trending Searches",Object(H.jsxs)("ul",{children:[Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Bikes"})}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Watches"})}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Books"})}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Dogs"})})]})]}),Object(H.jsxs)("section",{className:"footer__section col-lg-2 col-md-2 col-sm-6",children:["About us",Object(H.jsxs)("ul",{children:[Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"About OLX Group"})}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"OLX Blog"})}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Contact Us"})}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"OLX for Businesses"})})]})]}),Object(H.jsxs)("section",{className:"footer__section col-lg-2 col-md-2 col-sm-6",children:["OLX",Object(H.jsxs)("ul",{children:[Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Help"})}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Sitemap"})}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{className:"footer__list",children:"Legal & Privacy information"})})]})]})]})}),Object(H.jsx)("div",{className:"footer__bottom",children:Object(H.jsx)("div",{className:"section__parent",children:Object(H.jsx)("h3",{children:"COPYRIGHT 2021 ALL RIGHTS RESERVED"})})})]})})};var Y=function(){var e=Object(s.c)((function(e){return e.searchReducer.searchedItem}));return Object(H.jsx)("div",{className:"App",children:Object(H.jsxs)("div",{className:"dashboard_app",children:[Object(H.jsx)("div",{className:"app_headder",children:Object(H.jsx)(V,{})}),Object(H.jsx)(z,{}),Object(H.jsx)(G,{searchedItem:e}),Object(H.jsx)(W,{})]})})},Z=c(5);c(73);var q=function(){Object(n.useEffect)(Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,A(h);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]);var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],r=c.fullName,s=c.email,j=c.age,l=c.phoneNumber;c.imageURL,c.uid,console.log("userdata ",c);var h,O=Object(F.g)(),p=Object(i.b)();Object(i.c)(p,(function(e){e&&(h=e.uid)}));var x=function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submit",c),console.log("submit",h),e.next=4,E(h,c);case 4:O.push("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e,t){var n=t.target.value;a(Object(d.a)(Object(d.a)({},c),{},Object(Z.a)({},e,n)))};return Object(H.jsxs)("div",{className:"editinfo_body",children:[Object(H.jsx)("div",{className:"app_headder",children:Object(H.jsx)(V,{})}),Object(H.jsx)(z,{}),Object(H.jsx)("div",{className:"editinfo_view",children:Object(H.jsxs)("div",{className:"editinfo_card",children:[Object(H.jsx)("h1",{style:{color:"wheat",padding:15},children:"Edit info"}),Object(H.jsx)("input",{value:r,placeholer:"Name",className:"editinfo_input",type:"string",onChange:function(e){return f("fullName",e)}}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{value:s,placeholer:"email",className:"editinfo_input",type:"email",onChange:function(e){return f("email",e)}}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{value:j,placeholer:"age",className:"editinfo_input",type:"number",onChange:function(e){return f("age",e)}}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{value:l,placeholer:"phoneNumber",className:"editinfo_input",type:"number",onChange:function(e){return f("phoneNumber",e)}}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{type:"file",onChange:function(e){return f("imageURL",e)}}),Object(H.jsx)("br",{}),Object(H.jsx)("button",{className:"editinfo_btn",onClick:x,children:"Edit"}),Object(H.jsx)("br",{}),Object(H.jsx)("button",{className:"editinfo_btn",onClick:function(){O.push("/")},children:"Back"}),Object(H.jsx)("br",{})]})}),Object(H.jsx)(W,{})]})};c(74);var Q=function(e){var t=e.user,c=Object(F.g)();console.log(t.displayName),console.log(t.uid);var a=Date(Date.now()).slice(0,25),r=Object(n.useState)({uid:t.uid,userName:t.displayName,createdAt:a,price:0,description:"",title:"",images:[]}),s=Object(o.a)(r,2),i=s[0],j=s[1],l=function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(Object(d.a)(Object(d.a)({},i),{},{fullName:t.displayName})),e.next=4,y(i);case 4:c.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(e,t){var c="images"===e?t.target.files:t.target.value;j(Object(d.a)(Object(d.a)({},i),{},Object(Z.a)({},e,c))),console.log("On Change: ",i)};return Object(H.jsxs)("div",{className:"createad_body",children:[Object(H.jsx)("div",{className:"app_headder",children:Object(H.jsx)(V,{})}),Object(H.jsx)(z,{}),Object(H.jsx)("div",{className:"createad_view",children:Object(H.jsxs)("div",{className:"createad_card",children:[Object(H.jsx)("h1",{style:{color:"wheat",padding:15},children:"Create Ad"}),Object(H.jsx)("input",{className:"createad_input",onChange:function(e){return h("title",e)},placeholder:"Product Name"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{className:"createad_input",onChange:function(e){return h("Category",e)},placeholder:"Product Category"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{className:"createad_des",onChange:function(e){return h("description",e)},placeholder:"Product description",type:"string"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{className:"createad_input",onChange:function(e){return h("price",e)},placeholder:"Enter an amount",type:"number"}),Object(H.jsx)("br",{}),Object(H.jsx)("input",{onChange:function(e){return h("images",e)},type:"file"}),Object(H.jsx)("br",{}),Object(H.jsx)("button",{className:"createad_btn",onClick:l,children:"Submit"}),Object(H.jsx)("br",{}),Object(H.jsx)("button",{className:"createad_btn",onClick:function(){c.push("/")},children:"Back"})]})}),Object(H.jsx)(W,{})]})};c(75);var $=function(){var e=Object(F.h)().adId,t=Object(n.useState)({}),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)(Object(b.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:c=t.sent,r(c);case 4:case"end":return t.stop()}}),t)}))),[]),console.log(a),Object(H.jsxs)("div",{className:"details_body",children:[Object(H.jsx)("div",{className:"details_header",children:Object(H.jsx)(V,{})}),Object(H.jsx)(z,{}),Object(H.jsxs)("div",{className:"details_card",children:[Object(H.jsx)("h1",{children:"Product Details"}),Object(H.jsxs)("div",{class:"details-grid-container",children:[Object(H.jsx)("div",{class:"details-grid-item item1",children:Object(H.jsx)("img",{height:"80%",width:"80%",alt:"ad image",src:a.images?a.images[0]:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"})}),Object(H.jsxs)("div",{class:"details-grid-item item2",children:[Object(H.jsx)("h4",{children:"Product Info:-"}),Object(H.jsxs)("p",{children:["Product Name: ",a.title]}),Object(H.jsxs)("p",{children:["Product Category: ",a.Category]}),Object(H.jsxs)("p",{children:["Price: ",a.price,"/-"]})]}),Object(H.jsxs)("div",{class:"details-grid-item item3",children:[Object(H.jsx)("h4",{children:"Sellers info:-"}),Object(H.jsxs)("p",{children:["Name: ",a.userName]}),Object(H.jsxs)("p",{children:["Contact No: ",a.number,"03090078601"]}),Object(H.jsxs)("p",{children:["Location: ",a.location,"Karachi"]})]}),Object(H.jsxs)("div",{class:"details-grid-item item4",children:[Object(H.jsx)("h4",{children:"Product Description:-"}),Object(H.jsx)("p",{children:a.description}),Object(H.jsx)("h4",{children:"Created At:-"}),Object(H.jsx)("p",{children:a.createdAt})]})]})]}),Object(H.jsx)(W,{})]})};c(76);var ee=function(){var e=Object(i.b)(),t=Object(n.useState)(),c=Object(o.a)(t,2),a=c[0],r=c[1];Object(i.c)(e,(function(e){if(e){var t=e.uid;r(t)}else console.log("Header no user")})),Object(n.useEffect)(Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(a);case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)}))),[a]);var s=Object(n.useState)([]),j=Object(o.a)(s,2),l=j[0],d=j[1],h=Object(F.g)(),O=function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("del ad id: ",t),e.next=3,P(t);case 3:alert("Firebase data deleted");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(H.jsxs)("div",{className:"currentUserAds_body",children:[Object(H.jsx)("div",{className:"app_headder",children:Object(H.jsx)(V,{})}),Object(H.jsx)(z,{}),Object(H.jsx)("h1",{children:"My Ads"}),Object(H.jsx)("div",{className:"grid-container",children:l.map((function(e){return Object(H.jsxs)("div",{children:[Object(H.jsxs)("div",{onClick:function(){return t=e.id,void h.push("/details/".concat(t));var t},children:[Object(H.jsx)("img",{height:"300",width:"300",alt:"ad image",src:e.images[0]?e.images[0]:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"}),Object(H.jsxs)("div",{className:"product__cardbody",children:[Object(H.jsx)("br",{}),Object(H.jsxs)("h3",{children:["Product Name: ",e.title]}),Object(H.jsx)("br",{}),Object(H.jsxs)("h3",{children:["Price: ",e.price,"/-"]}),Object(H.jsx)("br",{})]})]}),Object(H.jsx)("button",{onClick:function(){return O(e.id)},className:"del_btn",children:"Del"})]})}))}),Object(H.jsx)(W,{})]})};function te(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),s=Object(o.a)(r,2),j=s[0],l=s[1],u=Object(i.b)();return Object(n.useEffect)((function(){Object(i.c)(u,(function(e){l(e),a(!1)}))}),[]),c?Object(H.jsx)("img",{alt:"loading gif",width:"1500",src:"https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"}):Object(H.jsx)(J.a,{children:Object(H.jsx)("div",{children:Object(H.jsxs)(F.d,{children:[Object(H.jsx)(F.b,{path:"/auth",children:ce(!j,Object(H.jsx)(M,{}),"/")}),Object(H.jsx)(F.b,{path:"/allposts",children:ce(j,Object(H.jsx)(G,{}))}),Object(H.jsx)(F.b,{path:"/createad",children:ce(j,Object(H.jsx)(Q,{user:j}))}),Object(H.jsx)(F.b,{path:"/editinfo",children:ce(j,Object(H.jsx)(q,{}))}),Object(H.jsx)(F.b,{path:"/currentuserads",children:ce(j,Object(H.jsx)(ee,{}))}),Object(H.jsx)(F.b,{exact:!0,path:"/details/:adId",children:ce(j,Object(H.jsx)($,{}))}),Object(H.jsx)(F.b,{exact:!0,path:"/",children:Object(H.jsx)(Y,{})})]})})})}function ce(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/auth";return e?t:Object(H.jsx)(F.a,{to:c})}var ne=c(31),ae=c(46),re=c(53),se=c.n(re),ie=c(54);var je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"white"},t=arguments.length>1?arguments[1]:void 0;return"UPDATE_THEME"===t.type?Object(d.a)(Object(d.a)({},e),{},{theme:t.data}):e};var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{searchedItem:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SEARCHEDITEM":return Object(d.a)(Object(d.a)({},e),{},{searchedItem:t.data});case"REMOVE_SEARCHEDITEM":return Object(d.a)(Object(d.a)({},e),{},{searchedItem:""});default:return e}},le=Object(ne.b)({themeReducer:je,searchReducer:oe}),ue={key:"root",storage:se.a},be=Object(ae.a)(ue,le),de=Object(ne.c)(be,Object(ne.a)(ie.a)),he=Object(ae.b)(de);c(79);var Oe=function(){return Object(H.jsx)(s.a,{store:de,children:Object(H.jsx)(j.a,{persistor:he,children:Object(H.jsx)("div",{children:Object(H.jsx)(te,{})})})})};r.a.render(Object(H.jsx)(Oe,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.549355f8.chunk.js.map