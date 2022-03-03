"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6487],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return m},mdx:function(){return y},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){return function(t){var n=u(t.components);return r.createElement(e,i({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92924:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"simple_cli",title:"Simple command line application",sidebar_label:"Simple command line application"},c=void 0,p={unversionedId:"tutorial/simple_cli",id:"version-0.11/tutorial/simple_cli",title:"Simple command line application",description:"This is a simple Hydra application that prints your configuration.",source:"@site/versioned_docs/version-0.11/tutorial/1_simple_cli_app.md",sourceDirName:"tutorial",slug:"/tutorial/simple_cli",permalink:"/docs/0.11/tutorial/simple_cli",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/1_simple_cli_app.md",tags:[],version:"0.11",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1646349334,formattedLastUpdatedAt:"3/3/2022",sidebarPosition:1,frontMatter:{id:"simple_cli",title:"Simple command line application",sidebar_label:"Simple command line application"},sidebar:"version-0.11/docs",previous:{title:"Getting started",permalink:"/docs/0.11/intro"},next:{title:"Configuration file",permalink:"/docs/0.11/tutorial/config_file"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This is a simple Hydra application that prints your configuration.\nThe ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_app")," function is a place holder\nfor your code. We will slowly evolve this example to show-case more Hydra features."),(0,i.mdx)("p",null,"The examples in this tutorial are available ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/examples/tutorial"},"here"),"."),(0,i.mdx)("p",null,"Python file: ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_app.py")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import hydra\n\n@hydra.main()\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"cfg")," is an ",(0,i.mdx)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation",target:"_blank"},"OmegaConf"),"\nobject that holds the configuration for your function.\nYou don't need a deep understanding of OmegaConf for this tutorial."),(0,i.mdx)("p",null,"We can pass arbitrary command line arguments from which Hydra creates a hierarchical configuration object:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db.driver=mysql db.user=omry db.pass=secret\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")))}m.isMDXComponent=!0}}]);