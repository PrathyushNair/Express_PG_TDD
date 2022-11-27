import knex from 'knex'
import { nextTick } from 'process'
const db = require('../databaseHelpers/connection')
const { Response, Request } = require('express')
const { Router } = require('express')
const jwt = require('jsonwebtoken')
const UserControllerInApp = require('../modules/user/controller/userOperations.controller')
const router = Router()

async function schemaValidator (
  req: { body: { name: any, email: any, gender: any, password: any } },
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      json: { (arg0: { message: string }): any, new (): any }
    }
  },
  next: () => void
) {
  if (
    typeof req.body.name === 'string' &&
    typeof req.body.email === 'string' &&
    typeof req.body.gender === 'string' &&
    typeof req.body.password === 'string'
  ) {
    next()
  } else {
    return res.status(500).json({ message: 'unsuccessful posting' })
  }
}

router.get('/', UserControllerInApp.getUserWithUserController)

router.get('/:id', UserControllerInApp.getSingleUserWithUserController)

router.post(
  '/postpersoninfo',
  //   schemaValidator,
  UserControllerInApp.createUserFromUserController
)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!(email && password)) {
      res.status(400).send({ message: 'Enter all fields' })
    }
    const user = await db('people').select('*').where({ email })
    console.log(user)
    const token = jwt.sign({ user_id: user.id, email }, 'gbewegfxb', { expiresIn: '180s' })
  } catch {

  }
})
module.exports = router
