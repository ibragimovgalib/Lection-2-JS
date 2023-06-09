# Лекция 2

1. ## Scope  - область
2. ## Hoisting  -  подъем
3. ## Recursion  -  рекурсия
4. ## Closure  -  закрытие


# 1. Scope - область видимости
> Область видимости — это текущий контекст выполнения, в котором значения и выражения
являются «видимыми» или на них можно сослаться. Если переменная или выражение не находятся в текущем
масштаб, он не будет доступен для использования. Области также могут быть разделены на слои в иерархии,
чтобы дочерние области имели доступ к родительским областям, но не наоборот

![Scope in JS.](/img/1%20Scope%20JS.png)

### JavaScript имеет следующие типы областей видимости:
> ## Global scope: 
>> _Область за пределами всех функций считается глобальной областью, и переменные, определенные в глобальной области, могут быть доступны и изменены в любых других областях._
> ## Function scope:
>> _Переменные объявленные в функции не могут быть доступными где-нибудь вне этой функции, поэтому переменные (которые нужны именно для функции) объявляют только в scope функции._
>>> ### Block scope: 
>> _Эта область ограничивает объявленную переменную
внутри определенного блока, от доступа снаружи блока._
> ## Module scope:
>> _Эта область ограничивает общественную перемену
внутри определенного блока, от доступа снаружи блока._


![Scopes in JS.](/img/csops%20.png) 

# 2. Hoisting - подъем

> **Поднятие** или **hoisting**  — это механизм в JavaScript, в котором переменные и объявления функций, передвигаются вверх своей области видимости перед тем, как код будет выполнен.

* ### Hoisting - veriable (VAR)
 _Есть соблазн подумать, что весь код, который вы видите в
JavaScript
программа интерпретируется построчно, сверху вниз, как программа
выполнять. Хотя это по сути верно, есть одна часть этого как-
предположение, которое может привести к неправильному мышлению о вашей программе_


# 3. Recursion - рекурсия 
> Рекурсия — это когда функция вызывает сама себя до тех пор, пока кто-то ее не остановит. Если никто не остановит это, то это будет
рекурсия (вызвать себя) навсегда. Рекурсивные функции позволяют выполнять единицу работы несколько раз.
В современных языках программирования, таких как JavaScript, уже есть операторы for и while.
Альтернативы рекурсивным функциям. Но некоторые языки, такие как Closure, не имеют циклов.
операторы, поэтому вам нужно использовать рекурсию для многократного выполнения фрагмента кода.

![Recursion.](/img/recursion.png) 

# 4. Closure - закрытие

> _ **Замыкание** — это комбинация функции, связанной вместе (приложенной) со ссылками на
окружающее его состояние (лексическое окружение). Другими словами, замыкание дает вам
доступ к области действия внешней функции из внутренней функции_

![Closure.](/img/Closure%20JS.png)

