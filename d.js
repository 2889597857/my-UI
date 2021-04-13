function deepClone (params, _tar) {
    let tar = _tar || {}
    const type = '[object Array]'
    const toString = Object.prototype.toString
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            if (typeof (params[key]) === 'object' && params[key] !== null) {
                const isArr = toString.call(params[key]) === type
                tar[key] = isArr ? [] : {}
                console.log()
                deepClone(params[key], tar[key])
            } else {
                tar[key] = params[key]
            }
        }
    }
    return tar
}


function copy (obj, map = new WeakMap()) {
    if (map.get(obj)) return map.get(obj)
    let res = obj instanceof Array ? [] : {}
    map.set(obj, res)
    for (const [k, v] of Object.entries(obj)) {
        res[k] = typeof v == 'object' ? copy(v, map) : v
    }
    return res
}
let b = { c: 1, d: { a: 2, b: 23 }, e: [1, 4, 5] }
b.p = b
// b.__prop__.prototype.abc = 1
console.log(b)
const c = copy(b)
console.log(c)






function deepClone (source, map = new WeakMap()) { // 传入一个WeakMap对象用于记录拷贝前和拷贝后的映射关系
    if (typeof source !== "object") { // 非对象类型(undefined、boolean、number、string、symbol)，直接返回原值即可
        return source;
    }
    if (source === null) { // 为null类型的时候
        return source;
    }
    if (source instanceof Date) { // Date类型
        return new Date(source);
    }
    if (source instanceof RegExp) { // RegExp正则类型
        return new RegExp(source);
    }
    if (map.get(source)) { // 如果存在相互引用，则从map中取出之前拷贝的结果对象并返回以便形成相互引用关系
        return map.get(source);
    }
    let result;
    if (Array.isArray(source)) { // 数组
        result = [];
        map.set(source, result); // 数组也会存在相互引用
        source.forEach((item) => {
            result.push(deepClone(item, map)); // 必须传入第一次调用deepClone时候创建的map对象
        });
        return result;
    } else { // 为对象的时候
        result = {};
        map.set(source, result); // 保存已拷贝的对象
        const keys = [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)]; // 取出对象的key以及symbol类型的key
        keys.forEach(key => {
            let item = source[key];
            result[key] = deepClone(item, map); // 必须传入第一次调用deepClone时候创建的map对象
        });
        return result;
    }
}