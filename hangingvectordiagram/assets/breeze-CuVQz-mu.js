import"./gallery-BujPCXpD.js";import{m as r,c as i,s as n,b as c,e as l,a as p}from"./feature-page-Bb6NZ_TH.js";const{controls:a,chart:d,note:s}=r({title:"Backdrop breeze",intro:"Wind stirring the sheet and the hanging cords. On mobile, use the wind icon on the chart to start or stop the breeze."}),t=i(d,{categories:c,groups:n,backdrop:"plain",secondaryEncoding:"none"});l(t);const o=document.createElement("div");o.className="control-group";o.innerHTML='<label class="title" for="backdrop-select">Sheet (for wind)</label>';const e=document.createElement("select");e.id="backdrop-select";e.innerHTML=`
  <option value="off">Off (no breeze)</option>
  <option value="plain" selected>White sheet</option>
  <option value="tablecloth">Tablecloth</option>
  <option value="bavarian">Bavarian check</option>
`;o.appendChild(e);a.appendChild(o);e.addEventListener("change",()=>{t.setBackdrop(e.value)});p(a,t,n);s.hidden=!1;s.textContent="Desktop: continuous breeze while a sheet is on. Mobile: wind toggle (D21.8). For cloth patterns alone, see Backdrop clothes.";
