/**
 * ДЗ-03 
 */

/**
 * 0. Исправь ошибки
 */
function initVal(str) {
    let s =String('String');
    let a= 10;
    let b = true;
    const c = 'const';
}

/**
 * 1. Напиши функцию которая принимает на вход строку и преобразует ее в строку
 * @param {string} str 
 * 
 * @returns (number)
 */
function stringToNumber(str) {
    if(str=='')
        return 0;
    else
        return parseInt(str,10);
}

/**
 * 2. Функции возвращают значение val, если оно существует, иначе def
 * @param {*} val
 * @param {*} def
 * 
 * @returns val или def
 */
function checkVal1 (val, def) {
    // 2.1. if ... else
    if (val!==0)
        return val;
    else
        return def;
}

function checkVal2 (val, def) {
    // 2.2. тернарный оператор
    let r;
    val!==0 ? r=val : r=def;
    return r;
}

function checkVal3 (val, def) {
    // 2.3. логическое или
    return val||def;
}

/**
 * 3. Фунция рендера
 * @param {string} title
 * @param {number} width
 * @param {number} height
 * @param {bool} isBox
 * 
 * @returns {string} строка формата 'Товар title, шириной width, высотой height, коробка' или '... не коробка'
 */
function renderItem (title, width, height, isBox) {
    let str=`Товар ${title?title:''}, шириной ${parseInt(width)?parseInt(width):0}, высотой ${parseInt(height)?parseInt(height):0},`;
    isBox ? str=str+' коробка': str=str+' не коробка';
    return str;
}

/**
 * 4. Напиши функцию oddNum с помощью цикла for
 * @param {number} max максимальное число
 * 
 * @returns {string} только не четные 1 3 5 7 9 ...max 
 */
function oddNum (max) {
    let str='';
    for(let i=Number(0); i<=max;i++)
    {
        if(i%2==1)
        {
            if(str!=='')
            str=str+' ';
            str=str+i;
        }
    }
    return str;
}

/**
 * 5. Напиши функцию factorial рекурсивно
 * @param {number} n максимальное число для вычисления
 * 
 * @returns {number} факториал 
 */
function factorial(n) {
    let f=1;
    if(n!==1)
        f=n*factorial(n-1);
    return f;
}

module.exports = {
    initVal,
    stringToNumber,
    renderItem,
    checkVal1,
    checkVal2,
    checkVal3,
    oddNum,
    factorial
};
