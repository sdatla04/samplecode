// EXAMPLE 1 - Array
var jsonData = {
    "companies": [
    {
        "id": 1,
        "Years": [1, 2, 3, 4],
        "Company Name": "CompanyA",
        "Year Founded": 2001,
        "industry": "Tech",
        "address":{
            "country" : "USA",
            "zip": 27519,
            "street" : {
                "a" : 1,
                "b" : null,
                "c" : false,
                "d" : 34.9087
            }
        },
        "contacts": [
            {
                "first_name": "Adam",
                "last_name": "Smith",
                "position": "CEO"
            },
            {
                "first_name": "Ashley",
                "last_name": "Johnson",
                "position": "CTO"
            }

        ]
    },
     {
        "id": 2,
        "Years": [1, 2, 3, 4],
        "Company Name": "CompanyB",
        "Year Founded": 2008,
        "industry": "Tech",
        "address":{
            "country" : "USA",
            "zip": 27510
        },
        "contacts": [
            {
                "first_name": "Adam1",
                "last_name": "Jones",
                "position": "CEO"
            }
        ]
    }],
    "total" : {
        "hits" : 10,
        "metrics":{
            "pages": 1,
            "offset":"10"
        }
    }};

// EXAMPLE 2 - Key/Value https://www.capterra.com/spotlight/rest/reviews?apiVersion=2&productId=154024&from=25&size=25
jsonData = {
    "hits": [
    {
        "globalReviewId": "Capterra___1474410",
        "slug": "Databox",
        "vendorId": 2108264,
        "language": "en",
        "suggestedLocalProductId": [],
        "overallRating": 5,
        "chosenReasonsCharCount": 0,
        "vendorResponse":
        {
            "name": "Databox",
            "date": null,
            "text": null
        },
        "title": "Beautiful and handy tool",
        "completenessScore": 0.49000000953674316,
        "customerSupportRating": null,
        "valueForMoneyRating": null,
        "incentivized": "NominalGift",
        "anonymityOn": true,
        "@version": "1",
        "alternativeProducts": [],
        "chosenReasons": null,
        "productId": 154024,
        "adviceToOthers": "",
        "generalComments": "",
        "consText": "So far I'm happy with the tool, no things I don't like.",
        "isPublished": true,
        "switchingReasons": null,
        "prosText": "Easy to setup. They have a great iPhone app so can review all data on my phone. Every morning I receive an email on our business performance which is really helpful. ",
        "translation":
        {
            "title": null,
            "switchingReasons": null,
            "chosenReasons": null,
            "prosText": null,
            "adviceToOthers": null,
            "generalComments": null,
            "consText": null
        },
        "reviewId": "1474410",
        "@timestamp": "2022-04-04T19:10:25.981Z",
        "writtenOn": "2019-04-12 17:24:23 -0400",
        "statusName": "Published",
        "switchedProducts": [],
        "functionalityRating": 5,
        "reviewer":
        {
            "fullName": "Verified Reviewer",
            "jobTitle": null,
            "timeUsedProduct": "1-2 years",
            "industry": "Internet",
            "role": ["1", "2", "4", "8"],
            "emailAddress": null,
            "companySize": "1-10 employees",
            "profilePicUrl": null,
            "verifiedLinkedIn": true,
            "frequencyUsedProduct": "Daily",
            "companyName": null
        },
        "recommendationRating": 9,
        "productName": "Databox",
        "sourceSite": "Capterra",
        "easeOfUseRating": 5
    },
    {
        "globalReviewId": "Capterra___136744",
        "slug": "Databox",
        "vendorId": 2108264,
        "language": "en",
        "suggestedLocalProductId": [],
        "overallRating": 5,
        "chosenReasonsCharCount": 0,
        "vendorResponse":
        {
            "name": "Databox",
            "date": "2016-08-18T06:16:01.000Z",
            "text": "Thank you for your feedback."
        },
        "title": "Business analytics made beautiful. A really nice app.",
        "completenessScore": 0.49000000953674316,
        "customerSupportRating": 4,
        "valueForMoneyRating": 5,
        "incentivized": null,
        "anonymityOn": false,
        "@version": "1",
        "alternativeProducts": [],
        "chosenReasons": null,
        "productId": 154024,
        "adviceToOthers": "I recommend it, and they offer a free trial.",
        "generalComments": "Found this searching for a way to convert my Spreadsheet data to charts. Worked great and it has beautiful charts. But then I found out it does much more. Now I have my Spreadsheet, Google Analytics and Mixpanel data all connected in one app. Makes it much easier to stay on top of the numbers.  And I have a couple of datawalls set up, so I can show the numbers to my customers if needed by just turning on the tv.  Works great.",
        "consText": "Needed a Zapier account to connect to Spreadsheets, but on the other hand Zapier allows me to add many other sources.",
        "isPublished": true,
        "switchingReasons": null,
        "prosText": "Simple to connect different data sources and have all the data in one place. Web site allows for advanced setups, but maybe not so simple to use. Beautiful mobile visualizations. Datawalls are really useful. Good value for money.",
        "translation":
        {
            "title": null,
            "switchingReasons": null,
            "chosenReasons": null,
            "prosText": null,
            "adviceToOthers": null,
            "generalComments": null,
            "consText": null
        },
        "reviewId": "136744",
        "@timestamp": "2022-04-04T18:41:43.005Z",
        "writtenOn": "2016-08-17 13:33:29 -0400",
        "statusName": "Published",
        "switchedProducts": [],
        "functionalityRating": 4,
        "reviewer":
        {
            "fullName": "Mike W.",
            "jobTitle": "Owner",
            "timeUsedProduct": "Less than 6 months",
            "industry": "Information Technology and Services",
            "role": "0",
            "emailAddress": "mike.weber969@gmail.com",
            "companySize": "1-10 employees",
            "profilePicUrl": null,
            "verifiedLinkedIn": false,
            "frequencyUsedProduct": "Daily",
            "companyName": "MW Websites"
        },
        "recommendationRating": 9,
        "productName": "Databox",
        "sourceSite": "Capterra",
        "easeOfUseRating": 4
    }],
    "totalHits":
    {
        "value": 161,
        "relation": "eq"
    }};

