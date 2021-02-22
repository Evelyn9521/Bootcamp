Algoritmo EJERCICIO_24
	
	Definir COLUMNAS, FILAS, LADOS Como Entero
	Escribir  " INTRODUCE EL TAMAÑO DEL CUADRADO";
	Leer LADOS;
	
	Para FILAS = 1 Hasta LADOS Con Paso 1 Hacer		
		Para COLUMNAS = 1 Hasta LADOS Con Paso 1 Hacer
			Si FILAS == 1 O FILAS == LADOS O COLUMNAS ==1 O COLUMNAS == LADOS Entonces
				Escribir "* " Sin Saltar;
			SiNo
				Escribir "  " Sin Saltar;
			Fin Si
			
		Fin Para
		Escribir "";
	
	FinPara

FinAlgoritmo
