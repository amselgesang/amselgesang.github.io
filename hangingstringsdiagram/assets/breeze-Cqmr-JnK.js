import"./gallerySkin-CAXfmCfn.js";import{m as r,c as i,s as t,b as c,e as l,a as p}from"./feature-page-CJAPH9Fr.js";const{controls:n,chart:d,note:a}=r({title:"Backdrop breeze",intro:"Wind stirring the sheet and the hanging cords. On mobile, use the wind icon on the chart to start or stop the breeze."}),s=i(d,{categories:c,groups:t,backdrop:"plain",secondaryEncoding:"none"});l(s);const o=document.createElement("div");o.className="control-group";o.innerHTML='<label class="title" for="backdrop-select">Sheet (for wind)</label>';const e=document.createElement("select");e.id="backdrop-select";e.innerHTML=`
  <option value="off">Off (no breeze)</option>
  <option value="plain" selected>White sheet</option>
  <option value="tablecloth">Tablecloth</option>
  <option value="bavarian">Bavarian check</option>
`;o.appendChild(e);n.appendChild(o);e.addEventListener("change",()=>{s.setBackdrop(e.value)});p(n,hv,t);a.hidden=!1;a.textContent="Desktop: continuous breeze while a sheet is on. Mobile: wind toggle (D21.8). For cloth patterns alone, see Backdrop clothes.";
