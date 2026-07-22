import"./gallerySkin-CAXfmCfn.js";import{m as i,c as h,e as d,a as u,s as n,b}from"./feature-page-CJAPH9Fr.js";const{controls:s,chart:p,note:c}=i({title:"Backdrop clothes",intro:"The sheet behind the hanging strings — plain white, tablecloth weave, or Bavarian check. Pick a cloth to see how the scene reads against it."}),l=h(p,{categories:b,groups:n,backdrop:"tablecloth",secondaryEncoding:"none"});d(l);const e=document.createElement("div");e.className="control-group";e.innerHTML=`<label class="title">Cloth</label>
  <div class="segmented" data-cloth>
    <button type="button" data-value="off">Off</button>
    <button type="button" data-value="plain">White sheet</button>
    <button type="button" data-value="tablecloth" class="active">Tablecloth</button>
    <button type="button" data-value="bavarian">Bavarian check</button>
  </div>`;s.appendChild(e);const o=e.querySelector("[data-cloth]");o.addEventListener("click",r=>{const t=r.target.closest("button");if(t!=null&&t.dataset.value){l.setBackdrop(t.dataset.value);for(const a of o.querySelectorAll("button"))a.classList.toggle("active",a===t)}});u(s,hv,n);c.hidden=!1;c.textContent="Cloth choice is independent of the breeze wind toggle on the chart (D21.8). Try Bavarian check for a strong pattern read.";
