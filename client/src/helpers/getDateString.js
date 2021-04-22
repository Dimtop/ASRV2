var englishDays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
var greekDays = ["Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο","Κυριακή"]

var englishMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
var greekMonths = ["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος"]

export default function getDateString(dateToParse){
    var parsedDate = new Date(dateToParse).toDateString();

    for(var i=0;i<englishDays.length;i++){
        parsedDate = parsedDate.replace(englishDays[i],greekDays[i])

        console.log(parsedDate)
    }

    for(var i=0;i<englishMonths.length;i++){
        parsedDate = parsedDate.replace(englishMonths[i],greekMonths[i])

        console.log(parsedDate)
    }

    return parsedDate;
}