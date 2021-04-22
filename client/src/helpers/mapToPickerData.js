

function mapCustomersToPickerData(customers){
    return customers.map(customer=>{
        return {
            label:customer.name + "|" + customer.AFM,
            value:customer._id
        }
    })
}


function mapCategoriesToPickerData(categories){
    return categories.map(category=>{
        return{
            label:category.name,
            value:category._id
        }
    })
}

function mapMovementTypesToPickerData(movementTypes){
    return movementTypes.map(mt=>{
        return{
            label:mt.name,
            value:mt.code
        }
    })
}
export {mapCustomersToPickerData};
export {mapCategoriesToPickerData};
export {mapMovementTypesToPickerData};