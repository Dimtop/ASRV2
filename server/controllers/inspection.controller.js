//Models
const inspectionModel = require("../models/inspection.model");



exports.postInspection = async(req,res)=>{
    var stickerValidation = await validateStickerNumber(req.body.stickerNumber,null);
    var inspectionNumberValidation = await validateInspectionNumber(req.body.inspectionNumber,null)

    if(stickerValidation.error){
        res.send({error:stickerValidation.error})
        return;
    }
    if(inspectionNumberValidation.error){
        res.send({error:inspectionNumberValidation.error})
        return;
    }
    await inspectionModel.create(req.body,(error,inspection)=>{
        if(error){
            console.log(error)
            res.send({error:error})
            return
        }

        res.send({error:null,inspection:inspection});
    })
}

exports.getInspection = async(req,res)=>{
    await inspectionModel.findOne({_id:req.params.inspectionID},(error,inspection)=>{
        if(error){
            console.log(error)
            res.send({error:error})
            return
        }

        res.send({error:null,inspection:inspection});
    })
}

exports.updateInspection = async(req,res)=>{
    var stickerValidation = await validateStickerNumber(req.body.stickerNumber,req.body._id);
    var inspectionNumberValidation = await validateInspectionNumber(req.body.inspectionNumber,req.body._id)

    console.log(stickerValidation)
    if(stickerValidation.error){
        res.send({error:stickerValidation.error})
        return;
    }
    if(inspectionNumberValidation.error){
        res.send({error:inspectionNumberValidation.error})
        return;
    }
    await inspectionModel.updateOne({_id:req.params.inspectionID},req.body,(error)=>{
        if(error){
            console.log(error)
            res.send({error:error})
            return
        }

        res.send({error:null});
    })
}


exports.getInspections = async(req,res)=>{
    await inspectionModel.find(req.query,(error,inspections)=>{
        if(error){
            res.send({error:"Υπήρξε ένα πρόβλημα."});
            return;
        }
        res.send({error:null,inspections:inspections})
    })
}


async function validateStickerNumber(stickerNumber, inspectionID){
    console.log(stickerNumber.length)
    if(stickerNumber.length>4){
        return {error:"Ο αριθμός sticker πρέπει να αποτελείται από 4 μόνο ψηφία"};
   
    }
    var inspection = await inspectionModel.findOne({stickerNumber:stickerNumber});
    if(inspection && inspection._id!=inspectionID){
        return {error:"Αυτός ο αριθμός sticker υπάρχει ήδη"};
    }
    else{
        return {error:null}
    }

}

async function validateInspectionNumber(inspectionNumber,inspectionID){
    console.log(inspectionNumber.length)
    if(inspectionNumber.length>4){
        return {error:"Ο αριθμός επιθεώρησης πρέπει να αποτελείται από 4 μόνο ψηφία"};
   
    }
    var inspection = await inspectionModel.findOne({inspectionNumber:inspectionNumber});
    if(inspection && inspection._id!=inspectionID){
        return {error:"Αυτός ο αριθμός επιθεώρησης υπάρχει ήδη"};
    }
    else{
        return {error:null}
    }

}