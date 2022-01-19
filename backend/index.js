const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

app.get('/getuser', (req, res) => {
  res.send( {"employee": [
    {
      "id": "1",
      "firstName": "heera",
      "lastName": "kumar",
      "company":"TCS"
    },
    {
      "id": "2",
      "firstName": "aman",
      "lastName": "mehara",
      "company":"amazone"
    },
    {
      "id": "3",
      "firstName": "alok",
      "lastName": "bhatai",
      "company":"apple"
    },
    {
        "id": "4",
        "firstName": "harish",
        "lastName": "mehta",
        "company":"tesla"
      },{
        "id": "4",
        "firstName": "mona",
        "lastName": "biswas",
        "company":"flipkat"
      },{
        "id": "5",
        "firstName": "adkashy",
        "lastName": "dixit",
        "company":"infosys"
      },{
        "id": "6",
        "firstName": "mehar",
        "lastName": "khan",
        "company":"1MG"
      },{
        "id": "7",
        "firstName": "alok",
        "lastName": "mishra",
        "company":"Hetachi"
      },{
        "id": "8",
        "firstName": "mayank",
        "lastName": "aroda",
        "company":"samsung"
      }
  ]})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})