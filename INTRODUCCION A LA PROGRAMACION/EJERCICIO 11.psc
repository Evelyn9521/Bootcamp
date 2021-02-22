Algoritmo sin_titulo
	Definir COMPRA Como Entero;
	
	LEER COMPRA;


	
	Si COMPRA < 500 Entonces
		ESCRIBIR " NO HAY DESCUENTO";
	SiNo
	FinSi
	
		Si COMPRA >=500 Y COMPRA <=1000 Entonces
			Escribir "HAY DESCUENTO DE 5% ", COMPRA * 0.95
		SiNo
			
			Si COMPRA > 1000 Y COMPRA <= 7000 Entonces
				ESCRIBIR"HAY UN DESCUENTO DEL 10% ", COMPRA * 0.9
		
		SiNo
			Si COMPRA >= 7000 Y COMRPA <= 15000 Entonces
				ESCRIBIR "HAY UN DESCUENTO DEL 20% ", COMPRA * 0.8
				
			SiNo
				Si COMPRA > 15000 Entonces
					ESCRIBIR " HAY UN DESCUENTO DEL 25% ", COMPRA * 0.75
				SiNo
					
				
				
				Fin Si
			Fin Si
		Fin Si
	Fin Si
FinAlgoritmo
