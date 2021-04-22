export default function initNozzlesDistanceMeasurement(sprayer){
    var values = [];
    for(var i=0;i<sprayer.branches.length;i++){
        for(var y=0;y<sprayer.branches[i].injectors.length;y+=2){
            values.push(0);
        }
    }

    return values;
}