(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),o=(n(0),n(269)),a={id:"testing",title:"Testing",sidebar_label:"Testing"},s={unversionedId:"development/testing",id:"development/testing",isDocsHomePage:!1,title:"Testing",description:"Hydra uses nox - a build automation tool - to manage tests, linting, code coverage, etc.",source:"@site/docs/development/testing.md",slug:"/development/testing",permalink:"/docs/next/development/testing",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/development/testing.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1621387413,formattedLastUpdatedAt:"5/19/2021",sidebar_label:"Testing",sidebar:"docs",previous:{title:"Developer Guide Overview",permalink:"/docs/next/development/overview"},next:{title:"Style Guide",permalink:"/docs/next/development/style_guide"}},l=[{value:"Testing with pytest",id:"testing-with-pytest",children:[]},{value:"Testing with nox",id:"testing-with-nox",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/theacodes/nox"},"nox")," - a build automation tool - to manage tests, linting, code coverage, etc.\nThe command ",Object(o.b)("inlineCode",{parentName:"p"},"nox")," will run all the configured sessions. List the sessions using ",Object(o.b)("inlineCode",{parentName:"p"},"nox -l")," and\nrun specific sessions with ",Object(o.b)("inlineCode",{parentName:"p"},"nox -s NAME")," (you may need to quote the session name in some cases)"),Object(o.b)("h2",{id:"testing-with-pytest"},"Testing with pytest"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"pytest")," at the repository root to run all the Hydra core tests.\nTo run the tests of individual plugins, use ",Object(o.b)("inlineCode",{parentName:"p"},"pytest plugins/NAME")," (The plugin must be installed)."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Some plugins support fewer versions of Python than the Hydra core."))),Object(o.b)("h2",{id:"testing-with-nox"},"Testing with nox"),Object(o.b)("p",null,"See ",Object(o.b)("inlineCode",{parentName:"p"},"nox -l"),". a few examples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nox -s test_core")," will test Hydra core on all supported Python versions"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'nox -s "test_plugins-3.8"')," will test plugins on Python 3.8."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'nox -s "test_plugins-3.8"')," will test plugins on Python 3.8.")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"noxfile.py")," is checking some environment variables to decide what to run. For example,\nto test a single plugin:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"{4}","{4}":!0},"$ PLUGINS=hydra_colorlog nox -s test_plugins-3.8\nOperating system        :       Linux\nNOX_PYTHON_VERSIONS     :       ['3.6', '3.7', '3.8', '3.9']\nPLUGINS                 :       ['hydra_colorlog']\nSKIP_CORE_TESTS         :       False\nFIX                     :       False\nVERBOSE                 :       0\nINSTALL_EDITABLE_MODE   :       0\nnox > Running session test_plugins-3.8\n...\n")))}p.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||o;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);