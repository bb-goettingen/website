(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(166),c=a(164);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(5),c=a.n(i),s=a(40),o=a.n(s);a.d(t,"a",function(){return o.a});a(161);var u=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},161:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},162:function(e){e.exports={data:{site:{siteMetadata:{title:"BB-Göttingen"}}}}},163:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),i=a(5),c=a.n(i),s=a(64),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},164:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),c=a(5),s=a.n(c),o=a(169),u=a.n(o);function l(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,s=n.data.site,o=t||s.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=l},165:function(e){e.exports={data:{site:{siteMetadata:{title:"BB-Göttingen",description:"Basisgruppen Göttingen",author:"bb-goettingen"}}}}},166:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),c=a(5),s=a.n(c),o=a(160),u=(a(167),function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"header"},i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(o.a,{to:"/"},t))))});u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var l=u,d=(a(168),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},data:n})});d.propTypes={children:s.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-0ca4b01f5612d9c9b716.js.map