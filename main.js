import inquirer from "inquirer";
let todos = [];
let loop;
do {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your TODO?"
        },
        {
            type: "confirm",
            name: "Addmore",
            message: "Do you want to add another TODO?",
            default: false
        }
    ]);
    const { TODO, Addmore } = answers;
    loop = Addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add a valid number");
    }
} while (loop);
if (todos.length > 0) {
    console.log("Your TODO list: \n");
    todos.forEach((todo) => {
        console.log(todo);
    });
}
else {
    console.log("Your TODO list is empty");
}
