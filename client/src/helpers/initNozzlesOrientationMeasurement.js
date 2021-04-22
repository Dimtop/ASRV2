export default function initNozzlesOrientationMeasurement(sprayer){
    var values = [];
    for(var i=0;i<sprayer.branches.length;i++){
        for(var y=0;y<sprayer.branches[i].injectors.length;y++){
            values.push(1);
        }
    }

    return values;
}   