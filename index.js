function enviarTorta(numero){
    var nombreTorta,relleno,selectRelleno;
    switch(numero){
        case 1: 
            nombreTorta = "Torta de crema y frutal";   
            selectRelleno = document.getElementById('rel1');
            relleno = selectRelleno.options[selectRelleno.selectedIndex].text 
            break;
        case 2: 
            nombreTorta = "Torta chocolate frutal";    
            selectRelleno = document.getElementById('rel2');
            relleno = selectRelleno.options[selectRelleno.selectedIndex].text 
            break;
        case 3:
            nombreTorta = "Torta con golosinas";    
            selectRelleno = document.getElementById('rel3');
            relleno = selectRelleno.options[selectRelleno.selectedIndex].text 
            break;
        case 4:
            nombreTorta = "Torta crema con sprinkles"; 
            selectRelleno = document.getElementById('rel4');
            relleno = selectRelleno.options[selectRelleno.selectedIndex].text    
            break;
        case 5:
            nombreTorta = "Torta cuadro de fútbol";  
            selectRelleno = document.getElementById('rel5');
            relleno = selectRelleno.options[selectRelleno.selectedIndex].text   
            break;
        case 6:
            nombreTorta = "Torta matilda";    
            selectRelleno = document.getElementById('rel6');
            relleno = selectRelleno.options[selectRelleno.selectedIndex].text 
            break;
        case 7:
            nombreTorta = "Torta personalizada";    
            selectRelleno = document.getElementById('rel7');
            relleno = selectRelleno.options[selectRelleno.selectedIndex].text 
            break;
        case 8:
            nombreTorta = "Torta nombre";    
            selectRelleno = document.getElementById('rel8');
            relleno = selectRelleno.options[selectRelleno.selectedIndex].text 
            break;
    }

    let num = 3364187132;
    let msg = "¡Hola! Quiero realizar el siguiente pedido: " + nombreTorta + " con relleno de " + relleno;
    window.open(`https://wa.me/${num}?text=${msg}`);
}

function enviarcya(numero){
    var nombreCupcake, cantidad;
    switch(numero){
        case 1: 
            nombreCupcake = "Cupcakes con sprinkles";   
            cantidad = document.getElementById('cansprinkles').value; 
            break;
        case 2: 
            nombreCupcake = "Cupcakes personalizados";    
            cantidad = document.getElementById('canperson').value; 
            break;
        case 3:
            nombreCupcake = "Alfajor de maicena";    
            cantidad = document.getElementById('canalfamai').value; 
            break;
        case 4:
            nombreCupcake = "Alfajor de Dulce de Leche con baño de Chocolate";   
            cantidad = document.getElementById('canalfadulce').value;  
            break;
    }
    let num = 3364187132;        
    let msg = "¡Hola! Quiero realizar el siguiente pedido: " + cantidad + " de " + nombreCupcake;
    window.open(`https://wa.me/${num}?text=${msg}`);
}

function enviartartas(numero){
    var nombreTarta, cantidad;
    switch(numero){
        case 1: 
            nombreTarta = "Tarta de Coco";   
            cantidad = document.getElementById('cancoco').value; 
            break;
        case 2: 
            nombreTarta = "Tarta de mantecol";    
            cantidad = document.getElementById('canmantecol').value; 
            break;
        case 3:
            nombreTarta = "Tarta de frutilla";    
            cantidad = document.getElementById('canfrutilla').value; 
            break;
        case 4:
            nombreTarta = "Tarta de durazno";   
            cantidad = document.getElementById('candurazno').value;  
            break;
        case 5: 
            nombreTarta = "Tarta frutal";   
            cantidad = document.getElementById('canfrutal').value; 
            break;
        case 6: 
            nombreTarta = "Tarta lemon pie";    
            cantidad = document.getElementById('canlemon').value; 
            break;
        case 7:
            nombreTarta = "Pastafrola";    
            cantidad = document.getElementById('canpastafrola').value; 
            break;
        case 8:
            nombreTarta = "Tarta toffi";   
            cantidad = document.getElementById('cantoffi').value;  
            break;
    }
    let num = 3364187132;        
    let msg = "¡Hola! Quiero realizar el siguiente pedido: " + cantidad + " de " + nombreTarta;
    window.open(`https://wa.me/${num}?text=${msg}`);
}