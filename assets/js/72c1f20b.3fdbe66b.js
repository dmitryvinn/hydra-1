"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1320],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return l},T:function(){return c}});var r=n(7462),a=n(7294),o=n(6742),i=n(2263),s=n(907);function l(e){return a.createElement(o.Z,(0,r.Z)({},e,{to:(t=e.to,l=(0,s.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+t),target:"_blank"}));var t,n,l}function c(e){var t,n=null!=(t=e.text)?t:"Example";return a.createElement(l,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},9069:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(3899),s=["components"],l={id:"schema",title:"Structured config schema"},c=void 0,u={unversionedId:"tutorials/structured_config/schema",id:"version-1.0/tutorials/structured_config/schema",isDocsHomePage:!1,title:"Structured config schema",description:"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files).",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/5_schema.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/schema",permalink:"/docs/1.0/tutorials/structured_config/schema",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/structured_config/5_schema.md",tags:[],version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1639072746,formattedLastUpdatedAt:"12/9/2021",sidebarPosition:5,frontMatter:{id:"schema",title:"Structured config schema"},sidebar:"version-1.0/docs",previous:{title:"Defaults List",permalink:"/docs/1.0/tutorials/structured_config/defaults"},next:{title:"Static schema with many configs",permalink:"/docs/1.0/tutorials/structured_config/static_schema"}},d=[],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.T,{to:"examples/tutorials/structured_configs/5_structured_config_schema",mdxType:"ExampleGithubLink"}),(0,o.kt)("p",null,"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files)."),(0,o.kt)("p",null,"When Hydra loads a config file, it looks in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigStore")," for a Structured Config with a matching name and group.\nIf found, it is used as the schema for the newly loaded config."),(0,o.kt)("p",null,"This page shows how to validate ",(0,o.kt)("inlineCode",{parentName:"p"},"db/mysql.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"db/postgresql.yaml")," files against a pre-defined schema."),(0,o.kt)("p",null,"Given the config directory structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),(0,o.kt)("p",null,"We can add Structured Configs for ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"postgresql.yaml"),", providing a schema for validating them."),(0,o.kt)("p",null,"The Structured Configs below are stored as ",(0,o.kt)("inlineCode",{parentName:"p"},"db/mysql")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"db/postgresql"),". They will be used as schema\nwhen we load their corresponding config files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = "localhost"\n    port: int = MISSING\n\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    port: int = 3306\n    user: str = MISSING\n    password: str = MISSING\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    user: str = MISSING\n    port: int = 5432\n    password: str = MISSING\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # Note the lack of defaults list here.\n    # In this example it comes from config.yaml\n    db: DBConfig = MISSING\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n# The config name matches both \'config.yaml\' under the conf directory\n# and \'config\' stored in the ConfigStore.\n# config.yaml will compose in db: mysql by default (per the defaults list),\n# and it will be validated against the schema from the Config class\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"db/mysql.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"db/postgresql.yaml")," are loaded, the corresponding configs from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigStore")," are used automatically.\nThis can be used to validate that both the configuration files (",(0,o.kt)("inlineCode",{parentName:"p"},"mysql.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"postgresql.yaml"),") and the command line overrides are conforming to the schema. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ python my_app.py db.port=fail\nError merging override db.port=fail\nValue 'fail' could not be converted to Integer\n        full_key: db.port\n        reference_type=Optional[MySQLConfig]\n        object_type=MySQLConfig\n")),(0,o.kt)("p",null,"Unlike the example in the previous page, the Defaults List here is ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," and ",(0,o.kt)("strong",{parentName:"p"},"not")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Config")," class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")))}f.isMDXComponent=!0}}]);