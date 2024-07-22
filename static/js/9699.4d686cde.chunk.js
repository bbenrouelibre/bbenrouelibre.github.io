"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9699],{89699:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Ze});var n=t(92936),a=t(45779),o=t(14411),d=t(6823),r=t(55479),l=t(27427),s=t(3476),p=t(27359),c=t(95055);const x=(0,o.default)(c.E.button).withConfig({displayName:"PillButton__Button",componentId:"sc-f35c450a-0"})`
  display: flex;
  padding: 12px 16px;
  border-radius: 24px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: ${({theme:e})=>e.surface1};
  overflow: hidden;
  cursor: ${({cursor:e})=>e??"pointer"};
  flex: none;
`,h=(0,o.default)(c.E.div).withConfig({displayName:"PillButton__Slider",componentId:"sc-f35c450a-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,m=o.default.span.withConfig({displayName:"PillButton__Label",componentId:"sc-f35c450a-2"})`
  color: ${e=>e.color};
  font-family: Basel;
  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  font-style: normal;
  font-weight: 535;
  line-height: 24px; /* 120% */
  flex: none;
`,g=(0,o.default)(c.E.div).withConfig({displayName:"PillButton__Opacity",componentId:"sc-f35c450a-3"})`
  flex: 0;
  display: flex;
  overflow: visible;
  opacity: ${e=>e.opacity};
`;function f(e){return(0,n.jsx)(x,{transition:{delayChildren:0},cursor:e.cursor,children:(0,n.jsxs)(h,{variants:{intial:{x:0},hover:{x:-24}},children:[(0,n.jsx)(g,{opacity:1,variants:{intial:{opacity:1},hover:{opacity:0}},children:e.icon}),(0,n.jsx)(m,{color:e.color,children:e.label}),(0,n.jsx)(g,{opacity:0,variants:{intial:{opacity:0},hover:{opacity:1}},children:(0,n.jsx)(r.x,{width:"0px",overflow:"visible",children:(0,n.jsx)(p.ol,{size:"24px",fill:e.color})})})]})})}var u=t(6282);const w=(0,c.E)((0,o.default)(r.x).withConfig({displayName:"ValuePropCard__Container",componentId:"sc-112a3184-0"})`
  position: relative;
  border-radius: 32px;
  width: 100%;
  cursor: pointer;
  height: ${e=>e.height||"609px"};
  background-color: ${e=>{var i,t;return e.isDarkMode?null===(i=e.backgroundColor)||void 0===i?void 0:i.dark:null===(t=e.backgroundColor)||void 0===t?void 0:t.light}};
  overflow: hidden;
  text-decoration: none;
  @media (max-width: 1024px) {
    height: ${e=>e.height||"516px"};
    min-height: ${e=>e.minHeight||"240px"};
  }
  @media (max-width: 768px) {
    height: auto;
    min-height: ${e=>e.minHeight||"240px"};
  }
