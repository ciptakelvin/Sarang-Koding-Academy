function onready(){
    var nav=new NavigationPanel();
    nav.append(new Navigation("Home","#"));
    nav.append(new Navigation("Course","/course/"));
    nav.defaultPanel();
}