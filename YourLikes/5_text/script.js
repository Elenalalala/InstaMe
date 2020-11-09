let timeStamp = [];
// const messages = document.createElement('div');
// messages.classList ='word';

async function parseData(){
fetch('./likes.json').then(function(rec){
    return rec.json();
}).then(function(data){
    console.log(data);
    for(let i =0;i<data.media_likes.length;i++){
        timeStamp.push(data.media_likes[i][0]);
        const timeblock = document.createElement('div');
        timeblock.textContent = timeStamp[i];
        // messages.textContent = 'No Matter What People Say, You are Loved, Unique & Valuable';
        const section = document.querySelector('section');
        section.appendChild(timeblock);
        // section.appendChild(messages);
    }
    console.log(timeStamp);
    const blocks = document.querySelectorAll('div');
    blocks.forEach(el => el.addEventListener('mouseover', () =>{
        setInterval(() => {
        el.style.color ="black";
        // el.style.display ='none';
    }, 0);
}
    ));
    










}).catch(console.error());
}
parseData();


