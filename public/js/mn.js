document.getElementById("validateButton").addEventListener("click",()=>{let e=document.getElementById("regexInput").value,t=document.getElementById("textInput").value,n=document.getElementById("result");try{let r=new RegExp(e);n.className=`alert mt-3 ${r.test(t)?"alert-success":"alert-warning"}`,n.innerText=r.test(t)?"¡Coincidencia encontrada en el texto!":"No se encontró ninguna coincidencia."}catch(r){n.className="alert alert-danger mt-3",n.innerText="Expresión regular no válida."}n.classList.remove("d-none")});