"use strict";(self.webpackChunkarchitectui_react_pro=self.webpackChunkarchitectui_react_pro||[]).push([[167],{9717:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var a=n(70885),r=n(72791),s=n(3947),c=n(41238),i=n(15861),o=n(87757),d=n.n(o),l=n(78267),p=n(34711),u=(n(47541),n(28856),n(83483),n(20984)),m=n(15671),f=n(43144),x=n(97326),h=n(60136),b=n(54062),w=n(21494),y=n(93646),j=n(20941),g=n(52369),v=n(8085),C=n(58429),k=n(17525),I=n(46471),N=n(26560),Z=n(90018),M=n(68530),G=n(27012),S=n(81244),W=n(4769),_=n(54364),F=n(18151),X=n(20555),A=n(6480),B=n(78118),O=n(54300),T=n(51799),U=n(74093),H=n(15446),J=n(9687),K=n(21782),L=n(25718),$=n(28123),z=n(70052),D=n(99162),E=n(80184),R=(r.Component,n(92669),function(){var e=(0,r.useState)(0),t=(0,a.Z)(e,2),n=t[0],s=t[1],c=(0,r.useState)(0),o=(0,a.Z)(c,2),m=o[0],f=o[1],x=(0,r.useState)(0),h=(0,a.Z)(x,2),b=h[0],w=h[1],y=(0,r.useState)(0),j=(0,a.Z)(y,2),g=j[0],v=j[1],C=(0,r.useState)("true"),k=(0,a.Z)(C,2),I=k[0],N=k[1],Z=(0,r.useState)(!0),M=(0,a.Z)(Z,2),G=(M[0],M[1],function(){var e=(0,i.Z)(d().mark((function e(){var t,n,a,r,c;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.isUserWallet){e.next=24;break}return N("load"),e.next=4,window.web3Instance.eth.getAccounts();case 4:return t=e.sent,e.next=7,window.gameContractOld.methods.withdrawalTime().call();case 7:return n=e.sent,e.next=10,window.gameContractOld.methods.lastWithdrawal(t[0]).call();case 10:return a=e.sent,e.next=13,window.gameContractOld.methods.userBalance(t[0]).call();case 13:return r=e.sent,e.next=16,window.gameContractOld.methods.getNow().call();case 16:c=e.sent,v(c),w(window.web3Instance.utils.fromWei(r,"ether")),s(a),f(n),N("false"),e.next=25;break;case 24:N("true");case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());(0,r.useEffect)((function(){"true"===I&&G()}));var S,W=function(){var e=(0,i.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.web3Instance.eth.getAccounts();case 2:return t=e.sent,e.next=5,window.gameContractOld.methods.withdrawalUserBalance().send({from:t[0]});case 5:G();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!0!==window.isUserWallet)S=(0,E.jsx)(p.X2,{noGutters:!0,className:"text-center mt-3",children:(0,E.jsx)(p.JX,{xs:"12",md:"12",style:{display:"flex",justifyContent:"center"},children:(0,E.jsx)(p.Zb,{className:"mb-1 mt-2",style:{width:"80%",background:"#240940",color:"white"},children:(0,E.jsx)(p.eW,{children:(0,E.jsxs)(p.ll,{style:{color:"white"},children:[(0,E.jsx)("img",{src:u,alt:"",className:"me-3",style:{width:"50px",height:"auto"}}),"Connect your wallet to see your locked balance"]})})})})});else if("load"===I)S=(0,E.jsx)(p.X2,{noGutters:!0,className:"text-center mt-3",children:(0,E.jsx)(p.JX,{xs:"12",md:"12",style:{display:"flex",justifyContent:"center"},children:(0,E.jsx)(p.Zb,{className:"mb-1 mt-2",style:{width:"80%",background:"#240940",color:"white"},children:(0,E.jsxs)(p.eW,{children:[(0,E.jsx)(p.ll,{style:{color:"white"},children:(0,E.jsx)(p.$j,{type:"grow",color:"warning"})}),(0,E.jsx)(p._R,{style:{color:"white"},children:"Loading your balance, please wait"})]})})})});else{var _=parseInt(n)+parseInt(m)-parseInt(g),F=Math.floor(_/86400),X=Math.floor(_%86400/3600),A=Math.floor(_%86400%3600/60),B=(parseInt(m)-_)/parseInt(m),O=Math.round(100*(B*parseInt(b)*.7+.3*parseInt(b)))/100;S=(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(p.X2,{noGutters:!0,className:"text-center mt-3",children:[(0,E.jsx)("p",{style:{color:"white"},children:"You can withdraw your entire game balance every 14 days. If you choose to withdraw earlier, you'll lose part of your balance as a penalty."}),(0,E.jsx)(p.iA,{style:{color:"white"},children:(0,E.jsxs)("tbody",{children:[(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:"Locked Balance"}),(0,E.jsx)("td",{children:b})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:"Time to next 100% withdraw"}),(0,E.jsxs)("td",{children:[F," Days, ",X," Hours and ",A," Minutes"]})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:"If you withdraw now you get"}),(0,E.jsx)("td",{children:O})]})]})})]}),(0,E.jsx)(p.zx,{onClick:function(){return W()},color:"primary",children:"Withdraw balance"})]})}return(0,E.jsx)(r.Fragment,{children:(0,E.jsx)(l.TransitionGroup,{style:{width:"100%",display:"flex",justifyContent:"center"},children:(0,E.jsx)(l.CSSTransition,{component:"div",classNames:"TabsAnimation",appear:!0,timeout:1500,enter:!1,exit:!1,children:(0,E.jsx)(p.X2,{noGutters:!0,className:"text-center",style:{width:"90%"},children:(0,E.jsx)(p.JX,{md:"12",children:(0,E.jsx)(p.Zb,{className:"main-card mb-3 mt-3",style:{background:"#561473"},children:(0,E.jsxs)(p.eW,{children:[(0,E.jsx)(p.ll,{style:{color:"white"},children:"Withdrawal your $BNANAS"}),(0,E.jsx)("div",{className:"divider"}),S]})})})})})})})});var Y=function(e){e.match;var t=function(){var e=(0,r.useState)(0),t=(0,a.Z)(e,2),n=(t[0],t[1]);return function(){return n((function(e){return e+1}))}}();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(s.Z,{forceUpdate:function(){return t()}}),(0,E.jsxs)("div",{className:"app-main",children:[(0,E.jsx)(c.Z,{}),(0,E.jsx)("div",{className:"app-main__outer",children:(0,E.jsx)("div",{className:"app-main__inner p-0",children:(0,E.jsx)(R,{})})})]})]})}},21494:function(e,t,n){e.exports=n.p+"static/media/CaveMonkey.023e403edcb422c0a816.mp4"},26560:function(e,t,n){e.exports=n.p+"static/media/CryptoInvestor.39fb221c5b02db8f8bb5.mp4"},68530:function(e,t,n){e.exports=n.p+"static/media/Cyborg.69eed19e732b256733a0.mp4"},8085:function(e,t,n){e.exports=n.p+"static/media/Farmer.67b0232d7be84c3bc3f9.mp4"},52369:function(e,t,n){e.exports=n.p+"static/media/FireBender.7cae0431183cbb3598a4.mp4"},93646:function(e,t,n){e.exports=n.p+"static/media/Gatherer.dcc29cafb3e24ff1edb3.mp4"},58429:function(e,t,n){e.exports=n.p+"static/media/Guardian.6e0a79ee10c8714bd488.mp4"},20941:function(e,t,n){e.exports=n.p+"static/media/Hunter.382a09ee21212ef59193.mp4"},46471:function(e,t,n){e.exports=n.p+"static/media/Intern.b6a6700eb399536ba50e.mp4"},17525:function(e,t,n){e.exports=n.p+"static/media/King.e15e3eabb9b382f1c325.mp4"},90018:function(e,t,n){e.exports=n.p+"static/media/MetaMonkey.eca83e2777b8f2b88355.mp4"},27012:function(e,t,n){e.exports=n.p+"static/media/CaveMonkey.fd03425e51998d3b5a18.mp4"},54300:function(e,t,n){e.exports=n.p+"static/media/CryptoInvestor.4c64390cac2a8eff28ca.mp4"},74093:function(e,t,n){e.exports=n.p+"static/media/Cyborg.21bc8d4a9ed3ce0b1595.mp4"},18151:function(e,t,n){e.exports=n.p+"static/media/Farmer.f143db73e4c896447438.mp4"},54364:function(e,t,n){e.exports=n.p+"static/media/FireBender.6385106059949df856c2.mp4"},81244:function(e,t,n){e.exports=n.p+"static/media/Gatherer.eba5ce71e7c5b07b67c4.mp4"},20555:function(e,t,n){e.exports=n.p+"static/media/Guardian.e5933451fb9f36ee0974.mp4"},4769:function(e,t,n){e.exports=n.p+"static/media/Hunter.5c312cef152705dbf94e.mp4"},78118:function(e,t,n){e.exports=n.p+"static/media/Intern.cc66b07b74160b629e60.mp4"},6480:function(e,t,n){e.exports=n.p+"static/media/King.50156754b44d554f3579.mp4"},51799:function(e,t,n){e.exports=n.p+"static/media/MetaMonkey.74f42202e85ae3fe4332.mp4"},28123:function(e,t,n){e.exports=n.p+"static/media/CryptoInvestor.56b0f039d7afe9320d2f.mp4"},99162:function(e,t,n){e.exports=n.p+"static/media/Cyborg.7f2b4902834ed42481bc.mp4"},15446:function(e,t,n){e.exports=n.p+"static/media/Farmer.4bb64a8fd40ebf96a2cb.mp4"},9687:function(e,t,n){e.exports=n.p+"static/media/Guardian.ada4db2db744cba1bff9.mp4"},25718:function(e,t,n){e.exports=n.p+"static/media/Intern.188c12ec5290817dcaee.mp4"},21782:function(e,t,n){e.exports=n.p+"static/media/King.35db33e09783174df857.mp4"},70052:function(e,t,n){e.exports=n.p+"static/media/MetaMonkey.bdc051ed2857a5825a3c.mp4"},47541:function(e,t,n){e.exports=n.p+"static/media/common2.80e8396a1f023d399843.png"},28856:function(e,t,n){e.exports=n.p+"static/media/golden2.50493897f43dd8b91e76.png"},83483:function(e,t,n){e.exports=n.p+"static/media/mystical2.c889e6cc420b0a03be2a.png"}}]);
//# sourceMappingURL=167.9317fd8b.chunk.js.map