"use strict";(self.webpackChunkarchitectui_react_pro=self.webpackChunkarchitectui_react_pro||[]).push([[631],{28631:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(70885),s=n(72791),a=n(3947),c=n(41238),i=n(15861),l=n(87757),o=n.n(l),d=n(78267),u=n(34711),h=n(20984),x=n(80184),w=function(){var e=(0,s.useState)("0"),t=(0,r.Z)(e,2),n=t[0],a=t[1],c=(0,s.useState)("0"),l=(0,r.Z)(c,2),w=l[0],m=l[1],j=(0,s.useState)("0"),p=(0,r.Z)(j,2),f=p[0],y=p[1],b=(0,s.useState)("0"),v=(0,r.Z)(b,2),k=v[0],g=v[1],N=(0,s.useState)("true"),Z=(0,r.Z)(N,2),C=Z[0],W=Z[1],A=function(){var e=(0,i.Z)(o().mark((function e(){var t,n,r,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.isUserWallet){e.next=28;break}return W("load"),e.next=4,window.web3Instance.eth.getAccounts();case 4:return t=e.sent,e.t0=window.web3Instance.utils,e.next=8,window.presaleContract.methods.totalBuy(t[0]).call();case 8:return e.t1=e.sent,n=e.t0.fromWei.call(e.t0,e.t1,"ether"),e.t2=window.web3Instance.utils,e.next=13,window.presaleContract.methods.released(t[0]).call();case 13:return e.t3=e.sent,r=e.t2.fromWei.call(e.t2,e.t3,"ether"),e.t4=window.web3Instance.utils,e.next=18,window.presaleContract.methods.checkVested(t[0]).call();case 18:e.t5=e.sent,s=e.t4.fromWei.call(e.t4,e.t5,"ether"),c=parseInt(n)-parseInt(r)-parseInt(s),a(n),m(r),y(s),g(c),W("false"),e.next=29;break;case 28:W("true");case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){"true"===C&&A()}));var S,_=function(){var e=(0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.web3Instance.eth.getAccounts();case 2:return t=e.sent,e.next=5,window.presaleContract.methods.releaseTokens().send({from:t[0]});case 5:A();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return S=!0!==window.isUserWallet?(0,x.jsx)(u.X2,{noGutters:!0,className:"text-center mt-3",children:(0,x.jsx)(u.JX,{xs:"12",md:"12",style:{display:"flex",justifyContent:"center"},children:(0,x.jsx)(u.Zb,{className:"mb-1 mt-2",style:{width:"80%",background:"#240940",color:"white"},children:(0,x.jsx)(u.eW,{children:(0,x.jsxs)(u.ll,{style:{color:"white"},children:[(0,x.jsx)("img",{src:h,alt:"",className:"me-3",style:{width:"50px",height:"auto"}}),"Connect your wallet to see your vesting presale balance"]})})})})}):"load"===C?(0,x.jsx)(u.X2,{noGutters:!0,className:"text-center mt-3",children:(0,x.jsx)(u.JX,{xs:"12",md:"12",style:{display:"flex",justifyContent:"center"},children:(0,x.jsx)(u.Zb,{className:"mb-1 mt-2",style:{width:"80%",background:"#240940",color:"white"},children:(0,x.jsxs)(u.eW,{children:[(0,x.jsx)(u.ll,{style:{color:"white"},children:(0,x.jsx)(u.$j,{type:"grow",color:"warning"})}),(0,x.jsx)(u._R,{style:{color:"white"},children:"Loading your balance, please wait"})]})})})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(u.X2,{noGutters:!0,className:"text-center mt-3",children:[(0,x.jsx)("p",{style:{color:"white"},children:"You can see the information regarding your presale BNANA purchases in here. Once your tokens' vesting period is over, they'll appear on the withdrawable amounts in the table below."}),(0,x.jsx)(u.iA,{style:{color:"white"},children:(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"Total presale purchase"}),(0,x.jsx)("td",{children:n})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"Already released tokens"}),(0,x.jsx)("td",{children:w})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"Locked tokens"}),(0,x.jsx)("td",{children:k})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"Withdrawable amount"}),(0,x.jsx)("td",{children:f})]})]})})]}),(0,x.jsx)(u.zx,{onClick:function(){return _()},color:"primary",children:"Withdraw balance"})]}),(0,x.jsx)(s.Fragment,{children:(0,x.jsx)(d.TransitionGroup,{style:{width:"100%",display:"flex",justifyContent:"center"},children:(0,x.jsx)(d.CSSTransition,{component:"div",classNames:"TabsAnimation",appear:!0,timeout:1500,enter:!1,exit:!1,children:(0,x.jsx)(u.X2,{noGutters:!0,className:"text-center",style:{width:"90%"},children:(0,x.jsx)(u.JX,{md:"12",children:(0,x.jsx)(u.Zb,{className:"main-card mb-3 mt-3",style:{background:"#561473"},children:(0,x.jsxs)(u.eW,{children:[(0,x.jsx)(u.ll,{style:{color:"white"},children:"Withdrawal your $BNANAS"}),(0,x.jsx)("div",{className:"divider"}),S]})})})})})})})};var m=function(e){e.match;var t=function(){var e=(0,s.useState)(0),t=(0,r.Z)(e,2),n=(t[0],t[1]);return function(){return n((function(e){return e+1}))}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.Z,{forceUpdate:function(){return t()}}),(0,x.jsxs)("div",{className:"app-main",children:[(0,x.jsx)(c.Z,{}),(0,x.jsx)("div",{className:"app-main__outer",children:(0,x.jsx)("div",{className:"app-main__inner p-0",children:(0,x.jsx)(w,{})})})]})]})}}}]);
//# sourceMappingURL=631.7fee15b2.chunk.js.map