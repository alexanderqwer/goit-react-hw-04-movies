(this.webpackJsonptaskreviewswidget=this.webpackJsonptaskreviewswidget||[]).push([[2],{30:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return d}));var c=n(36),a=n.n(c),r="https://api.themoviedb.org/3",i="27948a4ccec018117337a604d5ddcbec",o=function(){return a.a.get("".concat(r,"/trending/").concat("all","/").concat("day","?api_key=").concat(i))},u=function(t){return a.a.get("".concat(r,"/movie/").concat(t,"?api_key=").concat(i))},s=function(t){return a.a.get("".concat(r,"/movie/").concat(t,"/credits?api_key=").concat(i))},l=function(t){return a.a.get("".concat(r,"/movie/").concat(t,"/reviews?api_key=").concat(i))},d=function(t){return a.a.get("".concat(r,"/search/movie?api_key=").concat(i,"&query=").concat(t))}},77:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var c=n(31),a=n(32),r=n(34),i=n(33),o=n(35),u=n(0),s=n.n(u),l=n(8),d=n(30),f=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return(n=Object(r.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(o)))).state={movies:[]},n.fetchMoviesList=function(){d.e().then((function(t){var e=t.data;return n.setState({movies:e.results})})).catch((function(t){return alert(t)}))},n}return Object(o.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){this.fetchMoviesList()}},{key:"render",value:function(){var t=this.state.movies;return s.a.createElement("div",null,s.a.createElement("h1",null,"Trending today"),s.a.createElement("ul",null,t.length>0&&t.map((function(t){return s.a.createElement("li",{key:t.id},s.a.createElement(l.b,{to:"/movies/".concat(t.id)},t.name||t.title))}))))}}]),e}(u.Component)}}]);
//# sourceMappingURL=HomePage.d08fef50.chunk.js.map