`),v=o.default.div.withConfig({displayName:"ValuePropCard__Inner",componentId:"sc-112a3184-1"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({alignTextToBottom:e})=>e?o.css`
          height: 100%;
          justify-content: space-between;
        `:"height: unset;"}
  z-index: 5;
  gap: 24px;
  padding: 32px;
  @media (max-width: 1024px) {
    gap: 16px;
    padding: 24px;
  }
  @media (max-width: 396px) {
    padding: 20px;
  }
`,y=o.default.div.withConfig({displayName:"ValuePropCard__Title",componentId:"sc-112a3184-2"})`
  color: ${e=>e.color};
  font-feature-settings: 'ss07' on;
  font-family: Basel;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  white-space: pre-line;
  text-wrap: pretty;
  @media (max-width: 1024px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;function b(e){const{isDarkMode:i,backgroundColor:t,height:a,textColor:o,minHeight:d,alignTextToBottom:r,href:l,to:s}=e,p=(0,u.s0)();return(0,n.jsxs)(w,{initial:"initial",whileHover:"hover",isDarkMode:i,backgroundColor:t,height:a,minHeight:d,as:"a",href:l,target:"_blank",rel:"noreferrer noopener",onClick:()=>{s&&p(s)},...e,children:[(0,n.jsxs)(v,{alignTextToBottom:r,children:[e.button,(0,n.jsx)(y,{color:o,children:e.titleText})]}),e.children]})}const C=o.default.div.withConfig({displayName:"DocumentationCard__Contents",componentId:"sc-96dad5d0-0"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  opacity: 1;
  @media (max-width: 1280px) {
    opacity: 0.32;
  }
  @media (max-width: 768px) {
    opacity: 0;
  }
`,j="#00C3A0";function _(e){const{rive:i,RiveComponent:t}=(0,l.useRive)({src:"/rive/landing-page.riv",artboard:"Dev",stateMachines:"Animation",layout:new l.Layout({fit:l.Fit.Contain,alignment:l.Alignment.CenterRight})}),a=(0,s.e)(),o=a.lg,r=a.xl;return(0,n.jsx)(b,{height:o?"340px":"240px",href:"https://docs.uniswap.org/",backgroundColor:{dark:"rgba(0, 195, 160, 0.08);",light:"rgba(0, 195, 160, 0.06);"},isDarkMode:e.isDarkMode,textColor:j,button:(0,n.jsx)(f,{color:j,label:d.t`Developer docs`,icon:(0,n.jsx)(p.EG,{size:"24px",fill:j})}),titleText:d.t`Build the next generation of open applications and tools.`,paddingRight:r?"16%":"0%",alignTextToBottom:!0,children:(0,n.jsx)(C,{children:(0,n.jsx)(t,{onMouseEnter:()=>i&&i.play()})})})}var k=t(65075);const I=o.default.div.withConfig({displayName:"DownloadWalletCard__Contents",componentId:"sc-6e4a052a-0"})`
  width: 100%;
  height: 75%;
  position: absolute;
  margin: auto;
  bottom: 0;
  z-index: 1;
  @media (max-width: 980px) and (min-width: 768px) {
    width: 125%;
    transform: translateX(-10.25%);
  }
`;function N(){const e=(0,o.useTheme)(),i=(0,k.Gv)(),{rive:t,RiveComponent:a}=(0,l.useRive)({src:"/rive/landing-page.riv",artboard:"Mobile-Light",stateMachines:"Animation",layout:new l.Layout({fit:l.Fit.Contain,alignment:l.Alignment.BottomCenter})}),{rive:r,RiveComponent:s}=(0,l.useRive)({src:"/rive/landing-page.riv",artboard:"Mobile-Dark",stateMachines:"Animation",layout:new l.Layout({fit:l.Fit.Contain,alignment:l.Alignment.BottomCenter})});return(0,n.jsx)(b,{href:"https://wallet.uniswap.org/",minHeight:"500px",isDarkMode:i,textColor:e.accent1,backgroundColor:{dark:"rgba(252, 114, 255, 0.12)",light:"rgba(252, 114, 255, 0.12)"},button:(0,n.jsx)(f,{color:e.accent1,label:d.t`Uniswap wallet`,icon:(0,n.jsx)(p.w5,{size:"24px",fill:e.accent1})}),titleText:d.t`The wallet built for swapping. Available on iOS and Android.`,children:(0,n.jsx)(I,{children:i?(0,n.jsx)(s,{onMouseEnter:()=>{var e;return null===(e=r)||void 0===e?void 0:e.play()}}):(0,n.jsx)(a,{onMouseEnter:()=>{var e;return null===(e=t)||void 0===e?void 0:e.play()}})})})}const T=o.default.div.withConfig({displayName:"LiquidityCard__Contents",componentId:"sc-b23cf7c7-0"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  opacity: 1;
  @media (max-width: 1280px) {
    opacity: 0.24;
  }
  @media (max-width: 768px) {
    opacity: 0;
  }
`,$="#9E62FF";function S(e){const{rive:i,RiveComponent:t}=(0,l.useRive)({src:"/rive/landing-page.riv",artboard:"LP",stateMachines:"Animation",layout:new l.Layout({fit:l.Fit.Contain,alignment:l.Alignment.CenterRight})}),a=(0,s.e)(),o=a.lg,r=a.xl;return(0,n.jsx)(b,{to:"/pool",tagText:d.t`Provide Liquidity`,height:o?"340px":"240px",isDarkMode:e.isDarkMode,textColor:$,backgroundColor:{dark:"rgba(136, 63, 255, 0.12)",light:"rgba(136, 63, 255, 0.06)"},button:(0,n.jsx)(f,{color:$,label:d.t`Liquidity`,icon:(0,n.jsx)(p.Ll,{size:"24px",fill:$})}),titleText:d.t`Provide liquidity to pools on the Uniswap Protocol and earn fees on swaps.`,paddingRight:r?"16%":"0%",alignTextToBottom:!0,children:(0,n.jsx)(T,{children:(0,n.jsx)(t,{onMouseEnter:()=>i&&i.play()})})})}var z=t(76078),E=t(35771),B=t(19478),M=t(64370),D=t(18569),L=t(39671),P=t(70854),A=t(66136),H=t(57852);const V=o.default.div.withConfig({displayName:"WebappCard__Contents",componentId:"sc-f5c00990-0"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 32px;
  padding-bottom: 32px;
  @media (max-width: 1024px) {
    padding: 24px;
    padding-bottom: 32px;
  }
  @media (max-width: 396px) {
    padding: 16px;
    padding-bottom: 24px;
  }
`,R=o.default.div.withConfig({displayName:"WebappCard__TokenRow",componentId:"sc-f5c00990-1"})`
  width: 100%;
  height: 72px;
  overflow: hidden;
  padding: 16px;
  padding-right: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface1};
  @media (max-width: 1024px) {
    height: 64px;
    padding-right: 16px;
  }
  @media (max-width: 768px) {
    height: 56px;
    padding-right: 16px;
  }
  @media (max-width: 468px) {
    height: 48px;
    padding: 12px;
    border-radius: 16px;
  }
  transition: background-color 125ms ease-in, transform 125ms ease-in;
  &:hover {
    background-color: ${({theme:e})=>e.surface2};
    transform: scale(1.03);
  }
`,F=o.default.h3.withConfig({displayName:"WebappCard__TokenName",componentId:"sc-f5c00990-2"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${e=>e.color||e.theme.neutral1};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    display: none;
  }
`,W=o.default.h3.withConfig({displayName:"WebappCard__TokenTicker",componentId:"sc-f5c00990-3"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.color||e.theme.neutral2};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    color: ${e=>e.color||e.theme.neutral1};
  }
`,q=o.default.h3.withConfig({displayName:"WebappCard__TokenPrice",componentId:"sc-f5c00990-4"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  line-height: 32px;
  color: ${e=>e.color||e.theme.neutral1};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
  }
`,G=o.default.h3.withConfig({displayName:"WebappCard__DeltaText",componentId:"sc-f5c00990-5"})`
  text-align: right;
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  line-height: 32px;
  color: ${e=>"red"===e.color?e.theme.critical:e.theme.success};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
    width: 50px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
    width: 50px;
  }
`,U=(0,o.default)(r.x).withConfig({displayName:"WebappCard__DeltaContainer",componentId:"sc-f5c00990-6"})`
  @media (min-width: 1030px) and (max-width: 1150px) {
    display: none;
  }
  @media (min-width: 767px) and (max-width: 915px) {
    display: none;
  }
`,O="#2ABDFF",Q=[{chainId:z.ChainId.MAINNET,address:"ETH"},{chainId:z.ChainId.BASE,address:M.QP.address},{chainId:z.ChainId.MAINNET,address:M.yg[z.ChainId.MAINNET].address},{chainId:z.ChainId.MAINNET,address:M.Ej.address}];function X({chainId:e,address:i}){var t,o,d,l,p,c,x,h,m,g,f;const w=(0,s.e)().sm,v=(0,u.s0)(),{formatFiatPrice:y,formatDelta:b}=(0,A.Gb)(),C=(0,L.U8)(i,e),j=(0,P.sYx)({variables:{address:null===(t=C)||void 0===t?void 0:t.wrapped.address,chain:(0,H.tq)({chainId:e})}}),_=(null===(p=j.data)||void 0===p||null===(l=p.token)||void 0===l||null===(d=l.market)||void 0===d||null===(o=d.price)||void 0===o?void 0:o.value)??0,k=(null===(m=j.data)||void 0===m||null===(h=m.token)||void 0===h||null===(x=h.market)||void 0===x||null===(c=x.pricePercentChange)||void 0===c?void 0:c.value)??0,I=(0,a.useCallback)((t=>{t.stopPropagation(),v((0,D.dG)({address:"ETH"===i?M.dt:i,chain:(0,H.tq)({chainId:e})}))}),[i,e,v]);return(0,n.jsxs)(R,{onClick:I,children:[(0,n.jsx)(E.V,{currencies:[C],chainId:e,size:w?32:24}),(0,n.jsxs)(r.x,{justify:"space-between",gap:"16px",children:[(0,n.jsxs)(r.x,{width:"auto",gap:"8px",align:"center",overflow:"hidden",children:[(0,n.jsx)(F,{children:null===(g=C)||void 0===g?void 0:g.name}),(0,n.jsx)(W,{children:null===(f=C)||void 0===f?void 0:f.symbol})]}),(0,n.jsxs)(r.x,{width:"auto",gap:"8px",align:"center",children:[(0,n.jsx)(q,{children:y({price:_,type:A.sw.FiatTokenPrice})}),(0,n.jsxs)(U,{gap:"4px",align:"center",justify:"flex-end",children:[(0,n.jsx)(B.Kx,{delta:k}),(0,n.jsx)(G,{color:k<0?"red":"green",children:b(k)})]})]})]})]})}function Z(e){return(0,n.jsx)(b,{to:"/tokens/ethereum",minHeight:"450px",isDarkMode:e.isDarkMode,textColor:O,backgroundColor:{dark:"rgba(0, 102, 255, 0.12)",light:"rgba(0, 102, 255, 0.04)"},button:(0,n.jsx)(f,{color:O,label:d.t`Web app`,icon:(0,n.jsx)(p.ar,{size:"24px",fill:O})}),titleText:d.t`Swapping made simple. Access thousands of tokens on 8+ chains.`,children:(0,n.jsx)(V,{children:Q.map((e=>(0,n.jsx)(X,{chainId:e.chainId,address:e.address},`tokenRow-${e.address}`)))})})}const K=o.default.div.withConfig({displayName:"DirectToDefi__SectionLayout",componentId:"sc-6e556dcd-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 48px;
  }
  @media (max-width: 468px) {
    padding: 0 24px;
  }
`,Y=(0,o.default)(r.x).withConfig({displayName:"DirectToDefi__RowToCol",componentId:"sc-6e556dcd-1"})`
  height: auto;
  flex-shrink: 1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,J=(0,o.default)(r.x).withConfig({displayName:"DirectToDefi__SectionCol",componentId:"sc-6e556dcd-2"})`
  flex-direction: column;
  max-width: 1280px;
  gap: 32px;
  @media (max-width: 768px) {
    gap: 24px;
  }
`;function ee(){return(0,n.jsx)(K,{children:(0,n.jsxs)(J,{direction:"column",gap:"40px",maxWidth:"1280px",children:[(0,n.jsx)(r.H2,{children:(0,n.jsx)(d.cC,{children:"Go direct to DeFi"})}),(0,n.jsxs)(r.x,{direction:"column",gap:"16px",children:[(0,n.jsxs)(Y,{direction:"row",gap:"16px",children:[(0,n.jsx)(Z,{}),(0,n.jsx)(N,{})]}),(0,n.jsxs)(Y,{direction:"row",gap:"16px",children:[(0,n.jsx)(_,{}),(0,n.jsx)(S,{})]})]})]})})}var ie=t(89332);const te=o.default.div.withConfig({displayName:"NewsletterEtc__SectionLayout",componentId:"sc-3986d01f-0"})`
  width: 100%;
  max-width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 48px;
  }
  @media (max-width: 468px) {
    padding: 0 24px;
  }
`,ne=o.default.div.withConfig({displayName:"NewsletterEtc__Layout",componentId:"sc-3986d01f-1"})`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`,ae=(0,o.default)(r.x).withConfig({displayName:"NewsletterEtc__SectionCol",componentId:"sc-3986d01f-2"})`
  flex-direction: column;
  max-width: 1328px;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 24px;
  }
`,oe=o.default.a.withConfig({displayName:"NewsletterEtc__Card",componentId:"sc-3986d01f-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  height: 250px;
  border-radius: 20px;
  padding: 32px 28px;
  overflow: hidden;
  text-decoration: none;
  background-color: ${e=>e.backgroundColor||e.theme.surface2};
  @media (max-width: 1024px) {
    gap: 16px;
    padding: 24px;
  }
  @media (max-width: 768px) {
    gap: 16px;
    padding: 24px;
  }
`,de=(0,c.E)((0,o.default)(oe).withConfig({displayName:"NewsletterEtc__SquareCard",componentId:"sc-3986d01f-4"})`
  grid-column: span 1 / span 1;
  grid-row: span 4 / span 4;

  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`),re=(0,o.default)(de).withConfig({displayName:"NewsletterEtc__HelpCenterCard",componentId:"sc-3986d01f-5"})`
  @media (max-width: 1024px) {
    grid-column: span 2 / span 2;

    grid-row-start: 1;
    grid-row-end: 3;
  }
  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`,le=(0,o.default)(de).withConfig({displayName:"NewsletterEtc__BlogCard",componentId:"sc-3986d01f-6"})`
  @media (max-width: 1024px) {
    grid-column: span 2 / span 2;

    grid-row-start: 3;
    grid-row-end: 5;
  }
  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`,se=(0,c.E)((0,o.default)(oe).withConfig({displayName:"NewsletterEtc__RectCard",componentId:"sc-3986d01f-7"})`
  grid-column: span 2 / span 2;
  grid-row: span 4 / span 4;

  gap: 32px;

  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`),pe="#FF4D00",ce="#8E8767";function xe(){const e=(0,o.useTheme)(),i=(0,k.Gv)();return(0,n.jsx)(te,{children:(0,n.jsx)(r.x,{direction:"row",maxWidth:"1328px",gap:"24px",width:"100%",children:(0,n.jsxs)(ae,{"justify-content":"space-between",height:"100%",children:[(0,n.jsx)(r.H2,{children:(0,n.jsx)(d.cC,{children:"Connect with us"})}),(0,n.jsxs)(ne,{children:[(0,n.jsxs)(re,{initial:"initial",whileHover:"hover",href:"https://help.uniswap.org/",target:"_blank",rel:"noopener noreferrer",backgroundColor:i?"rgba(255, 77, 0, 0.08)":"rgba(255, 77, 0, 0.04)",children:[(0,n.jsx)(f,{icon:(0,n.jsx)(p.j$,{fill:pe}),color:pe,label:d.t`Help Center`}),(0,n.jsx)(r.H3,{color:pe,children:(0,n.jsx)(d.cC,{children:"Get support"})})]}),(0,n.jsxs)(le,{initial:"initial",whileHover:"hover",href:"https://blog.uniswap.org/",target:"_blank",rel:"noopener noreferrer",backgroundColor:i?"rgba(98, 84, 50, 0.16)":"rgba(98, 84, 50, 0.04)",children:[(0,n.jsx)(f,{icon:(0,n.jsx)(p.p1,{fill:ce}),color:ce,label:d.t`Blog`}),(0,n.jsx)(r.H3,{color:ce,children:(0,n.jsx)(d.cC,{children:"Insights and news from the team"})})]}),(0,n.jsxs)(se,{backgroundColor:e.accent2,initial:"initial",whileHover:"hover",href:"https://twitter.com/Uniswap/",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(f,{icon:(0,n.jsx)(p.r_,{fill:e.accent1}),color:e.accent1,label:d.t`Stay connected`}),(0,n.jsx)(r.H3,{color:e.accent1,children:(0,n.jsx)(d.cC,{children:"Follow @Uniswap on X for the latest updates"})})]})]})]})})})}var he=t(94284),me=t(26880),ge=t(55752),fe=t(36399),ue=t(62652);const we=(0,c.E)(o.default.div.withConfig({displayName:"StatCard__Mask",componentId:"sc-bb48ffaf-0"})`
  position: relative;
  display: flex;
  flex: 0;
  min-height: 52px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 1024px) {
    min-height: 40px;
  }
  @media (max-width: 768px) {
    min-height: 32px;
  }
`),ve=(0,c.E)(o.default.div.withConfig({displayName:"StatCard__Char",componentId:"sc-bb48ffaf-1"})`
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Basel;
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  color: ${({color:e})=>e};
  line-height: 52px;
  @media (max-width: 1280px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 1050px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media (max-width: 850px) {
    font-size: 28px;
    line-height: 28px;
  }
  @media (max-width: 396px) {
    font-size: 22px;
    line-height: 22px;
  }
`),ye=o.default.div.withConfig({displayName:"StatCard__Container",componentId:"sc-bb48ffaf-2"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 20px;

  width: 100%;
  height: 100%;
  max-height: 230px;

  padding: 32px;

  background-color: ${({theme:e,live:i})=>i?"#2FBA610A":e.surface2};
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 24px;
  }
  @media (max-width: 768px) {
  }
  background-image: radial-gradient(rgba(${({theme:e})=>{const{red:i,green:t,blue:n}=(0,fe.Oq)(e.neutral2);return`${i}, ${t}, ${n}`}}, 0.25) 0.5px, transparent 0)};
  background-size: 12px 12px;
  background-position: -8.5px -8.5px;
