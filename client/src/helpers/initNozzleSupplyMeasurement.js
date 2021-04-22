export default function initNozzleSuppplyMeasuement(sprayer){
    var nozzleSupply = [];
    for(var i=0;i<sprayer.branches.length;i++){
        nozzleSupply.push([]);
        for(var y=0;y<sprayer.branches[i].injectors.length;y++){
            nozzleSupply[i].push([]);
            console.log(sprayer.branches[i].injectors[y])
            for(var z=0;z<sprayer.branches[i].injectors[y].nozzles.length;z++){
                nozzleSupply[i][y].push(0)
            }
        }
    }

    console.log("NOZZLE SUPPLY")
    console.log(nozzleSupply)

    return nozzleSupply
}