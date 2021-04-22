//Models
import categoryModel from '../models/category.model'

export default function extractCategoryFromSprayer(sprayer,categories){

    
    var category = categories.find(category=>category._id == sprayer.categoryID)

    if(category){
        return category
    }
    return categoryModel
}