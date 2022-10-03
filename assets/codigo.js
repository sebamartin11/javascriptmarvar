// mensaje al usuario para que ingrese producto y sus cantidades
alert("Seleccione el producto que desee, para salir ingrese 0");
let seleccionarProductos = parseInt(prompt("1-Corte Tradicionales x 60g $114.50, 2-Jamon Serrano x 55g $125.00, 3-Corte Americano x 60g $114.50, 4-Cheddar x 55g $125.00, 5-Ketchup x 55g $125.00, 6-Papas Pay x 65g $114,50, 7-Papas sin sal x 60g $114.50, 8-Palitos maiz queso x 60g $98.00, 9-Bastonitos x 55g $89.00, 10-Super Conos x 45g $86.00, 11-Palitos salados x 65g $107.00, 12-Palitos queso x 65g $90.00, 13-Mani pelado x 65g $107.00, 14-Mani Frito x 65g $107.00, 15-Café Santos $1678.00, 16- Café Torrado molido x 1kg $1628.00, 17-Cafe Torrado molido x500g $835.00, 18-Café saquitos $408.00, 19-Café Tostado x1kg $4140.00, 20-Azúcar $2282.00, 21-Edulcorante $1050.00, 22-Nachos x 250g $334, 23-Nachos xxl $334.00, 24-Nachos Redondos x 130g $252, 25-Nachos x 90g $158, 26-Nachos queso x 70 $156, 27-Nachos ketchup x70g $156, 28-Nachos jalapeño $156, 29-Nachos multicereal x90 $158, 30-Chocolate x 53g $84.50, 31-Caramel x 53g, 32-Finas hierbas x 53g $84.50, 33-Queso Romano x 53g $84.50, 34-Aceite 1.5l $955.00, 35-Rocio vegetal $259.00, 36-Mayonesa x 250g 253.00, 37-Ketchup x 250g $178.00, 38-Mostaza x 250g $133.00, 39-Salsa golf x 250g $167.00, 40-Mani Crocante Original $402.00, 41-Mani Crocante Pizza $402.00, 42-Mani Crocante Mortadela $402.00, 43-Mani Crocante Provenzal $402.00, 44-Mani Crocante Jamon $402.00, 45-Mani Pelado $413.00, 46-Mani Pelado sin sal $413.00, 47-Mani frito $413.00, 48-Sal fina corrediza $1253.00, 49-Limón $1498.00, 50-Aceite $2320.00, 51-Aceto balsamico $1745.00, 52-Vinagre $1498.00, 53-Edulcorante $993.00, 54-Azúcar $2507.00, 55-Aceite Oliva $2900.00, 56-Pay x 500g 485.00, 57-Pay x 900g $750.00."));

let seleccionarCantidad;
let total = 0;
// calculo de los productos seleccionados
const cantidad = (cant, precio) => {
    return cant * precio;
}

