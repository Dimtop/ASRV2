export default function initPressureDropMeasurement(sprayer){
    var values = [];
    for(var i=0;i<sprayer.branches.length;i++){
        values.push(0)
    }

    return values;
}