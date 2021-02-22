Funcion RESULTADO = PROMEDIO ( ARRAY, TAMANO  )
	Definir suma, indice Como Entero;
	Definir RESULTADO Como Real;
	
	suma = 0;
	Para indice = 0 Hasta TAMANO - 1 Hacer
		suma = suma + array[INDICE];
	FinPara
	
	RESULTADO = suma / TAMANO;
	
Fin Funcion

//Funcion IMPRIMIR_ARRAY ( ARRAY, TAMANO )
//	Definir INDICE Como Entero;
//	
//	Para INDICE = 0 HASTA TAMANO - 1 Hacer
//		Escribir ARRAY[INDICE], " " Sin Saltar;
//	FinPara
//	Escribir "";
//Fin Funcion

Algoritmo EJERCICIO_53
	// Usar una funcion para calcular el promedio recibiendo un array y su longitud.
	// En el algoritmo principal, leer la cantidad de datos que introducira el
	// usuario y posteriormente los propios datos. Escribir el resultado de su promedio.
	
	Definir ARRAY, INDICE, TAMANO,DATOS Como Entero;
	Escribir " INTRODUCE EL TAMAÑO DEL ARRAY";
	Leer TAMANO;
	Dimension ARRAY[TAMANO];

	Para INDICE = 0 HASTA TAMANO - 1 Hacer
		Escribir " INTRODUCE EL NUMERO";
		Leer ARRAY[INDICE];
	FinPara
	

	Escribir " EL PROMEDIO ES: ", PROMEDIO(ARRAY, TAMANO);

FinAlgoritmo
