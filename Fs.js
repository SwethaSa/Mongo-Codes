

    const fs = require ("fs");

    //CREATE One File

    let quote = "No Pressure😭 No Diamonds💎"

    fs.writeFile("./MyQuote.html", quote, (err) => {

        console.log("Your Quote : No Pressure😭 No Diamonds💎")
    });

//--------------------------------------------------------------------------------------------------------------

   //CREATE Multiple File
    let quote2 = "Trust the Process✌❤"

    for ( i=1; i<=10; i++){

    fs.writeFile(`./backup/Text-${i}.html`, quote2, (err)=>{

        console.log("Your Quote2: Trust the Process✌❤")
    })
};

//--------------------------------------------------------------------------------------------------------------

   //CREATE Many File

       let quote3 = "Trust the Process✌❤"

        for ( i=1; i<=(process.argv[2]); i++){

        fs.writeFile(`./backup/Text-${i}.html`, quote3, (err)=>{

             console.log("Your Quote2: Trust the Process✌❤")
         })
     };


    //--------------------------------------------------------------------------------------------------------------

   //READ File
    
     fs.readFile("./proverbs.txt", "utf-8", (err , data)=>{

        if(err){
            console.log("Sorry😕", err);
        } else{
            console.log(data);
        }
     });

    //--------------------------------------------------------------------------------------------------------------

//UPDATE File

    let quote4 = "Remember why you started 💜"

    fs.appendFile("./proverb.txt", "\n" + quote4, (err) => {

        console.log("Done: 👍")
    });

    //--------------------------------------------------------------------------------------------------------------

//DELETE File

    fs.unlink("./delete.txt", (err) => {

        if(err){
            console.log("Sorry😕", err)
        } else{
        console.log("Done Deleting👍")
        }
    });

    //--------------------------------------------------------------------------------------------------------------