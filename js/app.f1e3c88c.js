(function(){"use strict";var e={9855:function(e,t,n){var s=n(9963),i=n(6252);function a(e,t,n,s,a,o){const c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(c)}var o={},c=n(3744);const r=(0,c.Z)(o,[["render",a]]);var l=r,d=n(2201),m=n(3577);const p=e=>((0,i.dD)("data-v-070c6262"),e=e(),(0,i.Cn)(),e),u={class:"container mt-5"},f=p((()=>(0,i._)("h1",{class:"text-center mb-4"},"روشتة جديدة",-1))),b={class:"bach-btn text-start mt-5",style:{"margin-left":"200px"}},_=(0,i.Uk)(" عودة للخلف "),h={class:"row justify-content-center"},v={class:"col-8"},w={class:"row"},g={class:"col-6 mb-4"},y=p((()=>(0,i._)("label",{for:"doctorName",class:"form-label fs-4"},"اسم الطبيب:",-1))),k={class:"col-6 mb-4"},x=p((()=>(0,i._)("label",{for:"patientName",class:"form-label fs-4"},"اسم المريض:",-1))),N={class:"d-flex justify-content-between align-items-center mb-3"},M={class:"mb-0"},P=["onClick"],U=p((()=>(0,i._)("i",{class:"fas fa-times"},null,-1))),j=[U],C={class:"mb-3"},O=p((()=>(0,i._)("label",{for:"medicamentName",class:"form-label fs-4"},"اسم الدواء:",-1))),S=["onUpdate:modelValue"],D=p((()=>(0,i._)("option",{value:"",disabled:"",selected:"",hidden:""},"اختر اسم الدواء",-1))),z=["value"],I={class:"mb-3"},T=p((()=>(0,i._)("label",{for:"notes",class:"form-label fs-4"},"ملاحظات:",-1))),V=["onUpdate:modelValue"],W={class:"btns mb-4 d-flex justify-content-between"},J=(0,i.Uk)(" عودة لقائمة الادوية "),Z=p((()=>(0,i._)("i",{class:"fas fa-plus"},null,-1))),H=(0,i.Uk)(" اضافة دواء "),K=[Z,H],L=p((()=>(0,i._)("i",{class:"fas fa-file-prescription"},null,-1))),Y=(0,i.Uk)(" طباعة الروشتة "),q=[L,Y];function $(e,t,n,a,o,c){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",u,[f,(0,i._)("div",b,[(0,i.Wm)(r,{to:"/",class:"btn back-button mb-3 py-3 text-white",style:{"font-size":"18px","background-color":"rgb(221, 148, 12)"}},{default:(0,i.w5)((()=>[_])),_:1})]),(0,i._)("div",h,[(0,i._)("div",v,[(0,i._)("div",w,[(0,i._)("div",g,[y,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.doctorName=e),type:"text",class:"form-control py-3",id:"doctorName",placeholder:"ادخل اسم الطبيب"},null,512),[[s.nr,o.doctorName]])]),(0,i._)("div",k,[x,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.patientName=e),type:"text",class:"form-control py-3",id:"patientName",placeholder:"ادخل اسم المريض"},null,512),[[s.nr,o.patientName]])])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.medicaments,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"mb-4 border rounded-3 p-3"},[(0,i._)("div",N,[(0,i._)("h2",M,"الدواء "+(0,m.zw)(t+1),1),(0,i._)("button",{onClick:e=>c.removeMedicament(t),class:"btn btn-danger"},j,8,P)]),(0,i._)("div",C,[O,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t=>e.name=t,class:"form-control py-2 custom-select",id:"medicamentName"},[D,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.storedMedicines,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e,value:e.name},(0,m.zw)(e.name),9,z)))),128))],8,S),[[s.bM,e.name]])]),(0,i._)("div",I,[T,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t=>e.notes=t,class:"form-control py-3",id:"notes",rows:"2",placeholder:"ادخل ملاحظات",style:{resize:"none"}},null,8,V),[[s.nr,e.notes]])])])))),128)),(0,i._)("div",W,[(0,i.Wm)(r,{to:"/medicines",class:"btn back-button py-3 text-white",style:{"font-size":"18px","background-color":"rgb(221, 148, 12)"}},{default:(0,i.w5)((()=>[J])),_:1}),(0,i._)("button",{onClick:t[2]||(t[2]=(...e)=>c.addMedicament&&c.addMedicament(...e)),class:"btn btn-success py-3 px-4"},K),(0,i._)("button",{onClick:t[3]||(t[3]=(...e)=>c.generatePrescription&&c.generatePrescription(...e)),class:"btn btn-primary py-3 px-4"},q)])])])])}n(560);var E={data(){return{doctorName:localStorage.getItem("doctorName")||"",patientName:"",medicaments:[{name:"",notes:""}],storedMedicines:JSON.parse(localStorage.getItem("medicines"))||[]}},methods:{addMedicament(){this.medicaments.push({name:"",notes:""})},removeMedicament(e){this.medicaments.splice(e,1)},generatePrescription(){const e={doctorName:this.doctorName,patientName:this.patientName,medicaments:this.medicaments};localStorage.setItem("prescription",JSON.stringify(e)),localStorage.setItem("doctorName",this.doctorName),this.$router.push("/prescription/print")}}};const F=(0,c.Z)(E,[["render",$],["__scopeId","data-v-070c6262"]]);var A=F,B=n.p+"img/prescription-logo.07f3f7c0.png";const G=e=>((0,i.dD)("data-v-0c8c5aab"),e=e(),(0,i.Cn)(),e),Q=G((()=>(0,i._)("div",{class:"img d-flex justify-content-center mb-3"},[(0,i._)("img",{src:B,class:"rounded-circle",width:"100",height:"100"})],-1))),R={class:"mb-4 pb-2 d-flex justify-content-between align-items-center border-bottom border-black"},X={class:"fs-3 mb-0"},ee=G((()=>(0,i._)("strong",null,"دكتور/",-1))),te={key:0,class:"patient-name fs-3"},ne=G((()=>(0,i._)("strong",null,"اسم المريض/",-1))),se={key:0,class:"mb-3"},ie={class:"medicament-name fs-3"},ae={key:1,class:"mb-3 me-5"},oe={class:"medicament-notes fs-3"},ce={class:"bach-btn text-center ms-3"},re=(0,i.Uk)(" عودة للخلف "),le=G((()=>(0,i._)("i",{class:"fas fa-print"},null,-1))),de=(0,i.Uk)(" طباعة الروشتة "),me=[le,de],pe=G((()=>(0,i._)("div",{class:"border-black border-top d-flex justify-content-between align-items-center flex-wrap"},[(0,i._)("p",{class:"fs-3 mb-0"},[(0,i._)("strong",null,"العنوان/"),(0,i.Uk)(" شارع النصر امام بنك مصر الإسلامي بجوار بنزينة عويد ")]),(0,i._)("p",{class:"fs-3 mb-0 ms-4"},[(0,i._)("strong",null,"التليفون/"),(0,i.Uk)(" 01026903168 ")])],-1))),ue=[pe];function fe(e,t,n,s,a,o){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",{class:(0,m.C_)({"container-fluid":a.isPrintMode,"container mt-5":!a.isPrintMode})},[Q,(0,i._)("div",R,[(0,i._)("p",X,[ee,(0,i.Uk)((0,m.zw)(o.prescription.doctorName),1)]),o.prescription.patientName?((0,i.wg)(),(0,i.iD)("p",te,[ne,(0,i.Uk)(" "+(0,m.zw)(o.prescription.patientName),1)])):(0,i.kq)("",!0)]),(0,i._)("div",{class:(0,m.C_)(["row px-5 py-3 mt-5",a.isPrintMode?"":"justify-content-center"])},[(0,i._)("div",{class:(0,m.C_)((a.isPrintMode,"col-12"))},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.prescription.medicaments,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"mb-4 d-flex"},[e.name?((0,i.wg)(),(0,i.iD)("div",se,[(0,i._)("p",ie,[(0,i._)("strong",null,(0,m.zw)(e.name),1)])])):(0,i.kq)("",!0),e.notes?((0,i.wg)(),(0,i.iD)("div",ae,[(0,i._)("p",oe,(0,m.zw)(e.notes),1)])):(0,i.kq)("",!0)])))),128))],2)],2),(0,i._)("div",{class:"text-center mb-5 d-flex justify-content-center align-items-center",style:(0,m.j5)({display:a.isPrintMode?"none !important":"block"})},[(0,i._)("div",ce,[(0,i.Wm)(c,{to:"/prescription/new",class:"btn back-button py-3 text-white",style:{"font-size":"18px","background-color":"rgb(221, 148, 12)"}},{default:(0,i.w5)((()=>[re])),_:1})]),(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>o.handlePrint&&o.handlePrint(...e)),class:"btn btn-primary py-3 px-4 fs-4"},me)],4),(0,i._)("div",{class:(0,m.C_)(["footer",a.isPrintMode?"footer-position":""])},ue,2)],2)}var be={computed:{prescription(){const e=localStorage.getItem("prescription");return e?JSON.parse(e):{}}},data(){return{isPrintMode:!1}},methods:{handlePrint(){this.isPrintMode=!0,this.$nextTick((()=>{this.printPrescription()}))},printPrescription(){window.print(),this.isPrintMode=!1}}};const _e=(0,c.Z)(be,[["render",fe],["__scopeId","data-v-0c8c5aab"]]);var he=_e;const ve={class:"container pt-5"},we=(0,i._)("h1",{class:"text-center"},"روشتة ",-1),ge={class:"row p-5"},ye={class:"col-6 text-center"},ke=(0,i._)("i",{class:"fas fa-pills"},null,-1),xe=(0,i.Uk)(" الأدوية "),Ne={class:"col-6 text-center"},Me=(0,i._)("i",{class:"fas fa-file-prescription"},null,-1),Pe=(0,i.Uk)(" روشتة جديدة ");function Ue(e,t,n,s,a,o){const c=(0,i.up)("router-link"),r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",ve,[we,(0,i._)("div",ge,[(0,i._)("div",ye,[(0,i.Wm)(c,{to:"/medicines",class:"btn btn-primary mb-3 py-3 w-50",style:{"font-size":"18px"}},{default:(0,i.w5)((()=>[ke,xe])),_:1})]),(0,i._)("div",Ne,[(0,i.Wm)(c,{to:"/prescription/new",class:"btn btn-success mb-3 py-3 w-50",style:{"font-size":"18px"}},{default:(0,i.w5)((()=>[Me,Pe])),_:1})])]),(0,i.Wm)(r)])}var je={data(){return{patientName:"",medicaments:[{name:"",notes:""}]}},methods:{addMedicament(){this.medicaments.push({name:"",notes:""})},removeMedicament(e){this.medicaments.splice(e,1)},generatePrescription(){const e={patientName:this.patientName,medicaments:this.medicaments};localStorage.setItem("prescription",JSON.stringify(e)),this.$router.push("/prescription/view")}}};const Ce=(0,c.Z)(je,[["render",Ue]]);var Oe=Ce;const Se={class:"container mt-5"},De=(0,i._)("h1",{class:"text-center mb-4"},"إدارة الأدوية",-1),ze={class:"bach-btn text-start mt-5",style:{"margin-left":"200px"}},Ie=(0,i.Uk)(" عودة للخلف "),Te={class:"row justify-content-center py-2 g-4"},Ve={class:"col-8 bo rounded-2"},We=(0,i._)("h2",{class:"mb-3"},"إضافة دواء جديد",-1),Je={class:"mb-3"},Ze=(0,i._)("label",{for:"medicineName",class:"form-label fs-4"},"اسم الدواء:",-1),He=(0,i._)("i",{class:"fas fa-plus"},null,-1),Ke=(0,i.Uk)(" إضافة الدواء "),Le=[He,Ke],Ye={class:"col-8 py-3"},qe=(0,i._)("h2",{class:"mb-4 fw-bold fs-1 text-center"},"قائمة الأدوية",-1),$e={class:"list-group pe-0"},Ee={class:"d-flex justify-content-between align-items-center"},Fe={class:"buttons"},Ae=["onClick"],Be=(0,i._)("i",{class:"fas fa-edit"},null,-1),Ge=[Be],Qe=["onClick"],Re=(0,i._)("i",{class:"fas fa-trash"},null,-1),Xe=[Re];function et(e,t,n,a,o,c){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",Se,[De,(0,i._)("div",ze,[(0,i.Wm)(r,{to:"/",class:"btn back-button mb-3 py-3 text-white",style:{"font-size":"18px","background-color":"rgb(221, 148, 12)"}},{default:(0,i.w5)((()=>[Ie])),_:1})]),(0,i._)("div",Te,[(0,i._)("div",Ve,[We,(0,i._)("div",Je,[Ze,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.newMedicineName=e),type:"text",class:"form-control py-3",id:"medicineName",placeholder:"ادخل اسم الدواء"},null,512),[[s.nr,o.newMedicineName]])]),(0,i._)("button",{onClick:t[1]||(t[1]=(...e)=>c.addMedicine&&c.addMedicine(...e)),class:"btn btn-success w-25 py-3 mt-2 fw-bold fs-5"},Le)]),(0,i._)("div",Ye,[qe,(0,i._)("ul",$e,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.medicines,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t,class:"list-group-item"},[(0,i._)("div",Ee,[(0,i._)("p",null,(0,m.zw)(e.name),1),(0,i._)("div",Fe,[(0,i._)("button",{onClick:e=>c.editMedicine(t),class:"btn btn-warning ms-4"},Ge,8,Ae),(0,i._)("button",{onClick:e=>c.deleteMedicine(t),class:"btn btn-danger"},Xe,8,Qe)])])])))),128))])])])])}var tt={data(){return{newMedicineName:"",medicines:JSON.parse(localStorage.getItem("medicines"))||[]}},methods:{addMedicine(){if(""!==this.newMedicineName.trim()){const e=this.medicines.some((e=>e.name===this.newMedicineName.trim()));e?alert("هذا الدواء موجود بالفعل"):(this.medicines.push({name:this.newMedicineName.trim()}),this.newMedicineName="",this.saveMedicinesToLocalStorage())}},editMedicine(e){const t=prompt("تعديل اسم الدواء:",this.medicines[e].name);null!==t&&(this.medicines[e].name=t.trim(),this.saveMedicinesToLocalStorage())},deleteMedicine(e){const t=confirm("هل أنت متأكد من حذف هذا الدواء؟");t&&(this.medicines.splice(e,1),this.saveMedicinesToLocalStorage())},saveMedicinesToLocalStorage(){localStorage.setItem("medicines",JSON.stringify(this.medicines))}}};const nt=(0,c.Z)(tt,[["render",et]]);var st=nt;const it=[{path:"/",component:Oe},{path:"/prescription/print",component:he},{path:"/prescription/new",component:A},{path:"/medicines",component:st}],at=(0,d.p7)({history:(0,d.PO)(),routes:it});var ot=at;n(4069);(0,s.ri)(l).use(ot).mount("#app")}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,a){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],i=e[d][1],a=e[d][2];for(var c=!0,r=0;r<s.length;r++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](s[r])}))?s.splice(r--,1):(c=!1,a<o&&(o=a));if(c){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,i,a]}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,a,o=s[0],c=s[1],r=s[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(r)var d=r(n)}for(t&&t(s);l<o.length;l++)a=o[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},s=self["webpackChunkprescription_app"]=self["webpackChunkprescription_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(9855)}));s=n.O(s)})();
//# sourceMappingURL=app.f1e3c88c.js.map