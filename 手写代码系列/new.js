function create() {
    // 创建一个空的对象
    let obj = new Object()
        // 获得构造函数
    console.log(arguments);
    let Con = [].shift.call(arguments)
    console.log(Con);
    // 链接到原型
    obj.__proto__ = Con.prototype
        // 绑定 this，执行构造函数
    console.log(arguments);

    let result = Con.apply(obj, arguments)
        // 确保 new 出来的是个对象
    return typeof result === 'object' ? result : obj
}

function Car(color) {
    this.color = color;
}
Car.prototype.start = function() {
    console.log(this.color + " car start");
}

var car = _new(Car, "black");
console.log(car.color);
console.log(car.start())

// black

// car.start();· 
// black car startcs
function create() {
    let obj = new Object()
    let Con = [].shift.call(arguments)
    obj.__proto__ = Con.prototype
    let result = Con.apply(obj, arguments);
    return typeof result === 'object' ? result : obj
}
// 注意调用方法是这样的 
function Car(color, name) {
    this.color = color;
}

var car = create(Car, "black");