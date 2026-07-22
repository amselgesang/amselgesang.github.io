import"./gallery-BujPCXpD.js";import{c as p,s as d,a as i}from"./facade-Bkxz5oHp.js";import{m}from"./feature-page-DyIWDfnz.js";const{controls:c,chart:h,note:r}=m({title:"2nd metric encodings",intro:"How the secondary value shows up — none, knob size, or heat-map color. Quipu has its own page."}),u=p(h,{categories:i,groups:d,secondaryEncoding:"knob"}),a=document.createElement("div");a.className="control-group";a.innerHTML='<label class="title" for="secondary-encoding">Encoding</label>';const t=document.createElement("select");t.id="secondary-encoding";t.innerHTML=`
  <option value="none">None</option>
  <option value="knob" selected>Knob size (D7)</option>
  <option value="heat">Heat-map (D8)</option>
`;a.appendChild(t);c.appendChild(a);const e=document.createElement("div");e.className="control-group";e.style.display="none";e.innerHTML=`<label class="title">Heat-map scale</label>
  <div class="heat-ramp">
    <span data-heat-min></span>
    <div class="heat-ramp-bar"></div>
    <span data-heat-max></span>
  </div>`;c.appendChild(e);const g=e.querySelector("[data-heat-min]"),v=e.querySelector("[data-heat-max]");function l(){const s=t.value==="heat";if(e.style.display=s?"":"none",s){const n=i.map(o=>o.secondaryValue).filter(o=>typeof o=="number");g.textContent=n.length?String(Math.min(...n)):"0",v.textContent=n.length?String(Math.max(...n)):"1"}}t.addEventListener("change",()=>{u.setSecondaryEncoding(t.value),l()});l();r.hidden=!1;r.textContent="For knotted khipu digits, open the Quipu knots feature page.";
