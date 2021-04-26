const technicalReportBC = [

    {
        title:"ΔΙΑΡΡΟΕΣ ΚΑΙ ΣΤΑΛΑΞΗ",
        code:"1",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[
            {
                title:"Στατικές διαρροές",
                code:"1.1",
                type:"optical",
                test:false,
                hint:"Πλήρωση της δεξαμενής με νερό στην ονομαστική της χωρητικότητα (υπό προϋποθέσεις μείωση της πλήρωσης)",
                category:"3",
                paragraphs:[]
            },
            {
                title:"Δυναμικές διαρροές",
                code:"1.2",
                type:"",
                test:false,
                hint:"",
                category:"",
                paragraphs:[{
                    title:"Διαρροές με τον ψεκαστήρα σε λειτουργία και απενεργοποιημένο τον ψεκασμό",
                    code:"1.2.1",
                    type:"optical",
                    test:false,
                    hint:"Μέγιστη δυνατή πίεση του συστήματος",
                    category:"3",
                    paragraphs:[]
                },{
                    title:"Διαρροές με τον ψεκαστήρα σε λειτουργία και ενεργοποιημένο τον ψεκασμό",
                    code:"1.2.2",
                    type:"optical",
                    test:false,
                    hint:"Μέγιστη πίεση λειτουργίας του ψεκαστήρα ή του ακροφυσίου",
                    category:"3",
                    paragraphs:[]
                }]
            },
            {
                title:"Ψεκασμός ψεκαστήρα, πλαισίου, εξαρτημάτων, σωληνώσεων",
                code:"1.3",
                type:"optical",
                test:true,
                hint:"",
                category:"2",
                paragraphs:[]
            }
        ]
    },
    {
        title:"ΑΝΤΛΙΑ",
        code:"2",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[{
            title:"Ικανότητα παροχής αντλίας",
            code:"2.1",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Ψεκαστήρες κατασκευασμένοι σύμφωνα με το ISO 16119-4",
                code:"2.1.1",
                type:"",
                test:false,
                hint:"",
                category:"",
                paragraphs:[{
                    title:"Ικανότητα ανάδευσης (Μέτρηση ή υπολογισμός αντίστροφης ροής/επιστροφής υγρού στη δεξαμενή για ανάδευση)",
                    code:"2.1.1.a",
                    type:"measurement",
                    test:false,
                    hint:"",
                    category:"3",
                    paragraphs:[]
                }]
            }]
        },{
            title:"Άλλοι ψεκαστήρες",
            code:"2.1.2",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Μέτρηση ικανότητας παροχής αντλίας με ροόμετρο ",
                code:"2.1.2.a",
                type:"measurement",
                test:true,
                hint:"Ονομαστική ταχύτητα περιστροφής της αντλίας",
                category:"3",
                paragraphs:[]
            },{
                title:"Ανάλυση ικανότητας παροχής αντλίας με μανόμετρο αναφοράς σε ακραίο ακροφύσιο ",
                code:"2.1.2.b",
                type:"measurement",
                test:true,
                hint:"Μέγιστη πίεση λειτουργίας του ψεκαστήρα ή του ακροφυσίου",
                category:"3",
                paragraphs:[]
            }]
        },{
            title:"Δονήσεις (παλμοί) αντλίας",
            code:"2.2",
            type:"measurement",
            test:false,
            hint:"Δονήσεις (παλμοί) αντλίας",
            category:"3",
            paragraphs:[]
        },{
            title:"Συσσωρευτής πίεσης (αεροθάλαμος)",
            code:"2.3",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Διαρροές, φθορές",
                code:"2.3.1",
                type:"optical",
                test:true,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Πίεση αέρα",
                code:"2.3.2",
                type:"measurement",
                test:true,
                hint:"",
                category:"3",
                paragraphs:[]
            }]
        }]
    },{
        title:"ΑΝΑΔΕΥΣΗ ΨΕΚΑΣΤΙΚΟΥ ΥΓΡΟΥ",
        code:"3",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[{
            title:"Υδραυλική ανάδευση",
            code:"3.1",
            type:"optical",
            test:false,
            hint:"Ευκρινώς ορατή ανακυκλοφορία ψεκαστικού υγρού με τη δεξαμενή γεμάτη στο μισό της χωρητικότητας",
            category:"3",
            paragraphs:[]
        },{
            title:"Μηχανική ανάδευση",
            code:"3.2",
            type:"optical",
            test:false,
            hint:"Ομοίως",
            category:"3",
            paragraphs:[]
        }]
    },{
        title:"ΔΕΞΑΜΕΝΗ ΨΕΚΑΣΤΙΚΟΥ ΥΓΡΟΥ",
        code:"4",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[{
            title:"Καπάκι",
            code:"4.1",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Κατάσταση, προσαρμογή",
                code:"4.1.1",
                type:"optical",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Ακούσιο άνοιγμα/ερμητικό κλείσιμο, διαρροή",
                code:"4.1.2",
                type:"optical",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            }]
        },{
            title:"Φίλτρο σε καλή κατάσταση στην(-ις) οπή(-ές) πλήρωσης",
            code:"4.2",
            type:"optical",
            test:false,
            hint:"",
            category:"3",
            paragraphs:[]
        },{
            title:"Δοχείο εισαγωγής χημικών",
            code:"4.3",
            type:"",
            test:false,
            hint:"Εάν υπάρχει",
            category:"",
            paragraphs:[{
                title:" Ύπαρξη κατάλληλου πλέγματος",
                code:"4.3.1",
                type:"optical",
                test:false,
                hint:"",
                category:"2",
                paragraphs:[]
            },{
                title:" Ύπαρξη κατάλληλου πλέγματος",
                code:"4.3.2",
                type:"optical",
                test:true,
                hint:"",
                category:"2",
                paragraphs:[]
            }]
        },{
            title:"Ύπαρξη διάταξης εξισορρόπησης πίεσης",
            code:"4.4",
            type:"optical",
            test:false,
            hint:"",
            category:"2",
            paragraphs:[]
        },{
            title:"Ύπαρξη ευκρινώς αναγνώσιμου δείκτη ",
            code:"4.5",
            type:"optical",
            test:false,
            hint:"",
            category:"3",
            paragraphs:[]
        },{
            title:"Ύπαρξη διακόπτη εκκένωσης",
            code:"4.6",
            type:"optical",
            test:false,
            hint:"",
            category:"3",
            paragraphs:[]
        },{
            title:"Ύπαρξη / λειτουργία βαλβίδας αντεπιστροφής στη διάταξη πλήρωσης ",
            code:"4.7",
            type:"optical",
            test:true,
            hint:"Εάν υπάρχει διάταξη πλήρωσης",
            category:"2",
            paragraphs:[]
        },{
            title:"Λειτουργία διάταξης καθαρισμού δοχείων συσκευασίας φυτοπροστατευτικών προϊόντων",
            code:"4.8",
            type:"optical",
            test:true,
            hint:"Εάν υπάρχει",
            category:"2",
            paragraphs:[]
        },{
            title:"Λειτουργία συσκευών εσωτερικού και εξωτερικού καθαρισμού",
            code:"4.9",
            type:"optical",
            test:true,
            hint:"Εάν υπάρχει",
            category:"2",
            paragraphs:[]
        }]
    },{
        title:"ΣΥΣΤΗΜΑΤΑ ΜΕΤΡΗΣΗΣ, ΕΛΕΓΧΟΥ ΚΑΙ ΡΥΘΜΙΣΗΣ",
        code:"5",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[{
            title:"Γενικά",
            code:"5.1",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Διατάξεις μέτρησης, ένδειξης, ρύθμισης πίεσης ή/και παροχής",
                code:"5.1.1",
                type:"optical",
                test:true,
                hint:"Ύπαρξη και λειτουργία",
                category:"3",
                paragraphs:[]
            },{
                title:"Κύρια βαλβίδα ταυτόχρονης έναρξης και παύσης λειτουργίας ακροφυσίων",
                code:"5.1.2",
                type:"optical",
                test:true,
                hint:"Ύπαρξη και λειτουργία",
                category:"3",
                paragraphs:[]
            },{
                title:"Βαλβίδες ελέγχου τομέων βραχίονα ψεκασμού",
                code:"5.1.3",
                type:"optical",
                test:true,
                hint:"Ύπαρξη και λειτουργία",
                category:"3",
                paragraphs:[]
            },{
                title:"Χρήση συστημάτων ελέγχου και ανάγνωση οργάνων από τη θέση του χειριστή",
                code:"5.1.4",
                type:"optical",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            }]
        },{
            title:"Μετρητής πίεσης",
            code:"5.2",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Ύπαρξη, λειτουργία και κλίμακα",
                code:"5.2.1",
                type:"optical",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Διακριτική ικανότητα",
                code:"5.2.2",
                type:"optical",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            },
            {
                title:"Κλίμακα/μέγεθος",
                code:"5.2.3",
                type:"optical",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Διάμετρος αναλογικών μετρητών πίεσης",
                code:"5.2.4",
                type:"measurement",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Διακριτική ικανότητα",
                code:"5.2.5",
                type:"optical",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Ακρίβεια",
                code:"5.2.6",
                type:"measurement",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            }]
        },{
            title:"Άλλες διατάξεις μέτρησης (ροόμετρα και αισθητήρες ταχύτητας για τον έλεγχο του ρυθμού μεταβολής όγκου/επιφάνεια)",
            code:"5.3",
            type:"measurement",
            test:false,
            hint:"Εάν υπάρχουν",
            category:"2",
            paragraphs:[]
        },{
            title:"Διατάξεις ρύθμισης πίεσης",
            code:"5.4",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Διατήρηση σταθερής πίεσης σε σταθερή ρύθμιση",
                code:"5.4.1",
                type:"measurement",
                test:true,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Διατήρηση πίεσης κατόπιν παύσης και επανέναρξης  ψεκασμού ",
                code:"5.4.2",
                type:"measurement",
                test:true,
                hint:"",
                category:"3",
                paragraphs:[]
            }]
        },{
            title:"Συστήματα άμεσης έγχυσης (Direct injection systems)",
            code:"5.5",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Διαρροή, αποτροπή αντίστροφης ροής, θάλαμος μίξης",
                code:"5.5.1",
                type:"optical",
                test:true,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Ρυθμός έγχυσης/Ακρίβεια",
                code:"5.5.2",
                type:"measurement",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            }]
        }]
    },{
        title:"ΣΩΛΗΝΕΣ ΚΑΙ ΕΥΚΑΜΠΤΟΙ ΣΩΛΗΝΕΣ",
        code:"6",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[{
            title:"Κάμψη, διάβρωση, τριβή με τις περιβάλλουσες επιφάνειες",
            code:"6.1",
            type:"optical",
            test:false,
            hint:"",
            category:"3",
            paragraphs:[]
        },{
            title:"Φθορά, κοψίματα, ρωγμές",
            code:"6.2",
            type:"optical",
            test:false,
            hint:"",
            category:"3",
            paragraphs:[]
        }]
    },{
        title:"ΦΙΛΤΡΑ",
        code:"7",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[{
            title:"Παρουσία φίλτρων",
            code:"7.1",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Φίλτρο στην αναρρόφηση",
                code:"7.1.1",
                type:"optical",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Φίλτρο(-α) στην κατάθλιψη",
                code:"7.1.2",
                type:"optical",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Κατάσταση φίλτρων",
                code:"7.1.3",
                type:"optical",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Κατάλληλο μέγεθος πλέγματος (mesh)",
                code:"7.1.4",
                type:"optical",
                test:false,
                hint:"",
                category:"2",
                paragraphs:[]
            }]
        },{
            title:"Ύπαρξη διάταξης απομόνωσης",
            code:"7.2",
            type:"optical",
            test:true,
            hint:"",
            category:"3",
            paragraphs:[]
        },{
            title:"Αντικαταστάσιμα εσωτερικά στοιχεία φίλτρων",
            code:"7.3",
            type:"optical",
            test:true,
            hint:"",
            category:"3",
            paragraphs:[]
        }]
    },{
        title:"ΜΟΝΑΔΑ ΕΦΑΡΜΟΓΗΣ",
        code:"8",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[{
            title:"Ύπαρξη αντισταγονικών διατάξεων",
            code:"8.1",
            type:"optical",
            test:false,
            hint:"",
            category:"3",
            paragraphs:[]
        },{
            title:"Οριζόντιος βραχίονας ψεκασμού",
            code:"8.2",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Σταθερότητα / Ευθυγράμμιση",
                code:"8.2.1",
                type:"",
                test:false,
                hint:"Όχι για μικρούς φορητούς ή μεταφερόμενους βραχίονες",
                category:"",
                paragraphs:[{
                    title:"Σύνδεσμοι σταθεροί, ευθύτητα, μόνιμη παραμόρφωση",
                    code:"8.2.1.a",
                    type:"optical",
                    test:false,
                    hint:"",
                    category:"3",
                    paragraphs:[]
                },{
                    title:"Κατακόρυφη απόσταση βραχίονα από το έδαφος",
                    code:"8.2.1.b",
                    type:"measurement",
                    test:false,
                    hint:"",
                    category:"3",
                    paragraphs:[]
                },{
                    title:"Κάμψη βραχίονα στο οριζόντιο επίπεδο",
                    code:"8.2.1.c",
                    type:"measurement",
                    test:false,
                    hint:"",
                    category:"3",
                    paragraphs:[]
                }]
            },{
                title:"Ακροφύσια",
                code:"8.2.2",
                type:"",
                test:false,
                hint:"",
                category:"",
                paragraphs:[{
                    title:"Ομοιομορφία ακροφυσίων",
                    code:"8.2.2.a",
                    type:"optical",
                    test:false,
                    hint:"Τύπος, μέγεθος, υλικό, προέλευση",
                    category:"3",
                    paragraphs:[]
                },{
                    title:"Απόσταση μεταξύ των ακροφυσίων",
                    code:"8.2.2.b",
                    type:"measurement",
                    test:false,
                    hint:"Ομοιομορφία",
                    category:"3",
                    paragraphs:[]
                },{
                    title:"Προσανατολισμός ακροφυσίων / κατακόρυφη θέση σώματος ακροφυσίων",
                    code:"8.2.2.c",
                    type:"measurement",
                    test:false,
                    hint:"Ομοιομορφία",
                    category:"3",
                    paragraphs:[]
                },{
                    title:"Ακούσια μεταβολή θέσης ακροφυσίων",
                    code:"8.2.2.d",
                    type:"optical",
                    test:false,
                    hint:"",
                    category:"3",
                    paragraphs:[]
                }]
            },{
                title:"Ρύθμιση ύψους",
                code:"8.2.3",
                type:"optical",
                test:true,
                hint:"Εάν υπάρχει διάταξη",
                category:"2",
                paragraphs:[]
            },{
                title:"Απόσβεση ανεπιθύμητων κινήσεων ",
                code:"8.2.4",
                type:"optical",
                test:true,
                hint:"Εάν υπάρχει διάταξη",
                category:"2",
                paragraphs:[]
            },{
                title:"Αντισταθμιστικές επιστροφές (διατήρηση πίεσης κατόπιν παύσης λειτουργίας κάθε τομέα του βραχίονα) ",
                code:"8.2.5",
                type:"measurement",
                test:true,
                hint:"Εάν υπάρχουν ειδικές βαλβίδες αντισταθμιστικών επιστροφών στη δεξαμενή",
                category:"3",
                paragraphs:[]
            },{
                title:"Πτώση πίεσης",
                code:"8.2.6",
                type:"measurement",
                test:true,
                hint:"",
                category:"3",
                paragraphs:[]
            }]
        },{
            title:"Κατακόρυφος βραχίονας ψεκασμού",
            code:"8.3",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Συμμετρία ακροφυσίων (αριστερή/δεξιά πλευρά)",
                code:"8.3.1",
                type:"optical",
                test:false,
                hint:"Τύπος, μέγεθος, υλικό, προέλευση",
                category:"3",
                paragraphs:[]
            },{
                title:"Δυνατότητα απενεργοποίησης κάθε ακροφυσίου ξεχωριστά",
                code:"8.3.2",
                type:"optical",
                test:true,
                hint:"Εάν υπάρχει",
                category:"3",
                paragraphs:[]
            },{
                title:"Ρύθμιση θέσης ακροφυσίου",
                code:"8.3.3",
                type:"optical",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Πτώση πίεσης",
                code:"8.3.4",
                type:"measurement",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            },{
                title:"Αντισταθμιστικές επιστροφές (διατήρηση πίεσης κατόπιν παύσης λειτουργίας κάθε τομέα του βραχίονα) ",
                code:"8.3.5",
                type:"measurement",
                test:false,
                hint:"Εάν υπάρχουν ειδικές βαλβίδες αντισταθμιστικών επιστροφών στη δεξαμενή",
                category:"2",
                paragraphs:[]
            }]
        },{
            title:"Αυλοί (πιστόλια) και λόγχες ψεκασμού",
            code:"8.4",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Ενεργοποιητής (σκανδάλη)",
                code:"8.4.1",
                type:"",
                test:false,
                hint:"",
                category:"",
                paragraphs:[{
                    title:"Λειτουργία, κλείδωμα στη θέση μη λειτουργίας, μη δυνατότητα κλειδώματος στη θέση λειτουργίας",
                    code:"8.4.1.a",
                    type:"optical",
                    test:true,
                    hint:"",
                    category:"3",
                    paragraphs:[]
                },{
                    title:"Διακόπτης ασφαλείας (quick stop/opening)",
                    code:"8.4.1.b",
                    type:"optical",
                    test:true,
                    hint:"",
                    category:"3",
                    paragraphs:[]
                },{
                    title:"Στάλαξη στη θέση μη λειτουργίας",
                    code:"8.4.1.c",
                    type:"optical",
                    test:true,
                    hint:"",
                    category:"3",
                    paragraphs:[]
                }]
            },{
                title:"Ρύθμιση παροχής ή/και γωνίας ψεκασμού",
                code:"8.4.2",
                type:"optical",
                test:true,
                hint:"Εάν υπάρχει διάταξη",
                category:"2",
                paragraphs:[]
            }]
        }]
    },{
        title:"ΑΝΕΜΙΣΤΗΡΑΣ",
        code:"9",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[{
            title:"Απενεργοποίηση / Λειτουργία συμπλέκτη",
            code:"9.1",
            type:"optical",
            test:true,
            hint:"",
            category:"3",
            paragraphs:[]
        },{
            title:"Δυνατότητα ρύθμισης θέσης κατευθυντήρων/οδηγών αέρα",
            code:"9.2",
            type:"optical",
            test:true,
            hint:"",
            category:"2",
            paragraphs:[]
        }]
    },{
        title:"KATANOMH",
        code:"10",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[{
            title:"Ομοιομορφία δέσμης ψεκασμού",
            code:"10.1",
            type:"optical",
            test:true,
            hint:"",
            category:"3",
            paragraphs:[]
        },{
            title:"Παροχή ακροφυσίων",
            code:"10.2",
            type:"measurement",
            test:false,
            hint:"",
            category:"3",
            paragraphs:[]
        },{
            title:"Εγκάρσια κατανομή",
            code:"10.3",
            type:"",
            test:false,
            hint:"",
            category:"",
            paragraphs:[{
                title:"Μέτρηση εγκάρσιας κατανομής ψεκασμού επί πρότυπης διάταξης",
                code:"10.3.1",
                type:"measurement",
                test:false,
                hint:"Προαιρετικά",
                category:"2",
                paragraphs:[]
            },{
                title:"Κατανομή πίεσης",
                code:"10.3.2",
                type:"measurement",
                test:false,
                hint:"",
                category:"3",
                paragraphs:[]
            }]
        },{
            title:"Μέτρηση katak;oryfhw κατανομής ψεκασμού επί πρότυπης διάταξης",
            code:"10.4",
            type:"measurement",
            test:false,
            hint:"Προαιρετικά",
            category:"2",
            paragraphs:[]
        }]
    },{
        title:"ΑΥΤΟΝΟΜΕΣ ΜΟΝΑΔΕΣ ΕΦΑΡΜΟΓΗΣ",
        code:"11",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[{
            title:"Κατάσταση/λειτουργία συστήματος κίνησης",
            code:"11.1",
            type:"optical",
            test:true,
            hint:"",
            category:"3",
            paragraphs:[]
        }]
    },
    {
        title:"ΕΞΟΠΛΙΣΜΟΣ ΚΑΘΑΡΙΣΜΟΥ",
        code:"12",
        type:"",
        test:false,
        hint:"",
        category:"",
        paragraphs:[   {
            title:"Λειτουργία διατάξεων καθαρισμού",
            code:"12.1",
            type:"optical",
            test:true,
            hint:"Εάν υπάρχουν",
            category:"2",
            paragraphs:[]
        }]
    }
  
]

export default technicalReportBC;