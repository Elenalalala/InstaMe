let timeStamp = [];


async function parseData(){
fetch('./likes.json').then(function(rec){
    return rec.json();
}).then(function(data){
    console.log(data);
    for(let i =0;i<data.media_likes.length;i++){
        timeStamp.push(data.media_likes[i][0]);
        const timeblock = document.createElement('div');
        timeblock.textContent = timeStamp[i];
        const section = document.querySelector('section');
        section.appendChild(timeblock);
    }
    console.log(timeStamp);











}).catch(console.error());
}
parseData();


