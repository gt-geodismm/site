var path = window.location.pathname;
var pagename = path.split("/").pop();
if (!pagename || 0 === pagename.length|| pagename=="tc18.org" || pagename=="www.tc18.org" || !pagename || 0 === pagename.length)
{
    pagename="index.html"; 
}
var urlsource = "https://github.com/gt-geodismm/site/blob/master/"+pagename;

document.getElementById("footerSite").innerHTML = ' \
    <hr/> \
    <div class="footer"> \
    <a href="index.html">Site web GT-GeoDis-MM </a>. \
 Vous pouvez contribuer à l édition du site à  travers  la <a href=https://github.com/gt-geodismm/site/> page source  Github</a> et directement éditer cette page <a href="'+urlsource+'"> ici </a> \
         </div>\
'; 

