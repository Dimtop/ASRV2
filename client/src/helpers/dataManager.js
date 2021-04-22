//Libraries
import Cookies from 'js-cookie';




async function getUser(){
    return await fetch("/api/users/" + Cookies.get("userID"),{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function updateUser(user){
    return await fetch("/api/users/" + Cookies.get("userID"),{
        method:"put",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}


async function createCustomer(customer){
    return await fetch("/api/customers",{
        method:"post",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(customer)
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function getAllCustomers(){
    return await fetch("/api/customers/all",{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function getCustomers(query){
    return await fetch("/api/customers" + query,{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function getCustomer(customerID){
    return await fetch("/api/customers/" + customerID,{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function updateCustomer(customer){
    return await fetch("/api/customers/" + customer._id,{
        method:"put",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(customer)
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function getCategory(categoryID){
    return await fetch("/api/categories/" + categoryID,{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function getAllCategories(){
    return await fetch("/api/categories/all",{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}


async function createSprayer(sprayer){
    return await fetch("/api/sprayers",{
        method:"post",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(sprayer)
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function getSprayer(sprayerID){
    return await fetch("/api/sprayers/" + sprayerID,{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function updateSprayer(sprayer){
    return await fetch("/api/sprayers/" + sprayer._id,{
        method:"put",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(sprayer)
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function getSprayers(query){
    return await fetch("/api/sprayers" + query,{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}


async function createPreInspection(preInspection){
    return await fetch("/api/preInspections",{
        method:"post",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(preInspection)
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function getPreInspection(preInspectionID){
    return await fetch("/api/preInspections/" + preInspectionID,{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function updatePreInspection(preInspection){
    console.log(preInspection)
    return await fetch("/api/preInspections/" + preInspection._id,{
        method:"put",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(preInspection)
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function getPreInspections(query){
    return await fetch("/api/preInspections" + query,{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function createInspection(inspection){
    return await fetch("/api/inspections",{
        method:"post",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(inspection)
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function getInspection(inspectionID){
    return await fetch("/api/inspections/" + inspectionID,{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function updateInspection(inspection){
    console.log(inspection)
    return await fetch("/api/inspections/" + inspection._id,{
        method:"put",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(inspection)
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}

async function getInspections(query){
    return await fetch("/api/inspections" + query,{
        method:"get"
    })
    .then(res=>res.json())
    .then(res=>{
        return res;
    })
}


export {getUser};
export {updateUser};
export {createCustomer};
export {getAllCustomers};
export {getCustomers};
export {getCustomer}
export {updateCustomer}
export {getCategory}
export {getAllCategories}
export {createSprayer};
export {getSprayer};
export {updateSprayer};
export {getSprayers}
export {createPreInspection};
export {getPreInspection};
export {updatePreInspection};
export {getPreInspections};
export {createInspection};
export {getInspection};
export {updateInspection};
export {getInspections};