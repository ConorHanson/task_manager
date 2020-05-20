require('./db/mongoose')
const Task = require('./models/task')

/*Task.findByIdAndDelete('5eb99784530d7e64a88f0bab').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })

}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})


*/

const findAndDelete = async (id) => {
    const finddel = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

findAndDelete('5eb94e92227eae54c08b3a48').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})