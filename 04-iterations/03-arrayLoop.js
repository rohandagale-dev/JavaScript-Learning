const arr = [1, 2, 3, 4, 5]

for (const iterator of arr) {
    console.log(iterator)
}

const map = new Map()

map.set(1, 'india')
map.set(2, 'USA')
map.set(3, 'Japan')

for (const [key, value] of map) {
    console.log(key, ':-', value)
}

//objects are not iterable
const myObj = {
    js: 'javascript',
    cpp: 'cpp',
    rb: 'ruby',
    swift: 'swift by apple',
}

for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`)
}
