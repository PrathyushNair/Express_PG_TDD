const myApplication = require('./app')
// const database=require("./modules/user/queries/userqueries")
// const server=myApplication(database)
const server = myApplication()
server.listen(8000, () => {
  console.log('server started at port 8000')
})
