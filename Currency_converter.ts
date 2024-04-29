#!/nousr/bin/env node

import inquirer from "inquirer"
let c_value: {[key : string]: number} = {
    PKR: 278.74,
    UAE: 3.67,
    USD: 1
}


let ans = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "converting From",
    choices: ['PKR','UAE','USD']
},
{
    type: "list",
name: "to",
message: "converting to",
choices: ['PKR','UAE','USD']
},

{ type: "number",
name: "amount",
message: "Your Amount To Convert"
}

])

console.log(c_value[ans.to] / c_value[ans.from] *ans.amount);