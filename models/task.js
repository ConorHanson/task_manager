const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
timestamps : true
})


const Task = mongoose.model('Task', taskSchema)

module.exports = Task







































/*db.collection('users').insertOne({
        name: 'Conor',
        age: 21
    }, (error, result) => {
            if (error) {
                return console.log('Unable to insert user')
            }
            console.log(result.ops)
        })*/

/*db.collection('users').insertMany([
    {
        name: 'Conor',
        age: 21

    },

    {
        name: 'Anne',
        age: 22

    }],*/
/* (error, result) => {
     if (error) {
         return console.log('Unable to insert documents.')
     }

     console.log(result.ops)

 })*//*


const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const dbName = 'taskapp'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Cannot connect to database')

    }
    const db = client.db(dbName)
    db.collection('users').findOne({ _id: new ObjectID("5eb859e52a47ad5e5ced077f") }, (error, user) => {

        if (error) {
            return console.log('Unable to Fetch')
        }

        console.log(user)

    })

    db.collection('users').find({ age: 21 }).count((error, count) => {
        console.log(count)
    })

    db.collection('users').find({ age: 21 }).count((error, count) => {
        console.log(count)
    })

})
*/


