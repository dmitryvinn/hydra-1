"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2325],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,g=c["".concat(p,".").concat(m)]||c[m]||s[m]||r;return t?i.createElement(g,l(l({ref:n},d),{},{components:t})):i.createElement(g,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3899:function(e,n,t){t.d(n,{Z:function(){return p},T:function(){return u}});var i=t(7462),a=t(7294),r=t(6742),l=t(2263),o=t(907);function p(e){return a.createElement(r.Z,(0,i.Z)({},e,{to:(n=e.to,p=(0,o.zu)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==p?void 0:p.name)?t:"current"]+n),target:"_blank"}));var n,t,p}function u(e){var n,t=null!=(n=e.text)?n:"Example";return a.createElement(p,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}},2116:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),l=t(3899),o=["components"],p={id:"develop",title:"Plugin development",sidebar_label:"Plugin development"},u=void 0,d={unversionedId:"advanced/plugins/develop",id:"advanced/plugins/develop",isDocsHomePage:!1,title:"Plugin development",description:"If you develop plugins, please join the Plugin developer announcement chat channel.",source:"@site/docs/advanced/plugins/develop.md",sourceDirName:"advanced/plugins",slug:"/advanced/plugins/develop",permalink:"/docs/next/advanced/plugins/develop",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/plugins/develop.md",tags:[],version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1641518666,formattedLastUpdatedAt:"1/7/2022",frontMatter:{id:"develop",title:"Plugin development",sidebar_label:"Plugin development"},sidebar:"docs",previous:{title:"Plugins Overview",permalink:"/docs/next/advanced/plugins/overview"},next:{title:"Application packaging",permalink:"/docs/next/advanced/app_packaging"}},s=[{value:"Plugin discovery process",id:"plugin-discovery-process",children:[]},{value:"Getting started",id:"getting-started",children:[]}],c={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you develop plugins, please join the ",(0,r.kt)("a",{href:"https://hydra-framework.zulipchat.com/#narrow/stream/233935-Hydra-plugin.20dev.20announcements"},"Plugin developer announcement chat channel"),"."))),(0,r.kt)("p",null,"When developing Hydra plugins, keep the following things in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hydra plugins can be either a standalone Python package, or a part of your existing Python package.\nIn both cases - They should be in the namespace module ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra_plugins")," (This is a top level module, Your plugin will ",(0,r.kt)("strong",{parentName:"li"},"NOT")," be discovered if you place it in ",(0,r.kt)("inlineCode",{parentName:"li"},"mylib.hydra_plugins"),")."),(0,r.kt)("li",{parentName:"ul"},"Do ",(0,r.kt)("strong",{parentName:"li"},"NOT")," place an ",(0,r.kt)("inlineCode",{parentName:"li"},"__init__.py")," file in ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra_plugins")," (doing so may break other installed Hydra plugins).")),(0,r.kt)("h2",{id:"plugin-discovery-process"},"Plugin discovery process"),(0,r.kt)("p",null,"The plugin discovery process runs whenever Hydra starts. During plugin discovery, Hydra scans for plugins in all the submodules of ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra_plugins"),". Hydra will import each module and look for plugins defined in that module.\nAny module under ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra_plugins")," that is slow to import will slow down the startup of ",(0,r.kt)("strong",{parentName:"p"},"ALL")," Hydra applications.\nPlugins with expensive imports can exclude individual files from Hydra's plugin discovery process by prefixing them with ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," (but not ",(0,r.kt)("inlineCode",{parentName:"p"},"__"),").\nFor example, the file ",(0,r.kt)("inlineCode",{parentName:"p"},"_my_plugin_lib.py")," would not be imported and scanned, while ",(0,r.kt)("inlineCode",{parentName:"p"},"my_plugin_lib.py")," would be."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"The best way to get started developing a Hydra plugin is to base your new plugin on one of the example plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy the subtree of the relevant ",(0,r.kt)(l.Z,{to:"examples/plugins",mdxType:"GithubLink"},"example plugin")," into a standalone project."),(0,r.kt)("li",{parentName:"ul"},"Edit ",(0,r.kt)("inlineCode",{parentName:"li"},"setup.py"),", rename the plugin module, for example from ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra_plugins.example_xyz_plugin")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra_plugins.my_xyz_plugin"),"."),(0,r.kt)("li",{parentName:"ul"},"Install the new plugin (Run this in the plugin directory: ",(0,r.kt)("inlineCode",{parentName:"li"},"pip install -e ."),")"),(0,r.kt)("li",{parentName:"ul"},"Run the included example app and make sure that the plugin is discovered:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ python example/my_app.py --info plugins\nInstalled Hydra Plugins\n***********************\n        ...\n        Launcher:\n        ---------\n                MyLauncher\n        ...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the example application to see that that your plugin is doing something."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[Optional]")," If you want the plugin be embedded in your existing application/library, move the ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra_plugins")," directory\nand make sure that it's included as a namespace module in your final Python package. See the ",(0,r.kt)("inlineCode",{parentName:"li"},"setup.py"),"\nfile included with the example plugin for hints (typically this involves using ",(0,r.kt)("inlineCode",{parentName:"li"},'find_namespace_packages(include=["hydra_plugins.*"])'),")."),(0,r.kt)("li",{parentName:"ul"},"Hack on your plugin, Ensure that the recommended tests and any tests you want to add are passing.")))}m.isMDXComponent=!0}}]);