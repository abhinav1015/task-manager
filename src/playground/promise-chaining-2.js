require('../db/mongoose')
const Task = require('../models/task')

// Task.findByIdAndDelete('6364b48c648f358681797e5a').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false})
// }).then((count) => {
//     console.log(count);
// }).catch((error) => {
//     console.log(error);
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('6364b40ee64d5255c9f48a6c').then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(error);
})