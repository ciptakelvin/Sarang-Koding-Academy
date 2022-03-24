class NavigationPanel{
    constructor(){
        this.nav_list=[]
    }
    append(nav){
        this.nav_list.push(nav);
    }
    defaultPanel(){
        var r="";
        for(var nav of this.nav_list){
            r+="<a href='"+nav.link+"'><li>"+nav.label+"</li></a>";
        }
        document.getElementById("panel").innerHTML="<div class='default-panel'><h2>Academy</h2><ul>"+r+"</ul></div>";
    }
}

class Navigation{
    constructor(label,link,head=false){
        this.label=label,
        this.link=link,
        this.head=head
    }
}
window.onload=function(){
    onready();
}