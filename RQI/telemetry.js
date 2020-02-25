var settings = {
    "async": true,
    "crossDomain": true,
    "dataType": "jsonp",
    "url": "https://15380212.ngrok.io/userId",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "22d9d156-7f5a-5439-6d38-fce18cd4bcb1"
    }
  }
  var profileId = "test";
  $.ajax(settings).done(function (response) {
    profileId = response.profile_id;
    console.log("the profile_id", profileId)
  });

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

sendTelemetry = (data) => {
    fetch('https://devcon.sunbirded.org/content/data/v1/telemetry', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 'api.sunbird.telemetry',
            ver: '3.0',
            params: {
                msgid: uuidv4()
            },
            ets: (new Date()).getTime(),
            events: [data]
        })
    }).then(res => {
        console.log('Response', res);
        console.log('Data' , res.body)
    }).catch(err => {
        console.log('Error', err);
    });
}
generateVisit = () => {
    var data = {
        "eid": "DC_VISIT",
        "mid": "gsyhbvtfd99a6c2723d67aaa649190ba",
        "ets": (new Date()).getTime(),
        "did": "8ceeb01fd99a6c2723d67aaa649190ba",
        "profileId": "visitor-1",
        "stallId": "GAMES",
        "ideaId": "RQI",
        "edata": {
        }
    }
    sendTelemetry(data);
}
generateAssess = (ts, score, accuracy) => {
    var data = {
        "eid": "DC_ASSESS",
        "mid": uuidv4(),
        "ets": (new Date()).getTime(),
        "did": "8ceeb01fd99a6c2723d67aaa649190ba",
        "profileId": profileId,
        "stallId": "STA3",
        "ideaId": "IDE21",
        "edata": {
            "duration": ts,
            "score": score,
            "accuracy": accuracy
        }
    }
    sendTelemetry(data);
}
generateEarn = (ts, currentScore, badge) => {
    var data = {
        "eid": "DC_EARN",
        "mid": "gsyhbvtfd99a6c2723d67aaa649190ba",
        "ets": (new Date()).getTime(),
        "did": "8ceeb01fd99a6c2723d67aaa649190b1",
        "profileId": profileId,
        "stallId": "STA3",
        "ideaId": "IDE21",
        "edata": {
            "type": "",
            "points": currentScore,
            "badges": [badge]
        }
    }
    sendTelemetry(data);
}