(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=(a(160),a(166)),s=(a(178),a(179),a(164)),o=a(170);a.d(t,"postQueryAll",function(){return l});var l="2421748878";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return n.a.createElement(i.a,null,n.a.createElement(s.a,{title:"Home"}),n.a.createElement("section",null,"Das Basisdemokratische Bündnis ist eine Gruppe, in der sich Einzelpersonen und diverse Basisgruppen und Fachgruppen zusammengefunden haben, um gemeinsam emanzipatorische Politik an der Uni voran zu bringen."),n.a.createElement(o.a,{edges:t}))}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),i=a(5),s=a.n(i),o=a(40),l=a.n(o);a.d(t,"a",function(){return l.a});a(161);var d=n.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,s=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,s&&i(s),!s&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return n.a.createElement(d.Consumer,null,function(e){return n.a.createElement(c,{data:t,query:a,render:r||i,staticQueryData:e})})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},161:function(e,t,a){var r;e.exports=(r=a(163))&&r.default||r},162:function(e){e.exports={data:{site:{siteMetadata:{title:"BB-Göttingen"}}}}},163:function(e,t,a){"use strict";a.r(t);a(41);var r=a(0),n=a.n(r),i=a(5),s=a.n(i),o=a(64),l=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},164:function(e,t,a){"use strict";var r=a(165),n=a(0),i=a.n(n),s=a(5),o=a.n(s),l=a(169),d=a.n(l);function c(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,o=r.data.site,l=t||o.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},165:function(e){e.exports={data:{site:{siteMetadata:{title:"BB-Göttingen",description:"Basisgruppen Göttingen",author:"bb-goettingen"}}}}},166:function(e,t,a){"use strict";var r=a(162),n=a(0),i=a.n(n),s=a(5),o=a.n(s),l=a(160),d=(a(167),function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"header"},i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(l.a,{to:"/"},t))))});d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var c=d,u=(a(168),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},data:r})});u.propTypes={children:o.a.node.isRequired};t.a=u},170:function(e,t,a){"use strict";a.d(t,"b",function(){return o});a(65),a(95);var r=a(0),n=a.n(r),i=a(160),s=(a(172),function(e){var t=e.node,a=t.excerpt,r=t.frontmatter,s=a.trim().replace(/\n+(?!#)/g,"\n").split("\n").map(function(e){return n.a.createElement(n.a.Fragment,null,e,n.a.createElement("br",null))});return n.a.createElement("section",{className:"post-short"},n.a.createElement(i.a,{to:r.path},n.a.createElement("h2",{className:"post-short-heading"},r.title)),n.a.createElement("p",{className:"post-short-excerpt"},s),n.a.createElement("span",{className:"post-short-meta"},o(r)))});function o(e){return n.a.createElement(n.a.Fragment,null,"Posted on ",e.date," by ",e.author,e.authorExtra&&""!==e.authorExtra?" ("+e.authorExtra+")":"")}t.a=function(e){var t=e.edges.filter(function(e){return!e.node.frontmatter.draft}).map(function(e){return n.a.createElement(s,{node:e.node})});return n.a.createElement("div",{className:"posts-container"},[].concat(t).map(function(e,a){return a<t.length-1?[e,n.a.createElement("hr",{className:"posts-hr"})]:[e]}).reduce(function(e,t){return e.concat(t)}))}},178:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},179:function(e,t,a){"use strict";var r=a(10);t.__esModule=!0,t.default=void 0;var n,i=r(a(8)),s=r(a(42)),o=r(a(97)),l=r(a(98)),d=r(a(0)),c=r(a(5)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+n+t+s+i+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},f,{onLoad:s,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});E.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var S=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&m&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,R=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:R?1:0,transition:L?"opacity "+b+"ms":"none"},o),I="boolean"==typeof m?"lightgray":m,A={transitionDelay:b+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&A,o,f),O={title:t,alt:this.state.isVisible?"":a,style:N,className:p};if(g){var T=g;return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),I&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&A)}),T.base64&&d.default.createElement(E,(0,l.default)({src:T.base64},O)),T.tracedSVG&&d.default.createElement(E,(0,l.default)({src:T.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,T.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),d.default.createElement(E,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,l.default)({alt:a,title:t,loading:w},T))}}))}if(h){var q=h,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete x.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},I&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:I,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},L&&A)}),q.base64&&d.default.createElement(E,(0,l.default)({src:q.base64},O)),q.tracedSVG&&d.default.createElement(E,(0,l.default)({src:q.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,q.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:q.srcSetWebp,sizes:q.sizes}),d.default.createElement(E,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,l.default)({alt:a,title:t,loading:w},q))}}))}return null},t}(d.default.Component);S.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});S.propTypes={resolutions:w,sizes:R,fixed:w,fluid:R,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var L=S;t.default=L}}]);
//# sourceMappingURL=component---src-pages-index-js-e9432a94c9c5c10ca90f.js.map