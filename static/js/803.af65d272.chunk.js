"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[803],{2284:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ma});var s=t(2791),n=t(5705),l=t(8007);const r="DailyNormaModal_modalContent__KvIF8",i="DailyNormaModal_textBlue__kszgp",o="DailyNormaModal_formulaWrap__JpCCc",c="DailyNormaModal_formulaLabel__X95Cr",d="DailyNormaModal_descriptionContainer__D4qCO",m="DailyNormaModal_descriptionText__h1r-I",h="DailyNormaModal_calcutatorTitle__fqA7i",u="DailyNormaModal_btnSave__WLCXD",_="DailyNormaModal_errorMessage__QTBo8",p="DailyNormaModal_genderWrapper__2zLey",x="DailyNormaModal_genderLabel__vGM2B",v="DailyNormaModal_fieldLabel__mDK15",g="DailyNormaModal_resultLabel__tGSwD",j="DailyNormaModal_genderInput__aQI6T",N="DailyNormaModal_fieldWrapper__hW7+t",w="DailyNormaModal_resultWrapper__qaB5c",f="DailyNormaModal_fieldInput__ARcOw",y="DailyNormaModal_resultInput__muC8R";var C=t(4217),M=t(4420),S=t(184);const P=l.Ry().shape({waterToDrink:l.Rx().required("Enter how much water you will drink")});function T(e){let{onClose:a,onSave:t}=e;const l=(0,M.v9)(C.Im),[T,k]=(0,s.useState)(l||"woman"),[b,W]=(0,s.useState)(0),[A,D]=(0,s.useState)(0),[V,L]=(0,s.useState)(0);return(0,s.useEffect)((()=>{L(((e,a,t)=>{const s=parseFloat(a)||0,n=parseFloat(t)||0;return"woman"===e?.03*s+.4*n:.04*s+.6*n})(T,b,A))}),[T,b,A]),(0,S.jsxs)("div",{className:r,children:[(0,S.jsxs)("div",{className:o,children:[(0,S.jsxs)("p",{className:c,children:["For women: ",(0,S.jsx)("span",{className:i,children:"V=(M*0.03) + (T*0.4)"})]}),(0,S.jsxs)("p",{className:c,children:["For men: ",(0,S.jsx)("span",{className:i,children:"V=(M*0.04) + (T*0.6)"})]})]}),(0,S.jsx)("div",{className:d,children:(0,S.jsxs)("p",{className:m,children:[(0,S.jsx)("span",{className:i,children:"*"})," V is the volume of water required in liters per day, M is your weight, and T is the duration of intense activity in hours (set to 0 if none)."]})}),(0,S.jsx)("h2",{className:h,children:"Calculate your rate:"}),(0,S.jsx)(n.J9,{initialValues:{waterToDrink:0,weight:0,activityTime:0},validationSchema:P,onSubmit:e=>{t(parseFloat(e.waterToDrink)),a()},children:()=>(0,S.jsxs)(n.l0,{children:[(0,S.jsxs)("div",{className:p,children:[(0,S.jsxs)("label",{className:x,children:[(0,S.jsx)("input",{className:j,type:"radio",name:"gender",value:"woman",checked:"woman"===T,onChange:()=>k("woman")}),"For women"]}),(0,S.jsxs)("label",{className:x,children:[(0,S.jsx)("input",{className:j,type:"radio",name:"gender",value:"man",checked:"man"===T,onChange:()=>k("man")}),"For men"]})]}),(0,S.jsx)("div",{className:N,children:(0,S.jsxs)("label",{className:v,children:["Your weight in kilograms:",(0,S.jsx)("input",{className:f,type:"number",name:"weight",value:b,onChange:e=>W(e.target.value),step:"0.01"}),(0,S.jsx)(n.Bc,{name:"weight",component:"p",className:_})]})}),(0,S.jsx)("div",{className:N,children:(0,S.jsxs)("label",{className:v,children:["The time of active participation in hours:",(0,S.jsx)("input",{className:f,type:"number",name:"activityTime",value:A,onChange:e=>D(e.target.value),step:"0.01"}),(0,S.jsx)(n.Bc,{name:"activityTime",component:"p",className:_})]})}),(0,S.jsxs)("p",{children:["The required amount of water per day:"," ",(0,S.jsxs)("span",{className:i,children:[V.toFixed(1)," L"]})]}),(0,S.jsx)("div",{className:w,children:(0,S.jsxs)("label",{className:g,children:[(0,S.jsx)("h2",{className:h,children:"Write down how much water you will drink:"}),(0,S.jsx)(n.gN,{className:y,type:"number",name:"waterToDrink",step:"0.01"}),(0,S.jsx)(n.Bc,{name:"waterToDrink",component:"p",className:_})]})}),(0,S.jsx)("button",{className:u,type:"submit",children:"Save"})]})})]})}const k="DailyNorma_normaContainer__yAGrT",b="DailyNorma_title__X4SZH",W="DailyNorma_normWater__8+Ruh",A="DailyNorma_editBtn__S8zub";var D=t(9321),V=t(3553);const L=e=>e.water.isLoading,I=e=>e.water.error,B=e=>e.water.today.notes,R=e=>e.water.today.dailyNorm,J=e=>e.water.today.percentage,F=e=>e.water.monthlyConsumption,K=(0,V.P1)([B],(e=>e.slice().sort(((e,a)=>new Date(e.date)-new Date(a.date)))));var U=t(3930);function E(){const[e,a]=(0,s.useState)(!1),t=(0,M.I0)(),n=(0,M.v9)(R),l=n?n/1e3:"-",r=()=>{a(!1)};return(0,S.jsxs)("div",{className:k,children:[(0,S.jsx)("h2",{className:b,children:"My daily norma"}),(0,S.jsxs)("div",{className:W,children:[`${l} L`,(0,S.jsx)("button",{className:A,onClick:()=>{a(!0)},children:"Edit"})]}),e&&(0,S.jsx)(D.Z,{title:"My daily norma",onClose:r,children:(0,S.jsx)(T,{onClose:r,onSave:e=>{const a=1e3*e;t((0,U.K2)({dailyNormWater:a}))}})})]})}var q=t(8454);const G="WaterRatioPanel_box__T11qP",Y="WaterRatioPanel_panelContainer__vZX7H",Z="WaterRatioPanel_label__GUYqK",Q="WaterRatioPanel_sliderContainer__CR4Xr",z="WaterRatioPanel_slider__+PTSK",O="WaterRatioPanel_valueContainer__gRrgy",H="WaterRatioPanel_borderWrapper__A7Cc5",X="WaterRatioPanel_afterBefor__GlH46",$="WaterRatioPanel_percent__O1bFg",ee="WaterRatioPanel_devider__BDjvE",ae="WaterRatioPanel_percentToday__Kzhcz",te="WaterRatioPanel_addWaterButton__kqCNJ",se="WaterRatioPanel_icon__ZAI64";function ne(e){let{openModal:a}=e;const t=(0,M.v9)(J),s=Math.floor(t)||0;return(0,S.jsxs)("div",{className:G,children:[(0,S.jsxs)("div",{className:Y,children:[(0,S.jsxs)("div",{className:Q,children:[(0,S.jsx)("label",{className:Z,htmlFor:"waterRange",children:"Today"}),(0,S.jsx)("input",{type:"range",id:"waterRange",min:"0",max:"100",value:s,className:z,style:{background:`linear-gradient(to right, #9ebbff ${s}%, #d7e3ff ${s}%)`},readOnly:!0})]}),(0,S.jsx)("div",{className:O,children:(0,S.jsxs)("div",{className:H,children:[(0,S.jsxs)("div",{className:X,children:[(0,S.jsx)("span",{className:ee,children:"|"}),(0,S.jsx)("span",{className:$,children:"0%"})]}),s>0&&(0,S.jsxs)("div",{className:X,children:[(0,S.jsx)("span",{className:ee,children:"|"}),(0,S.jsxs)("span",{className:`${$} ${ae}`,children:[s,"%"]})]}),(0,S.jsxs)("div",{className:X,children:[(0,S.jsx)("span",{className:ee,children:"|"}),(0,S.jsx)("span",{className:$,children:"100%"})]})]})})]}),(0,S.jsxs)("button",{className:te,onClick:a,children:[(0,S.jsx)("svg",{className:se,width:"24",height:"24",children:(0,S.jsx)("use",{href:`${q.Z}#icon-plus-circle`})}),"Add Water"]})]})}const le={container:"HomePage_container__uNu-e",homeContainer:"HomePage_homeContainer__6ghGM",pageBackground:"HomePage_pageBackground__hiddn",title:"HomePage_title__UFLA3",imageModal:"HomePage_imageModal__NmJ5u",box:"HomePage_box__Vq-hE"},re=t.p+"static/media/botle_home_screen.99c8569fc33ae2bb841f.png",ie=t.p+"static/media/botle_home_screen@2x.362d98d6199e03dc996a.png",oe=t.p+"static/media/bottle_home_screen_tablet.a49098681a2b673dda5a.png",ce=t.p+"static/media/bottle_home_screen_tablet@2x.6027984ea4a592ca63d8.png",de=t.p+"static/media/bottle_home_screen_mob@2x.6b36e9cdb5541e6cad63.png";var me=t(824);const he="MonthStatsTable_calendarContainer__HR632",ue="MonthStatsTable_containerDay__ZMKic",_e="MonthStatsTable_navigation__fWySF",pe="MonthStatsTable_selectedDay__KoS7B",xe="MonthStatsTable_monthYear__Rscm4",ve="MonthStatsTable_month__q8RdM",ge="MonthStatsTable_year__tOvLM",je="MonthStatsTable_prevButton__Mcu34",Ne="MonthStatsTable_nextButton__+Grzl",we="MonthStatsTable_daysList__uEEAv",fe="MonthStatsTable_itemWrapper__Aw0vo",ye="CalendarItem_dayWrapper__RvarJ",Ce="CalendarItem_dayItem__Ebd9v",Me="CalendarItem_lowPercentage__irL+D",Se="CalendarItem_fullPercentage__6G6tv",Pe="CalendarItem_percentageText__ytSOQ",Te="CalendarItem_zeroPercentage__s3tZC",ke="CalendarItem_calendarDay__-8qwF",be="CalendarItem_popup__+Mz9q";var We=t(3733);const Ae="DaysGeneralStats_popup__B4CHa",De="DaysGeneralStats_popupContent__UvZ+k",Ve="DaysGeneralStats_title__g7S8J",Le="DaysGeneralStats_text__Fcz5z",Ie="DaysGeneralStats_span__QjKNe",Be=e=>{let{selectedDayData:a}=e;const{date:t,dailyNorm:s,percentage:n,consumptionCount:l}=a,r=Math.floor(n);return(0,S.jsx)("div",{className:Ae,children:(0,S.jsxs)("div",{className:De,children:[(0,S.jsx)("h3",{className:Ve,children:t}),(0,S.jsxs)("p",{className:Le,children:["Daily norma: ",(0,S.jsxs)("span",{className:Ie,children:[s/1e3," L"]})]}),(0,S.jsxs)("p",{className:Le,children:["Fulfillment of the daily norm:"," ",(0,S.jsxs)("span",{className:Ie,children:[r,"%"]})]}),(0,S.jsxs)("p",{className:Le,children:["How many servings of water:"," ",(0,S.jsx)("span",{className:Ie,children:l})]})]})})};function Re(e){let{dayObject:a,onPopupToggle:t,isActive:n}=e;const{day:l,percentage:r}=a,i=Math.floor(r),o=(0,We.Z)(Ce,{[Me]:i>0&&i<100,[Se]:i>=100,[Te]:0===i}),c=(0,s.useRef)(null),[d,m]=(0,s.useState)({left:"50%",transform:"translateX(-50%)"});return(0,s.useEffect)((()=>{n&&c.current&&setTimeout((()=>{const e=c.current.getBoundingClientRect().width,a=c.current.getBoundingClientRect(),t=window.innerWidth,s=a.left,n=t-a.right;s<0?(console.log(1),m({left:"-20px",right:"unset"})):n<0?(console.log(2),m({left:"unset",right:"-20px"})):n<e&&s>=e?(console.log(3),m({left:"unset",right:"8px"})):s<e&&n>=e&&(console.log(4),m({left:"8px",right:"unset"}))}),0)}),[n]),(0,S.jsxs)("div",{className:ye,onClick:()=>t(a),children:[(0,S.jsx)("div",{className:o,children:(0,S.jsx)("p",{className:ke,children:l})}),(0,S.jsxs)("p",{className:Pe,children:[i,"%"]}),n&&(0,S.jsx)("div",{ref:c,className:be,style:{...d},onClick:e=>e.stopPropagation(),children:(0,S.jsx)(Be,{selectedDayData:a})})]})}const Je=e=>{let{monthlyWaterlist:a}=e;const t=new Date,[n,l]=(0,s.useState)(t.getFullYear()),[r,i]=(0,s.useState)(t.getMonth()+1),[o,c]=(0,s.useState)(null),d=e=>{c((a=>a===e?null:e))};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:_e,children:[(0,S.jsx)("h3",{className:pe,children:"Month"}),(0,S.jsxs)("div",{className:xe,children:[(0,S.jsx)("button",{className:je,onClick:()=>{i((e=>{const a=0===e?11:e-1;return 0===e&&l((e=>e-1)),console.log("Previous month:",a,"Year:",n),a}))},children:(0,S.jsx)(me.u1R,{})}),(0,S.jsx)("p",{className:ve,children:new Date(n,r).toLocaleString("en-US",{month:"long"})}),(0,S.jsx)("p",{className:ge,children:n}),n<(new Date).getFullYear()||n===(new Date).getFullYear()&&r<(new Date).getMonth()?(0,S.jsx)("button",{className:Ne,onClick:()=>{i((e=>{const a=11===e?0:e+1;return 11===e&&l((e=>e+1)),console.log("Next month:",a,"Year:",n),a}))},children:(0,S.jsx)(me.hjJ,{})}):(0,S.jsx)("div",{style:{width:"14px"}})]})]}),(0,S.jsx)("div",{className:he,children:(0,S.jsx)("div",{className:ue,children:(0,S.jsx)("ul",{className:we,children:a.length>0&&a.map((e=>(0,S.jsx)("li",{className:fe,children:(0,S.jsx)(Re,{dayObject:e,onPopupToggle:d,isActive:o===e})},e.key)))})})})]})},Fe="WaterListRow_listItem__Rqg7k",Ke="WaterListRow_icon__840Ty",Ue="WaterListRow_volume__QFv6s",Ee="WaterListRow_time__wsOxW",qe="WaterListRow_editButton__xrjVE",Ge="WaterListRow_deleteButton__Wna6o",Ye="WaterListRow_editIcon__wspvH",Ze="WaterListRow_deleteIcon__SLLS8",Qe="DeleteEntry_modalBody__y0E3g",ze="DeleteEntry_deleteBtn__MPHN3",Oe="DeleteEntry_cancelBtn__aS1UJ",He="DeleteEntry_textAreYou__X1exT",Xe="DeleteEntry_btnContainer__fXkH8",$e=e=>{let{onCancel:a,onDelete:t}=e;return(0,S.jsxs)("div",{className:Qe,children:[(0,S.jsx)("p",{className:He,children:"Are you sure you want to delete the entry?"}),(0,S.jsxs)("div",{className:Xe,children:[(0,S.jsx)("button",{className:Oe,onClick:a,children:"Cancel"}),(0,S.jsx)("button",{className:ze,onClick:t,children:"Delete"})]})]})},ea={waterContent:"TodayListModal_waterContent__Q2HKr",modalActions:"TodayListModal_modalActions__XD6mp",saveButtonStyle:"TodayListModal_saveButtonStyle__WmFKC",timeSelectBlock:"TodayListModal_timeSelectBlock__BKvGv",waterInput:"TodayListModal_waterInput__vmcv-",stepInputDown:"TodayListModal_stepInputDown__o5gB6",namValue:"TodayListModal_namValue__nTX-5",editSection:"TodayListModal_editSection__M27ff",correctData:"TodayListModal_correctData__4flHC",wtUsed:"TodayListModal_wtUsed__W68Sv",recTime:"TodayListModal_recTime__3az5N",stepInput:"TodayListModal_stepInput__hmEOW",roundButton:"TodayListModal_roundButton__mIzFR",waterInfoContainer:"TodayListModal_waterInfoContainer__-rkX7"};function aa(e){const[a]=e.split(":").map(Number);return a>=12?"PM":"AM"}const ta=()=>{const e=[];for(let a=0;a<24;a++)for(let t=0;t<60;t+=5){const s=a<10?`0${a}`:a,n=t<10?`0${t}`:t;e.push(`${s}:${n}`)}return e},sa=e=>{let{title:a="",onSave:t,previousWaterData:s}=e;const l=(0,M.v9)(R),r=s?s.amount:0,i=s?s.time:function(){const e=new Date;let a=5*Math.round(e.getMinutes()/5);60===a&&(a=0,e.setHours(e.getHours()+1));const t=e.getHours();return`${t<10?`0${t}`:t}:${a<10?`0${a}`:a}`}();return(0,S.jsx)(n.J9,{initialValues:{waterVolume:r,selectedTime:i},onSubmit:e=>{const a=new Date,[s,n]=e.selectedTime.split(":").map(Number);a.setHours(s,n,0,0);const r=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}T${String(s).padStart(2,"0")}:${String(n).padStart(2,"0")}`,i={dailyNorm:l,amount:e.waterVolume,date:r};t(i)},children:e=>{let{values:t,setFieldValue:l}=e;return(0,S.jsxs)(n.l0,{className:ea.waterContent,children:[(0,S.jsx)("div",{className:ea.previousData,children:s&&(0,S.jsxs)("div",{className:ea.waterInfoContainer,children:[(0,S.jsx)("svg",{className:"icon-glass",width:"24",height:"24",children:(0,S.jsx)("use",{href:`${q.Z}#icon-glass`})}),s.amount," ml ",s.time,(0,S.jsx)("span",{className:ea.amPmIndicator,children:aa(s.time)})]})}),(0,S.jsxs)("div",{className:ea.editSection,children:[(0,S.jsx)("input",{type:"hidden",name:"dailyNorm"}),(0,S.jsx)("h3",{className:ea.title,children:a}),(0,S.jsx)("label",{children:"Amount of water:"}),(0,S.jsxs)("div",{className:ea.stepInput,children:[(0,S.jsx)("button",{type:"button",className:ea.roundButton,onClick:()=>{const e=Math.max(0,t.waterVolume-50);l("waterVolume",e)},children:"-"}),(0,S.jsxs)("span",{children:[t.waterVolume," ml"]}),(0,S.jsx)("button",{type:"button",className:ea.roundButton,onClick:()=>{const e=Math.min(5e3,t.waterVolume+50);l("waterVolume",e)},children:"+"})]}),(0,S.jsx)("label",{children:"Recording time:"}),(0,S.jsx)("div",{className:ea.timeSelectBlock,children:(0,S.jsx)(n.gN,{as:"select",name:"selectedTime",children:ta().map(((e,a)=>(0,S.jsx)("option",{value:e,children:e},a)))})}),(0,S.jsx)("label",{className:ea.namValue,children:"Enter the value of the water used:"}),(0,S.jsx)(n.gN,{type:"number",name:"waterVolume",className:ea.waterInput,min:0,max:5e3,onFocus:e=>{"0"===e.target.value&&l("waterVolume","")},onChange:e=>{let a=e.target.value;""!==a?(a=Math.max(0,Math.min(5e3,Number(a))),l("waterVolume",a)):l("waterVolume","")}})]}),(0,S.jsxs)("div",{className:ea.modalActions,children:[(0,S.jsx)("div",{className:ea.stepInputDown,children:(0,S.jsxs)("span",{children:[t.waterVolume," ml"]})}),(0,S.jsx)("div",{children:(0,S.jsx)("button",{type:"submit",className:`${ea.stepSave} ${ea.saveButtonStyle}`,children:"Save"})})]})]})}})};function na(e){let{rowData:a}=e;const{_id:t,amount:n,date:l}=a||{},r=l?l.split("T")[1]:"No time available",[i,o]=(0,s.useState)(!1),[c,d]=(0,s.useState)(!1),m=(0,M.I0)(),h=()=>{o(!1)},u=()=>{d(!1)};return(0,S.jsxs)("div",{className:Fe,children:[(0,S.jsx)("svg",{className:Ke,width:"36",height:"36",children:(0,S.jsx)("use",{href:`${q.Z}#icon-glass`})}),(0,S.jsxs)("p",{className:Ue,children:[n," ml"]}),(0,S.jsx)("p",{className:Ee,children:r}),(0,S.jsx)("button",{className:qe,"aria-label":"Edit",onClick:()=>{d(!0)},children:(0,S.jsx)("svg",{className:Ye,width:"16",height:"16",children:(0,S.jsx)("use",{href:`${q.Z}#icon-pencil`})})}),(0,S.jsx)("button",{className:Ge,"aria-label":"Delete",onClick:()=>{o(!0)},children:(0,S.jsx)("svg",{className:Ze,width:"16",height:"16",children:(0,S.jsx)("use",{href:`${q.Z}#icon-trash`})})}),i&&(0,S.jsx)(D.Z,{title:"Delete Entry",onClose:h,children:(0,S.jsx)($e,{onCancel:h,onDelete:()=>{return e=t,m((0,U.iJ)(e)),void h();var e}})}),c&&(0,S.jsx)(D.Z,{title:"Edit the entered amount of water",onClose:u,children:(0,S.jsx)(sa,{title:"Correct entered data:",onSave:e=>{return a=t,s=e,m((0,U.CV)({id:a,updatedData:s})),void u();var a,s},previousWaterData:{amount:n,time:r}})})]})}const la={listItem:"TodayWaterList_listItem__Nh9Nv",listContainer:"TodayWaterList_listContainer__fkpQ-",scrollContainer:"TodayWaterList_scrollContainer__lZQxd"};function ra(){const e=(0,M.v9)(K);return(0,S.jsx)("div",{className:`${la.listContainer} ${la.todayWaterList}`,children:(0,S.jsx)("div",{className:la.scrollContainer,children:(0,S.jsx)("ul",{className:la.waterList,children:e.map(((e,a)=>(0,S.jsx)("li",{className:la.waterItem,children:(0,S.jsx)(na,{rowData:e})},`${e._id}-${a}`)))})})})}var ia=t(7567);const oa={container:"WaterListWithCalendar_container__ouRwP",todayText:"WaterListWithCalendar_todayText__moxdA",waterList:"WaterListWithCalendar_waterList__tdKao",addButtonContainer:"WaterListWithCalendar_addButtonContainer__LCyKM",icon:"WaterListWithCalendar_icon__6YnVk",addButton:"WaterListWithCalendar_addButton__7y9iH",addText:"WaterListWithCalendar_addText__I9ykQ",emptyContainer:"WaterListWithCalendar_emptyContainer__d8ot0",buttonContainer:"WaterListWithCalendar_buttonContainer__2mUkk"},ca=e=>{let{openModal:a}=e;const t=(0,M.v9)(L),s=(0,M.v9)(I),n=(0,M.v9)(B)||[],l=(0,M.v9)(F)||[],r=(null===l||void 0===l?void 0:l.data)||[];return(0,S.jsxs)("div",{className:oa.container,children:[(0,S.jsx)("h2",{className:oa.todayText,children:"Today"}),(0,S.jsxs)("div",{className:oa.waterList,children:[t&&(0,S.jsx)(ia.Z,{}),!t&&s&&(0,S.jsx)("div",{className:oa.error,children:"Error loading water data"}),!t&&!s&&(0,S.jsx)(S.Fragment,{children:n.length>0?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(ra,{openModal:a}),(0,S.jsx)("div",{className:oa.addButtonContainer,children:(0,S.jsxs)("button",{className:oa.addButton,onClick:a,children:[(0,S.jsx)("svg",{className:oa.icon,width:"24",height:"24",children:(0,S.jsx)("use",{href:`${q.Z}#icon-plus`})}),(0,S.jsx)("span",{className:oa.addText,children:"Add water"})]})})]}):(0,S.jsx)("div",{className:oa.emptyContainer,children:(0,S.jsx)("div",{className:oa.addButtonContainer,children:(0,S.jsxs)("button",{className:oa.addButton,onClick:a,children:[(0,S.jsx)("svg",{className:oa.icon,width:"24",height:"24",children:(0,S.jsx)("use",{href:`${q.Z}#icon-plus`})}),(0,S.jsx)("span",{className:oa.addText,children:"Add water"})]})})})})]}),(0,S.jsxs)("div",{className:oa.calendar,children:[t&&(0,S.jsx)(ia.Z,{}),!t&&s&&(0,S.jsx)("div",{className:oa.error,children:"Error loading water data"}),!t&&!s&&r.length>0&&(0,S.jsx)(Je,{monthlyWaterlist:r})]})]})};var da=t(5667);function ma(){const e=new Date,a=e.getFullYear(),t=e.getMonth()+1,n=(0,M.v9)(C.AP),l=(0,M.v9)(C.Hn),r=(0,M.I0)();(0,s.useEffect)((()=>{r((0,da.PR)()),r((0,U.zA)()),r((0,U.eJ)({year:a,month:t}))}),[r,a,t]);const i=(0,We.Z)(le.homeContainer,le.pageBackground),o=(0,We.Z)("mainContainer",le.container),[c,d]=(0,s.useState)(!1),m=e=>()=>{e((e=>!e))},h=e=>{m(d)(),r((0,U.oK)(e))};return(0,S.jsxs)("section",{id:"homePage",className:i,children:[(0,S.jsxs)("div",{className:o,children:[(0,S.jsxs)("div",{className:le.box,children:[(0,S.jsxs)("div",{className:le.imageModal,children:[(0,S.jsx)("h1",{className:le.title,children:"HomePage"}),(0,S.jsx)(E,{}),(0,S.jsxs)("picture",{children:[(0,S.jsx)("source",{srcSet:`${re} 1x, ${ie} 2x`,media:"(min-width: 1440px)"}),(0,S.jsx)("source",{srcSet:`${oe} 1x, ${ce} 2x`,media:"(min-width: 768px) and (max-width: 1439px)"}),(0,S.jsx)("source",{srcSet:`data:image/png;base64,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 1x, ${de} 2x`,media:"(max-width: 767px)"}),(0,S.jsx)("img",{className:le.photo,src:re,alt:"Bottle"})]})]}),!n&&!l&&(0,S.jsx)(ne,{openModal:m(d)})]}),!n&&!l&&(0,S.jsx)(ca,{openModal:m(d)})]}),c?(0,S.jsx)(D.Z,{title:"Add Water",onClose:m(d),children:(0,S.jsx)(sa,{title:"Choose a value:",onSave:h})}):null]})}}}]);
//# sourceMappingURL=803.af65d272.chunk.js.map