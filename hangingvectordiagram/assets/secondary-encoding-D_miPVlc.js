import"./gallery-BujPCXpD.js";import{m,c as u,s as l,b as r,e as h,a as g}from"./feature-page-Cx2VO2tp.js";const{controls:i,chart:v,note:p}=m({title:"2nd metric encodings",intro:"How the secondary value shows up — none, knob size, or heat-map color. Quipu has its own page."}),c=u(v,{categories:r,groups:l,secondaryEncoding:"knob"});h(c);const a=document.createElement("div");a.className="control-group";a.innerHTML='<label class="title" for="secondary-encoding">Encoding</label>';const t=document.createElement("select");t.id="secondary-encoding";t.innerHTML=`
  <option value="none">None</option>
  <option value="knob" selected>Knob size (D7)</option>
  <option value="heat">Heat-map (D8)</option>
`;a.appendChild(t);i.appendChild(a);const e=document.createElement("div");e.className="control-group";e.style.display="none";e.innerHTML=`<label class="title">Heat-map scale</label>
  <div class="heat-ramp">
    <span data-heat-min></span>
    <div class="heat-ramp-bar"></div>
    <span data-heat-max></span>
  </div>`;i.appendChild(e);const y=e.querySelector("[data-heat-min]"),b=e.querySelector("[data-heat-max]"),H=g(i,c,l);function d(){const o=t.value==="heat";if(e.style.display=o?"":"none",H.classList.toggle("heatmap-dimmed",o),o){const n=r.map(s=>s.secondaryValue).filter(s=>typeof s=="number");y.textContent=n.length?String(Math.min(...n)):"0",b.textContent=n.length?String(Math.max(...n)):"1"}}t.addEventListener("change",()=>{c.setSecondaryEncoding(t.value),d()});d();p.hidden=!1;p.textContent="For knotted khipu digits, open the Quipu knots feature page.";
