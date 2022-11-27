const UserServicee = require('../service/user.service')

class UserController {
  // GET all users
  async getUserWithUserController (
    req: any,
    res: {
      status: (arg0: number) => {
        (): any
        new (): any
        send: { (arg0: { message: string, data?: any }): void, new (): any }
      }
    }
  ) {
    const data = await UserServicee.getUserWithService(
      req.query.limit,
      req.query.sort
    )
    try {
      res.status(200).send({ message: 'successful', data })
    } catch {
      res.status(500).send({
        message: 'internal server error'
      })
    }
  }
  // GET single user from DB

  async getSingleUserWithUserController (req: { params: { id: number | string } }, res: { status: (arg0: number) => { (): any, new(): any, send: { (arg0: { message: string, data?: any }): void, new(): any } } }) {
    const data = await UserServicee.getSingleUserWithService(req.params.id)
    try {
      res.status(200).send({ message: 'successful', data })
    } catch {
      res.status(500).send({ message: 'some error occured' })
    }
  }

  // POST a user into DB
  async createUserFromUserController (
    req: { body: any },
    res: {
      status: (arg0: number) => {
        (): any
        new (): any
        send: { (arg0: { message: string, data?: any }): void, new (): any }
      }
    }
  ): Promise<void> {
    const data = await UserServicee.createFromUserService(req.body)
    console.log(data)
    try {
      if (data) {
        res.status(200).send({ message: 'successful posting', data })
      } else {
        res.status(500).send({ message: 'unsuccessful posting' })
      }
    } catch {
      res.status(500).send({
        message: 'internal server error'
      })
    }
  }
}
module.exports = new UserController()
