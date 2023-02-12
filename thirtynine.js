//Promise    //It's a substitue of callback fn
//-Resolve
//-Reject
//-pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Function:Your issue has been resolved");
                resolve();
            }
            else {
                console.log("Function:Your promise has not been resolved");
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })

}
func1().then(function(){    //If resolve then it will call
    console.log("Kaifee:Thanks for resolving")
}).catch(function(error){       ////If reject then it will call
    console.log("Kaifee:Very bad bro " + error)
})

//function inside then is ran as -resolve()
//function inside catch is ran as -reject()