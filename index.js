import fetch from "node-fetch";

var username = 'vandat2000';
var key = 'aio_Pjsb548mVRnhFumLzS7rHLrILHZX';

//first way to call post method

fetch(`https://io.adafruit.com/api/v2/vandat2000/feeds/temp/data?X-AIO-Key=${key}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({datum:{value:5,created_at:Date()}})
    }).then(res=>res.json())
    .then(console.log);
 


//second way to call get method
  (async () => {
    const rawResponse = await fetch(`https://io.adafruit.com/api/v2/${username}/feeds/temp/data?X-AIO-Key=${key}`);
    const content = await rawResponse.json();
  
    console.log(content);
  })();

