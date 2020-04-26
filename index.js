/*

----------------- Written by LiquidZulu -----------------

Email liquidzulu@pm.me for help or suggestions.

Website: http://www.liquidzulu.xyz/
GitHub: https://github.com/LiquidZulu
Twitter: https://twitter.com/LiquidZulu (@LiquidZulu)
Discord: http://discord.liquidzulu.xyz/
SoundCloud: https://soundcloud.com/liquidzulu
YouTube: https://www.youtube.com/channel/liquidzulu

*/

if(!Polymer){

    // https://stackoverflow.com/a/8486188
    if(!url){url=location.href}var question=url.indexOf("?");var hash=url.indexOf("#");if(hash==-1&&question==-1){return{}}if(hash==-1){hash=url.length}var query=question==-1||hash==question+1?url.substring(hash):url.substring(question+1,hash);var result={};query.split("&").forEach(function(part){if(!part){return}part=part.split("+").join(" ");var eq=part.indexOf("=");var key=eq>-1?part.substr(0,eq):part;var val=eq>-1?decodeURIComponent(part.substr(eq+1)):"";var from=key.indexOf("[");if(from==-1){result[decodeURIComponent(key)]=val}else{var to=key.indexOf("]",from);var index=decodeURIComponent(key.substring(from+1,to));key=decodeURIComponent(key.substring(0,from));if(!result[key]){result[key]=[]}if(!index){result[key].push(val)}else{result[key][index]=val}}});
    
    window.location.replace(`https://www.youtube.com/?v=${result['v']}&disable_polymer=false`);
}

