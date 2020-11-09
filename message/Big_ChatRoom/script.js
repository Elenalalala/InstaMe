
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
        
        const button = document.getElementById('chat');
        button.addEventListener('click',()=>{
            const textMessage = document.createElement('div');
            const sourceUser = document.createElement('span');
            let randomUser = Math.floor(Math.random()* uniqUser.length);
            console.log(randomUser);
            let randomText = Math.floor(Math.random()* text.length);
            let content = document.createTextNode(text[randomText]);
            let senderName = document.createTextNode(`@${uniqUser[randomUser]}`);
            textMessage.appendChild(content);
            sourceUser.appendChild(senderName);
            document.body.appendChild(textMessage);
            document.body.appendChild(sourceUser);
            console.log(textMessage);
        });












}).catch(console.error());
}
parseData();




// console.log(messageTag);
