"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[672],{672:(s,e,a)=>{a.r(e),a.d(e,{default:()=>_});var i=a(154),d=a(927),l=a(546);const g={dialogs:"Dialogs_dialogs__oe96H",dialogs__items:"Dialogs_dialogs__items__+PnPC",dialog_img:"Dialogs_dialog_img__Drjzz",dialog:"Dialogs_dialog__htSTl",messages:"Dialogs_messages__Cg2l+",message:"Dialogs_message__ZEWo0"};var o=a(87),t=a(184);const n=s=>{let e="/dialogs/"+s.id;return(0,t.jsxs)("div",{className:g.dialog+" "+g.active,children:[(0,t.jsx)("img",{className:g.dialog_img,src:"https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg"}),(0,t.jsx)(o.OL,{to:e,children:s.name})]})},r=s=>(0,t.jsx)("div",{className:g.message,children:s.message}),m=s=>{let e=s.dialogsPage,a=e.dialogs.map((s=>(0,t.jsx)(n,{name:s.name,id:s.id},s.id))),i=e.messages.map((s=>(0,t.jsx)(r,{message:s.message},s.id))),d=e.newMassageBody;return(0,t.jsxs)("div",{className:g.dialogs,children:[(0,t.jsx)("div",{className:g.dialogs__items,children:a}),(0,t.jsxs)("div",{className:g.messages,children:[(0,t.jsx)("div",{children:i}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:(0,t.jsx)("textarea",{onChange:e=>{let a=e.target.value;s.updateNewMassageBody(a)},value:d,placeholder:"Enter your message"})}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{onClick:()=>{s.sendMassage()},children:"Send massage"})})]})]})]})};var c=a(420);const _=(0,i.qC)((0,c.$j)((s=>({dialogsPage:s.dialogsPage})),{sendMassage:l.d1,updateNewMassageBody:l.E0}),d.D)(m)},927:(s,e,a)=>{a.d(e,{D:()=>t});var i=a(791),d=a(420),l=a(689),g=a(184);let o=s=>({isAuth:s.auth.isAuth});const t=s=>{class e extends i.Component{render(){return this.props.isAuth?(0,g.jsx)(s,{...this.props}):(0,g.jsx)(l.Fg,{to:"/login"})}}return(0,d.$j)(o)(e)}}}]);
//# sourceMappingURL=672.ae9181ea.chunk.js.map