function validarFormulari() {

    //let comensales = document.getElementById("comensales").value;
    //let factura = document.getElementById("factura").value;
    //let opinion = document.getElementById("opinion").value;
    let genial = 10;
     let comensales = document.forms.form1.comensales.value;  
     let factura = document.forms.form1.factura.value;
     let opinion = document.forms.form1.opinion.value;
    let aceptable = 5;
    let horrible = 0;
    
    if (comensales === "") {
      comensales = 1;
    }
    // Realiza la validación programática de los datos
    if (comensales === "" || factura === "" || opinion === "") {
    
      alert("RELLENA TODOS LOS CAMPOS MELÓN!");
      return false;
    }
    
    // Muestra una ventana de confirmación
    let confirmacion = confirm("Los datos que has introducido son:\n\nComensales: " + comensales + "\nTotal Factura: " + factura + "\nOpinión: " + opinion + "\n\n¿Quieres continuar?");
    
    if (confirmacion) {
      // Borra el contenido de los campos
      document.getElementById("comensales").value = "";
      document.getElementById("factura").value = "";
      document.getElementById("opinion").value = "";
    
      alert("Datos enviados correctamente!");
    }
    let propina;
    
    if (opinion == 10) {
      propina = genial * factura / 100;
    } else if (opinion == 5) {
    
      propina = aceptable * factura / 100;
    
    
    } else if (opinion == 0) {
      propina = 0.5 * comensales;
    
    }
    let propinaMinima = comensales * 0.5;
    if (propina < propinaMinima) {
      window.alert(" Se establecera la propina minima por persona , que es 0.5 euros por persona");
      propina = 0.5 * comensales;
    }
    //window.alert("La propina a pagar es " + propina + " euros");
    let elemento = document.getElementById("propinaTotalp");
    propinaTotalp.innerHTML = "La propina total a pagar es " + propina + " euros"+"\nPropina por persona : "+propina/comensales + "euros";
    
    
    return false;
    }
    
    
   