import{Ab as pt,Bb as ut,Pa as It,Q as x,R as At,Sa as xt,T as Rt,W as A,Xa as lt,Xb as Ft,Ya as Pt,Yb as dt,Z as Lt,Za as Dt,_b as rt,a as C,cb as Mt,ea as wt,h as Ct,ic as kt,qa as M,va as Nt}from"./chunk-UJVVJJJO.js";function Ht(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function ft(t,i={}){if(Ht(t)){let e=(n,r)=>{var o,s;let c=(o=t?.$attrs)!=null&&o[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((l,a)=>{if(a!=null){let p=typeof a;if(p==="string"||p==="number")l.push(a);else if(p==="object"){let f=Array.isArray(a)?e(n,a):Object.entries(a).map(([u,d])=>n==="style"&&(d||d===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${d}`:d?u:void 0);l=f.length?l.concat(f.filter(u=>!!u)):l}}return l},c)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?ft(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function $t(t,i="",e){Ht(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Wt(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}function B(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function ht(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),r=Array.isArray(i),o,s,c;if(n&&r){if(s=t.length,s!=i.length)return!1;for(o=s;o--!==0;)if(!ht(t[o],i[o],e))return!1;return!0}if(n!=r)return!1;let l=t instanceof Date,a=i instanceof Date;if(l!=a)return!1;if(l&&a)return t.getTime()==i.getTime();let p=t instanceof RegExp,f=i instanceof RegExp;if(p!=f)return!1;if(p&&f)return t.toString()==i.toString();let u=Object.keys(t);if(s=u.length,s!==Object.keys(i).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(i,u[o]))return!1;for(o=s;o--!==0;)if(c=u[o],!ht(t[c],i[c],e))return!1;return!0}function Se(t,i){return ht(t,i)}function Bt(t){return!!(t&&t.constructor&&t.call&&t.apply)}function h(t){return!B(t)}function mt(t,i){if(!t||!i)return null;try{let e=t[i];if(h(e))return e}catch{}if(Object.keys(t).length){if(Bt(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let r=0,o=e.length;r<o;++r){if(n==null)return null;n=n[e[r]]}return n}}return null}function Ee(t,i,e){return e?mt(t,e)===mt(i,e):Se(t,i)}function R(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function _(t,...i){return Bt(t)?t(...i):t}function P(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Ut(t){return P(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Vt(t,i="",e={}){let n=Ut(i).split("."),r=n.shift();return r?R(t)?Vt(_(t[Object.keys(t).find(o=>Ut(o)===r)||""],e),n.join("."),e):void 0:_(t,e)}function st(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function Gt(t){return h(t)&&!isNaN(t)}function E(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function F(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function ot(t){return P(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function gt(t){return P(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var at={};function Be(t="pui_id_"){return at.hasOwnProperty(t)||(at[t]=0),at[t]++,`${t}${at[t]}`}function _e(){let t=[],i=(s,c,l=999)=>{let a=r(s,c,l),p=a.value+(a.key===s?0:l)+1;return t.push({key:s,value:p}),p},e=s=>{t=t.filter(c=>c.value!==s)},n=(s,c)=>r(s,c).value,r=(s,c,l=0)=>[...t].reverse().find(a=>c?!0:a.key===s)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,c,l)=>{c&&(c.style.zIndex=String(i(s,!0,l)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var Ge=_e();var Kt=["*"];var y=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var ni=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=lt({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Kt,decls:1,vars:0,template:function(n,r){n&1&&(pt(),ut(0))},encapsulation:2})}return t})(),ri=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=lt({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Kt,decls:1,vars:0,template:function(n,r){n&1&&(pt(),ut(0))},encapsulation:2})}return t})(),si=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(xt(It))};static \u0275dir=Dt({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),oi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Pt({type:t});static \u0275inj=At({imports:[kt]})}return t})();var be=Object.defineProperty,Te=Object.defineProperties,ve=Object.getOwnPropertyDescriptors,ct=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,jt=(t,i,e)=>i in t?be(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,v=(t,i)=>{for(var e in i||(i={}))zt.call(i,e)&&jt(t,e,i[e]);if(ct)for(var e of ct(i))qt.call(i,e)&&jt(t,e,i[e]);return t},St=(t,i)=>Te(t,ve(i)),L=(t,i)=>{var e={};for(var n in t)zt.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&ct)for(var n of ct(t))i.indexOf(n)<0&&qt.call(t,n)&&(e[n]=t[n]);return e};var Oe=Wt(),O=Oe;function Yt(t,i){st(t)?t.push(...i||[]):R(t)&&Object.assign(t,i)}function Ce(t){return R(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Ae(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Et(t="",i=""){return Ae(`${P(t,!1)&&P(i,!1)?`${t}-`:t}${i}`)}function Zt(t="",i=""){return`--${Et(t,i)}`}function Re(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Qt(t,i="",e="",n=[],r){if(P(t)){let o=/{([^}]*)}/g,s=t.trim();if(Re(s))return;if(E(s,o)){let c=s.replaceAll(o,p=>{let u=p.replace(/{|}/g,"").split(".").filter(d=>!n.some(g=>E(d,g)));return`var(${Zt(e,ot(u.join("-")))}${h(r)?`, ${r}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,a=/var\([^)]+\)/g;return E(c.replace(a,"0"),l)?`calc(${c})`:c}return s}else if(Gt(t))return t}function Le(t,i,e){P(i,!1)&&t.push(`${i}:${e};`)}function k(t,i){return t?`${t}{${i}}`:""}var H=(...t)=>we(m.getTheme(),...t),we=(t={},i,e,n)=>{if(i){let{variable:r,options:o}=m.defaults||{},{prefix:s,transform:c}=t?.options||o||{},a=E(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||B(n)&&c==="strict"?m.getTokenValue(i):Qt(a,void 0,s,[r.excludedKeyRegex],e)}return""};function Ne(t,i={}){let e=m.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,s=(a,p="")=>Object.entries(a).reduce((f,[u,d])=>{let g=E(u,o)?Et(p):Et(p,ot(u)),S=Ce(d);if(R(S)){let{variables:w,tokens:N}=s(S,g);Yt(f.tokens,N),Yt(f.variables,w)}else f.tokens.push((n?g.replace(`${n}-`,""):g).replaceAll("-",".")),Le(f.variables,Zt(g),Qt(S,g,n,[o]));return f},{variables:[],tokens:[]}),{variables:c,tokens:l}=s(t,n);return{value:c,tokens:l,declarations:c.join(""),css:k(r,c.join(""))}}var T={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return Ne(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s,c,l,a,p,f;let{preset:u,options:d}=i,g,S,w,N,I,D,b;if(h(u)&&d.transform!=="strict"){let{primitive:V,semantic:G,extend:K}=u,$=G||{},{colorScheme:j}=$,Y=L($,["colorScheme"]),z=K||{},{colorScheme:q}=z,W=L(z,["colorScheme"]),U=j||{},{dark:Z}=U,Q=L(U,["dark"]),J=q||{},{dark:X}=J,tt=L(J,["dark"]),et=h(V)?this._toVariables({primitive:V},d):{},it=h(Y)?this._toVariables({semantic:Y},d):{},nt=h(Q)?this._toVariables({light:Q},d):{},bt=h(Z)?this._toVariables({dark:Z},d):{},Tt=h(W)?this._toVariables({semantic:W},d):{},vt=h(tt)?this._toVariables({light:tt},d):{},Ot=h(X)?this._toVariables({dark:X},d):{},[te,ee]=[(o=et.declarations)!=null?o:"",et.tokens],[ie,ne]=[(s=it.declarations)!=null?s:"",it.tokens||[]],[re,se]=[(c=nt.declarations)!=null?c:"",nt.tokens||[]],[oe,ae]=[(l=bt.declarations)!=null?l:"",bt.tokens||[]],[ce,le]=[(a=Tt.declarations)!=null?a:"",Tt.tokens||[]],[pe,ue]=[(p=vt.declarations)!=null?p:"",vt.tokens||[]],[de,fe]=[(f=Ot.declarations)!=null?f:"",Ot.tokens||[]];g=this.transformCSS(t,te,"light","variable",d,n,r),S=ee;let he=this.transformCSS(t,`${ie}${re}`,"light","variable",d,n,r),me=this.transformCSS(t,`${oe}`,"dark","variable",d,n,r);w=`${he}${me}`,N=[...new Set([...ne,...se,...ae])];let ge=this.transformCSS(t,`${ce}${pe}color-scheme:light`,"light","variable",d,n,r),ye=this.transformCSS(t,`${de}color-scheme:dark`,"dark","variable",d,n,r);I=`${ge}${ye}`,D=[...new Set([...le,...ue,...fe])],b=_(u.css,{dt:H})}return{primitive:{css:g,tokens:S},semantic:{css:w,tokens:N},global:{css:I,tokens:D},style:b}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:o,selector:s}){var c,l,a;let p,f,u;if(h(i)&&e.transform!=="strict"){let d=t.replace("-directive",""),g=i,{colorScheme:S,extend:w,css:N}=g,I=L(g,["colorScheme","extend","css"]),D=w||{},{colorScheme:b}=D,V=L(D,["colorScheme"]),G=S||{},{dark:K}=G,$=L(G,["dark"]),j=b||{},{dark:Y}=j,z=L(j,["dark"]),q=h(I)?this._toVariables({[d]:v(v({},I),V)},e):{},W=h($)?this._toVariables({[d]:v(v({},$),z)},e):{},U=h(K)?this._toVariables({[d]:v(v({},K),Y)},e):{},[Z,Q]=[(c=q.declarations)!=null?c:"",q.tokens||[]],[J,X]=[(l=W.declarations)!=null?l:"",W.tokens||[]],[tt,et]=[(a=U.declarations)!=null?a:"",U.tokens||[]],it=this.transformCSS(d,`${Z}${J}`,"light","variable",e,r,o,s),nt=this.transformCSS(d,tt,"dark","variable",e,r,o,s);p=`${it}${nt}`,f=[...new Set([...Q,...X,...et])],u=_(N,{dt:H})}return{css:p,tokens:f,style:u}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let{preset:s,options:c}=i,l=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:l,options:c,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let s=t.replace("-directive",""),{preset:c,options:l}=i,a=(o=c?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:a,options:l,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${_(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:i,params:e,set:r,defaults:o}),c=Object.entries(n).reduce((l,[a,p])=>l.push(`${a}="${p}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[a,p])=>{if(p?.css){let f=F(p?.css),u=`${a}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${u}" ${c}>${f}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){var s;let c={name:t,theme:i,params:e,set:r,defaults:o},l=(s=t.includes("-directive")?this.getPresetD(c):this.getPresetC(c))==null?void 0:s.css,a=Object.entries(n).reduce((p,[f,u])=>p.push(`${f}="${u}"`)&&p,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${a}>${F(l)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([o,s])=>{let c=E(o,i.variable.excludedKeyRegex)?e:e?`${e}.${gt(o)}`:gt(o),l=n?`${n}.${o}`:o;R(s)?this.createTokens(s,i,c,l,r):(r[c]||(r[c]={paths:[],computed(a,p={}){var f,u;return this.paths.length===1?(f=this.paths[0])==null?void 0:f.computed(this.paths[0].scheme,p.binding):a&&a!=="none"?(u=this.paths.find(d=>d.scheme===a))==null?void 0:u.computed(a,p.binding):this.paths.map(d=>d.computed(d.scheme,p[d.scheme]))}}),r[c].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(a,p={}){let f=/{([^}]*)}/g,u=s;if(p.name=this.path,p.binding||(p.binding={}),E(s,f)){let g=s.trim().replaceAll(f,N=>{var I;let D=N.replace(/{|}/g,""),b=(I=r[D])==null?void 0:I.computed(a,p);return st(b)&&b.length===2?`light-dark(${b[0].value},${b[1].value})`:b?.value}),S=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,w=/var\([^)]+\)/g;u=E(g.replace(w,"0"),S)?`calc(${g})`:g}return B(p.binding)&&delete p.binding,{colorScheme:a,path:this.path,paths:p,value:u.includes("undefined")?void 0:u}}}))}),r},getTokenValue(t,i,e){var n;let o=(l=>l.split(".").filter(p=>!E(p.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,c=[(n=t[o])==null?void 0:n.computed(s)].flat().filter(l=>l);return c.length===1?c[0].value:c.reduce((l={},a)=>{let p=a,{colorScheme:f}=p,u=L(p,["colorScheme"]);return l[f]=u,l},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?k(h(i)?`${t}${i},${t} ${i}`:t,n):k(t,h(i)?k(i,n):n)},transformCSS(t,i,e,n,r={},o,s,c){if(h(i)){let{cssLayer:l}=r;if(n!=="style"){let a=this.getColorSchemeOption(r,s);i=e==="dark"?a.reduce((p,{type:f,selector:u})=>(h(u)&&(p+=u.includes("[CSS]")?u.replace("[CSS]",i):this.getSelectorRule(u,c,f,i)),p),""):k(c??":root",i)}if(l){let a={name:"primeui",order:"primeui"};R(l)&&(a.name=_(l.name,{name:t,type:n})),h(a.name)&&(i=k(`@layer ${a.name}`,i),o?.layerNames(a.name))}return i}return""}},m={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=St(v({},i),{options:v(v({},this.defaults.options),i.options)}),this._tokens=T.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),O.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=St(v({},this.theme),{preset:t}),this._tokens=T.createTokens(t,this.defaults),this.clearLoadedStyleNames(),O.emit("preset:change",t),O.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=St(v({},this.theme),{options:t}),this.clearLoadedStyleNames(),O.emit("options:change",t),O.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return T.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return T.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return T.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return T.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return T.getPreset(r)},getLayerOrderCSS(t=""){return T.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return T.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return T.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return T.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),O.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&O.emit("theme:load"))}};var Ie=0,Jt=(()=>{class t{document=A(rt);use(e,n={}){let r=!1,o=e,s=null,{immediate:c=!0,manual:l=!1,name:a=`style_${++Ie}`,id:p=void 0,media:f=void 0,nonce:u=void 0,first:d=!1,props:g={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${a}"]`)||p&&this.document.getElementById(p)||this.document.createElement("style"),!s.isConnected){o=e,ft(s,{type:"text/css",media:f,nonce:u});let S=this.document.head;d&&S.firstChild?S.insertBefore(s,S.firstChild):S.appendChild(s),$t(s,"data-primeng-style-id",a)}return s.textContent!==o&&(s.textContent=o),{id:p,name:a,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wi={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},xe=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Pe=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Xt=(()=>{class t{name="base";useStyle=A(Jt);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},r=o=>o)=>{let o=r(_(e,{dt:H}));return o?this.useStyle.use(F(o),C({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>m.transformCSS(e.name||this.name,`${r}${n}`));loadGlobalCSS=(e={})=>this.load(Pe,e);loadGlobalTheme=(e={},n="")=>this.load(xe,e,(r="")=>m.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>m.getCommon(this.name,e);getComponentTheme=e=>m.getComponent(this.name,e);getDirectiveTheme=e=>m.getDirective(this.name,e);getPresetTheme=(e,n,r)=>m.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>m.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=_(this.css,{dt:H}),o=F(`${r}${e}`),s=Object.entries(n).reduce((c,[l,a])=>c.push(`${l}="${a}"`)&&c,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>m.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[m.getStyleSheet(this.name,e,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=_(this.theme,{dt:H}),c=F(m.transformCSS(o,s)),l=Object.entries(n).reduce((a,[p,f])=>a.push(`${p}="${f}"`)&&a,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${l}>${c}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var De=(()=>{class t{theme=M(void 0);csp=M({nonce:void 0});isThemeChanged=!1;document=A(rt);baseStyle=A(Xt);constructor(){dt(()=>{O.on("theme:change",e=>{Ft(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),dt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){m.clearLoadedStyleNames(),O.clear()}onThemeChange(e){m.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!m.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,C({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,C({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},s),o),m.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Me=(()=>{class t extends De{ripple=M(!1);platformId=A(Nt);inputStyle=M(null);inputVariant=M(null);overlayOptions={};csp=M({nonce:void 0});filterMatchModeOptions={text:[y.STARTS_WITH,y.CONTAINS,y.NOT_CONTAINS,y.ENDS_WITH,y.EQUALS,y.NOT_EQUALS],numeric:[y.EQUALS,y.NOT_EQUALS,y.LESS_THAN,y.LESS_THAN_OR_EQUAL_TO,y.GREATER_THAN,y.GREATER_THAN_OR_EQUAL_TO],date:[y.DATE_IS,y.DATE_IS_NOT,y.DATE_BEFORE,y.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Ct;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=C(C({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:o,inputVariant:s,theme:c,overlayOptions:l,translation:a,filterMatchModeOptions:p}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),o&&this.inputStyle.set(o),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),a&&this.setTranslation(a),p&&(this.filterMatchModeOptions=p),c&&this.setThemeConfig({theme:c,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=wt(t)))(r||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fe=new Rt("PRIME_NG_CONFIG");function $i(...t){let i=t?.map(n=>({provide:Fe,useValue:n,multi:!1})),e=Mt(()=>{let n=A(Me);t?.forEach(r=>n.setConfig(r))});return Lt([...i,e])}export{Ee as a,Vt as b,Be as c,ni as d,ri as e,si as f,oi as g,O as h,m as i,wi as j,Xt as k,Me as l,$i as m};
