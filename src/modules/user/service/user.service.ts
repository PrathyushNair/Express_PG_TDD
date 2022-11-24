const UserRepositoryInService=require("../repository/user.repository")
// const personDetailsType=require("../../../Types/personDetailsType")
type personDetailsTypeInService={
    name:string,
     gender: string,
     email:string,
     password:string,
     age:number|string 
}
class UserService
{   async getUserWithService(limit:number|string,sort:string)
    {
        return UserRepositoryInService.getAllPeopleFromDB(limit,sort)
    }

    async getSingleUserWithService(personID:number|string)
    {
        return UserRepositoryInService.getSinglePersonFromDB(personID)
    }

    async createFromUserService(personDetails:personDetailsTypeInService)
    {
        return await UserRepositoryInService.createUserInDB(personDetails)
    }
}

module.exports=new UserService()