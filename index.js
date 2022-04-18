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
    const { min = 0, max = Number.MAX_VALUE } = req.query

    const filteredGoods = goods.filter(good => {
        if (+good.price >= +min && +good.price <= +max) {
            return true;
        } else {
            return false;
        }
    })

    const jsonGoods = JSON.stringify(filteredGoods)
    return res.send(jsonGoods);
})



app.listen(8080)