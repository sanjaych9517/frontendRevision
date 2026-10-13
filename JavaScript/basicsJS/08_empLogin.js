let role = prompt("Enter your Role");
let login = prompt("Enter yor status :  YES  NO");

if (login === "YES") {

    switch (role.toLocaleLowerCase()) {
        case 'admin':

            console.log("FUll Access")
            break;

        case 'manager':
            console.log("Manage Employee")
            break;

        case 'employee':
            console.log("view persnol details")
            break;

        case 'guest':
            console.log("limited access")
            break;

        default:
            console.log("invalid role")
            break;
    }

}

else if (login === "NO"){
  console.log("Please Login first")
}