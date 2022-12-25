Виртуальная машина. Постановка задачи

Нужно посчитать факториал числа и НОД двух чисел 

node vm.js fact_zjs.txt - Так считаем факториал

node vm.js nod_zjs.txt - Так считаем НОД(a,b)

Синтаксис:

adr - адрес ячейки памяти

input <ячейка(adr)> <число> - добавляет значение в ячейку

add adr1 adr2 adr3 ===> adr3 = adr1 + adr2

sub adr1 adr2 adr3 ===> adr3 = adr1 - adr2

multi adr1 adr2 adr3 ===> adr3 = adr1 * adr2

div adr1 adr2 adr3 ===> adr3 = adr1 / adr2 (деление без остатка)

mod adr1 adr2 adr3 ===> adr3 = adr1 % adr2 (деление с остатком)

spot adr1 <...> endspot - отделяет блок кода

goto - аналог goto

exit - выход

jb ===> '>'

je ===> '=='

jz ===> '<'

output - выводит значение