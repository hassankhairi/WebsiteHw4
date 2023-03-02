export function customDialog(type){
    //alert case
    if(type == "A"){
        const dialog = document.getElementById("alert");
        const button = document.getElementById("ABtn");
        document.getElementById("aRes").innerHTML = "Alert Pressed";
        dialog.showModal();
    } else{
        //confirm case
        if(type == "C"){
            const dialog = document.getElementById("confirm");
            const button = document.getElementById("CBtn");
            document.getElementById("cRes").innerHTML = "Confirm?";
            dialog.showModal();

        //prompt case
        } else {
            const dialog = document.getElementById("prompt");
            const button = document.getElementById("PBtn");
            document.getElementById("pRes").innerHTML = "Enter your name";
            dialog.showModal();
            
        }
    }
    
}