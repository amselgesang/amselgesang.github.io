import"./gallerySkin-CjboYk-i.js";import{m as i,c,s as a,b as l,e as p,a as h,t as d}from"./thumbBackdrop-Clyl4ZxE.js";const{controls:n,chart:m,note:r}=i({title:"Backdrop breeze",intro:"Wind stirring the hanging cords — with or without a sheet. Use the wind icon on the chart to start or stop the breeze."}),s=d("breeze"),o=c(m,{categories:l,groups:a,backdrop:s,secondaryEncoding:"none"});p(o);const t=document.createElement("div");t.className="control-group";t.innerHTML='<label class="title" for="backdrop-select">Sheet (optional)</label>';const e=document.createElement("select");e.id="backdrop-select";e.innerHTML=`
  <option value="off">Off</option>
  <option value="plain">White sheet</option>
  <option value="tablecloth">Tablecloth</option>
  <option value="bavarian">Bavarian check</option>
`;e.value=s;t.appendChild(e);n.appendChild(t);e.addEventListener("change",()=>{o.setBackdrop(e.value)});h(n,o,a);r.hidden=!1;r.textContent="Breeze works with the sheet off — the wind toggle controls cord sway. Add a sheet anytime to see the cloth wave too. Cloth patterns alone: Backdrop clothes.";
