# Arcada DevOps 2020 Project
*With Kristoffer, Fredrik and Johan*
Yeet 🦆 

asddsaadsadsadsqwelkjdsa
please for the love of god.
qweqweqweqweqwe

//Efter lärarens exemple
const https = require('https');

exports.handler = (event, context, callback) => {
  
  const postData = {
    username: "AWS-MAN",
    content: event.Records[0].Sns.Message
  };
  const options = {
    method: 'POST',
    hostname:'discordapp.com',
    path:'/api/webhooks/765117967959719948/y_yt73Em4JKDXC1mOnM5pcOEgkJ3Nd4FL9mqkQ57HVS6eE5HgUBdf-fEcVZTCSKKnvrZ',
    headers: {
      'Content-Type':'application/json'
    }
  };
  
  const req = https.request(options, (res) => {
    let body = "";
    console.log("Status", res.statusCode);
    console.log("Headers:",JSON.stringify(res.headers));
    
    res.setEncoding('utf8');
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      console.log('Successfully processed HTTPS respone');
      // If we know it's JSON parse it
      if (res.headers['content-type'] == 'application/json'){
        body = JSON.parse(body);
      }
      callback(null, body);
    });
  });
  req.on("error", callback);
  req.write(JSON.stringify(postData));
  req.end();
};