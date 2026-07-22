import"./gallery-BujPCXpD.js";import{c as n,s as a,a as c}from"./facade-Bkxz5oHp.js";import{m as r}from"./feature-page-DyIWDfnz.js";const{controls:i,chart:s,note:o}=r({title:"Backdrop breeze",intro:"A cloth sheet behind the chart. On mobile, use the wind icon on the chart to start the breeze."}),l=n(s,{categories:c,groups:a,backdrop:"plain",secondaryEncoding:"none"}),t=document.createElement("div");t.className="control-group";t.innerHTML='<label class="title" for="backdrop-select">Backdrop</label>';const e=document.createElement("select");e.id="backdrop-select";e.innerHTML=`
  <option value="off">Off</option>
  <option value="plain" selected>White sheet</option>
  <option value="tablecloth">Tablecloth</option>
  <option value="bavarian">Bavarian check</option>
`;t.appendChild(e);i.appendChild(t);e.addEventListener("change",()=>{l.setBackdrop(e.value)});o.hidden=!1;o.textContent="Desktop keeps continuous breeze when a sheet is on. Mobile: wind toggle (D21.8) on the chart.";
