const express = require("express"); 
const bodyParser = require("body-parser") 
  
// New app using express module 
const app = express(); 
app.use(bodyParser.urlencoded({ 
    extended:true
})); 
  
app.get("/", function(req, res) { 
  res.sendFile(__dirname + "/index.html"); 
});

const pushEndpoint = '/v2/vehicle';
const successObj = {        
  message:'success',
  code: 0
};
  
app.post(`${pushEndpoint}/alert`, function(req, res) { 
  console.log(req.body);
  res.send(successObj);
});

app.post(`${pushEndpoint}/fault`, function(req, res) { 
  console.log(req.body);
  res.send(successObj);
});

app.post(`${pushEndpoint}/location`, function(req, res) { 
  console.log(req.body);
  res.send(successObj);
});

app.post(`${pushEndpoint}/status`, function(req, res) { 
  console.log(req.body);
  res.send(successObj);
});
  
app.listen(3000, function(){ 
  console.log("server is running on port 3000"); 
}) 