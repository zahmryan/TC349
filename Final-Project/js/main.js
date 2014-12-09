function homeclick(){
    var url = document.URL;
    n = url.lastIndexOf('/');
    var base_url = url.slice(0,n);
    document.location.href = base_url + "/index.html";
}