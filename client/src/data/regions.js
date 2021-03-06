const regions = [

    {
        name:"ΑΙΤΩΛΟΑΚΑΡΝΑΝΙΑΣ",
        code:"ΑΙΤ"
    },
    
    {
        name:"ΑΡΓΟΛΙΔΟΣ",
        code:"ΑΡΓ"
    },
    
    {
        name:"ΑΡΚΑΔΙΑΣ",
        code:"ΑΡΚ"
    },
    
    {
        name:"ΑΡΤΑΣ",
        code:"ΑΡΤ"
    },
    
    {
        name:"ΑΤΤΙΚΗΣ",
        code:"ΑΤΤ"
    },
    
    {
        name:"ΑΧΑΪΑΣ",
        code:"ΑΧΑ"
    },
    
    {
        name:"ΒΟΙΩΤΙΑΣ",
        code:"ΒΟΙ"
    },
    
    {
        name:"ΓΡΕΒΕΝΩΝ",
        code:"ΓΡΕ"
    },
      
    {
        name:"ΔΡΑΜΑΣ",
        code:"ΔΡΑ"
    },
      
    {
        name:"ΕΒΡΟΥ (ΑΛΕΞΑΝΔΡΟΥΠΟΛΗ ΚΑΙ ΟΡΕΣΤΙΑΔΑ)",
        code:"ΕΒΡ"
    },
      
    {
        name:"ΕΥΒΟΙΑΣ",
        code:"ΕΥΒ"
    },
      
    {
        name:"ΗΛΕΙΑΣ",
        code:"ΗΛΕ"
    },
      
    {
        name:"ΗΜΑΘΙΑΣ",
        code:"ΗΜΑ"
    },
      
    {
        name:"ΗΡΑΚΛΕΙΟΥ",
        code:"ΗΡΑ"
    },
      
    {
        name:"ΘΕΣΠΡΩΤΙΑΣ",
        code:"ΘΕΠ"
    },
      
    {
        name:"ΘΕΣΣΑΛΟΝΙΚΗΣ",
        code:"ΘΕΣ"
    },
      
    {
        name:"ΙΩΑΝΝΙΝΩΝ",
        code:"ΙΩΑ"
    },
      
    {
        name:"ΚΑΒΑΛΑΣ",
        code:"ΚΑΒ"
    },
      
    {
        name:"ΚΑΡΔΙΤΣΑΣ",
        code:"ΚΑΡ"
    },
    
    {
        name:"ΚΑΣΤΟΡΙΑΣ",
        code:"ΚΑΣ"
    },
    
    {
        name:"ΚΕΡΚΥΡΑΣ",
        code:"ΚΕΡ"
    },
    
    {
        name:"ΚΙΛΚΙΣ",
        code:"ΚΙΛ"
    },
    
    {
        name:"ΚΟΖΑΝΗΣ",
        code:"ΚΟΖ"
    },
    
    {
        name:"ΚΟΡΙΝΘΙΑΣ",
        code:"ΚΟΡ"
    },
    
    {
        name:"ΛΑΚΩΝΙΑΣ",
        code:"ΛΑΚ"
    },
    
    {
        name:"ΛΑΡΙΣΑΣ",
        code:"ΛΑΡ"
    },
    
    {
        name:"ΛΑΣΙΘΙΟΥ",
        code:"ΛΑΣ"
    },
      
    {
        name:"ΜΑΓΝΗΣΙΑΣ ΚΑΙ ΣΠΟΡΑΔΩΝ",
        code:"ΜΑΓ"
    },
      
    {
        name:"ΜΕΣΣΗΝΙΑΣ",
        code:"ΜΕΣ"
    },
      
    {
        name:"ΞΑΝΘΗΣ",
        code:"ΞΑΝ"
    },
      
    {
        name:"ΠΕΛΛΑΣ",
        code:"ΠΕΛ"
    },
      
    {
        name:"ΠΕΡΙΦΕΡΕΙΑ ΒΟΡΕΙΟΥ ΑΙΓΑΙΟΥ (Π.Ε. ΛΕΣΒΟΥ)",
        code:"ΛΕΣ"
    },
      
    {
        name:"ΠΕΡΙΦΕΡΕΙΑ ΒΟΡΕΙΟΥ ΑΙΓΑΙΟΥ (Π.Ε. ΣΑΜΟΥ)",
        code:"ΣΑΜ"
    },
      
    {
        name:"ΠΕΡΙΦΕΡΕΙΑ ΒΟΡΕΙΟΥ ΑΙΓΑΙΟΥ (Π.Ε. ΧΙΟΥ)",
        code:"ΧΙΟ"
    },
      
    {
        name:"ΠΕΡΙΦΕΡΕΙΑ ΙΩΝΙΩΝ ΝΗΣΩΝ (Π.Ε. ΛΕΥΚΑΔΑΣ)",
        code:"ΛΕΥ"
    },
      
    {
        name:"ΠΕΡΙΦΕΡΕΙΑ ΙΩΝΙΩΝ ΝΗΣΩΝ (Π.Ε. ΖΑΚΥΝΘΟΥ)",
        code:"ΖΑΚ"
    },
      
    {
        name:"ΠΕΡΙΦΕΡΕΙΑ ΙΩΝΙΩΝ ΝΗΣΩΝ (Π.Ε. ΚΕΦΑΛΛΗΝΙΑΣ)",
        code:"ΚΕΦ"
    },
      
    {
        name:"ΠΕΡΙΦΕΡΕΙΑ ΝΟΤΙΟΥ ΑΙΓΑΙΟΥ (Π.Ε. ΡΟΔΟΥ)",
        code:"ΔΩΔ"
    },
    {
        name:"ΠΕΡΙΦΕΡΕΙΑ ΝΟΤΙΟΥ ΑΙΓΑΙΟΥ (Π.Ε. ΣΥΡΟΥ)",
        code:"ΣΥΡ"
    },
      
    {
        name:"ΠΙΕΡΙΑΣ",
        code:"ΠΙΕ"
    },
      
    {
        name:"ΠΡΕΒΕΖΑΣ",
        code:"ΠΡΕ"
    },
    {
        name:"ΡΕΘΥΜΝΟΥ",
        code:"ΡΕΘ"
    },
      
    {
        name:"ΡΟΔΟΠΗΣ",
        code:"ΡΟΔ"
    },
    {
        name:"ΣΕΡΡΩΝ",
        code:"ΣΕΡ"
    },
      
    {
        name:"ΤΡΙΚΑΛΩΝ",
        code:"ΤΡΙ"
    },
    {
        name:"ΦΘΙΩΤΙΔΑΣ",
        code:"ΦΘΙ"
    },
      
    {
        name:"ΦΛΩΡΙΝΑΣ",
        code:"ΦΛΩ"
    },
    {
        name:"ΦΩΚΙΔΑΣ",
        code:"ΦΩΚ"
    },
      
    {
        name:"ΧΑΛΚΙΔΙΚΗΣ",
        code:"ΧΑΛ"
    },
    {
        name:"ΧΑΝΙΩΝ",
        code:"ΧΑΝ"
    }
 
]


function mapToPickerData(){
    return regions.map(region=>{
        return{
            label:region.name,
            value:region.code
        }
    })
}


exports.regions = regions;
exports.mapToPickerData = mapToPickerData;
