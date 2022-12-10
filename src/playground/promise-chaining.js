require('../db/mongoose')
const User = require('../models/user')

// 63595486896926a1b16a145a

// User.findByIdAndUpdate('635e90817ed40d7a6c467a22', { age: 1}).then((user) => {
//     console.log(user);
//     return User.countDocuments( {age: 1} )
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })


const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('635e90a2b853366c958c7725', 50).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})