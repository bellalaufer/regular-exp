// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.


// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
    const regex = /\d\d\d-\d\d\d-\d\d\d\s\d\d/
    return regex.test(string)

}


// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
    const regex = /\d\d\d-\d\d\d-\d\d\d\s\d\d/
    let arr = string.match(regex)
    return arr[0]
}


// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {
    const regex = /\d\d\d-\d\d\d-\d\d\d\s\d\d/g
    let arr = [...string.matchAll(regex)]
    if (arr == '') {
        return null
    } else {
        return arr.map(el => el[0])
    }


}

//console.log(grabAllSNILS("The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94"))

// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {

}



// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {

}

module.exports = {
    hasSNILS,
    grabSNILS,
    grabAllSNILS,
    hideAllSNILS,
    formatSNILS
};
