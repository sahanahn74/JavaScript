console.log("connected to external js file");
/*arrow function*/
let ob =
{
    name:'fur',
    prnt: function () {
        console.log('a',this);
        var an_prnnt = ()=>
        {
            console.log('b',this);

        }
        an_prnnt();
    }
};
ob.prnt();