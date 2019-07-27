var tools = require('./tools');

tools.foo();
tools.doo();
tools.boo();

const fs = require('fs');
let botData = [];

  fs.readFile('./botData.json', function read(err, data) {
    var text = JSON.parse(data);
    console.log(text);


    if (text.length < 3) {
      botData.push({
      //serverID: guild.id,
      staffRole: null,
      triggerThreshold: 1,
      muteIncrease: "1m",
      mutes: [],
      muteRole: null,
      warnings: [],
      warningTime: "24h",
      globalBan: null
  
      });
    }
    if (err) {
      botData.push({
      //serverID: guild.id,
      staffRole: null,
      triggerThreshold: 1,
      muteIncrease: "1m",
      mutes: [],
      muteRole: null,
      warnings: [],
      warningTime: "24h", 
      globalBan: null
      });

  
      botData = JSON.parse(data);
   
      console.log("Loaded API data");
};

//  setTimeout(saveBotData, 300000);
setTimeout(saveBotData, 1000);

});


function saveBotData() {
  var data = JSON.stringify(botData);
  fs.writeFile('./botData.json', data, function (err) {
    if (err) {
      console.log('There has been an error saving the server settings.');
      console.log(err.message);
      return;
    }
    console.log('Server settings saved successfully.')

  });
}



