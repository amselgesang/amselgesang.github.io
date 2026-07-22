import{d as s,T as c,b as u}from"./facade-Bkxz5oHp.js";function m(t){const a=t.backHref??"../../",e=document.createElement("div");return e.className="demo-feature app",e.innerHTML=`
    <header class="demo-header">
      <p class="demo-brand"><a href="${a}">← All features</a></p>
      <h1></h1>
      <p class="demo-intro"></p>
    </header>
    <div class="panel demo-controls-panel">
      <div class="controls demo-controls" data-demo-controls></div>
      <p class="experiment-note demo-note" data-demo-note hidden></p>
    </div>
    <div class="panel">
      <div class="chart-shell demo-chart-shell" data-demo-chart id="chart"></div>
    </div>
  `,e.querySelector("h1").textContent=t.title,e.querySelector(".demo-intro").textContent=t.intro,document.body.appendChild(e),s(document.documentElement,c["wool-brass"]),{root:e,controls:e.querySelector("[data-demo-controls]"),chart:e.querySelector("[data-demo-chart]"),note:e.querySelector("[data-demo-note]")}}function p(t,a,e="straight"){const o=document.createElement("div");o.className="control-group",o.innerHTML=`<label class="title">Rail mode</label>
    <div class="segmented" data-rail>
      <button type="button" data-value="straight">Straight</button>
      <button type="button" data-value="arc">Arc</button>
      <button type="button" data-value="wave">Wave</button>
      <button type="button" data-value="ring">Ring</button>
    </div>`,t.appendChild(o);const n=o.querySelector("[data-rail]"),l=()=>{for(const d of n.querySelectorAll("button"))d.classList.toggle("active",d.dataset.value===a.getRailMode())};a.setRailMode(e),l(),n.addEventListener("click",d=>{const r=d.target.closest("button");r!=null&&r.dataset.value&&(a.setRailMode(r.dataset.value),l())})}function h(t,a){for(const[e,o]of Object.entries(c)){const n=document.createElement("option");n.value=e,n.textContent=o.name,t.appendChild(n)}t.value=c[a]?a:"wool-brass"}function b(t,a){const e=document.createElement("option");e.value="theme",e.textContent="Theme default",t.appendChild(e);for(const[o,n]of Object.entries(u)){const l=document.createElement("option");l.value=o,l.textContent=n.name,t.appendChild(l)}t.value=a}export{p as a,b,h as f,m};
