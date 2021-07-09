fetch("http://www.json-generator.com/api/json/get/cqSSliLizS").then(reponse => {
    return reponse.json();
}).then(question => {
    console.log(question);
});