let questions1=['what s 10+4 ','what s 569*99','what s 97/0.005','what s 9+6 ','what s 85+9',
'what s 669+99','what s 8*2 ','what s 10-9'];

let answers1=['14','56331','19400','15','94','798','16','0.003125','1'];



let  questions2=['independence date of tunisia','when did WW2 end ','when did WW2 start'];
let answers2=['1956-03-20','1945-09-01','1935-09-01'];
let i=Math.floor(Math.random()*2);

let i1=Math.floor(Math.random()*4);
let i2=Math.floor(Math.random()*4)+3;
let i3=Math.floor(Math.random()*8);
btt2.addEventListener('click', function()
{

    qst1.innerHTML=questions1[i1];
    qst2.innerHTML=questions1[i2];
    qst3.innerHTML=questions1[i3];
    qst4.innerHTML=questions2[i];

});

btt3.addEventListener('click', function()
{
   
if ((isNaN(document.getElementById('anw1').value)==true))

{
    alert('answer 1 is not a number');
}
if ((isNaN(document.getElementById('anw2').value)==true))

{
    alert('answer 2 is not a number');
}
if  ((isNaN(anw3.value)==true))
{
    alert('answer 3 is not a number');
}

   
});
btt1.addEventListener('click', function()
{
    var nb=0;
    if ( anw1.value==answers1[i1] ) 
{
    output1.innerHTML="your answer is rigth";
    nb++;
}
else
{
    output1.innerHTML="your answer is wrong";

}

if ( anw2.value==answers1[i2] ) 
{
    output2.innerHTML="your answer is rigth";
    nb++;
}
else
{
    output2.innerHTML="your answer is wrong";

}
if ( anw3.value==answers1[i3] ) 
{
    output3.innerHTML="your answer is rigth";
    nb++;
}
else
{
    output3.innerHTML="your answer is wrong";

}
var d1 = document.getElementById("anw4").value;
    var d2 =  answers2[i] 

    if (d1==d2) 
    {
        output4.innerHTML="your answer is rigth";
        nb++;
    }
    else
    {
        output4.innerHTML="your answer is wrong";

    }

    var audio = new Audio("its-a-me-mario-sound.mp3");
    var audio2 = new Audio("title.mp3");

    if (nb==4) {
        audio.play();
        document.body.style.backgroundImage = "url('you_won.png')";

    }
    if ((nb>0)&&(nb<4)) {
        audio.play()
        document.body.style.backgroundImage = "url('better-luck-next.png')";

    }

    if (nb==0) {
        audio2.play()
        let element = document.getElementById("table");
        element.style.paddingTop = "250px";
        document.body.style.backgroundImage = "url('you_lost.png')";

    }
    document.getElementById("btt3").remove();
    document.getElementById("btt2").remove();


});

    
    
 