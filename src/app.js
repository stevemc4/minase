import {version} from '../package.json'
import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello World'))

app.listen('4200', (e) => {
    console.log(`minase version ${version}`)
    console.log('Server started on port 4200')
})