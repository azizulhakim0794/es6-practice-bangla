const student = [
    {id:23, name:'manna'},
    {id:13, name:'ganja'},
    {id:53, name:'hunda'},
    {id:43, name:'panda'}
]
const names =student.map(s => s.name)
const ids =student.map(s => s.id)
const bigger = student.filter(s => s.id > 40)
console.log(names,ids,bigger);