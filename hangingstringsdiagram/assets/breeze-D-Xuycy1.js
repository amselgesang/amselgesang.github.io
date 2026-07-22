import"./gallerySkin-CAXfmCfn.js";import{m as i,c,s as n,b as l,e as p,a as d,t as h}from"./thumbBackdrop-Ck01k4f9.js";const{controls:a,chart:u,note:r}=i({title:"Backdrop breeze",intro:"Wind stirring the sheet and the hanging cords. On mobile, use the wind icon on the chart to start or stop the breeze."}),s=h("breeze"),t=c(u,{categories:l,groups:n,backdrop:s,secondaryEncoding:"none"});p(t);const o=document.createElement("div");o.className="control-group";o.innerHTML='<label class="title" for="backdrop-select">Sheet (for wind)</label>';const e=document.createElement("select");e.id="backdrop-select";e.innerHTML=`
  <option value="off">Off (no breeze)</option>
  <option value="plain">White sheet</option>
  <option value="tablecloth">Tablecloth</option>
  <option value="bavarian">Bavarian check</option>
`;e.value=s;o.appendChild(e);a.appendChild(o);e.addEventListener("change",()=>{t.setBackdrop(e.value)});d(a,t,n);r.hidden=!1;r.textContent="Desktop: continuous breeze while a sheet is on. Mobile: wind toggle (D21.8). For cloth patterns alone, see Backdrop clothes.";
