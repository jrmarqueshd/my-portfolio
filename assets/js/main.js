window.addEventListener("load",()=>{let e=document.getElementById("mainHeader"),t=document.getElementById("buttonMenu"),n=document.getElementById("buttonCloseMenu"),d=document.getElementById("navMenu"),i=document.getElementById("menuList"),c=document.querySelectorAll("#navMenu > ul > li > a"),o=e.scrollHeight,s=document.getElementById("menuFixed"),l=document.getElementById("navMenuFixed"),a=document.querySelector("#navMenuFixed > figure"),m=document.querySelector("#about > article > figure"),r=document.getElementById("perfilImg"),u=document.getElementById("aboutContent"),E=document.getElementById("buttonSeeMore");function w(){d.classList.remove("-show-menu"),t.classList.remove("-hidden")}u.scrollHeight>500&&(u.classList.add("-hidden-content"),E.classList.add("-show")),t.addEventListener("click",(function(){d.classList.add("-show-menu"),t.classList.add("-hidden")})),n.addEventListener("click",w),[].forEach.call(c,e=>{e.addEventListener("click",w)}),window.addEventListener("scroll",()=>{window.scrollY>o?(s.classList.add("-show"),a.insertAdjacentElement("afterbegin",r),window.matchMedia("(min-width: 768px)").matches?l.insertAdjacentElement("beforeend",i):window.matchMedia("(max-width: 767px)").matches&&(d.insertAdjacentElement("beforeend",i),l.insertAdjacentElement("beforeend",t))):window.scrollY<o&&(s.classList.remove("-show"),d.insertAdjacentElement("beforeend",i),e.insertAdjacentElement("beforeend",t),m.insertAdjacentElement("afterbegin",r))}),E.addEventListener("click",(function(){u.classList.remove("-hidden-content"),E.classList.remove("-show")}))});