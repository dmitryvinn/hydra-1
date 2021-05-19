(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(269)),i={id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},l={unversionedId:"tutorials/basic/running_your_app/multi-run",id:"tutorials/basic/running_your_app/multi-run",isDocsHomePage:!1,title:"Multi-run",description:"Sometimes you want to run the same application with multiple different configurations.",source:"@site/docs/tutorials/basic/running_your_app/2_multirun.md",slug:"/tutorials/basic/running_your_app/multi-run",permalink:"/docs/next/tutorials/basic/running_your_app/multi-run",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/running_your_app/2_multirun.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1621387413,formattedLastUpdatedAt:"5/19/2021",sidebar_label:"Multi-run",sidebar:"docs",previous:{title:"Putting it all together",permalink:"/docs/next/tutorials/basic/your_first_app/composition"},next:{title:"Output/Working directory",permalink:"/docs/next/tutorials/basic/running_your_app/working_directory"}},s=[{value:"Additional sweep types",id:"additional-sweep-types",children:[]},{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes you want to run the same application with multiple different configurations.",Object(o.b)("br",{parentName:"p"}),"\n","E.g. running a performance test on each of the databases with each of the schemas."),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"--multirun")," (",Object(o.b)("inlineCode",{parentName:"p"},"-m"),") flag and pass a comma separated list specifying the values for each dimension you want to sweep."),Object(o.b)("p",null,"The following sweeps over all combinations of the dbs and schemas."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py -m db=mysql,postgresql schema=warehouse,support,school"',title:'"$',python:!0,"my_app.py":!0,"-m":!0,db:"mysql,postgresql",schema:'warehouse,support,school"'},"[2021-01-20 17:25:03,317][HYDRA] Launching 6 jobs locally\n[2021-01-20 17:25:03,318][HYDRA]        #0 : db=mysql schema=warehouse\n[2021-01-20 17:25:03,458][HYDRA]        #1 : db=mysql schema=support\n[2021-01-20 17:25:03,602][HYDRA]        #2 : db=mysql schema=school\n[2021-01-20 17:25:03,755][HYDRA]        #3 : db=postgresql schema=warehouse\n[2021-01-20 17:25:03,895][HYDRA]        #4 : db=postgresql schema=support\n[2021-01-20 17:25:04,040][HYDRA]        #5 : db=postgresql schema=school\n")),Object(o.b)("p",null,"The printed configurations have been omitted for brevity."),Object(o.b)("h3",{id:"additional-sweep-types"},"Additional sweep types"),Object(o.b)("p",null,"Hydra supports other kinds of sweeps, e.g:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"x=range(1,10)                  # 1-9\nschema=glob(*)                 # warehouse,support,school\nschema=glob(*,exclude=w*)      # support,school\n")),Object(o.b)("p",null,"See the ",Object(o.b)("a",{parentName:"p",href:"/docs/next/advanced/override_grammar/extended"},"Extended Override syntax")," for details."),Object(o.b)("h3",{id:"sweeper"},"Sweeper"),Object(o.b)("p",null,"The default sweeping logic is built into Hydra. Additional sweepers are available as plugins.\nFor example, the ",Object(o.b)("a",{parentName:"p",href:"/docs/next/plugins/ax_sweeper"},"Ax Sweeper")," can automatically find the best parameter combination!"),Object(o.b)("h3",{id:"launcher"},"Launcher"),Object(o.b)("p",null,"By default, Hydra runs your multi-run jobs locally and serially.\nOther launchers are available as plugins for launching in parallel and on different clusters. For example, the ",Object(o.b)("a",{parentName:"p",href:"/docs/next/plugins/joblib_launcher"},"JobLib Launcher"),"\ncan execute the different parameter combinations in parallel on your local machine using multi-processing."))}u.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);