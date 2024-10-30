/* Instrucciones de la tarea */

/* Calculadora 
    Suma
    Resta
    Multiplicación
    División 
    
    Crear una función que a través de 3 parámetros
    permita hacer la operación solicitada

    Ejemplo: Suma de 2 + 2;
    */

    function calculadora(valor1, valor2, operacion) {
        switch (operacion) {
            case 'suma':
                return valor1 + valor2;
            case 'resta':
                return valor1 - valor2;
            case 'multiplicacion':
                return valor1 * valor2;
            case 'division':
                return valor2 !== 0 ? valor1 / valor2 : 'Error: División por cero';
            default:
                return 'Operación no válida';
        }
    }
    
    console.log(calculadora(2, 2, 'suma'));           // 4
    console.log(calculadora(3, 9, 'resta'));          // -6
    console.log(calculadora(6, 2, 'multiplicacion')); // 12
    console.log(calculadora(6, 3, 'division'));       // 2
    console.log(calculadora(1, 0, 'division'));       // Error: División por cero
    
    
