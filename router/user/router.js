const { Router } = require('express')
const ConstructorOfRouters = require('../../utils/constructor.js')
const CONFIGS = require('./utils.js')

const router = Router()


let routes = ConstructorOfRouters(router, CONFIGS)

module.exports = routes