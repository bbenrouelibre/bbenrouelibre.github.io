"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3464],{3464:(e,t,n)=>{n.d(t,{ZI:()=>Tt,zD:()=>Ct,ZP:()=>bt});var s=n(92936),r=n(5985),i=n(47583),a=n(54690),o=n(6823),l=n(18533),d=n(15288),c=n(66284),u=n(76078),p=n(26729),g=n(25320),m=n(44591),x=n(63415),h=n(5967),f=n(94284),I=n(24210),N=n(82743),A=n(86059),T=n(57852),C=n(41390),_=n(70854);var v=n(39671),E=n(2802),w=n(32682),b=n(83102),y=n(68566),P=n(89882),j=n(64538),k=n(52384),O=n(5670),R=n(78635),S=n(45779),L=n(32115),B=n(91325);var z=n(47263),F=n(78129),D=n(59036),U=n(25408);function G(e,t,n){const{hasPriceAdjustment:s,updatedAssets:r}=(0,D.$)(e,t),i=s&&n,{unchanged:a,priceChanged:o,unavailable:l}=(0,U.K)(r),d=r.length>0,c=o.length>0,u=l.length>0,p=c||u,g=function(e,t,n){return[...e.map((e=>({asset:e,status:z.ZJ.UNAVAILABLE}))),...t.map((e=>({asset:e,status:z.ZJ.REVIEWING_PRICE_CHANGE}))),...n.map((e=>({asset:e,status:z.ZJ.REVIEWED})))]}(l,o,a),m=function(e,t,n,s){return e?t?n?z.s.IN_REVIEW:z.s.CONFIRM_REVIEW:s?z.s.CONFIRM_QUOTE:z.s.CONFIRMING_IN_WALLET:z.s.ADDING_TO_BAG}(d,p,c,i);return{newBagItems:g,nextBagStatus:m}}function H(e){return{action:z.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function M(e,t){const n=e.route?e.route.map(H):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}var W=n(27009),$=n(32027);function V(e,t,n,s,r,i,a){try{var o=e[i](a),l=o.value}catch(d){return void n(d)}o.done?t(l):Promise.resolve(l).then(s,r)}function Z(){const{provider:e}=(0,p.G)(),t=(0,W.p)((e=>e.sendTransaction)),n=(0,$.J)((e=>e.setTransactionResponse)),{setLocked:s,setBagExpanded:r,reset:i}=(0,j.c)((({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n})));return(0,S.useCallback)(function(){var a,o=(a=function*(a,o,l=!1){if(!e)return;const d=yield t(e.getSigner(),o,a,l);d&&(s(!1),n(d),r({bagExpanded:!1}),i())},function(){var e=this,t=arguments;return new Promise((function(n,s){var r=a.apply(e,t);function i(e){V(r,n,s,i,o,"next",e)}function o(e){V(r,n,s,i,o,"throw",e)}i(void 0)}))});return function(e,t){return o.apply(this,arguments)}}(),[e,i,t,r,s,n])}var q=n(47832),K=n(92532);const X=(0,n(92490).F)()((0,q.mW)((e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e((()=>({inputCurrency:t}))),clearInputCurrency:()=>e((()=>({inputCurrency:void 0}))),setTokenTradeInput:t=>e((()=>({tokenTradeInput:t})))})),{name:"useTokenInput"}),K.X);function Y(e,t,n,s,r,i,a){try{var o=e[i](a),l=o.value}catch(d){return void n(d)}o.done?t(l):Promise.resolve(l).then(s,r)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(s,r){var i=e.apply(t,n);function a(e){Y(i,s,r,a,o,"next",e)}function o(e){Y(i,s,r,a,o,"throw",e)}a(void 0)}))}}function Q(){const{account:e}=(0,p.G)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:s,setDidOpenUnavailableAssets:r,isLocked:i,setLocked:a,setItemsInBag:o}=(0,j.c)((({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:i,setItemsInBag:a})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:i,setItemsInBag:a}))),l=X((e=>e.tokenTradeInput)),d=(0,S.useMemo)((()=>(0,F.G7)(t)),[t]),[c]=(0,_.yoq)(),u=Z(),g=(0,S.useCallback)((()=>{s&&r(!1),!i&&a(!0),n(z.s.FETCHING_ROUTE)}),[i,s,a,n,r]);return(0,S.useCallback)(J((function*(){g(),c({variables:{senderAddress:e||"",nftTrades:(0,F.hI)(d),tokenTrades:l||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route)return n(z.s.ADDING_TO_BAG),void a(!1);const t=function(e){return e.filter((e=>e.status!==z.ZJ.UNAVAILABLE)).map((e=>e.asset))}(d),s=!!l,{route:r,routeResponse:i}=M(e.nftRoute,s),{newBagItems:c,nextBagStatus:p}=G(t,r,s);if(o(c),n(p),p===z.s.CONFIRMING_IN_WALLET)return u(i,t,s),void a(!0);a(!1)}})})),[e,c,d,u,g,a,n,o,l])}var ee=n(92650);function te(e){return{...(n={inputAmount:e.inputAmount,outputAmount:e.outputAmount},{inputAmount:{amount:n.inputAmount.quotient.toString(),token:{address:n.inputAmount.currency.isToken?n.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.inputAmount.currency.chainId,decimals:n.inputAmount.currency.decimals,isNative:n.inputAmount.currency.isNative}},outputAmount:{amount:n.outputAmount.quotient.toString(),token:{address:n.outputAmount.currency.isToken?n.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.outputAmount.currency.chainId,decimals:n.outputAmount.currency.decimals,isNative:n.outputAmount.currency.isNative}}}),pools:(t=e.route.pools,t.map((e=>function(e){const t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}}(e))))};var t,n}function ne(e,t,n){const s=X((e=>e.setTokenTradeInput)),r=(0,B.pG)(e)&&e.routes,i=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,a=!!n&&!!t;(0,S.useEffect)((()=>{if(!r||!i||!a)return void s(void 0);const o=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:l,v2TokenTradeRouteInputs:d,v3TokenTradeRouteInputs:c}=function(e){const t=[],n=[],s=[],r=e.swaps;for(const i of r)i.route.protocol===ee.Protocol.MIXED?t.push(te(i)):i.route.protocol===ee.Protocol.V2?n.push(te(i)):s.push(te(i));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:s.length>0?s:void 0}}(e),u={mixedRoutes:l,tradeType:_.NSL.ExactOutput,v2Routes:d,v3Routes:c},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;s({permit:p,routes:u,slippageToleranceBasisPoints:o,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})}),[t,n,a,i,r,s,e])}var se=n(14411),re=n(66136),ie=n(2721);var ae,oe=n(43827),le=n(57221),de=n(86082),ce=n(55752);function ue(e,t,n,r,i){const a={handleClick:()=>{},buttonText:(0,s.jsx)(o.cC,{children:"Something went wrong"}),disabled:!0,warningText:void 0,warningTextColor:t.deprecated_accentWarning,helperText:void 0,helperTextColor:t.neutral2,buttonColor:t.accent1,buttonTextColor:t.deprecated_accentTextLightPrimary};return{[ae.WALLET_NOT_CONNECTED]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(o.cC,{children:"Connect wallet"})},[ae.NOT_SUPPORTED_CHAIN]:{...a,handleClick:n??(()=>{}),buttonText:(0,s.jsx)(o.cC,{children:"Switch networks"}),disabled:!1,warningText:(0,s.jsx)(o.cC,{children:"Wrong network"})},[ae.INSUFFICIENT_BALANCE]:{...a,buttonText:(0,s.jsx)(o.cC,{children:"Pay"}),warningText:(0,s.jsx)(o.cC,{children:"Insufficient funds"})},[ae.ERROR]:{...a,warningText:(0,s.jsx)(o.cC,{children:"Something went wrong. Please try again."})},[ae.IN_WALLET_CONFIRMATION]:{...a,buttonText:(0,s.jsx)(o.cC,{children:"Proceed in wallet"})},[ae.PROCESSING_TRANSACTION]:{...a,buttonText:(0,s.jsx)(o.cC,{children:"Transaction pending"})},[ae.FETCHING_TOKEN_ROUTE]:{...a,buttonText:(0,s.jsx)(o.cC,{children:"Fetching route"})},[ae.INVALID_TOKEN_ROUTE]:{...a,buttonText:(0,s.jsx)(o.cC,{children:"Pay"})},[ae.NO_TOKEN_ROUTE_FOUND]:{...a,buttonText:(0,s.jsx)(o.cC,{children:"Insufficient liquidity"}),buttonColor:t.surface3,buttonTextColor:t.neutral1,helperText:(0,s.jsx)(o.cC,{children:"Insufficient pool liquidity to complete transaction"})},[ae.LOADING_ALLOWANCE]:{...a,buttonText:(0,s.jsx)(o.cC,{children:"Loading allowance"})},[ae.IN_WALLET_ALLOWANCE_APPROVAL]:{...a,buttonText:(0,s.jsx)(o.cC,{children:"Approve in your wallet"})},[ae.PROCESSING_APPROVAL]:{...a,buttonText:(0,s.jsx)(o.cC,{children:"Approval pending"})},[ae.REQUIRE_APPROVAL]:{...a,disabled:!1,handleClick:n??(()=>{}),helperText:(0,s.jsx)(o.cC,{children:"An approval is needed to use this token. "}),buttonText:(0,s.jsx)(o.cC,{children:"Approve"})},[ae.CONFIRM_UPDATED_PRICE]:{...a,handleClick:n??(()=>{}),disabled:!1,warningTextColor:t.accent1,warningText:(0,s.jsx)(o.cC,{children:"Price updated"}),buttonText:(0,s.jsx)(o.cC,{children:"Pay"})},[ae.PRICE_IMPACT_HIGH]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonColor:i?i.priceImpactSeverity.color:a.buttonColor,helperText:(0,s.jsx)(o.cC,{children:"Price impact warning"}),helperTextColor:i?i.priceImpactSeverity.color:a.helperTextColor,buttonText:(0,s.jsx)(o.cC,{children:"Pay Anyway"})},[ae.PAY]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(o.cC,{children:"Pay"}),helperText:r?(0,s.jsx)(o.cC,{children:"Refunds for unavailable items will be given in ETH"}):void 0}}[e]}!function(e){e[e.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",e[e.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",e[e.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",e[e.ERROR=3]="ERROR",e[e.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",e[e.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",e[e.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",e[e.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",e[e.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",e[e.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",e[e.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",e[e.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",e[e.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",e[e.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",e[e.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",e[e.PAY=15]="PAY"}(ae||(ae={}));const pe=se.default.div.withConfig({displayName:"BagFooter__FooterContainer",componentId:"sc-358ea9ad-0"})`
  padding: 0px 12px;
`,ge=se.default.div.withConfig({displayName:"BagFooter__Footer",componentId:"sc-358ea9ad-1"})`
  border-top: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,me=(0,se.default)(m.ZP).withConfig({displayName:"BagFooter__FooterHeader",componentId:"sc-358ea9ad-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,xe=(0,se.default)(f.ZP).withConfig({displayName:"BagFooter__CurrencyRow",componentId:"sc-358ea9ad-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,he=(0,se.default)(m.ZP).withConfig({displayName:"BagFooter__TotalColumn",componentId:"sc-358ea9ad-4"})`
  text-align: end;
  overflow: hidden;
`,fe=(0,se.default)(le.Z).withConfig({displayName:"BagFooter__WarningIcon",componentId:"sc-358ea9ad-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,Ie=(0,se.default)(ce.Tv.BodyPrimary).withConfig({displayName:"BagFooter__WarningText",componentId:"sc-358ea9ad-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,Ne=(0,se.default)(ce.Tv.BodySmall).withConfig({displayName:"BagFooter__HelperText",componentId:"sc-358ea9ad-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,Ae=(0,se.default)(f.ZP).withConfig({displayName:"BagFooter__CurrencyInput",componentId:"sc-358ea9ad-8"})`
  gap: 8px;
  cursor: pointer;
`,Te=se.default.button.withConfig({displayName:"BagFooter__ActionButton",componentId:"sc-358ea9ad-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 535;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,Ce=(0,se.default)(N.X).withConfig({displayName:"BagFooter__FiatLoadingBubble",componentId:"sc-358ea9ad-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,_e=(0,se.default)(f.ZP).withConfig({displayName:"BagFooter__PriceImpactContainer",componentId:"sc-358ea9ad-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,ve=(0,se.default)(f.ZP).withConfig({displayName:"BagFooter__PriceImpactRow",componentId:"sc-358ea9ad-12"})`
  align-items: center;
  gap: 8px;
`,Ee=(0,se.default)(ce.Tv.BodyPrimary).withConfig({displayName:"BagFooter__ValueText",componentId:"sc-358ea9ad-13"})`
  line-height: 20px;
  font-weight: 535;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,we=({color:e,children:t})=>t?(0,s.jsxs)(Ie,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(fe,{}),t]}):null,be=({children:e,color:t})=>e?(0,s.jsx)(Ne,{lineHeight:"16px",$color:t,children:e}):null,ye={onlyShowCurrenciesWithBalance:!0},Pe=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:r,trade:i})=>{var a;const{formatEther:l,formatNumberOrString:d}=(0,re.Gb)();var c;return e?r!==L.qx.LOADING||i?(0,s.jsx)(Ee,{color:r===L.qx.LOADING?"neutral3":"neutral1",children:d({input:null===(a=i)||void 0===a?void 0:a.inputAmount.toExact(),type:re.sw.NFTToken})}):(0,s.jsx)(ce.Tv.BodyPrimary,{color:"neutral3",lineHeight:"20px",fontWeight:"535",children:(0,s.jsx)(o.cC,{children:"Fetching price..."})}):(0,s.jsxs)(ce.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"535",children:[l({input:t.toString(),type:re.sw.NFTToken}),"\xa0",(null===(c=n)||void 0===c?void 0:c.symbol)??"ETH"]})},je=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:r})=>{var i;const{formatNumberOrString:a}=(0,re.Gb)();return e?(0,s.jsxs)(_e,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(A.ud,{text:o.t`The estimated difference between the USD values of input and output amounts.`,children:(0,s.jsxs)(ve,{children:[(0,s.jsx)(le.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)(ce.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",t.displayPercentage(),")"]})]})})}),(0,s.jsx)(ce.Tv.BodySmall,{color:"neutral3",lineHeight:"20px",children:`${a({input:null===(i=e)||void 0===i?void 0:i.toExact(),type:re.sw.FiatNFTToken})}`})]}):!r||n!==L.qx.INVALID&&n!==L.qx.NO_ROUTE_FOUND?(0,s.jsx)(Ce,{}):null},ke=[z.s.FETCHING_ROUTE,z.s.CONFIRMING_IN_WALLET,z.s.FETCHING_FINAL_ROUTE,z.s.PROCESSING_TRANSACTION],Oe=({setModalIsOpen:e,eventProperties:t})=>{var n,a,l,d;const f=(0,g.LK)(),N=(0,se.useTheme)(),{account:A,chainId:F}=(0,p.G)(),D=(0,T.Nb)(F),U=Boolean(A&&F),G=(0,k.P)(),{inputCurrency:H}=X((({inputCurrency:e})=>({inputCurrency:e}))),M=X((e=>e.setInputCurrency)),$=(0,v.U8)("ETH"),V=(0,y.mM)(A??void 0,H&&H.isToken?H:void 0),{isLocked:Z,bagStatus:q,setBagExpanded:K,setBagStatus:Y}=(0,j.c)((({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s}))),[J,ee]=(0,S.useState)(!1),te=ke.includes(q),le=H??$,fe=!!H&&F===u.ChainId.MAINNET,{universalRouterAddress:Ie,universalRouterAddressIsLoading:Ne}=function(){var e,t;const{data:n,loading:s}=(0,_.Z6i)({fetchPolicy:"no-cache"});return{universalRouterAddress:null===(t=n)||void 0===t||null===(e=t.nftRoute)||void 0===e?void 0:e.toAddress,universalRouterAddressIsLoading:s}}();!function(e){const t=(0,W.p)((e=>e.state)),n=(0,W.p)((e=>e.setState)),s=(0,S.useRef)(t),{setBagStatus:r,setLocked:i}=(0,j.c)((({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n})));(0,S.useEffect)((()=>{W.p.subscribe((e=>s.current=e.state))}),[]),(0,S.useEffect)((()=>{s.current===z.c$.Confirming&&r(z.s.PROCESSING_TRANSACTION),s.current!==z.c$.Denied&&s.current!==z.c$.Invalid||(s.current===z.c$.Invalid?r(z.s.WARNING):r(z.s.CONFIRM_REVIEW),n(z.c$.New),i(!1),e(!1))}),[i,r,e,n,s.current])}(e);const Ce=Q(),_e=(0,S.useMemo)((()=>(0,P.Z)((0,c.formatEther)(G.toString()),$??void 0)),[$,G]),{state:ve,trade:Ee,maximumAmountIn:Oe,allowedSlippage:Re}=function(e,t){const{state:n,trade:s}=(0,R.C)(u.TradeType.EXACT_OUTPUT,t,e??void 0,L.R5.API),r=(0,O.Z)((0,B.pG)(s)?s:void 0),i=(0,S.useMemo)((()=>{var e,t;const n=null===(e=s)||void 0===e?void 0:e.maximumAmountIn(r);return(null===(t=n)||void 0===t?void 0:t.currency.isToken)?n:void 0}),[r,s]);return(0,S.useMemo)((()=>({state:n,trade:s,maximumAmountIn:i,allowedSlippage:r})),[r,i,n,s])}(fe?H:void 0,_e),Se=(0,E.Z)(Oe,function(e,t){if(e)return e===u.ChainId.MAINNET?t??(0,C.UNIVERSAL_ROUTER_ADDRESS)(e):(0,C.UNIVERSAL_ROUTER_ADDRESS)(e)}(D?F:void 0,Ie),L.d7.Classic),Le=Se.state===E.K.LOADING||Ne;ne(Ee,Se,Re);const Be=function(e){const t=(0,se.useTheme)(),{formatPercent:n}=(0,re.Gb)();return(0,S.useMemo)((()=>{const s=e?(0,ie.QW)(e):void 0,r=s?(0,ie.BK)(s):void 0,i="error"===r?t.critical:"warning"===r?t.deprecated_accentWarning:void 0;return s&&r&&i?{priceImpactSeverity:{type:r,color:i},displayPercentage:()=>n(s)}:void 0}),[n,t.critical,t.deprecated_accentWarning,e])}(Ee),ze=(0,w.sq)(null===(n=Ee)||void 0===n?void 0:n.inputAmount),Fe=(0,w.sq)(_e),De=fe?ze:Fe,{balance:Ue}=(0,oe.t)(),Ge=(0,S.useMemo)((()=>{if(U&&F===u.ChainId.MAINNET){if(H){var e;const t=null===(e=Ee)||void 0===e?void 0:e.inputAmount;if(!V||!t)return;return!V.lessThan(t)}return(0,c.parseEther)(Ue).gte(G)}}),[U,F,H,Ue,G,null===(a=Ee)||void 0===a?void 0:a.inputAmount,V]);(0,S.useEffect)((()=>{Y(z.s.ADDING_TO_BAG)}),[H,Y]);const He=(0,b.o)(),{buttonText:Me,buttonTextColor:We,disabled:$e,warningText:Ve,warningTextColor:Ze,helperText:qe,helperTextColor:Ke,handleClick:Xe,buttonColor:Ye}=(0,S.useMemo)((()=>{if(U&&F!==u.ChainId.MAINNET){const e=()=>He(u.ChainId.MAINNET);return ue(ae.NOT_SUPPORTED_CHAIN,N,e)}if(!1===Ge)return ue(ae.INSUFFICIENT_BALANCE,N);if(q===z.s.WARNING)return ue(ae.ERROR,N);if(!U){const e=()=>{f(),K({bagExpanded:!1})};return ue(ae.WALLET_NOT_CONNECTED,N,e)}if(q===z.s.FETCHING_FINAL_ROUTE||q===z.s.CONFIRMING_IN_WALLET)return ue(ae.IN_WALLET_CONFIRMATION,N);if(q===z.s.PROCESSING_TRANSACTION)return ue(ae.PROCESSING_TRANSACTION,N);if(fe&&ve!==L.qx.VALID)return ve===L.qx.INVALID?ue(ae.INVALID_TOKEN_ROUTE,N):ve===L.qx.NO_ROUTE_FOUND?ue(ae.NO_TOKEN_ROUTE_FOUND,N):ue(ae.FETCHING_TOKEN_ROUTE,N);const e=Se.state===E.K.REQUIRED,t=()=>e&&Se.approveAndPermit();return Le?ue(ae.LOADING_ALLOWANCE,N,t):e?Se.isApprovalPending?ue(ae.IN_WALLET_ALLOWANCE_APPROVAL,N,t):Se.isApprovalLoading?ue(ae.PROCESSING_APPROVAL,N,t):ue(ae.REQUIRE_APPROVAL,N,t):q===z.s.CONFIRM_QUOTE?ue(ae.CONFIRM_UPDATED_PRICE,N,Ce):Be&&"error"===Be.priceImpactSeverity.type?ue(ae.PRICE_IMPACT_HIGH,N,Ce,fe,Be):ue(ae.PAY,N,Ce,fe)}),[U,F,Ge,q,fe,ve,Le,Se,Be,N,Ce,He,f,K]),Je={usd_value:null===(l=De)||void 0===l?void 0:l.toExact(),using_erc20:!!H,...t};return(0,s.jsxs)(pe,{children:[(0,s.jsxs)(ge,{children:[(0,s.jsxs)(me,{gap:"xs",children:[(0,s.jsxs)(xe,{children:[(0,s.jsx)(m.ZP,{gap:"xs",children:D&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ce.Tv.SubHeaderSmall,{children:(0,s.jsx)(o.cC,{children:"Pay with"})}),(0,s.jsxs)(Ae,{onClick:()=>{Z||(ee(!0),(0,i._P)(r.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(h.Z,{currency:le,size:24}),(0,s.jsx)(ce.Tv.HeadlineSmall,{fontWeight:535,lineHeight:"24px",children:null===(d=le)||void 0===d?void 0:d.symbol}),(0,s.jsx)(de.Z,{size:20,color:N.neutral2})]})]})}),(0,s.jsxs)(he,{gap:"xs",children:[(0,s.jsx)(ce.Tv.SubHeaderSmall,{children:(0,s.jsx)(o.cC,{children:"Total"})}),(0,s.jsx)(Pe,{usingPayWithAnyToken:fe,totalEthPrice:G,activeCurrency:le,tradeState:ve,trade:Ee})]})]}),(0,s.jsx)(je,{usdcValue:De,priceImpact:Be,tradeState:ve,usingPayWithAnyToken:fe})]}),(0,s.jsxs)(i.M8,{events:[r.TM.onClick],name:r.Yz.NFT_BUY_BAG_PAY,element:r.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...Je},shouldLogImpression:U&&!$e,children:[(0,s.jsx)(we,{color:Ze,children:Ve}),(0,s.jsx)(be,{color:Ke,children:qe}),(0,s.jsxs)(Te,{"data-testid":"nft-buy-button",onClick:Xe,disabled:$e||te,$backgroundColor:Ye,$color:We,children:[te&&(0,s.jsx)(x.ZP,{size:"20px",stroke:"white"}),Me]})]})]}),(0,s.jsx)(I.Z,{isOpen:J,onDismiss:()=>ee(!1),onCurrencySelect:e=>{M(e.isNative?void 0:e),e.isToken&&(0,i._P)(r.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:le??void 0,currencySearchFilters:ye})]})};var Re=n(60040),Se=n(70518),Le=n(33426),Be=n(62587),ze=(n(18111),n(11604)),Fe=n(21989),De=n(69780);const Ue=se.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,Ge=se.default.circle.withConfig({displayName:"TimedLoader__Circle",componentId:"sc-40ed38f8-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${Ue} linear;
  animation: ${Ue} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accent1};
`,He=()=>(0,s.jsx)(l.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(Ge,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var Me=n(62293),We=n(58690),$e=n(68113),Ve=n(23173),Ze=n(43454),qe=(n(49484),"_1kuawcb rgw6ezbf rgw6ezd9 rgw6ez8bh rgw6ez45r rgw6ez45l"),Ke="_1kuawc1 rgw6ez2dr rgw6ez2j9 rgw6ez2of rgw6ez27x rgw6ez4b9 rgw6ez3tf rgw6ez7zd rgw6ez1dr rgw6ez80x",Xe="rgw6ez149 rgw6ez1b9 rgw6ez49l rgw6ez80p",Ye="rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez8bh rgw6ez45l rgw6ez45r rgw6ez4bf",Je="_1kuawc7",Qe="rgw6ez3xr";const et=(0,se.default)(De.UH).withConfig({displayName:"BagRow__RemoveButton",componentId:"sc-2ecf14d3-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,tt=(0,se.default)(De.UH).withConfig({displayName:"BagRow__ReviewButton",componentId:"sc-2ecf14d3-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,nt=se.default.div.withConfig({displayName:"BagRow__RemoveAssetOverlay",componentId:"sc-2ecf14d3-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,st=({onClick:e})=>(0,s.jsx)(nt,{onClick:e,children:(0,s.jsx)(We.Xv,{})}),rt=()=>(0,s.jsx)(l.n,{position:"relative",background:"loadingBackground",className:Xe,children:(0,s.jsxs)(l.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),it=({asset:e,usdPrice:t,removeAsset:n,showRemove:r,grayscale:i,isMobile:a})=>{const{formatEther:o,formatNumberOrString:u}=(0,re.Gb)(),[p,g]=(0,S.useState)(!1),[m,x]=(0,S.useState)(!e.smallImageUrl),[h,f]=(0,S.useState)(!1),I=(0,S.useCallback)((()=>f(!0)),[]),N=(0,S.useCallback)((()=>f(!1)),[]),A=Boolean(r&&h&&!a),T=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,C=o({input:T,type:re.sw.NFTToken}),_=u({input:t?parseFloat((0,c.formatEther)(T))*t:t,type:re.sw.FiatNFTToken}),v=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),n([e])}),[e,n]);return(0,s.jsx)(Ze.rU,{to:(0,F.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(d.X2,{className:Ke,onMouseEnter:I,onMouseLeave:N,children:[(0,s.jsxs)(l.n,{position:"relative",display:"flex",children:[r&&a&&(0,s.jsx)(st,{onClick:v}),!m&&(0,s.jsx)(l.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,Fe.default)(Xe,i&&!h&&Je),onLoad:()=>{g(!0)},onError:()=>{x(!0)},visibility:p?"visible":"hidden"}),!p&&(0,s.jsx)(l.n,{position:"absolute",className:`${Xe} ${Ve.L}`}),m&&(0,s.jsx)(rt,{})]}),(0,s.jsxs)(d.sg,{overflow:"hidden",width:"full",color:i?"neutral2":"neutral1",children:[(0,s.jsxs)(d.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(l.n,{className:qe,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)(Me.yT,{})]}),(0,s.jsxs)(d.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(l.n,{className:Ye,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(We.SA,{className:Qe})]})]}),A&&(0,s.jsx)(et,{onClick:v,emphasis:De.eI.medium,size:De.qE.medium,children:"Remove"}),(!A||a)&&(0,s.jsxs)(d.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(l.n,{className:"_1kuawc9 rgw6ez3sr rgw6ezbf rgw6ezd9 rgw6ez3xr",children:[C,"\xa0ETH"]}),(0,s.jsx)(l.n,{className:Ye,children:_})]})]})})},at=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:r,isMobile:i})=>{var a;const{formatEther:o}=(0,re.Gb)(),c=ze.O$.from(null===(a=e.updatedPriceInfo)||void 0===a?void 0:a.ETHPrice).gt(ze.O$.from(e.priceInfo.ETHPrice)),u=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!1)}),[e,n]),p=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!0)}),[e,n]);return(0,s.jsxs)(d.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3t3 rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez5yr rgw6ez1dr rgw6ez7zd",borderTopColor:r?"surface3":"transparent",children:[(0,s.jsxs)(d.X2,{className:"rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4dr rgw6ez3sr",children:[c?(0,s.jsx)(We.PH,{}):(0,s.jsx)(We.HE,{}),(0,s.jsx)(l.n,{children:`Price ${c?"increased":"decreased"} from ${o({input:e.priceInfo.ETHPrice,type:re.sw.NFTToken})} ETH`})]}),(0,s.jsx)(l.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(it,{asset:e,usdPrice:t,removeAsset:()=>{},isMobile:i})}),(0,s.jsxs)(d.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(tt,{onClick:u,emphasis:De.eI.medium,size:De.qE.small,children:"Remove"}),(0,s.jsx)(tt,{onClick:p,emphasis:De.eI.high,size:De.qE.small,children:"Keep"})]})]})},ot=({assets:e})=>(0,s.jsx)(d.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:32+20*(e.length-1)+"px"},children:e.map(((e,t)=>(0,s.jsx)(l.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"surface1",borderRadius:"4",style:{zIndex:t},className:Je},`${e.address}-${e.tokenId}`)))}),lt=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:i,isMobile:a})=>{const[o,l]=(0,S.useReducer)((e=>!e),!1),[c,u]=(0,S.useState)(8);if((0,S.useEffect)((()=>{if(!c)return void(r||(n(),i(!1)));const e=setInterval((()=>{u(c-1)}),1e3);return()=>clearInterval(e)}),[c,n,r,i]),!e||0===e.length)return null;const p=e.length>1,g=o||!p;return(0,s.jsx)(d.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3tf rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez6df rgw6ez5yr rgw6ez1dr",children:(0,s.jsxs)(d.sg,{children:[(0,s.jsxs)(d.X2,{justifyContent:"space-between",marginBottom:g?"12":"0",cursor:p?"pointer":"default",onClick:()=>{p&&(!r&&i(!0),l())},children:[(0,s.jsxs)(d.X2,{gap:"12",color:"neutral2",className:$e.Km,children:[!g&&(0,s.jsx)(ot,{assets:e.slice(0,5)}),"No longer available"]}),p&&(0,s.jsx)(d.X2,{color:"neutral2",children:o?(0,s.jsx)(We.X_,{}):(0,s.jsx)(We.Xs,{})}),!r&&(0,s.jsxs)(d.X2,{position:"relative",width:"20",height:"20",color:"neutral1",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(He,{}),(0,s.jsx)(We.Nb,{})]})]}),(0,s.jsx)(d.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:g&&e.map((e=>(0,s.jsx)(it,{asset:e,usdPrice:t,removeAsset:()=>{},grayscale:!0,isMobile:a},e.id)))})]})})},dt=()=>{const e=(0,Le.cP)((e=>e.bagStatus)),t=(0,Le.cP)((e=>e.setBagStatus)),n=(0,Le.cP)((e=>e.markAssetAsReviewed)),a=(0,Le.cP)((e=>e.didOpenUnavailableAssets)),o=(0,Le.cP)((e=>e.setDidOpenUnavailableAssets)),l=(0,Le.cP)((e=>e.itemsInBag)),c=(0,Le.cP)((e=>e.setItemsInBag)),u=(0,Le.cP)((e=>e.removeAssetsFromBag)),p=(0,Le.dD)(),g=(0,S.useMemo)((()=>(0,F.G7)(l)),[l]),m=(0,Le.$N)(),{unchangedAssets:x,priceChangedAssets:h,unavailableAssets:f,availableItems:I}=(0,S.useMemo)((()=>({unchangedAssets:g.filter((e=>e.status===z.ZJ.ADDED_TO_BAG||e.status===z.ZJ.REVIEWED)).map((e=>e.asset)),priceChangedAssets:g.filter((e=>e.status===z.ZJ.REVIEWING_PRICE_CHANGE)).map((e=>e.asset)),unavailableAssets:g.filter((e=>e.status===z.ZJ.UNAVAILABLE)).map((e=>e.asset)),availableItems:g.filter((e=>e.status!==z.ZJ.UNAVAILABLE))})),[g]);return(0,S.useEffect)((()=>{const n=h.length>0,s=g.length>0;n&&(0,i._P)(r.Yz.NFT_BUY_BAG_CHANGED,{usd_value:m,bag_quantity:g,...(0,F.Hj)(h)}),e!==z.s.IN_REVIEW||n||t(s?z.s.CONFIRM_REVIEW:z.s.ADDING_TO_BAG),e!==z.s.CONFIRM_REVIEW||s||t(z.s.ADDING_TO_BAG)}),[e,g,h,t,m]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.sg,{display:h.length>0||f.length>0?"flex":"none",children:[f.length>0&&(0,s.jsx)(i.fM,{name:r.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:m,bag_quantity:g.length,...(0,F.Hj)(f)},shouldLogImpression:!0,children:(0,s.jsx)(lt,{assets:f,usdPrice:m,clearUnavailableAssets:()=>c(I),didOpenUnavailableAssets:a,setDidOpenUnavailableAssets:o,isMobile:p})}),h.map(((e,t)=>(0,s.jsx)(at,{asset:e,usdPrice:m,markAssetAsReviewed:n,top:0===t&&0===f.length,isMobile:p},e.id)))]}),(0,s.jsx)(d.sg,{children:x.slice(0).reverse().map((e=>(0,s.jsx)(it,{asset:e,usdPrice:m,removeAsset:u,showRemove:!0,isMobile:p},e.id)))})]})};var ct=n(68588);const ut=(0,se.default)(ce.oD).withConfig({displayName:"BagHeader__ClearButton",componentId:"sc-6b7a6dca-0"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,pt=se.default.button.withConfig({displayName:"BagHeader__IconWrapper",componentId:"sc-6b7a6dca-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${ct.cR}
`,gt=se.default.div.withConfig({displayName:"BagHeader__CounterDot",componentId:"sc-6b7a6dca-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,mt=se.default.div.withConfig({displayName:"BagHeader__Wrapper",componentId:"sc-6b7a6dca-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,xt=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:r})=>{const i=(0,S.useMemo)((()=>(e=>17+6*e.toString().length+"px")(e)),[e]);return(0,s.jsxs)(mt,{children:[(0,s.jsx)(ce.Tv.HeadlineSmall,{children:r?(0,s.jsx)(o.cC,{children:"Sell"}):(0,s.jsx)(o.cC,{children:"Bag"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(gt,{sizing:i,children:e}),(0,s.jsx)(ut,{onClick:n,children:(0,s.jsx)(o.cC,{children:"Clear all"})})]}),(0,s.jsx)(pt,{onClick:t,children:(0,s.jsx)(We.BW,{"data-testid":"nft-bag-close-icon"})})]})};var ht=n(27389);const ft=(0,se.default)(d.sg).withConfig({displayName:"EmptyContent__StyledColumn",componentId:"sc-3568c728-0"})`
  gap: 12px;
  margin-top: 68px;
`,It=()=>{const e=(0,a.e5)();return(0,s.jsxs)(ft,{children:[(0,s.jsx)(d.M5,{children:e?(0,s.jsx)(We.JP,{color:ht.Z4.colors.neutral3}):(0,s.jsx)(We.Ln,{color:ht.Z4.colors.neutral3,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(d.M5,{"data-testid":"nft-no-nfts-selected",className:$e.v4,children:"No NFTs selected"}):(0,s.jsxs)(d.sg,{gap:"16",children:[(0,s.jsx)(d.M5,{"data-testid":"nft-empty-bag",className:$e.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(d.M5,{fontSize:"12",fontWeight:"book",color:"neutral2",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})},Nt=({asset:e})=>{const t=(0,Le.Pc)((e=>e.removeSellAsset)),n=(0,Le.dD)(),[r,i]=(0,S.useState)(!1),a=()=>i(!r),o=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(d.X2,{className:Ke,onMouseEnter:a,onMouseLeave:a,children:[(0,s.jsxs)(l.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(st,{onClick:o}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:Xe})]}),(0,s.jsxs)(d.sg,{overflow:"hidden",width:"full",color:"neutral1",children:[(0,s.jsx)(d.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(l.n,{className:qe,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(d.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(l.n,{className:Ye,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(We.SA,{className:Qe})]})]}),r&&!n&&(0,s.jsx)(et,{onClick:o,emphasis:De.eI.medium,size:De.qE.medium,children:"Remove"})]})},At=()=>{const e=(0,Le.Pc)((e=>e.sellAssets));return(0,s.jsx)(d.sg,{children:e.length?e.map(((e,t)=>(0,s.jsx)(Nt,{asset:e},t))):null})},Tt=320,Ct=360,_t=se.default.div.withConfig({displayName:"Bag__BagContainer",componentId:"sc-2f0eb736-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${Tt}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?Be.k.modalOverTooltip:Be.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${Ct}px;
  }
`,vt=se.default.div.withConfig({displayName:"Bag__DetailsPageBackground",componentId:"sc-2f0eb736-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,Et=se.default.div.withConfig({displayName:"Bag__ContinueButton",componentId:"sc-2f0eb736-2"})`
  background: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,wt=({top:e,show:t})=>(0,s.jsx)(l.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"surface3",borderBottomColor:e?"surface3":"transparent",opacity:t?"1":"0",transition:"250"}),bt=()=>{const{resetSellAssets:e,sellAssets:t}=(0,Le.Pc)((({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}))),{setProfilePageState:n}=(0,Le.aO)((({setProfilePageState:e})=>({setProfilePageState:e}))),{bagStatus:l,bagIsLocked:c,reset:u,bagExpanded:p,toggleBag:g,setBagExpanded:m}=(0,Le.cP)((e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}))),{uncheckedItemsInBag:x}=(0,Le.cP)((({itemsInBag:e})=>({uncheckedItemsInBag:e}))),h=(0,a.e5)(),f=(0,a._3)(),I=(0,a.GZ)(),N=(0,Le.dD)(),A=(0,S.useMemo)((()=>(0,F.G7)(x)),[x]),[T,C]=(0,S.useState)(!1),{userCanScroll:_,scrollRef:v,scrollProgress:E,scrollHandler:w}=(0,Le.uh)(),b=(0,S.useCallback)((()=>{m({bagExpanded:!1,manualClose:!0})}),[m]);(0,S.useEffect)((()=>{c&&!T&&C(!0)}),[c,T]);const y=A.length>0,P=A.length>0,j=t.length>0,k=Boolean(!h&&!P&&l===z.s.ADDING_TO_BAG||h&&!j),O=(0,S.useMemo)((()=>({...(0,F.Hj)(A.map((e=>e.asset)))})),[A]);return p&&I?(0,s.jsxs)(Re.h,{children:[(0,s.jsxs)(_t,{"data-testid":"nft-bag",raiseZIndex:N||T,isProfilePage:h,children:[(0,s.jsx)(xt,{numberOfAssets:h?t.length:A.length,closeBag:b,resetFlow:h?e:u,isProfilePage:h}),k&&(0,s.jsx)(It,{}),(0,s.jsx)(wt,{top:!0,show:_&&E>0}),(0,s.jsx)(d.sg,{ref:v,className:"_1jcz50r1 rgw6ez2ef rgw6ez2jx rgw6ez1yr rgw6ez8ct",onScroll:w,gap:"12",children:h?(0,s.jsx)(At,{}):(0,s.jsx)(dt,{})}),y&&!h&&(0,s.jsx)(Oe,{setModalIsOpen:C,eventProperties:O}),j&&h&&(0,s.jsx)(Et,{onClick:()=>{g(),n(z.HA.LISTING),(0,i._P)(r.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map((e=>e.asset_contract.address)),token_ids:t.map((e=>e.tokenId))})},children:(0,s.jsx)(o.cC,{children:"Continue"})})]}),f?(0,s.jsx)(vt,{onClick:g}):T&&(0,s.jsx)(Se.a,{onClick:()=>c?void 0:C(!1)})]}):null}},70518:(e,t,n)=>{n.d(t,{a:()=>o,U:()=>a});var s=n(92936),r=n(15511),i=n(18533);n(18111);const a=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},o=({onClick:e=r.Z})=>(0,s.jsx)(i.n,{className:"_199qdl71 rgw6ez3f3 rgw6ez343 rgw6ez17l rgw6ez1ef rgw6ez48r rgw6ez44l rgw6ez4u3",onClick:e})},52384:(e,t,n)=>{n.d(t,{B:()=>p,P:()=>u});var s=n(11604),r=n(66284),i=n(39671),a=n(32682),o=n(89882),l=n(47263),d=n(45779),c=n(64538);function u(){const e=(0,c.c)((e=>e.itemsInBag));return(0,d.useMemo)((()=>e.reduce(((e,t)=>t.status!==l.ZJ.UNAVAILABLE?e.add(s.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e),s.O$.from(0))),[e])}function p(){const e=u(),t=(0,i.U8)("ETH"),n=(0,d.useMemo)((()=>(0,o.Z)((0,r.formatEther)(e.toString()),t??void 0)),[t,e]),s=(0,a.sq)(n);return(0,d.useMemo)((()=>{var e;return null===(e=s)||void 0===e?void 0:e.toExact()}),[s])}}}]);
//# sourceMappingURL=3464.eab7d8dd.chunk.js.map