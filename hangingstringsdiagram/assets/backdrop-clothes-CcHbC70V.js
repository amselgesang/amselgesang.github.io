import"./gallerySkin-CcTtasEb.js";import{m as i,c as h,e as u,a as d,s,b}from"./feature-page-Bw88Xh1E.js";const{controls:c,chart:p,note:l}=i({title:"Backdrop clothes",intro:"The sheet behind the hanging strings — plain white, tablecloth weave, or Bavarian check. Pick a cloth to see how the scene reads against it."}),a=h(p,{categories:b,groups:s,backdrop:"tablecloth",secondaryEncoding:"none"});u(a);const e=document.createElement("div");e.className="control-group";e.innerHTML=`<label class="title">Cloth</label>
  <div class="segmented" data-cloth>
    <button type="button" data-value="off">Off</button>
    <button type="button" data-value="plain">White sheet</button>
    <button type="button" data-value="tablecloth" class="active">Tablecloth</button>
    <button type="button" data-value="bavarian">Bavarian check</button>
  </div>`;c.appendChild(e);const n=e.querySelector("[data-cloth]");n.addEventListener("click",r=>{const t=r.target.closest("button");if(t!=null&&t.dataset.value){a.setBackdrop(t.dataset.value);for(const o of n.querySelectorAll("button"))o.classList.toggle("active",o===t)}});d(c,a,s);l.hidden=!1;l.textContent="Cloth choice is independent of the breeze wind toggle on the chart (D21.8). Try Bavarian check for a strong pattern read.";
