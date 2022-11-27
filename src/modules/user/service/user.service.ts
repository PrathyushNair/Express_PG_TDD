const UserRepositoryInService = require('../repository/user.repository')
const bcrypt = require('bcrypt')
// const personDetailsType=require("../../../Types/personDetailsType")
interface personDetailsTypeInService {
  name: string
  gender: string
  email: string
  password: string
  age: number | string
}
class UserService {
  async getUserWithService (limit: number | string, sort: string) {
    return UserRepositoryInService.getAllPeopleFromDB(limit, sort)
  }

  async getSingleUserWithService (personID: number | string) {
    return UserRepositoryInService.getSinglePersonFromDB(personID)
  }

  async createFromUserService (personDetails: personDetailsTypeInService) {
    const pass = await bcrypt.hash(personDetails.password, 10)
    const personDetailsUpdated = {
      name: personDetails.name,
      gender: personDetails.gender,

      email: personDetails.email.toLowerCase(),
      password: pass,
      age: personDetails.age
    }

    // if(false)
    // {
    //     return await UserRepositoryInService.createUserInDB(personDetails)
    // }
    return await UserRepositoryInService.createUserInDB(personDetailsUpdated)
  // return []
  }
}

module.exports = new UserService()
