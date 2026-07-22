import"./gallery-BujPCXpD.js";import{c as i,s as c,a as r}from"./facade-Bkxz5oHp.js";import{m as d}from"./feature-page-DyIWDfnz.js";const{controls:s,chart:p,note:o}=d({title:"Bead ticks & labels",intro:"Scale knots along the cord (D6) and optional value captions on the labels."}),n=i(p,{categories:r,groups:c,secondaryEncoding:"none",showTicks:!0,labelValues:!0,tickTarget:8}),a=document.createElement("div");a.className="control-group";a.innerHTML=`<label class="title">Scale reference</label>
  <div class="checkbox-row">
    <input type="checkbox" id="show-ticks" checked />
    <label for="show-ticks">Show thread knots (D6)</label>
  </div>`;s.appendChild(a);a.querySelector("#show-ticks").addEventListener("change",e=>{n.setOptions({showTicks:e.target.checked})});const t=document.createElement("div");t.className="control-group";t.innerHTML=`<label class="title">Labels</label>
  <div class="checkbox-row">
    <input type="checkbox" id="label-values" checked />
    <label for="label-values">Show value on 2nd line</label>
  </div>`;s.appendChild(t);t.querySelector("#label-values").addEventListener("change",e=>{n.setOptions({labelValues:e.target.checked})});const l=document.createElement("div");l.className="control-group";l.innerHTML=`<label class="title" for="tick-granularity-dial">Knot granularity</label>
  <div class="slider-row">
    <span class="slider-end-label">Coarse</span>
    <input type="range" id="tick-granularity-dial" min="2" max="10" value="8" step="1" />
    <span class="slider-end-label">Fine</span>
  </div>`;s.appendChild(l);l.querySelector("#tick-granularity-dial").addEventListener("input",e=>{n.setOptions({tickTarget:Number(e.target.value)})});o.hidden=!1;o.textContent="Quipu mode hides D6 bead-ticks while active — use this page to inspect ticks alone.";
