// import * as AWS from 'aws-sdk';

// AWS.config.update({
//   region: "us-west-2",
//   //where all functions live
//   endpoint: "https://kiec5newt9.execute-api.us-west-2.amazonaws.com/test/",
//   accessKeyId: "AKIAIT6JBN5MSBWSDHXA",
//   secretAccessKey: "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"
// });

const endpoint = "https://kiec5newt9.execute-api.us-west-2.amazonaws.com/test/"; 
const getCampaignEndpoint = "callcampaign/"
async function getAllCampaigns(number, metric){
  //ENDPOINT
  const fetchURL = new URL(endpoint+getCampaignEndpoint);
  fetchURL.searchParams.append("metric", metric);
  fetchURL.searchParams.append("numberOfCampaigns", number);
  console.log(fetchURL.href);
  //GETTING DATA
  let promise = new Promise((resolve, reject) => {
    const response = fetch(fetchURL).then((response, reject) => {
      var output = response.json();
      console.log(output);
      resolve(output);
    });
  });
  return promise.then(
    result => { return (result) }, // shows "done!" after 1 second
    error => { return (error) } // doesn't run
  );
}
  /* const response = await fetch(fetchURL).then((response, reject) => {
    var output = response.json();
    console.log(output);
    return output;
  });  */



export { getAllCampaigns };

/*
async function getCampaignData(hashs) {
  var promises = []
  for(var i = 0; i < hashs.length; i++){
    promises.push(new Promise((resolve, reject) => {
      var params = {
        TableName: "Campaigns", // give it your table name 
        id: hashs[i],
        Select: "ALL_ATTRIBUTES"
      };
      docClient.scan(params, function (err, data) {
        if (err) {
          console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
          reject(err);
        } else {
          console.log("GetItem succeeded:", JSON.stringify(data['Items'], null, 2));
          resolve(data['Items'][0]);
        }
      })
    }));
  }

  return Promise.all(promises).then(
    result => { return (result) }, // shows "done!" after 1 second
    error => { return (error) } // doesn't run
  );
}


async function getAllCampaigns(number) {
  var params = {
    TableName: "mainMarket", // give it your table name 
    name: "Top",
    Select: "ALL_ATTRIBUTES"
  };
  let promise = new Promise((resolve, reject) => {
    docClient.scan(params, function (err, data) {
      if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        reject(err);
      } else {
        console.log("GetItem succeeded:", JSON.stringify(data['Items'], null, 2));
        number = Math.min([data['Items'].length, number])
        /*
          [
            {'KEY_NAME':  'KEY_VALUE_1'}},
            {'KEY_NAME': 'KEY_VALUE_2'}},
            {'KEY_NAME':  'KEY_VALUE_3'}}
            ],
          
        //Todo: add slice
        var hashes = data['Items'][0]['campaigns']
        var hashList = []

        for (var hash in hashes) {
          hashList.push({ 'id': hashes[hash] });
        }
        console.log(hashList)
        getCampaignData(hashList).then((x) => resolve(x));
      }
    })
  });
  return promise.then(
    result => { return (result) }, // shows "done!" after 1 second
    error => { return (error) } // doesn't run
  );
};


function getAllCampaignsss(number) {
  fetch('/getCampaigns')
    .then(res => {
      console.log(res);
      return res.json()
    })
    .then(users => {
      console.log(users);
      this.setState({ users })
    });
}


function getAllCampaignsssss(number) {
  var params = {
    TableName: "Campaigns", // give it your table name 
    Select: "ALL_ATTRIBUTES"
  };
  fetch('/api/getList')
  var x = docClient.scan(params);

  return x.response;

  /*let items =  await docClient.scan(params).promise();
  console.log("in get all campaigns")
  console.log(items.Items)
  return items.Items;*/


  /*let promise = new Promise((resolve, reject) => {
    docClient.scan(params, function (err, data) {
      if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        reject(err);
      } else {
        console.log("GetItem succeeded:", JSON.stringify(data['Items'], null, 2));
        resolve(data);
      }
    })
  });
  promise.then(
    result => {return (result)}, // shows "done!" after 1 second
    error => {return (error)} // doesn't run
  ); 
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
//ARJUN
async function getAllCampaignss(number) {
  var response = await fetchCampaigns(number);
  console.log(response);
  return response;
}

function fetchCampaigns(number) {
  var params = {
    TableName: "Campaigns", // give it your table name 
    Select: "ALL_ATTRIBUTES"
  };
  return new Promise((resolve, reject) => {
    docClient.scan(params, function (err, data) {
      if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        reject(err);
      } else {
        console.log("GetItem succeeded:", JSON.stringify(data['Items'], null, 2));
        resolve(data);
      }
    })
  });
}
//Mine


function getTopCampaigns(category) {
  return 0
}

export { getAllCampaigns, getTopCampaigns };
*/