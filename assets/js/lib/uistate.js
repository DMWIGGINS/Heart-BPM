window.onbeforeunload = function(){
    sessionStorage.setItem("origin", window.location.href);
}

window.onload = function(){
    if(window.location.href == sessionStorage.getItem("origin")){
        sessionStorage.clear();
    }
}

if(!window.sessionStorage.getItem('view')){
    $('#heartbeat').hide();
    $('#players').hide();
    $('#metrics').show();
}
if(window.sessionStorage.getItem('view')==='heartbeat'){
    console.log("show the heartbeats view, hide the other view");
    console.log($);
    console.log($('#metrics'));
    $('#metrics').hide();
    $('#players').hide();
    $('#heartbeat').show();
}
if(window.sessionStorage.getItem('view')==='players'){
    $('#metrics').hide();
    $('#heartbeat').hide();
    $('#players').show();
}
