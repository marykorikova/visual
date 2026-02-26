function createUser(id, name, email) {
    return {
        id: id,
        name: name,
        email: email,
        isActive: true
    };
}
function createBook(book) {
    return book;
}
var book1 = createBook({
    title: "книга1",
    author: "Автор",
    year: 2003,
    genre: "fiction"
});
var book2 = createBook({
    title: "книга1",
    author: "Автор",
    genre: "fiction"
});
function calculateArea(shape, dimensions) {
    if (shape === 'circle') {
        return Math.PI * Math.pow(dimensions.radius, 2);
    }
    return Math.pow(dimensions.side, 2);
}
console.log(calculateArea('circle', { radius: 5 }));
console.log(calculateArea('square', { side: 4 }));
function getStatusColor(status) {
    if (status === "active")
        return "green";
    else if (status === "new")
        return "yellow";
    else
        return "red";
}
console.log("active", getStatusColor("active"));
console.log("inactive", getStatusColor("inactive"));
console.log("new", getStatusColor("new"));
var UpperFirst = function (str, uppercase) {
    if (uppercase === void 0) { uppercase = false; }
    if (str.length == 0)
        return str;
    var result = str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
    return uppercase ? result.toUpperCase() : result;
};
var TrimStr = function (str, uppercase) {
    if (uppercase === void 0) { uppercase = false; }
    if (str.length == 0)
        return str;
    var trimmed = str.trim();
    return uppercase ? trimmed.toUpperCase() : trimmed;
};
console.log(UpperFirst("gsdgdsgd"));
console.log(TrimStr("    gggg    "), true);
function getFirstElement(arr) {
    if (arr.length == 0)
        return undefined;
    return arr[0];
}
var numbers = [10, 20, 30];
var strings = ['a', 'b', 'c'];
var emptyArray = [];
console.log('Первый элемент чисел:', getFirstElement(numbers));
console.log('Первый элемент строк:', getFirstElement(strings));
console.log('Пустой массив:', getFirstElement(emptyArray));
var users = [
    { id: 1, name: 'Снежанна', email: 'sneg@mail.com' },
    { id: 2, name: 'Мария', email: 'mary@mail.com' },
    { id: 3, name: 'Вика' }
];
function findById(items, id) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            return items[i];
        }
    }
    return undefined;
}
console.log('Поиск id=2:', findById(users, 1));
console.log('Поиск id=99:', findById(users, 99));
