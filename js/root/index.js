/*MainFunction==========================================================================================*/
function main()
{
    play(0);
    setFlexWidth();
}

/*Clock==================================================================================================*/
var updater = setInterval(function(){clock()},1000);
 
function clock()
{
    var time = new Date();
    var timeTag = document.querySelector("#clock");

    timeTag.innerText = time.toLocaleTimeString();
}

/*PictureCollage=========================================================================================*/
var setFlexWidth = function(){
    var windoWidth = document.documentElement.clientWidth;

    if(windoWidth>=700){
        $("#flex-container0").css("width", "50%");
    }else if(windoWidth<=400){
        $("#flex-container0").css("width", "100%");
    }else{
        switch(Math.round(windoWidth/100)){
            case 4:
                $("#flex-container0").css("width", "88%");
                break;
            case 5:
                $("#flex-container0").css("width", "75%");
                break;
            case 6:
                $("#flex-container0").css("width", "63%");
                break;
            default:
                break;
        }
    }
}

/*VideoPlayer============================================================================================*/
var list = [
    {
        title: "【AI】Play around with DAIN-App",
        id: "HYT5Ce12HqI",
    },
    {
        title: "【Minecraft】PTGI E12, The Movie-like Gaming Experience?",
        id: "BFNh9jyWtFk",
    },
    {
        title: "【ROM】Installing LineageOS 15.1 on ZenFone3!",
        id: "erVEc3t9nOs",
    },
    {
        title: "【Benchmark】DSC-HX99 vs. ASUS ZenFone 6 Night Recording Quality Test",
        id: "tZFN9tGQTcg",
    },
    {
        title: "【Minecraft】超簡單窮人版飛行器?!",
        id: "O-wQri_pduI",
    },
    {
        title: "【Ghost Recon Wildlands】實測! 火線獵殺:野境的「守護者」任務真的很難嗎?",
        id: "no559CF9VQU",
    },
    {
        title: '【Minecraft】"High-Definition" Minecraft for New Low-End PCs!',
        id: "mKyZzCGPzAk",
    }
]

var clickCount = 0;

function cycle(){
    clickCount++;
    play((clickCount) % list.length);
}

function play(i)
{
    var video = document.querySelector("#video-player>.video-container>iframe");
    var title = document.querySelector("#video-player>#video-title");

    video.src = createUrl(list[i].id);
    title.innerText = "▲" + list[i].title;
}

function createUrl(id) {
    return "https://www.youtube.com/embed/" + id;
}

/*Updater=========================================================================================================*/
window.onload = main;

window.onresize = function(){
    setFlexWidth();  
}
