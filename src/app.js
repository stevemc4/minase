import {version} from '../package.json'
import express from 'express'
import evue from 'express-vue'
import path from 'path'
import postcss from 'postcss-middleware'
import tailwindcss from 'tailwindcss'
import cssnext from 'postcss-cssnext'

const vue = evue.init({
    rootPath: path.join(process.cwd(), 'views'),
    template: {
        html: {
            start: '<!DOCTYPE html><html>',
            end: '</html>'
        },
        body: {
            start: '<body>',
            end: '</body>'
        }
    },
    head: {
        styles: [
            {style:'/static/css/main.css'}
        ]
    }
})
const app = express()
app.use(vue)
app.use('/static/css/main.css', postcss({
    plugins: [
        tailwindcss(path.resolve(process.cwd(), 'tailwind/tailwind.js')),
        cssnext()
    ],
    src: function (req) {
        return path.resolve(process.cwd() , 'tailwind/tailwind.css')
    }
})
)

app.get('/', (req, res) =>{
    res.renderVue('index.vue')
})
app.get('/info', (req, res) => {
    res.renderVue('info.vue')
})

app.listen('4200', (e) => {
    console.log(`minase version ${version}`)
    console.log('Server started on port 4200')
})