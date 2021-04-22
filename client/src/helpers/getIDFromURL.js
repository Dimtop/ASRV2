function getIDFromURL(urlPoint){
    var URLParsed = window.location.href.split("/");
    var urlPointIndex = URLParsed.indexOf(urlPoint);
    return URLParsed[urlPointIndex+1];
}

export default getIDFromURL;