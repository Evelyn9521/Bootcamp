Algoritmo EJERCICIO_23
	Definir DIA, MES, A�O Como Entero;
	
	Escribir " INTRODUCIR DIA ";
	LEER DIA;
	ESCRIBIR " INTRODUCE MES ";
	Leer MES;
	ESCRIBIR " INTRODUCE EL A�O ";
	Leer A�O;
	
	SI DIA >= 0 Y DIA <= 31 Y (MES >= 0 Y MES <= 12) Y A�O > 0 Entonces
		ESCRIBIR DIA " DE " Sin Saltar;
		
		Segun MES Hacer
			1:
				ESCRIBIR " ENERO " Sin Saltar
			2:
				ESCRIBIR " FEBRERO " Sin Saltar
			3:
				ESCRIBIR " MARZO " Sin Saltar
				
			4:	ESCRIBIR " ABRIL " Sin Saltar
				
			5:	ESCRIBIR " MAYO " Sin Saltar
				
			6:	ESCRIBIR " JUNIO " Sin Saltar
				
			7:	ESCRIBIR " JULIO " Sin Saltar
				
			8:	ESCRIBIR " AGOSTO " Sin Saltar
				
			9:	ESCRIBIR " SEPTIEMBRE " Sin Saltar
				
			10:	ESCRIBIR " OCTUBRE " Sin Saltar
				
			11:	ESCRIBIR " NOVIEMBRE " Sin Saltar
				
			12:	ESCRIBIR " DICIEMBRE " Sin Saltar
		
		Fin Segun
		Escribir  "DE ", A�O
	SiNo
		Escribir "ERROR EN EL A�O ";
	FinSi
	
	
FinAlgoritmo