`,be=(0,c.E)(o.default.div.withConfig({displayName:"StatCard__SpriteContainer",componentId:"sc-bb48ffaf-3"})`
  pointer-events: none;
  diplay: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral2};
`),Ce=o.default.div.withConfig({displayName:"StatCard__LiveIcon",componentId:"sc-bb48ffaf-4"})`
  display: ${({display:e})=>e};
  width: 6px;
  height: 6px;

  border-radius: 50%;
  background: ${({theme:e})=>e.success};

  animation-name: ${({theme:e})=>{return i=e.success,o.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${(0,ue.jb)(24,i)};
  }
  100% {
    box-shadow: 0 0 0 4px ${(0,ue.jb)(24,i)};
  }
`;var i}};
  animation-fill-mode: forwards;
  animation-direction: alternate;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`,je=o.default.h3.withConfig({displayName:"StatCard__Title",componentId:"sc-bb48ffaf-5"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 535;
  line-height: 32px; /* 133.333% */
  color: ${({color:e})=>e};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 20px;
  }
`;const _e=["0","1","2","3","4","5","6","7","8","9"],ke=["\xa5","\xa3","\u20ac","$"],Ie=[" ","K","M","B","T"],Ne=[",","."];function Te(e){const i=(0,o.useTheme)();return(0,n.jsxs)(ye,{live:e.live,children:[(0,n.jsxs)(he.ZP,{align:"center",gap:"sm",children:[(0,n.jsx)(Ce,{display:e.live?"block":"none"}),(0,n.jsx)(je,{color:e.live?i.success:i.neutral2,children:e.title})]}),(0,n.jsx)($e,{prefix:e.prefix,suffix:e.suffix,value:e.value,live:e.live,delay:e.delay,inView:e.inView})]})}function $e({value:e,delay:i,inView:t,live:a}){const d=e.split(""),r=(0,o.useTheme)();return(0,n.jsx)(we,{initial:"initial",animate:t?"animate":"initial",transition:{staggerChildren:.025,delayChildren:i},children:d.map(((e,i)=>{const t=_e.includes(e)?_e:Ne.includes(e)?Ne:ke.includes(e)?ke:Ie;return(0,n.jsx)(Se,{char:e,charset:t,color:a?r.success:r.neutral1},i)}))})}function Se({char:e,charset:i,color:t}){const a=(o=i,d=i.indexOf(e),o.slice(d,o.length).concat(o.slice(0,d)));var o,d;const r=a.indexOf(e),l={initial:{y:r+-180},animate:{y:-60*r,transition:{duration:1,type:"spring"}}};return(0,n.jsx)(be,{variants:l,children:a.map(((e,i)=>{const a={initial:{opacity:.25},animate:{opacity:r===i?1:0,transition:{opacity:{duration:.5},duration:1,type:"spring"}}};return(0,n.jsx)(ve,{variants:a,color:t,children:e},i)}))})}const ze=o.default.div.withConfig({displayName:"Stats__Container",componentId:"sc-e5c47d41-0"})`
  width: 100%;
  max-width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;

  @media (max-width: 960px) {
    max-height: 360px;
  }

  @media (max-width: 768px) {
    max-height: none;
    padding: 0 48px;
  }
  @media (max-width: 468px) {
    padding: 0 24px;
  }
`,Ee=(0,o.default)(r.x).withConfig({displayName:"Stats__SectionLayout",componentId:"sc-e5c47d41-1"})`
  width: 100%;
  max-width: 1280px;
`,Be=(0,o.default)(r.x).withConfig({displayName:"Stats__HideWhenLarge",componentId:"sc-e5c47d41-2"})`
  @media (min-width: 768px) {
    display: none;
  }
`,Me=(0,o.default)(r.x).withConfig({displayName:"Stats__HideWhenSmall",componentId:"sc-e5c47d41-3"})`
  @media (max-width: 768px) {
    display: none;
  }
`,De=o.default.div.withConfig({displayName:"Stats__LeftTop",componentId:"sc-e5c47d41-4"})`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`,Le=o.default.div.withConfig({displayName:"Stats__RightTop",componentId:"sc-e5c47d41-5"})`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
`,Pe=o.default.div.withConfig({displayName:"Stats__LeftBottom",componentId:"sc-e5c47d41-6"})`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 5;
`,Ae=o.default.div.withConfig({displayName:"Stats__RightBottom",componentId:"sc-e5c47d41-7"})`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 5;
`,He=o.default.div.withConfig({displayName:"Stats__CardLayout",componentId:"sc-e5c47d41-8"})`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  overflow: hidden;

  @media (max-width: 768px) {
    height: 320px;
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  @media (max-width: 468px) {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  }
`,Ve=o.default.div.withConfig({displayName:"Stats__Layout",componentId:"sc-e5c47d41-9"})`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 234px);
  @media (max-width: 960px) {
    grid-template-rows: repeat(2, 160px);
  }
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 200px);
  }
  grid-column-gap: 24px;
  grid-row-gap: 16px;
