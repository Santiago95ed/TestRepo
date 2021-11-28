const express = require('express')
const path = require('path')
const hbs = require('hbs')




const port = process.env.PORT  || 3000

const app = express()
app.set('view engine', 'hbs')
const publicDirectoryPath = path.join(__dirname, '../')

app.use(express.static(publicDirectoryPath))
 

// app.get('', (req, res) => {
//     res.send('Hello express!')
//     })


app.get('', (req, res) => {
    res.render('index', {
    title: 'My title',
    name: 'Andrew Mead'
    })
    })




    console.log(publicDirectoryPath)

    app.listen(port, () => {
        console.log('Server is up on port ' + port)
        })

