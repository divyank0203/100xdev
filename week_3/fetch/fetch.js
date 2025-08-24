        // function getData(){
        //     fetch('https://fakerapi.it/api/v1/persons')
        //     .then(function(response){
        //         response.json() //this also returns a promise so one more then to handle the data
        //         .then(function(data){
        //             console.log(data);
        //         })
        //     })
        // }

    // The above code can also be written in async await fashion

        async function getData(){
            const response = await fetch('https://fakerapi.it/api/v1/persons');
            const data = await response.json();
            console.log(data);
        }

        