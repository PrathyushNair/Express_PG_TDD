

const db=require('../../../databaseHelpers/connection')
// const personDetailsType=require("../../../Types/personDetailsType")
type personDetailsTypeInRepository={
    name:string,
     gender: string,
     email:string,
     password:string,
     age:number|string 
}
class UserRepository
{
    async getAllPeopleFromDB(limit: number,sort:string)
    {
        return db.select('*').from('people').limit(limit).orderBy('age',sort)
    }
    async getSinglePersonFromDB(personID:number|string)
    {
        return db.select('*').from('people').where({'id':personID}).returning('*')
    }
    
    async createUserInDB(personDetails:personDetailsTypeInRepository)
    {
     return db('people').insert(personDetails).returning('*')
    }

}
 module.exports=new  UserRepository()