(function(t){function e(e){for(var n,i,c=e[0],o=e[1],l=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0237":function(t,e,a){},"05b3":function(t,e,a){"use strict";a("69c6")},"0a66":function(t,e,a){t.exports=a.p+"img/spotify.df3c0ff2.svg"},1779:function(t,e,a){"use strict";a("0237")},2611:function(t,e,a){},"26f4":function(t,e,a){},"38cb":function(t,e,a){t.exports=a.p+"img/paypal.f7bbbcec.svg"},"4e52":function(t,e,a){"use strict";a("a108")},"51d4":function(t,e,a){t.exports=a.p+"img/logo-dark.b3287460.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("Navbar",{attrs:{navItems:t.navItems}}),a("Jumbotron"),a("Partners")],1),a("main",[a("Features"),a("Quickstart"),a("Components"),a("Rates"),a("Subscribe")],1),a("footer")])},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"container"},[t._m(0),a("ul",{staticClass:"menu"},t._l(t.navItems,(function(e,n){return a("li",{key:n},[a("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.text)+" "),"home"!=e.text?a("i",{staticClass:"fas fa-angle-down"}):t._e()])])})),0),t._m(1)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:a("51d4"),alt:"logo-dark"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"utils-icons"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fas fa-search"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-github"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-stack-overflow"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"far fa-user"})])])}],o={name:"Navbar",props:{navItems:Array}},l=o,u=(a("05b3"),a("2877")),d=Object(u["a"])(l,i,c,!1,null,"723ef946",null),f=d.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"jumbotron"},[n("div",{staticClass:"container"},[n("div",{staticClass:"jumbo-description w-50"},[n("div",[t._v("Development")]),n("h1",[t._v("A Complete Developer Toolset")]),n("div",[t._v("Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.")]),n("button",{staticClass:"btn-primary"},[t._v("Get Started")]),n("button",{staticClass:"btn-secondary"},[t._v("Documentation")]),n("div",[t._v("Current Version: v2.6.0")])]),n("div",{staticClass:"jumbo-image w-50"},[n("img",{attrs:{src:a("f774"),alt:"about"}})])])])}],m={name:"Jumbotron"},h=m,_=(a("a14d"),Object(u["a"])(h,p,v,!1,null,"afa58924",null)),b=_.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"partners"}},[a("div",{staticClass:"container"},t._l(t.partners,(function(t,e){return a("a",{key:e,attrs:{href:t.url}},[a("img",{attrs:{src:t.path,alt:t.path}})])})),0)])},C=[],y={name:"Partners",data:function(){return{partners:[{path:a("9a7a"),url:"#"},{path:a("ccc8"),url:"#"},{path:a("8457"),url:"#"},{path:a("38cb"),url:"#"},{path:a("6a7c"),url:"#"},{path:a("0a66"),url:"#"}]}}},x=y,w=(a("f0e8"),Object(u["a"])(x,g,C,!1,null,"3a0595ba",null)),k=w.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"features"}},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"card-container"},t._l(t.cardList,(function(t,e){return a("FeaturesCard",{key:e,attrs:{card:t}})})),1)])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title w-50"},[a("h2",[t._v("Key Features")]),a("div",[t._v("Start working with "),a("a",{attrs:{href:"#"}},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect.")])])}],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"features-card"},[a("div",{staticClass:"card-icon"},[a("i",{class:t.card.iconClass})]),a("h5",[t._v(t._s(t.card.title))]),a("div",{staticClass:"card-text"},[t._v(t._s(t.card.text))]),t._m(0)])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#"}},[t._v("Read More "),a("i",{staticClass:"fas fa-angle-right"})])}],$={name:"FeaturesCard",props:{card:Object}},P=$,F=(a("1779"),Object(u["a"])(P,O,S,!1,null,"8f913c42",null)),L=F.exports,T={name:"Features",components:{FeaturesCard:L},data:function(){return{cardList:[{iconClass:"fas fa-layer-group",title:"Modular",text:"Composed in a pseudo-Latin language which more or less corresponds."},{iconClass:"fas fa-mobile-alt",title:"Responsive",text:"Composed in a pseudo-Latin language which more or less corresponds."},{iconClass:"fas fa-expand",title:"Customizable",text:"Composed in a pseudo-Latin language which more or less corresponds."},{iconClass:"fas fa-expand-arrows-alt",title:"Scalable",text:"Composed in a pseudo-Latin language which more or less corresponds."}]}}},A=T,M=(a("cf56"),Object(u["a"])(A,E,j,!1,null,"5d696136",null)),N=M.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"quickstart"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title w-50"},[a("h5",[t._v("Quickstart")]),a("h2",[t._v("Awesome isn't it? Let's dive in!")]),a("div",[t._v("Start working with "),a("a",{attrs:{href:"#"}},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect.")])]),a("div",{staticClass:"shell"},[a("div",{staticClass:"packet-manager"},[a("div",[t._v("npm")]),a("div",[t._v("nuget")]),a("div",[t._v("spm")]),a("div",[t._v("github")])]),a("div",{staticClass:"commands"},[a("span",[t._v("$")]),t._v(" npm install "),a("span",[t._v("-g")]),t._v(" claps.js ")])]),a("div",{staticClass:"solutions"},[a("span",[a("i",{staticClass:"far fa-check-circle"}),t._v("Organize your data")]),a("span",[a("i",{staticClass:"far fa-check-circle"}),t._v("Work with any team")])])])])}],D={name:"Quickstart"},z=D,I=(a("7177"),Object(u["a"])(z,R,B,!1,null,"0dab3584",null)),J=I.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"components"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"description w-50"},[n("div",{staticClass:"section-title"},[n("h2",[t._v("Build tools and extensive documention")]),n("div",[t._v("You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.")])]),n("ul",[n("li",[n("i",{staticClass:"far fa-check-circle"}),t._v("Digital Marketing Solutions for Tomorrow")]),n("li",[n("i",{staticClass:"far fa-check-circle"}),t._v("Our Talented & Experienced Marketing Agency")]),n("li",[n("i",{staticClass:"far fa-check-circle"}),t._v("Create your own skin to match your brand")])]),n("button",{staticClass:"btn-primary"},[t._v("Read More"),n("i",{staticClass:"fas fa-arrow-right"})])]),n("div",{staticClass:"components-image w-50"},[n("img",{attrs:{src:a("775a"),alt:"1"}})])])])}],W={name:"Components"},G=W,K=(a("d27c"),Object(u["a"])(G,q,Q,!1,null,"53d52f66",null)),V=K.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"rates"}},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"card-container"},t._l(t.cardList,(function(t,e){return a("RatesCard",{key:e,attrs:{card:t}})})),1)])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title w-50"},[a("h2",[t._v("Our rates for developer from landrick team")]),a("div",[t._v("Start working with "),a("a",{attrs:{href:"#"}},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect.")])])}],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rates-card"},[a("span",{staticClass:"card-plan"},[t._v(t._s(t.card.cardPlan))]),a("h5",[t._v(t._s(t.card.price))]),a("span",[t._v(t._s(t.card.period))]),a("span",[t._v(t._s(t.card.text))]),a("hr"),a("ul",t._l(t.card.detailsText,(function(e,n){return a("li",{key:n},[a("i",{staticClass:"far fa-check-circle"}),t._v(" "+t._s(e)+" ")])})),0),a("button",{staticClass:"btn-primary"},[t._v(t._s(t.card.btnText))]),a("span",[t._v(t._s(t.card.payment))])])},X=[],Z={name:"RatesCard",props:{card:Object}},tt=Z,et=(a("e4f6"),Object(u["a"])(tt,U,X,!1,null,"8be68af2",null)),at=et.exports,nt={name:"Rates",components:{RatesCard:at},data:function(){return{cardList:[{cardPlan:"Basic",price:"$9.00",period:"Per Month",text:"All the basics for businesses that are just getting started.",detailsText:["Full Access","Enhanced Security","Source Files","1 Domain Free","Enhanced Security"],btnText:"Buy Now",payment:"*No credit card required"},{cardPlan:"Business",price:"$39.00",period:"Per Month",text:"Better for growing businesses that want more customers.",detailsText:["Full Access","Enhanced Security","Source Files","1 Domain Free","Enhanced Security"],btnText:"Buy Now",payment:"*No credit card required"},{cardPlan:"Enterprise",price:"$79.00",period:"Per Month",text:"Advanced features for pros who need more customization.",detailsText:["Full Access","Enhanced Security","Source Files","1 Domain Free","Enhanced Security"],btnText:"Buy Now",payment:"*No credit card required"}]}}},rt=nt,st=(a("4e52"),Object(u["a"])(rt,Y,H,!1,null,"e39fffcc",null)),it=st.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"subscribe"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title w-50"},[a("h2",[t._v("Want to be among the first to find out?")]),a("div",[t._v("Start working with "),a("a",{attrs:{href:"#"}},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect.")])]),a("div",{staticClass:"e-mail w-50"},[a("input",{attrs:{type:"email",size:"60",placeholder:"Email Address"}}),a("button",{staticClass:"btn-primary"},[t._v("Get Started")])])])])}],lt={name:"Subscribe"},ut=lt,dt=(a("d868"),Object(u["a"])(ut,ct,ot,!1,null,"2142242a",null)),ft=dt.exports,pt={name:"App",components:{Navbar:f,Jumbotron:b,Partners:k,Features:N,Quickstart:J,Components:V,Rates:it,Subscribe:ft},data:function(){return{navItems:[{text:"home",url:"#"},{text:"landing",url:"#"},{text:"pages",url:"#"},{text:"docs",url:"#"}]}}},vt=pt,mt=(a("5c0b"),Object(u["a"])(vt,r,s,!1,null,null,null)),ht=mt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(ht)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"69c6":function(t,e,a){},"6a7c":function(t,e,a){t.exports=a.p+"img/shopify.08b97152.svg"},7177:function(t,e,a){"use strict";a("843e")},"775a":function(t,e,a){t.exports=a.p+"img/1.07775d2d.png"},"843e":function(t,e,a){},8457:function(t,e,a){t.exports=a.p+"img/lenovo.53001e54.svg"},"9a7a":function(t,e,a){t.exports=a.p+"img/amazon.6f5a872b.svg"},"9c0c":function(t,e,a){},a108:function(t,e,a){},a14d:function(t,e,a){"use strict";a("ed9b")},bff1:function(t,e,a){},c3f2:function(t,e,a){},ccc8:function(t,e,a){t.exports=a.p+"img/google.a189e0be.svg"},cf56:function(t,e,a){"use strict";a("26f4")},d27c:function(t,e,a){"use strict";a("bff1")},d868:function(t,e,a){"use strict";a("ef80")},e4f6:function(t,e,a){"use strict";a("c3f2")},ed9b:function(t,e,a){},ef80:function(t,e,a){},f0e8:function(t,e,a){"use strict";a("2611")},f774:function(t,e,a){t.exports=a.p+"img/about.da238a11.png"}});
//# sourceMappingURL=app.d0fa73ea.js.map