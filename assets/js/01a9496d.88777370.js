"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[416],{9613:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(9496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return o?n.createElement(f,i(i({ref:t},d),{},{components:o})):n.createElement(f,i({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7676:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var n=o(5900),r=o(4750),a=(o(9496),o(9613)),i=["components"],s={id:"intro",title:"Why nest-commander?",sidebar_label:"Why nest-commander?",slug:"/"},l=void 0,c={unversionedId:"introduction/intro",id:"introduction/intro",title:"Why nest-commander?",description:"Initial Motivation",source:"@site/docs/introduction/intro.md",sourceDirName:"introduction",slug:"/",permalink:"/nest-commander/docs/",editUrl:"https://github.com/jmcdo29/nest-commander/edit/main/apps/docs/docs/introduction/intro.md",tags:[],version:"current",lastUpdatedBy:"Micael Levi (lab)",lastUpdatedAt:1640562916,formattedLastUpdatedAt:"12/26/2021",frontMatter:{id:"intro",title:"Why nest-commander?",sidebar_label:"Why nest-commander?",slug:"/"},sidebar:"docs",next:{title:"Installation",permalink:"/nest-commander/docs/introduction/installation"}},d=[{value:"Initial Motivation",id:"initial-motivation",children:[],level:2},{value:"Plugins",id:"plugins",children:[],level:2},{value:"Code Reuse of Your Nest Code - in the CLI",id:"code-reuse-of-your-nest-code---in-the-cli",children:[],level:2}],p={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"initial-motivation"},"Initial Motivation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com"},"NestJS")," is a super powerful NodeJS framework that allows developers to have the same architecture across all their applications. But other than the mention of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/standalone-applications"},"Standalone Applications")," there's only a few packages that attempt to bring together Nest's opinionated architecture and popular CLI packages. ",(0,a.kt)("inlineCode",{parentName:"p"},"nest-commander")," aims to bring the most unified experience when it comes to being inline with Nest's ideologies and opinions, by wrapping the popular ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tj/commander.js"},"Commander")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SBoudrias/Inquirer.js"},"Inquirer")," packages, and providing its own decorators for integration with all the corresponding libraries."),(0,a.kt)("h2",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/features/plugins/"},"Plugins")," raise nest-commander to the next level of CLI programming. With plugins, you, the CLI developer, are able to split out commands between global CLI and project specific CLI commands. Imagine, at some point, you'll notice that certain commands need to be separately evolved to run apace to a certain project. Or, you'll need different commands for different project types. So, instead of creating different versions of your one global CLI, with plugins, you could split out the local and global commands to their own packages. Plugins allow for version matching of a project's specialized CLI commands to different versions or types of projects. As you can imagine, this enables you to build very intricate CLIs. "),(0,a.kt)("p",null,'The plugins feature will more likely be needed later in your project\'s evolution. That is, once your CLI needs grow, this ability to "break out" commands is ready and waiting for you to go to the next level of CLI development.'),(0,a.kt)("h2",{id:"code-reuse-of-your-nest-code---in-the-cli"},"Code Reuse of Your Nest Code - in the CLI"),(0,a.kt)("p",null,"One of the biggest advantages to Nest's modularization techniques is the ability to separate standard or commonly used code to their own modules and build them as standalone libraries. With nest-commander, such libraries can also be used by your CLI commands too. Take, for instance, the scenario where you might need to build your own data seeding or data initialization scripts, where they only need to be ran once to start off a project. Running these scripts are perfect as CLI commands. And, instead of you creating new modules or having to copy code just for the CLI commands to gain access to your database layer to do the work, you simply use the same modules already built for your project, leveraging all of the great advantages Nest's DI system has to offer, at the same time. "),(0,a.kt)("p",null,"All these reasons are why nest-commander is THE perfect companion to allow you to build flexible and smart CLI applications for your Nest-based projects."))}u.isMDXComponent=!0}}]);