'use strict'
// 1.Почему код дает именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 ++a увеличивает на единицу и сразу возвращает значение 
d = b++; alert(d);           // 1 b++ увеличиват на единицу, но возвращает старое значение
c = (2+ ++a); alert(c);      // 5 в первом примере a приняло значение 2, и увеличилась на 1: 2+3
d = (2+ b++); alert(d);      // 4 во  2 примере b приняло значение 2, увеличило на 1, но вернуло старое значение: 2+2
alert(a);                    // 3 в 1 примере a + 1 и в 3 примере +1
alert(b);                    // 3 во 2 примере b + 1 и в 4 примере +1

// 2.Чему будет равен x? 
var a = 2;
var x = 1 + (a *= 2); 		// Ответ: 5    a *= 2 это то же самое, что а*2,  1+(2*2) = 5

/* 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.*/

let a = Number(prompt('введите целочисленное число a'));
let b = Number(prompt('введите целочисленное число b'));

if(a>=0 && b>=0){
	if(a>b){
		alert(a-b);
	}else{
		alert(b-a);
	}
}else if(a<0 && b<0){
	alert(a*b);
}else{
	alert(a+b);
}

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
let a = Number(prompt('введите число от 0 до 15'));
switch(a){
	case 0:
	document.write('0 ');
case 1:
	document.write('1 ');	
case 2:
	document.write('2 ');
case 3:
	document.write('3 ');	
case 4:
	document.write('4 ');
case 5:
	document.write('5 ');
case 6:
	document.write('6 ');
case 7:
	document.write('7 ');
case 8:
	document.write('8 ');
case 9:
	document.write('9 ');
case 10:
	document.write('10 ');
case 11:
	document.write('11 ');
case 12:
	document.write('12 ');
case 13:
	document.write('13 ');
case 14:
	document.write('14 ');
case 15:
	document.write('15 ');									
}

//5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function mathPlus(a,b){
	return a + b;
}

let result = mathPlus(3,4);


function mathMinus(a,b){
	return a - b;
}

let result1 = mathMinus(7,4);


function mathMultiply(a,b){
	return a * b;
}

let result2 = mathMultiply(3,4);


function mathDivision(a,b){
	return a / b;
}

let result3 = mathDivision(3,4);


/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) 
и вернуть полученное значение (применить switch).*/

function mathOperation(arg1, arg2, operation){
	switch(operation){
		case mathPlus:
		return mathPlus(arg1,arg2);
	case mathMinus:
		return mathMinus(arg1,arg2);
	case mathMultiply:
		return mathMultiply(arg1,arg2);	
	case mathDivision:
		return mathDivision(arg1,arg2);		
	}
}


let s = mathOperation(4,5,mathDivision);
alert(s);

