"use strict";(self.webpackChunkgoit_react_hw_05_movies_2022=self.webpackChunkgoit_react_hw_05_movies_2022||[]).push([[460],{6889:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(8794),a=r(184);function s(e){var t=e.message;return(0,a.jsxs)("div",{role:"alert",className:"wrapper",children:[(0,a.jsx)("img",{src:n,width:"400",alt:"no results found"}),(0,a.jsx)("p",{text:t,className:"text",children:t})]})}},8183:function(e,t,r){var n=r(4165),a=r(5861),s=r(4569),o=r.n(s);function i(){return(i=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"trending/movie/day",params:{page:t}},e.next=4,o()(r,t);case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function u(){return(u=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,s,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={url:"search/movie",params:{query:t,page:r}},e.next=4,o()(a,t,r);case 4:return s=e.sent,i=s.data,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function c(){return(c=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t)},e.next=4,o()(r,t);case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/credits")},e.next=4,o()(r,t);case 4:return a=e.sent,s=a.data,e.abrupt("return",s.cast);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/reviews")},e.next=4,o()(r,t);case 4:return a=e.sent,s=a.data,e.abrupt("return",s.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}o().defaults.baseURL="https://api.themoviedb.org/3/",o().defaults.params={api_key:"92ffb34e08e714eb390805a25b0a06d3",language:"en-US"};var g={getPopularMovies:function(e){return i.apply(this,arguments)},getMoviesByKeyWord:function(e,t){return u.apply(this,arguments)},getMovieById:function(e){return c.apply(this,arguments)},getCastInfo:function(e){return l.apply(this,arguments)},getMovieReview:function(e){return p.apply(this,arguments)}};t.Z=g},2019:function(e,t){t.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},1774:function(e,t,r){var n=(0,r(8596).Z)({root:{display:"flex",justifyContent:"center","& .MuiPaginationItem-page.Mui-selected, & .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible,  & .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible":{backgroundColor:"#EC625Fcb"},"& .MuiPaginationItem-root":{color:"#fff"},"& .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible":{opacity:"0.7"},"& .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible":{opacity:"1"},"& .MuiPagination-ul":{justifyContent:"center"}}});t.Z=n},1750:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(1413),a=r(885),s=r(2791),o=r(7689),i=r(1087),u=r(8183),c=r(6099),l=r(1774),p=r(2019),g=r(5118),m=r(6889),f=r(9670),d="HomePage_main__vd+D2",h="HomePage_title__rAQS9",v="HomePage_moviesList__6ERtm",Z="HomePage_moviesItem__AxeSC",_="HomePage_poster__5r53E",x="HomePage_movieTitle__gpH+A",b="HomePage_link__CYdf4",E=r(184);function w(){var e,t=(0,l.Z)(),r=(0,o.s0)(),w=(0,o.TH)(),M=(0,s.useState)(null),P=(0,a.Z)(M,2),y=P[0],j=P[1],I=(0,s.useState)(0),N=(0,a.Z)(I,2),k=N[0],C=N[1],D=(0,s.useState)(null),S=(0,a.Z)(D,2),R=S[0],H=S[1],L=(0,s.useState)(p.Z.IDLE),V=(0,a.Z)(L,2),T=V[0],B=V[1],U=null!==(e=new URLSearchParams(w.search).get("page"))&&void 0!==e?e:1;(0,s.useEffect)((function(){B(p.Z.PENDING),u.Z.getPopularMovies(U).then((function(e){var t=e.results,r=e.total_pages;j(t),C(r),B(p.Z.RESOLVED)})).catch((function(e){console.log(e),H("Something went wrong. Please try again."),B(p.Z.REJECTED)}))}),[U]);return(0,E.jsxs)("main",{className:d,children:[(0,E.jsx)("h1",{className:h,children:"Trending today"}),T===p.Z.PENDING&&(0,E.jsx)(g.Z,{}),T===p.Z.REJECTED&&(0,E.jsx)(m.Z,{message:R.message,textError:"Error"}),T===p.Z.RESOLVED&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("ul",{className:v,children:y.map((function(e){return(0,E.jsx)("li",{className:Z,children:(0,E.jsxs)(i.rU,{to:"/goit-react-hw-05-movies/movies/".concat(e.id),className:b,state:{getBack:(0,n.Z)({},w)},children:[(0,E.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):f,alt:e.title,className:_}),(0,E.jsx)("span",{className:x,children:e.title})]})},e.id)}))}),k>1&&(0,E.jsx)(c.Z,{className:t.root,count:k,onChange:function(e,t){r((0,n.Z)((0,n.Z)({},w),{},{search:"page=".concat(t)}))},page:Number(U),showFirstButton:!0,showLastButton:!0,size:"large"})]})]})}},9670:function(e,t,r){e.exports=r.p+"static/media/no_image.d94858f9ed2950bcb958.jpg"},8794:function(e,t,r){e.exports=r.p+"static/media/no_results_found.98bc826327ced82ba54b.png"}}]);
//# sourceMappingURL=HomePage.685f6915.chunk.js.map