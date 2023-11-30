/*
  1. variable are container for storing data .

  2. java script variable can be declared in 4 ways .
        1.automatically
        2.using var
        3.using let
        using const
  3.the var key word was used in all javascript code from 1995 to 2015.

  4.the let and const keywords were added to javascript in 2015.

  5.the var keyword should only be written for older verion.

  6.let is blocked scope where as ver is functional scope.

  7.example*/
        let accountID=1443;
        let accountEmail='gift@gmail.com';
        var accountPassword='1234';
        accountcity='bbsr';
        let accountState;
        accountID=5243;
        //let accountID=7657;
        var accountPassword=6363;
        const noob='hello';
        //noob='bye';
        console.table([accountID,accountEmail,accountPassword,accountcity,accountState,noob]);

        //ex of functional scope and block scope 

        function root(){
            if(true){
                var heroOne='ironman';   //functional scope   not assessable out side the function
                const heroTwo='superman'; //functional scope
                let heroThree='spiderman';  //block scope
            }
            console.log(heroOne);
            //console.log(heroTwo);
            //console.log(heroThree);
        }
        root();

        /*
        there are two types of datatypes
            1.primitive datatype
                1.number
                2.string
                3.boolean
                4.bigint
                5.undefined
                6.null
                7.symbol
                8.object

            2.reference datatype
                1.[]
                2.{}
                3.()

                example
        */
        const a=10;
        console.log(a);
        console.log(typeof a,'\n');

       let yourName='SubhamReddy';
       console.log(yourName);
       console.log(typeof yourName,'\n');

       let noobHo=true;
       console.log(noobHo);
       console.log(typeof noobHo,'\n');

       let numberN=19036435325632653263267n; //for big values you have to write 'n' at the end of any big number.
       console.log(numberN);
       console.log(typeof numberN,'\n');

       let noobOne;
       console.log(noobOne);
       console.log(typeof noobOne,'\n');

       let noobTwo = null;
       console.log(noobTwo);
       console.log(typeof noobTwo);

       //hoisting
       /*
       let a;
       console.log(a);  // if you print the value of a variable then it is called hoisting
       a = 10;
       console.log(a);
       */

       /*
       symbol
            1.$
            2.{}
       */
      