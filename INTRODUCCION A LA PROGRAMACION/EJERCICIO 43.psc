Algoritmo sin_titulo
	
	Definir SEGS, MINUTOS, HORAS Como Entero;
	SEGS = 0;
	MINUTOS = 0;
	HORAS = 0;
	
	Mientras Verdadero
		Limpiar Pantalla;
		Escribir HORAS ":", MINUTOS, ":", SEGS;
		
		Escribir SEGS;
		Esperar 1 Segundos;
		SEGS = SEGS + 1;
		
		Si  SEGS > 59 Entonces
			SEGS = 0;
			MINUTOS = MINUTOS + 1;
	
		Fin Si
		
		SI MINUTOS > 59 Entonces
			MINUTOS = 0;
			HORAS = HORAS + 1;
		FinSi
		
		Si HORAS > 23 Entonces
			HORAS = 0;
	
		
		Fin Si
	FinMientras
	
	
FinAlgoritmo
