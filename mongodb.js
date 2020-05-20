const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = process.env.SENDGRID_API_KEY
const dbName = 'taskapp'

MongoClient.connect(connectionURL,
    { useUnifiedTopology: true },
    { useNewUrlParser: true }
  
   

})
