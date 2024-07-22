"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8042],{87880:(e,t,s)=>{s.d(t,{ConfigCtrl:()=>O,zv:()=>y,uA:()=>v,ExplorerCtrl:()=>z,jb:()=>q,OptionsCtrl:()=>C,AV:()=>b,ThemeCtrl:()=>ee,ToastCtrl:()=>se});Symbol();const o=Symbol();const n=Object.getPrototypeOf,a=new WeakMap,r=e=>e&&(a.has(e)?a.get(e):n(e)===Object.prototype||n(e)===Array.prototype),i=(e,t=!0)=>{a.set(e,t)},l=e=>"object"===typeof e&&null!==e,c=new WeakMap,d=new WeakSet,p=(e=Object.is,t=((e,t)=>new Proxy(e,t)),s=(e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),n=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),a=new WeakMap,p=((e,t,s=n)=>{const o=a.get(e);if((null==o?void 0:o[0])===t)return o[1];const r=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return i(r,!0),a.set(e,[t,r]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(r,t))return;const o=Reflect.get(e,t),n={value:o,enumerable:!0,configurable:!0};if(d.has(o))i(o,!1);else if(o instanceof Promise)delete n.value,n.get=()=>s(o);else if(c.has(o)){const[e,t]=c.get(o);n.value=p(e,t(),s)}Object.defineProperty(r,t,n)})),Object.preventExtensions(r)}),u=new WeakMap,h=[1,1],f=(n=>{if(!l(n))throw new Error("object required");const a=u.get(n);if(a)return a;let i=h[0];const m=new Set,b=(e,t=++h[0])=>{i!==t&&(i=t,m.forEach((s=>s(e,t))))};let y=h[1];const g=e=>(t,s)=>{const o=[...t];o[1]=[e,...o[1]],b(o,s)},v=new Map,w=e=>{var t;const s=v.get(e);s&&(v.delete(e),null==(t=s[1])||t.call(s))},C=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),I={deleteProperty(e,t){const s=Reflect.get(e,t);w(t);const o=Reflect.deleteProperty(e,t);return o&&b(["delete",[t],s]),o},set(t,n,a,i){const p=Reflect.has(t,n),h=Reflect.get(t,n,i);if(p&&(e(h,a)||u.has(a)&&e(h,u.get(a))))return!0;w(n),l(a)&&(a=(e=>r(e)&&e[o]||null)(a)||a);let y=a;if(a instanceof Promise)a.then((e=>{a.status="fulfilled",a.value=e,b(["resolve",[n],e])})).catch((e=>{a.status="rejected",a.reason=e,b(["reject",[n],e])}));else{!c.has(a)&&s(a)&&(y=f(a));const e=!d.has(y)&&c.get(y);e&&((e,t)=>{if(v.has(e))throw new Error("prop listener already exists");if(m.size){const s=t[3](g(e));v.set(e,[t,s])}else v.set(e,[t])})(n,e)}return Reflect.set(t,n,y,i),b(["set",[n],a,h]),!0}},O=t(C,I);u.set(n,O);const W=[C,(e=++h[1])=>(y===e||m.size||(y=e,v.forEach((([t])=>{const s=t[1](e);s>i&&(i=s)}))),i),p,e=>{m.add(e),1===m.size&&v.forEach((([e,t],s)=>{if(t)throw new Error("remove already exists");const o=e[3](g(s));v.set(s,[e,o])}));return()=>{m.delete(e),0===m.size&&v.forEach((([e,t],s)=>{t&&(t(),v.set(s,[e]))}))}}];return c.set(O,W),Reflect.ownKeys(n).forEach((e=>{const t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(O[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(C,e,t)})),O}))=>[f,c,d,e,t,s,n,a,p,u,h],[u]=p();function h(e={}){return u(e)}function f(e,t,s){const o=c.get(e);let n;o||console.warn("Please use proxy object");const a=[],r=o[3];let i=!1;const l=r((e=>{a.push(e),s?t(a.splice(0)):n||(n=Promise.resolve().then((()=>{n=void 0,i&&t(a.splice(0))})))}));return i=!0,()=>{i=!1,l()}}const m=h({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),b={state:m,subscribe:e=>f(m,(()=>e(m))),push(e,t){e!==m.view&&(m.view=e,t&&(m.data=t),m.history.push(e))},reset(e){m.view=e,m.history=[e]},replace(e){m.history.length>1&&(m.history[m.history.length-1]=e,m.view=e)},goBack(){if(m.history.length>1){m.history.pop();const[e]=m.history.slice(-1);m.view=e}},setData(e){m.data=e}},y={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>y.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return y.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(y.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;return o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s),`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!y.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;return o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s),`${o}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(y.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(y.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(y.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(y.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=b.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},g=h({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),v={state:g,subscribe:e=>f(g.events,(()=>e(function(e,t){const s=c.get(e);s||console.warn("Please use proxy object");const[o,n,a]=s;return a(o,n(),t)}(g.events[g.events.length-1])))),initialize(){g.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(g.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){g.connectedWalletId=e},click(e){if(g.enabled){const t={type:"CLICK",name:e.name,userSessionId:g.userSessionId,timestamp:Date.now(),data:e};g.events.push(t)}},track(e){if(g.enabled){const t={type:"TRACK",name:e.name,userSessionId:g.userSessionId,timestamp:Date.now(),data:e};g.events.push(t)}},view(e){if(g.enabled){const t={type:"VIEW",name:e.name,userSessionId:g.userSessionId,timestamp:Date.now(),data:e};g.events.push(t)}}},w=h({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),C={state:w,subscribe:e=>f(w,(()=>e(w))),setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},I=h({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),O={state:I,subscribe:e=>f(I,(()=>e(I))),setConfig(e){var t,s;v.initialize(),C.setChains(e.chains),C.setIsAuth(Boolean(e.enableAuthMode)),C.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),C.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),y.setModalVersionInStorage(),Object.assign(I,e)}};var W=Object.defineProperty,E=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,L=(e,t,s)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const k="https://explorer-api.walletconnect.com",M="wcm",U="js-2.6.2";async function P(e,t){const s=((e,t)=>{for(var s in t||(t={}))j.call(t,s)&&L(e,s,t[s]);if(E)for(var s of E(t))A.call(t,s)&&L(e,s,t[s]);return e})({sdkType:M,sdkVersion:U},t),o=new URL(e,k);return o.searchParams.append("projectId",O.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&o.searchParams.append(e,String(t))})),(await fetch(o)).json()}const D=async e=>P("/w3m/v1/getDesktopListings",e),S=async e=>P("/w3m/v1/getMobileListings",e),N=async e=>P("/w3m/v1/getAllListings",e),T=e=>`${k}/w3m/v1/getWalletImage/${e}?projectId=${O.state.projectId}&sdkType=${M}&sdkVersion=${U}`,x=e=>`${k}/w3m/v1/getAssetImage/${e}?projectId=${O.state.projectId}&sdkType=${M}&sdkVersion=${U}`;var R=Object.defineProperty,_=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,B=(e,t,s)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const H=y.isMobile(),K=h({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),z={state:K,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=O.state;if("NONE"===e||"ALL"===t&&!e)return K.recomendedWallets;if(y.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await N(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),K.recomendedWallets=o}else{const{chains:e,isAuth:s}=C.state,o=e?.join(","),n=y.isArray(t),a={page:1,sdks:s?"auth_v1":void 0,entries:y.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:n?t.join(","):void 0},{listings:r}=H?await S(a):await D(a);K.recomendedWallets=Object.values(r)}return K.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))$.call(t,s)&&B(e,s,t[s]);if(_)for(var s of _(t))V.call(t,s)&&B(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=O.state,{recomendedWallets:n}=K;if("ALL"===o)return K.wallets;n.length?t.excludedIds=n.map((e=>e.id)).join(","):y.isArray(s)&&(t.excludedIds=s.join(",")),y.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),C.state.isAuth&&(t.sdks="auth_v1");const{page:a,search:r}=e,{listings:i,total:l}=H?await S(t):await D(t),c=Object.values(i),d=r?"search":"wallets";return K[d]={listings:[...K[d].listings,...c],total:l,page:a??1},{listings:c,total:l}},getWalletImageUrl:e=>T(e),getAssetImageUrl:e=>x(e),resetSearch(){K.search={listings:[],total:0,page:1}}},J=h({open:!1}),q={state:J,subscribe:e=>f(J,(()=>e(J))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=C.state;if(y.removeWalletConnectDeepLink(),C.setWalletConnectUri(e?.uri),C.setChains(e?.chains),b.reset("ConnectWallet"),s&&o)J.open=!0,t();else{const e=setInterval((()=>{const s=C.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),J.open=!0,t())}),200)}})),close(){J.open=!1}};var F=Object.defineProperty,G=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,Y=(e,t,s)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const Z=h({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),ee={state:Z,subscribe:e=>f(Z,(()=>e(Z))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(Z.themeMode=t),s&&(Z.themeVariables=((e,t)=>{for(var s in t||(t={}))Q.call(t,s)&&Y(e,s,t[s]);if(G)for(var s of G(t))X.call(t,s)&&Y(e,s,t[s]);return e})({},s))}},te=h({open:!1,message:"",variant:"success"}),se={state:te,subscribe:e=>f(te,(()=>e(te))),openToast(e,t){te.open=!0,te.message=e,te.variant=t},closeToast(){te.open=!1}}},18042:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>n});var o=s(87880);class n{constructor(e){this.openModal=o.jb.open,this.closeModal=o.jb.close,this.subscribeModal=o.jb.subscribe,this.setTheme=o.ThemeCtrl.setThemeConfig,o.ThemeCtrl.setThemeConfig(e),o.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(4952).then(s.bind(s,94952));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);
//# sourceMappingURL=8042.18bf26f3.chunk.js.map