var depth = 0;
let node = createElementWithId("div", "data");
document.body.appendChild(node);

let table = createElementWithId("table", `t_${depth}`);
parseData([jsonData],depth,table);
node.appendChild(table);


// PARSE JSON to HTML
function parseData(data,depth,table) {
    let row = 1;
    data.forEach((item) => {
        //Create Row , columns as td
        var tr = table.insertRow(-1); 
        let columns = getColumns(item);
        if (columns.length > 0) {
            columns.forEach((column) => {
                var td = tr.insertCell(-1); 
                td.setAttribute('id',column.toLowerCase()); 
                
                let typeOfObj = (item[column] != null) ? item[column].constructor.name : "";
                //console.log(`typeOfObj: ${typeOfObj}`);
                //console.log(item[column]);
                switch (typeOfObj) {
                    case "Object":
                        depth+=1;
                        createTableFromObj(td,depth,[item[column]]);
                        depth-=1; 
                        break;

                     case "Array":
                        depth+=1;
                        createTableFromObj(td,depth,item[column])
                        depth-=1; 
                        break;
                                 
                    default:
                        td.textContent = (item[column]!= null) ? item[column].toString() : "";  
                        //console.log(`position: D${depth}: ${column} = ${item[column]}`);
                }
                
            });
        } 
        else {
            //Create td , to handle array [1,2,3]
            var td = tr.insertCell(-1);  
            //td.setAttribute('id',''); 
            td.textContent = (item != null) ? item.toString() : ""; 
            //console.log(`position: D${depth}: array.item ${item}`);
        }
        row += 1;
    });
}


// UTILITY FUNCTIONS
function getColumns(obj) {
    var columns = Object.keys(obj);
    //console.log(`Columns: ${columns.join('|')}`)
    return columns;
}

function createElementWithId(tag, id) {
    const element = document.createElement(tag);
    element.setAttribute('id', id);
    return element;
}

function createTableFromObj(element,depth,data){
    let table = document.createElement("table");
    table.setAttribute('id',`t_${depth}`); 
    parseData(data, depth,table);
    element.appendChild(table);
}

