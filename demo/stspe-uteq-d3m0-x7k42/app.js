/* utilidades del mockup */
function qr(el,seed,size){ // patrón tipo QR decorativo
  size=size||21; let s=seed||7, c='';
  const rnd=()=>{s=(s*16807)%2147483647;return s/2147483647};
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    const eye=(x<7&&y<7)||(x>=size-7&&y<7)||(x<7&&y>=size-7);
    let f=false;
    if(eye){const lx=x%(size-7)>6?x-(size-7):x, ly=y%(size-7)>6?y-(size-7):y;
      const bx=x>=size-7?x-(size-7):x, by=y>=size-7?y-(size-7):y;
      f=(bx===0||bx===6||by===0||by===6)||(bx>1&&bx<5&&by>1&&by<5);
    } else f=rnd()>.52;
    if(f)c+=`<rect x="${x}" y="${y}" width="1" height="1"/>`;
  }
  el.innerHTML=`<svg viewBox="0 0 ${size} ${size}" width="100%" height="100%" fill="#0f172a" shape-rendering="crispEdges">${c}</svg>`;
}
function tabs(root){
  document.querySelectorAll(root+' .tabs button').forEach((b,i)=>{
    b.onclick=()=>{
      const bs=b.parentElement.querySelectorAll('button');
      const ps=document.querySelectorAll(root+' .tp');
      bs.forEach(x=>x.classList.remove('on'));ps.forEach(x=>x.classList.remove('on'));
      b.classList.add('on');ps[i].classList.add('on');
    };
  });
}
