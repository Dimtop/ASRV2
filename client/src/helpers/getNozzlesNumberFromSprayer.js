export default function getNozzlesNumberFromSprayer(sprayer){
    var nozzlesNumber  =0;
    for(var i=0;i<sprayer.branches.length;i++){
        for(var z=0;z<sprayer.branches[i].injectors.length;z++){
            nozzlesNumber+=sprayer.branches[i].injectors[z].nozzles.length
        }
    }
    return nozzlesNumber;
}