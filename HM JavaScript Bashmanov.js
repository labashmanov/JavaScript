// Домашнее задание по JavaScript

// ЗАДАНИЕ 1
function filter(array, filterFn, inplace = false) {
    if (inplace) { // Если inplace = true, следовательно, изменяем исходный массив
        for (let i = array.length - 1; i >= 0; i--) {  // Цикл FOR, перебираем элементы массива с конца, чтобы корректно обрабатывать удаление элементов
            if (filterFn(array[i], i, array) === false) {  // Если элемент не проходит фильтрацию (filterFn возвращает False)
                array.splice(i, 1); // удаляем один элемент i из массива
            }
        }
        return array; // Возвращаем измененный массив
    } else {
        return array.filter(filterFn); // Если inplace = false, то создаем новый массив, в который отфильтровываем нужные элементы
    }
}

// ПРОВЕРКА
function filterFn(element) {
    return element.length > 5; //оставляем строки, длина которых больше 5
}
let example1 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let filteredArray = filter(example1, filterFn, false);
console.log(filteredArray); 


// ЗАДАНИЕ 2 
function amountOfObjectTypes(obj) {
    const typeOfObject = {}; // Создаем пустой объект, в который будем сохранять типы объектов
    for (let key in obj) { // Цикл FOR, перебераем все ключи в объекте
        const type = typeof obj[key]; // Получаем тип для каждого свойства
        if (typeOfObject[type]) { // Если есть такой тип в нашем объекте,
            typeOfObject[type] += 1; //  то +1 к количеству таких объектов
        } else {
            typeOfObject[type] = 1; // Если такой тип встретился в первый раз, то присваиваем ему значение 1
        }
    }
    return typeOfObject;  // Возвращаем объект с количеством типов объектов
}

// ПРОВЕРКА
const initialObj = {
    a: 'some string 1',
    b: 42,
    c: { c1: 'some string 2' },
    d: [],
    e: 123,
};
const resultObj = amountOfObjectTypes(initialObj);
console.log(resultObj);

// ЗАДАНИЕ 3
function sum(x, y) {
    if (typeof x !== 'number' && typeof y !== 'number') { // Если оба операнда не являются числами, 
      throw new Error("Operands are not numbers"); // выдается ошибка "Operands are not numbers"
    } else if (typeof x !== 'number') { // Если левый операнд не является числом,
      throw new Error("The left operand is not number"); // выдается ошибка "The left operand is not number"
    } else if (typeof y !== 'number') { // Если правый операнд не является числом,
      throw new Error("The right operand is not number");// выдается ошибка "The right operand is not number"
    } else {
      return x + y; // Если оба операнда являются числами, их сумма возвращается
    }
}

// ПРОВЕРКА 
try { // Используем конструкцию try-catch, чтобы отловить ошибки
    console.log(sum(4,5))
} 
catch(error) {
    console.error(error.massage)
}

try {
    console.log(sum(3,"qwer"))
} 
catch(error) {
    console.error(error.massage)
}

// ЗАДАНИЕ 7 
function snakeToCamal(str) {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()); // Используем replace, чтобы заменить каждое "_" с маленькой буквой на заглавную букву без подчеркивания через сокращенную стрелочную функцию
}

// ПРОВЕРКА
const example7 = 'java_script_like_that';
const result7 = snakeToCamal(example7);
console.log(result7); 

// ЗАДАНИЕ 8
function isSpam(text, keywords) {
    const lowercaseText = text.toLowerCase(); // Преобразуем наш текст к нижнему регистру
    //console.log(lowercaseText); 
    for (let i = 0; i < keywords.length; i++) { // Цикл FOR, перебираем каждое ключевое слово
        const keyword = keywords[i] 
        if (lowercaseText.includes(keyword)) {  // Проверяем, содержит ли наш текст ключевое слово
            return true; // Возвращаем true, если есть ключивевое слово в тексте (спам)
        }
    }
    return false; // Возвращаем false, если нет ключевых слов в тексте (не спам)
}

// ПРОВЕРКА 
const keywords = ['кредит', 'карта', 'одобрен'];
const text1 = "Вам одобрен кредит в нашем замечательном банке";
const text2 = "Это просто лучшая цена!";
console.log(isSpam(text1, keywords)); 
console.log(isSpam(text2, keywords)); 