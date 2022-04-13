"use strict";(self.webpackChunkarchitectui_react_pro=self.webpackChunkarchitectui_react_pro||[]).push([[331],{75331:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var s=n(70885),r=n(72791),a=n(3947),o=n(41238),i=n(37762),c=n(15861),l=n(87757),d=n.n(l),p=n(78267),u=n(34711),m=n(47541),f=n(28856),x=n(83483),h=n(20984),b=n(15671),y=n(43144),j=n(97326),w=n(60136),g=n(54062),v=n(21494),k=n(93646),C=n(20941),N=n(52369),Z=n(8085),I=n(58429),M=n(17525),O=n(46471),G=n(26560),_=n(90018),A=n(68530),z=n(27012),B=n(81244),D=n(4769),F=n(54364),P=n(18151),S=n(20555),W=n(6480),X=n(78118),R=n(54300),J=n(51799),$=n(74093),T=n(15446),K=n(9687),U=n(21782),H=n(25718),E=n(28123),L=n(70052),Y=n(99162),q=n(80184),Q=function(e){(0,w.Z)(n,e);var t=(0,g.Z)(n);function n(e){var s;return(0,b.Z)(this,n),(s=t.call(this,e)).state={backdrop:!0},s.toggle=s.toggle.bind((0,j.Z)(s)),s.vidRef=r.createRef(),s}return(0,y.Z)(n,[{key:"componentDidMount",value:function(){this.props.open&&"approve"!==this.props.tokenObject&&this.vidRef.play()}},{key:"toggle",value:function(){this.props.closeModal()}},{key:"render",value:function(){var e,t,n;return e="approve"===this.props.tokenObject?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(u.$j,{type:"grow",color:"warning"}),"Please wait while the blockchain processes your transaction..."]}):(0,q.jsxs)("video",{autoPlay:!0,muted:!0,playsInline:!0,width:"100%",height:"100%",children:[(0,q.jsx)("source",{src:(t=this.props.tokenObject.nftData[0],n=this.props.tokenObject.nftData[4],{1:{1:v,2:k,3:C,4:N,5:Z,6:I,7:M,8:O,9:G,10:_,11:A},2:{1:z,2:B,3:D,4:F,5:P,6:S,7:W,8:X,9:R,10:J,11:$},3:{5:T,6:K,7:U,8:H,9:E,10:L,11:Y}}[n][t]),type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,q.jsxs)(u.u_,{isOpen:this.props.open,toggle:this.toggle,className:this.props.className,backdrop:this.state.backdrop,children:[(0,q.jsx)(u.xB,{style:{background:"#561473",color:"white",borderColor:"#561473"},toggle:this.toggle,children:"Portal Opening"}),(0,q.jsx)(u.fe,{style:{background:"#6C32A6",color:"white",margin:"0",padding:"0"},children:e}),(0,q.jsx)(u.mz,{style:{background:"#561473",color:"white",borderColor:"#561473"},children:(0,q.jsx)(u.zx,{color:"link",onClick:this.toggle,children:"Close"})})]})}}]),n}(r.Component),V=n(96529),ee=function(e){return{1:V.g3,2:V.sG,3:V.Ge}[e]},te=function(){var e=(0,r.useState)("load"),t=(0,s.Z)(e,2),n=t[0],a=t[1],o=(0,r.useState)(!1),l=(0,s.Z)(o,2),b=l[0],y=l[1],j=(0,r.useState)("approve"),w=(0,s.Z)(j,2),g=w[0],v=w[1],k=function(){var e=(0,c.Z)(d().mark((function e(){var t,n,s,r,o,c,l,p;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0===window.isUserWallet){e.next=3;break}return a("load"),e.abrupt("return","");case 3:return e.next=5,window.web3Instance.eth.getAccounts();case 5:return t=e.sent,e.next=8,window.nftContract.methods.balanceOf(t[0]).call();case 8:n=e.sent,s=[],r=(0,i.Z)(Array(parseInt(n)).keys()),e.prev=11,r.s();case 13:if((o=r.n()).done){e.next=24;break}return c=o.value,e.next=17,window.nftContract.methods.tokenOfOwnerByIndex(t[0],c).call();case 17:return l=e.sent,e.next=20,window.nftContract.methods.getNftData(l).call();case 20:p=e.sent,s.push({nftIndex:l,nftData:p});case 22:e.next=13;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(11),r.e(e.t0);case 29:return e.prev=29,r.f(),e.finish(29);case 32:a(s);case 33:case"end":return e.stop()}}),e,null,[[11,26,29,32]])})));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){"load"===n&&k()}));var C,N=function(){var e=(0,c.Z)(d().mark((function e(t){var n,s;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ee(t),e.next=3,window.web3Instance.eth.getAccounts();case 3:return s=e.sent,e.next=6,window.bnanaContract.methods.approve(window.nftContract.options.address,window.web3Instance.utils.toWei(n,"ether")).send({from:s[0],gas:"100000"});case 6:return e.next=8,window.nftContract.methods.mintNft(s[0],t).send({from:s[0]});case 8:k();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,c.Z)(d().mark((function e(t){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v("approve"),y(!0),e.next=4,window.web3Instance.eth.getAccounts();case 4:return n=e.sent,console.log(t),e.next=8,window.nftContract.methods.openNftBox(t.nftIndex).send({from:n[0],gas:"100000"});case 8:v(t),k();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t,s,r=(0,i.Z)(n);try{for(r.s();!(s=r.n()).done;){var a=s.value;a.nftData[3]||a.nftData[4]===e&&(t=a)}}catch(o){r.e(o)}finally{r.f()}Z(t)};if(!0!==window.isUserWallet)C=(0,q.jsx)(u.JX,{xs:"12",md:"12",style:{display:"flex",justifyContent:"center"},children:(0,q.jsx)(u.Zb,{className:"mb-1 mt-2",style:{width:"80%",background:"#240940",color:"white"},children:(0,q.jsx)(u.eW,{children:(0,q.jsxs)(u.ll,{style:{color:"white"},children:[(0,q.jsx)("img",{src:h,alt:"",className:"me-3",style:{width:"50px",height:"auto"}}),"Connect your wallet to see your NFT collection"]})})})});else if("load"===n)C=(0,q.jsx)(u.JX,{xs:"12",md:"12",style:{display:"flex",justifyContent:"center"},children:(0,q.jsx)(u.Zb,{className:"mb-1 mt-2",style:{width:"80%",background:"#240940",color:"white"},children:(0,q.jsxs)(u.eW,{children:[(0,q.jsx)(u.ll,{style:{color:"white"},children:(0,q.jsx)(u.$j,{type:"grow",color:"warning"})}),(0,q.jsx)(u._R,{style:{color:"white"},children:"Loading your portals, please wait"})]})})});else{var M,O=0,G=0,_=0,A=(0,i.Z)(n);try{for(A.s();!(M=A.n()).done;){var z=M.value;z.nftData[3]||("1"===z.nftData[4]?O+=1:"2"===z.nftData[4]?G+=1:"3"===z.nftData[4]&&(_+=1))}}catch(B){A.e(B)}finally{A.f()}C=(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(u.JX,{xs:"12",md:"4",style:{display:"flex",justifyContent:"center"},children:(0,q.jsxs)(u.Zb,{className:"mb-1 mt-2",style:{width:"80%",background:"#240940",color:"white"},children:[(0,q.jsxs)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",style:{fontSize:"1.25rem"},children:[O,(0,q.jsx)("span",{className:"visually-hidden",children:"common portals"})]}),(0,q.jsx)(u.Mo,{top:!0,width:"80%",src:m,alt:"Common Portal"}),(0,q.jsxs)(u.eW,{children:[(0,q.jsx)(u.ll,{style:{color:"white"},children:"Common Portal"}),(0,q.jsxs)(u._R,{children:["$BNANA ",V.g3]}),(0,q.jsx)(u.zx,{disabled:0===O,onClick:function(){return I("1")},color:"primary",className:"me-2",children:"Open portal"}),(0,q.jsx)(u.zx,{onClick:function(){return N("1")},color:"primary",children:"Buy portal"})]})]})}),(0,q.jsx)(u.JX,{xs:"12",md:"4",style:{display:"flex",justifyContent:"center"},children:(0,q.jsxs)(u.Zb,{className:"mb-1 mt-2",style:{width:"80%",background:"#240940",color:"white"},children:[(0,q.jsxs)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",style:{fontSize:"1.25rem"},children:[G,(0,q.jsx)("span",{className:"visually-hidden",children:"golden portals"})]}),(0,q.jsx)(u.Mo,{top:!0,width:"80%",src:f,alt:"Common Portal"}),(0,q.jsxs)(u.eW,{children:[(0,q.jsx)(u.ll,{style:{color:"white"},children:"Golden Portal"}),(0,q.jsxs)(u._R,{children:["$BNANA ",V.sG]}),(0,q.jsx)(u.zx,{disabled:0===G,onClick:function(){return I("2")},color:"primary",className:"me-2",children:"Open portal"}),(0,q.jsx)(u.zx,{onClick:function(){return N("2")},color:"primary",children:"Buy portal"})]})]})}),(0,q.jsx)(u.JX,{xs:"12",md:"4",style:{display:"flex",justifyContent:"center"},children:(0,q.jsxs)(u.Zb,{className:"mb-1 mt-2",style:{width:"80%",background:"#240940",color:"white"},children:[(0,q.jsxs)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",style:{fontSize:"1.25rem"},children:[_,(0,q.jsx)("span",{className:"visually-hidden",children:"mystical portals"})]}),(0,q.jsx)(u.Mo,{top:!0,width:"80%",src:x,alt:"Common Portal"}),(0,q.jsxs)(u.eW,{children:[(0,q.jsx)(u.ll,{style:{color:"white"},children:"Mystical Portal"}),(0,q.jsxs)(u._R,{children:["$BNANA ",V.Ge]}),(0,q.jsx)(u.zx,{disabled:0===_,onClick:function(){return I("3")},color:"primary",className:"me-2",children:"Open portal"}),(0,q.jsx)(u.zx,{onClick:function(){return N("3")},color:"primary",children:"Buy portal"})]})]})})]})}return(0,q.jsxs)(r.Fragment,{children:[(0,q.jsx)(p.TransitionGroup,{style:{width:"100%",display:"flex",justifyContent:"center"},children:(0,q.jsx)(p.CSSTransition,{component:"div",classNames:"TabsAnimation",appear:!0,timeout:1500,enter:!1,exit:!1,children:(0,q.jsx)(u.X2,{noGutters:!0,className:"text-center",style:{width:"90%"},children:(0,q.jsx)(u.JX,{md:"12",children:(0,q.jsx)(u.Zb,{className:"main-card mb-3 mt-3",style:{background:"#561473"},children:(0,q.jsxs)(u.eW,{children:[(0,q.jsx)(u.ll,{style:{color:"white"},children:"Open your portals"}),(0,q.jsx)("div",{className:"divider"}),(0,q.jsx)(u.X2,{noGutters:!0,className:"text-center mt-3",children:C})]})})})})})}),(0,q.jsx)(Q,{closeModal:function(){return y(!1)},open:b,tokenObject:g})]})};var ne=function(e){e.match;var t=function(){var e=(0,r.useState)(0),t=(0,s.Z)(e,2),n=(t[0],t[1]);return function(){return n((function(e){return e+1}))}}();return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(a.Z,{forceUpdate:function(){return t()}}),(0,q.jsxs)("div",{className:"app-main",children:[(0,q.jsx)(o.Z,{}),(0,q.jsx)("div",{className:"app-main__outer",children:(0,q.jsx)("div",{className:"app-main__inner p-0",children:(0,q.jsx)(te,{})})})]})]})}},21494:function(e,t,n){e.exports=n.p+"static/media/CaveMonkey.023e403edcb422c0a816.mp4"},26560:function(e,t,n){e.exports=n.p+"static/media/CryptoInvestor.39fb221c5b02db8f8bb5.mp4"},68530:function(e,t,n){e.exports=n.p+"static/media/Cyborg.69eed19e732b256733a0.mp4"},8085:function(e,t,n){e.exports=n.p+"static/media/Farmer.67b0232d7be84c3bc3f9.mp4"},52369:function(e,t,n){e.exports=n.p+"static/media/FireBender.7cae0431183cbb3598a4.mp4"},93646:function(e,t,n){e.exports=n.p+"static/media/Gatherer.dcc29cafb3e24ff1edb3.mp4"},58429:function(e,t,n){e.exports=n.p+"static/media/Guardian.6e0a79ee10c8714bd488.mp4"},20941:function(e,t,n){e.exports=n.p+"static/media/Hunter.382a09ee21212ef59193.mp4"},46471:function(e,t,n){e.exports=n.p+"static/media/Intern.b6a6700eb399536ba50e.mp4"},17525:function(e,t,n){e.exports=n.p+"static/media/King.e15e3eabb9b382f1c325.mp4"},90018:function(e,t,n){e.exports=n.p+"static/media/MetaMonkey.eca83e2777b8f2b88355.mp4"},27012:function(e,t,n){e.exports=n.p+"static/media/CaveMonkey.fd03425e51998d3b5a18.mp4"},54300:function(e,t,n){e.exports=n.p+"static/media/CryptoInvestor.4c64390cac2a8eff28ca.mp4"},74093:function(e,t,n){e.exports=n.p+"static/media/Cyborg.21bc8d4a9ed3ce0b1595.mp4"},18151:function(e,t,n){e.exports=n.p+"static/media/Farmer.f143db73e4c896447438.mp4"},54364:function(e,t,n){e.exports=n.p+"static/media/FireBender.6385106059949df856c2.mp4"},81244:function(e,t,n){e.exports=n.p+"static/media/Gatherer.eba5ce71e7c5b07b67c4.mp4"},20555:function(e,t,n){e.exports=n.p+"static/media/Guardian.e5933451fb9f36ee0974.mp4"},4769:function(e,t,n){e.exports=n.p+"static/media/Hunter.5c312cef152705dbf94e.mp4"},78118:function(e,t,n){e.exports=n.p+"static/media/Intern.cc66b07b74160b629e60.mp4"},6480:function(e,t,n){e.exports=n.p+"static/media/King.50156754b44d554f3579.mp4"},51799:function(e,t,n){e.exports=n.p+"static/media/MetaMonkey.74f42202e85ae3fe4332.mp4"},28123:function(e,t,n){e.exports=n.p+"static/media/CryptoInvestor.56b0f039d7afe9320d2f.mp4"},99162:function(e,t,n){e.exports=n.p+"static/media/Cyborg.7f2b4902834ed42481bc.mp4"},15446:function(e,t,n){e.exports=n.p+"static/media/Farmer.4bb64a8fd40ebf96a2cb.mp4"},9687:function(e,t,n){e.exports=n.p+"static/media/Guardian.ada4db2db744cba1bff9.mp4"},25718:function(e,t,n){e.exports=n.p+"static/media/Intern.188c12ec5290817dcaee.mp4"},21782:function(e,t,n){e.exports=n.p+"static/media/King.35db33e09783174df857.mp4"},70052:function(e,t,n){e.exports=n.p+"static/media/MetaMonkey.bdc051ed2857a5825a3c.mp4"},47541:function(e,t,n){e.exports=n.p+"static/media/common2.80e8396a1f023d399843.png"},28856:function(e,t,n){e.exports=n.p+"static/media/golden2.50493897f43dd8b91e76.png"},83483:function(e,t,n){e.exports=n.p+"static/media/mystical2.c889e6cc420b0a03be2a.png"}}]);
//# sourceMappingURL=331.76081600.chunk.js.map