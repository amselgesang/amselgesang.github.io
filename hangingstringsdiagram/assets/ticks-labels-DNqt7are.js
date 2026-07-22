import"./gallerySkin-CAXfmCfn.js";import{m as c,c as r,s as i,b as d,e as p,a as u}from"./feature-page-CJAPH9Fr.js";const{controls:a,chart:h,note:o}=c({title:"Bead ticks & labels",intro:"Scale knots along the cord (D6) and optional value captions on the labels."}),t=r(h,{categories:d,groups:i,secondaryEncoding:"none",showTicks:!0,labelValues:!0,tickTarget:8});p(t);const l=document.createElement("div");l.className="control-group";l.innerHTML=`<label class="title">Scale reference</label>
  <div class="checkbox-row">
    <input type="checkbox" id="show-ticks" checked />
    <label for="show-ticks">Show thread knots (D6)</label>
  </div>`;a.appendChild(l);l.querySelector("#show-ticks").addEventListener("change",e=>{t.setOptions({showTicks:e.target.checked})});const s=document.createElement("div");s.className="control-group";s.innerHTML=`<label class="title">Labels</label>
  <div class="checkbox-row">
    <input type="checkbox" id="label-values" checked />
    <label for="label-values">Show value on 2nd line</label>
  </div>`;a.appendChild(s);s.querySelector("#label-values").addEventListener("change",e=>{t.setOptions({labelValues:e.target.checked})});const n=document.createElement("div");n.className="control-group";n.innerHTML=`<label class="title" for="tick-granularity-dial">Knot granularity</label>
  <div class="slider-row">
    <span class="slider-end-label">Coarse</span>
    <input type="range" id="tick-granularity-dial" min="2" max="10" value="8" step="1" />
    <span class="slider-end-label">Fine</span>
  </div>`;a.appendChild(n);n.querySelector("#tick-granularity-dial").addEventListener("input",e=>{t.setOptions({tickTarget:Number(e.target.value)})});u(a,hv,i);o.hidden=!1;o.textContent="Quipu mode hides D6 bead-ticks while active — use this page to inspect ticks alone.";