while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
    case 1:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Corte tradicionales x 60g, indique la cantidad"));
        total += cantidad(seleccionarCantidad, 114.50);
        break;
    case 2:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Jamon Serrano x 55g, indique la cantidad"));
        total += cantidad(seleccionarCantidad, 125.00);
        break;
    case 3:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Corte Americano x 60g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 114.50);
        break;
    case 4:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Cheddar x 55g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 125.00);
        break;
    case 5:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Ketchup x 55g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 125.00);
        break;
    case 6:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Papas Pay x 65g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 114.50);
        break;
    case 7:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Papas sin sal x 60g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 114.50);
        break;
    case 8:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Palitos maiz queso x 65g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 98.00);
        break;
    case 9:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Bastonitos x 55g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 89.00);
        break;
    case 10:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Super conos x 45g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 86.00);
        break;
    case 11:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Palitos salados x 65g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 107.00);
        break;
    case 12:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Palitos queso x 65g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 90.00);
        break;
    case 13:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mani Pelado x 65, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 107.00);
        break;
    case 14:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mani Frito x 65, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 107.00);
        break;
    case 15:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Café Santos 1kg, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1678.00);
        break;
    case 16:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Café Torrado molidox 1kg, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1628.00);
        break;
    case 17:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Café Torrado molido x 500g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 835.00);
        break;
    case 18:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Café saquitos, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 408.00);
        break;
    case 19:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Café Tostado x 1kg, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 107.00);
        break;
    case 20:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Azúcar indique la cantidad"))
        total += cantidad(seleccionarCantidad, 2282.00);
        break;
    case 21:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Edulcorant00, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1050.00);
        break;
    case 22:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Nachos x 250g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 334.00);
        break;
    case 23:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Nachos xxl, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 334.00);
        break;
    case 24:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Nachos Redondos x 130g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 252.00);
        break;
    case 25:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Nachos x 90g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 158.00);
        break;
    case 26:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Nachos queso x 70g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 156.00);
        break;
    case 27:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Nachos ketchup x70g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 156.00);
        break;
    case 28:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Nachos jalapeño x70g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 156.00);
        break;
    case 29:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Nachos multicereal x90g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 158.00);
        break;
    case 30:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Chocolate x 53g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 84.50);
        break;
    case 31:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Caramel x 53g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 84.50);
        break;
    case 32:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Finas hierbas x 53g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 84.50);
        break;
    case 33:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Queso Romano x 53g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 84.50);
        break;
    case 34:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Aceite 1.5l, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 955.00);
        break;
    case 35:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Rocio vegetal, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 259.00);
        break;
    case 36:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mayonesa x 250g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 253.00);
        break;
    case 37:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Ketchup x 250g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 178.00);
        break;
    case 38:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mostaza x 250g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 133.00);
        break;
    case 39:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Salsa golf x 250g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 167.00);
        break;
    case 40:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mani Crocante Original, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 402.00);
        break;
    case 41:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mani Crocante Pizza, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 402.00);
        break;
    case 42:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mani Crocante Mortadela, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 402.00);
        break;
    case 43:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mani Crocante Provenzal, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 402.00);
        break;
    case 44:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mani Crocante Jamon, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 402.00);
        break;
    case 45:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mani Pelado, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 413.00);
        break;
    case 46:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mani Pelado sin sal, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 413.00);
        break;
    case 47:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Mani frito, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 413.00);
        break;
    case 48:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Sal fina corrediza, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1253.00);
        break;
    case 49:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Limón, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1498.00);
        break;
    case 50:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Aceite, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 2320.00);
        break;
    case 51:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Aceto balsamico, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1745.00);
        break;
    case 52:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Vinagre, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1498.00);
        break;
    case 53:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Edulcorante, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 993.00);
        break;
    case 54:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Azúcar, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 2507.00);
        break;
    case 55:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Aceite Oliva, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 2900.00);
        break;
    case 56:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Pay x 500g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 485.00);
        break;
    case 57:
        seleccionarCantidad = parseInt(prompt("El producto seleccionado es Pay x 900g, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 750.00);
        break;
    default:
    break;
    }
    seleccionarProductos = parseInt(prompt("1-Corte Tradicionales x 60g $114.50, 2-Jamon Serrano x 55g $125.00, 3-Corte Americano x 60g $114.50, 4-Cheddar x 55g $125.00, 5-Ketchup x 55g $125.00, 6-Papas Pay x 65g $114,50, 7-Papas sin sal x 60g $114.50, 8-Palitos maiz queso x 60g $98.00, 9-Bastonitos x 55g $89.00, 10-Super Conos x 45g $86.00, 11-Palitos salados x 65g $107.00, 12-Palitos queso x 65g $90.00, 13-Mani pelado x 65g $107.00, 14-Mani Frito x 65g $107.00, 15-Café Santos $1678.00, 16- Café Torrado molido x 1kg $1628.00, 17-Cafe Torrado molido x500g $835.00, 18-Café saquitos $408.00, 19-Café Tostado x1kg $4140.00, 20-Azúcar $2282.00, 21-Edulcorante $1050.00, 22-Nachos x 250g $334, 23-Nachos xxl $334.00, 24-Nachos Redondos x 130g $252, 25-Nachos x 90g $158, 26-Nachos queso x 70 $156, 27-Nachos ketchup x70g $156, 28-Nachos jalapeño $156, 29-Nachos multicereal x90 $158, 30-Chocolate x 53g $84.50, 31-Caramel x 53g, 32-Finas hierbas x 53g $84.50, 33-Queso Romano x 53g $84.50, 34-Aceite 1.5l $955.00, 35-Rocio vegetal $259.00, 36-Mayonesa x 250g 253.00, 37-Ketchup x 250g $178.00, 38-Mostaza x 250g $133.00, 39-Salsa golf x 250g $167.00, 40-Mani Crocante Original $402.00, 41-Mani Crocante Pizza $402.00, 42-Mani Crocante Mortadela $402.00, 43-Mani Crocante Provenzal $402.00, 44-Mani Crocante Jamon $402.00, 45-Mani Pelado $413.00, 46-Mani Pelado sin sal $413.00, 47-Mani frito $413.00, 48-Sal fina corrediza $1253.00, 49-Limón $1498.00, 50-Aceite $2320.00, 51-Aceto balsamico $1745.00, 52-Vinagre $1498.00, 53-Edulcorante $993.00, 54-Azúcar $2507.00, 55-Aceite Oliva $2900.00, 56-Pay x 500g 485.00, 57-Pay x 900g $750.00."));
}
alert("El total de la compra es de: $"+total);
// costo del envio por compra superando los $5000
const envio = () => {
    if (total >= 5000) {
        alert("El envio es gratuito");
    }else{
        alert("El costo del envio es de $500, el total es: $"+total);
    }
}

envio()

// metodos de pago
const metodoDePago = () => {
    metodo = (prompt("Ingrese el metodo de pago, tarjeta o efectivo"));
    if (metodo == "tarjeta"){
        total *= 1.1
        prompt(("El total con recargo es de: $"+total));
        // alert("Tu pedido tendra un recargo con tarjeta" +recargo);
    }else if( metodo == "efectivo"){
        alert("Tu pedido no tendra recargo");
    }
}

metodoDePago()


