(function(){
  function runScript(){
    var e={};
    var t={};
    var n=document.body;
    Leap.loop(function(t){
      var r={};
      var i={};
      for(var s=0, o=t.pointables.length; s!=o; s++){
        var upoint=t.pointables[s];
        var a=e[upoint.id];
        var f=n.scrollTop;
        if(document.hasFocus()){
          if(upoint.tipPosition[1]-325>0){n.scrollTop=f-=150;}
          if(upoint.tipPosition[1]-125>0){n.scrollTop=f-=5;}
          if(upoint.tipPosition[1]-90<0){n.scrollTop=f+=5;}
        }
      }
    })
  }
  if(typeof Leap=="undefined"){
    var jsCode=document.createElement("script");
    jsCode.setAttribute("src","https://js.leapmotion.com/0.2.0/leap.min.js");
    jsCode.onload=runScript;
    document.body.appendChild(jsCode);
  }
  else{
    runScript()
  }
});