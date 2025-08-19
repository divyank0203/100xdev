const express = require('express');
const zod = require("zod");
//zod is used for input validation
//to check if the input is valid or not accordingly
//saves us from a dozen of if statements

const app = express();
app.use(express.json());

//zod schema samples:-
const schema2 = zod.object({
    emailid: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    number: zod.number()
})


//creating a schema to check the input type validity
const schema = zod.array(zod.number());


app.use(express.json());
app.post('/health', function(req, res){

    //here the input kidneys is required to be an array of numbers. If it is something else, we need to return an error
    // So we must validate the input using zod if it is in the correct format or not
    const kidneys = req.body.kidneys;

    //parsing the created schema to validate
    const val = schema.safeParse(kidneys);
    const lun = kidneys.length;

    //if invalid:-
    if(!val.success){
        res.send({val});
    }
    //else:-
    else{
        res.send(`Length is ${lun}`);
    }
    
    
//     else{
//         res.status(420).send(`error in input type`);
//     }
})


app.listen(3007);