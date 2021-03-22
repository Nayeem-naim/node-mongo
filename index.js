const  express = require('express')

const app = express();


app.get('/',(req,res) => {
    res.send('I Know how to open Node yay ')
})
app.listen(3000, () => console.log('click'))