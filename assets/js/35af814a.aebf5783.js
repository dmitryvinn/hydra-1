(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var i=n(3),o=n(8),r=(n(0),n(277)),a=n(284),s={id:"config_groups",title:"Config Groups"},c={unversionedId:"tutorials/structured_config/config_groups",id:"tutorials/structured_config/config_groups",isDocsHomePage:!1,title:"Config Groups",description:"Structured Configs can be used to implement config groups. Special care needs to be taken when specifying a",source:"@site/docs/tutorials/structured_config/3_config_groups.md",slug:"/tutorials/structured_config/config_groups",permalink:"/docs/next/tutorials/structured_config/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/3_config_groups.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1616832966,formattedLastUpdatedAt:"3/27/2021",sidebar:"docs",previous:{title:"A hierarchical static configuration",permalink:"/docs/next/tutorials/structured_config/hierarchical_static_config"},next:{title:"Defaults List",permalink:"/docs/next/tutorials/structured_config/defaults"}},u=[{value:"Config inheritance",id:"config-inheritance",children:[]},{value:"Missing fields",id:"missing-fields",children:[]}],l={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(a.a,{to:"examples/tutorials/structured_configs/3_config_groups/my_app.py",mdxType:"ExampleGithubLink"}),Object(r.b)("p",null,"Structured Configs can be used to implement config groups. Special care needs to be taken when specifying a\ndefault value for fields populated by a config group. We will look at why below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Defining a config group for database" {16-17,22-23}',title:'"Defining',a:!0,config:!0,group:!0,for:!0,'database"':!0,"{16-17,22-23}":!0},'@dataclass\nclass MySQLConfig:\n    driver: str = "mysql"\n    host: str = "localhost"\n    port: int = 3306\n\n@dataclass\nclass PostGreSQLConfig:\n    driver: str = "postgresql"\n    host: str = "localhost"\n    port: int = 5432\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # We will populate db using composition.\n    db: Any\n\n# Create config group `db` with options \'mysql\' and \'postgreqsl\'\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("em",{parentName:"p"},"Config")," class is ",Object(r.b)("strong",{parentName:"p"},"NOT")," the Defaults list. We will see the Defaults list in the next page."))),Object(r.b)("p",null,"You can select the database from the command line:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql\ndb:\n  driver: postgresql\n  host: localhost\n  password: drowssap\n  port: 5432\n  timeout: 10\n  user: postgres_user\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"+")," above is required because there is no default choice for the config group ",Object(r.b)("inlineCode",{parentName:"p"},"db"),".\nThe next page will reintroduce the Defaults List, eliminating the need for the ",Object(r.b)("inlineCode",{parentName:"p"},"+"),"."),Object(r.b)("h3",{id:"config-inheritance"},"Config inheritance"),Object(r.b)(a.a,{to:"examples/tutorials/structured_configs/3_config_groups/my_app_with_inheritance.py",mdxType:"ExampleGithubLink"}),Object(r.b)("p",null,"Standard Python inheritance can be used to get improved type safety, and to move common fields to the parent class."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Defining a config group for database using inheritance"',title:'"Defining',a:!0,config:!0,group:!0,for:!0,database:!0,using:!0,'inheritance"':!0},'from omegaconf import MISSING\n\n@dataclass\nclass DBConfig:\n    host: str = "localhost"\n    port: int = MISSING\n    driver: str = MISSING\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    port: int = 3306\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    port: int = 5432\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # We can now annotate db as DBConfig which\n    # improves both static and dynamic type safety.\n    db: DBConfig\n')),Object(r.b)("h3",{id:"missing-fields"},"Missing fields"),Object(r.b)("p",null,"Assign ",Object(r.b)("em",{parentName:"p"},"MISSING")," to a field to indicates that it does not have a default value. This is equivalent to\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"???")," literal we have seen in OmegaConf configs before."),Object(r.b)("p",null,"Omitting a default value is equivalent to assigning ",Object(r.b)("em",{parentName:"p"},"MISSING")," to it, although it is sometimes\nconvenient to be able to assign MISSING it to a field."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Do not confuse ",Object(r.b)("strong",{parentName:"p"},"omegaconf.MISSING")," with ",Object(r.b)("strong",{parentName:"p"},"dataclass.MISSING"),"."))))}d.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,g=d["".concat(a,".").concat(p)]||d[p]||f[p]||r;return n?o.a.createElement(g,s(s({ref:t},u),{},{components:n})):o.a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},278:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))},279:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(11),a=n(278),s=n(7),c=Object(i.createContext)({collectLink:function(){}}),u=n(280),l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,p=e.to,g=e.href,b=e.activeClassName,m=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,O=void 0===h||h,y=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,w=Object(i.useContext)(c),D=p||g,N=Object(a.a)(D),C=null==D?void 0:D.replace("pathname://",""),x=void 0!==C?(n=C,O&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,A=Object(i.useRef)(!1),S=f?r.e:r.c,_=s.default.canUseIntersectionObserver;Object(i.useEffect)((function(){return!_&&N&&window.docusaurus.prefetch(x),function(){_&&d&&d.disconnect()}}),[x,_,N]);var P=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,L=!x||!N||P;return x&&N&&!P&&!v&&w.collectLink(x),L?o.a.createElement("a",Object.assign({href:x},D&&!N&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(S,Object.assign({},y,{onMouseEnter:function(){A.current||(window.docusaurus.preload(x),A.current=!0)},innerRef:function(e){var t,n;_&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:x||""},f&&{isActive:m,activeClassName:b}))}},280:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n(10),o=n(278);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,a=r.forcePrependBaseUrl,s=void 0!==a&&a,c=r.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(r,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},281:function(e,t,n){try{e.exports=n(282)}catch(o){var i={};e.exports={useAllDocsData:function(){return i},useActivePluginAndVersion:function(){}}}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var i=n(23),o=n(38),r=n(283);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=i.useLocation().pathname;return r.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=i.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:r.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return r.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=i.useLocation().pathname;return r.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=i.useLocation().pathname;return r.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=i.useLocation().pathname;return r.getDocVersionSuggestions(n,o)}},283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var i=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!i.matchPath(t,{path:n.path,exact:!1,strict:!1})})),r=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!r&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return r},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!i.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,r,a=t.getActiveVersion(e,n),s=null==a?void 0:a.docs.find((function(e){return!!i.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:s,alternateDocVersions:s?(o=s.id,r={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(r[e.name]=t)}))})),r):{}}},t.getDocVersionSuggestions=function(e,n){var i=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),r=o.activeVersion!==i;return{latestDocSuggestion:r?null==o?void 0:o.alternateDocVersions[i.name]:void 0,latestVersionSuggestion:r?i:void 0}}},284:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var i=n(3),o=n(0),r=n.n(o),a=n(279),s=n(10),c=n(281);function u(e){return r.a.createElement(a.a,Object(i.a)({},e,{to:(t=e.to,o=Object(c.useActiveVersion)(),Object(s.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,o}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return r.a.createElement(u,e,r.a.createElement("span",null,"\xa0"),r.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);