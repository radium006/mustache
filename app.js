const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const PORT = 3000

let trips = []

app.use(bodyParser.urlencoded({extended: false}))
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')



app.post("/trip",function(req,res){

    let title = req.body.tripTitle
    let departure = req.body.departureDate
    let returnDay = req.body.returnDate
    trips.push({title : title, departure : departure, return : returnDay })
  
    // redirect will invoke the /trips route
    res.redirect("/trip")
  
  })

  

app.get('/trip', function(req,res){
    console.log(trips)
    res.render('trip', {tripList: trips})
})

app.get("/",function(req,res){
    res.render("index")
  })  

app.listen(PORT, function(){
    console.log("Server is running my guy")
})