`,Re=o.default.div.withConfig({displayName:"Stats__Left",componentId:"sc-e5c47d41-10"})`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  height: 100%;
`,Fe=o.default.div.withConfig({displayName:"Stats__Right",componentId:"sc-e5c47d41-11"})`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  height: 100%;
`,We=(0,o.default)(ge.dL).withConfig({displayName:"Stats__LearnMoreButton",componentId:"sc-e5c47d41-12"})`
  padding: 12px 16px;
  border-radius: 24px;
  border: 0;
  background-color: ${({theme:e})=>e.surface2};
  font-family: Basel;
  font-size: 20px;
  font-style: normal;
  font-weight: 535;
  line-height: 24px;
  color: ${({theme:e})=>e.neutral1};
  ${ge.iV}
`,qe=(0,o.default)(me.Z).withConfig({displayName:"Stats__LearnMoreArrow",componentId:"sc-e5c47d41-13"})`
  size: 24px;
  stroke: ${({theme:e})=>e.surface2};
  fill: ${({theme:e})=>e.neutral1};
`,Ge=()=>(0,n.jsx)(d.cC,{children:"Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace, with billions of dollars in weekly volume across thousands of tokens on Ethereum and 7+ additional chains."});function Ue(){return(0,n.jsx)(We,{href:"https://info.uniswap.org",children:(0,n.jsxs)(he.ZP,{gap:"sm",align:"center",children:[(0,n.jsx)(d.cC,{children:"Learn more"}),(0,n.jsx)(qe,{})]})})}function Oe(){const{ref:e,inView:i}=(()=>{const e=(0,a.useRef)(),[i,t]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const i=new IntersectionObserver((e=>{if(!e.length)return;const[i]=e;i.isIntersecting&&t(!0)}),{threshold:.25});return i.observe(e.current),()=>{i.disconnect()}}),[e]),{ref:e,inView:i}})();return(0,n.jsx)(ze,{children:(0,n.jsxs)(Ee,{ref:e,children:[(0,n.jsx)(Me,{children:(0,n.jsxs)(Ve,{children:[(0,n.jsx)(Re,{children:(0,n.jsxs)(r.x,{direction:"column","justify-content":"space-between",height:"100%",children:[(0,n.jsx)(r.H2,{children:(0,n.jsx)(d.cC,{children:"Trusted by millions"})}),(0,n.jsxs)(r.x,{bottom:"0",position:"absolute",direction:"column",maxWidth:"480px",gap:"24px",children:[(0,n.jsx)(r.m,{children:(0,n.jsx)(Ge,{})}),(0,n.jsx)(Ue,{})]})]})}),(0,n.jsx)(Fe,{children:(0,n.jsx)(Qe,{inView:i})})]})}),(0,n.jsxs)(Be,{maxWidth:"1280px",direction:"column",gap:"32px",children:[(0,n.jsx)(r.H2,{children:(0,n.jsx)(d.cC,{children:"Trusted by millions"})}),(0,n.jsx)(Qe,{inView:i}),(0,n.jsx)(r.m,{children:(0,n.jsx)(Ge,{})}),(0,n.jsx)(Ue,{})]})]})})}function Qe({inView:e}){var i,t,o,r;const{formatNumber:l}=(0,A.Gb)(),s=(0,P.eX0)({variables:{version:P.Qeo.V2}}),p=(0,P.eX0)({variables:{version:P.Qeo.V3}}),c=(0,a.useMemo)((()=>{var e,i,t,n;const a=null===(i=s)||void 0===i||null===(e=i.data)||void 0===e?void 0:e.historicalProtocolVolume,o=a&&a.length>=2?a[a.length-2].value:0,d=null===(n=p)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.historicalProtocolVolume;return o+(d&&d.length>=2?d[d.length-2].value:0)}),[null===(t=s)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.historicalProtocolVolume,null===(r=p)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.historicalProtocolVolume]);return(0,n.jsxs)(He,{children:[(0,n.jsx)(De,{children:(0,n.jsx)(Te,{title:d.t`All time volume`,value:l({input:2*10**12,type:A.sw.FiatTokenStats}),delay:0,inView:e})}),(0,n.jsx)(Le,{children:(0,n.jsx)(Te,{title:d.t`All time swappers`,value:l({input:16.6*10**6,type:A.sw.TokenQuantityStats}),delay:.2,inView:e})}),(0,n.jsx)(Pe,{children:(0,n.jsx)(Te,{title:d.t`All time LP fees `,value:l({input:3.4*10**9,type:A.sw.FiatTokenStats}),delay:.4,inView:e})}),(0,n.jsx)(Ae,{children:(0,n.jsx)(Te,{title:d.t`24H volume`,value:l({input:c||5e8,type:A.sw.FiatTokenStats}),live:!0,delay:.6,inView:e})})]})}const Xe=o.default.div.withConfig({displayName:"Fold__Container",componentId:"sc-d2eb2109-0"})`
  gap: 120px;
  @media (max-width: 1024px) {
    gap: 80px;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
`,Ze=(0,a.forwardRef)((function(e,i){return(0,n.jsxs)(Xe,{children:[(0,n.jsx)("div",{ref:i,children:(0,n.jsx)(ee,{})}),(0,n.jsx)(Oe,{}),(0,n.jsx)(xe,{}),(0,n.jsx)(ie.$,{})]})}))}}]);
//# sourceMappingURL=9699.4d686cde.chunk.js.map