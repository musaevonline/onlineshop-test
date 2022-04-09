const express = require('express')
const app = express()

const goods = [
    {
        title: 'Hasbik1',
        description: 'Dagestanec1',
        price: '500',
        img: 'hasbik.jpg'
    },
    {
        title: 'Hasbik2',
        description: 'Dagestanec2',
        price: '200',
        img: 'hasbik.jpg'
    },
    {
        title: 'Hasbik3',
        description: 'Dagestanec3',
        price: '900',
        img: 'hasbik.jpg'
    },
    {
        title: 'Hasbik4',
        description: 'Dagestanec3',
        price: '900',
        img: 'hasbik.jpg'
    },
    {
        title: 'Hasbik2412412341234',
        description: 'Dagestanec3',
        price: '900',
        img: 'hasbik.jpg'
    },
]

app.use('/', express.static('.'));
app.get('/goods', (req, res) => {
    const jsonGoods = JSON.stringify(goods)
    return res.send(jsonGoods);
})



app.listen(8080)