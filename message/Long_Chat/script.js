
let conversations = [];
let sender = [];
let text =[];
let username = [];
let uniqUser;

async function parseData(){
fetch('./messages.json').then(function(rec){
    return rec.json();
}).then(function(data){
    // console.log(data);
    for(let j = 0; j< data.length ; j++){
        conversations.push(data[j].conversation);
    for(let i = 0; i < conversations.length ; i++){
        sender.push(data[j].conversation[i]);
    }
    }
    // console.log(sender);
    let filtered = sender.filter(function(el){
        return el != undefined;
    })
    for( let user of filtered){
        text.push(user.text);
        username.push(user.sender);
        uniqUser = [ ...new Set(username) ];
    }
    // console.log(filtered);
    console.log(uniqUser);

    for( let i =0; i< text.length ; i++){
        const messageTag = document.createElement('div');
        const content = document.createTextNode(text[i]);
        messageTag.appendChild(content);    
        document.body.appendChild(messageTag);
    }












}).catch(console.error());
}
parseData();




// console.log(messageTag);
