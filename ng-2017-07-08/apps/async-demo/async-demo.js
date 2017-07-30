// Get user data from database
function getUser() {
    setTimeout(function () {
        var user = {
            id: 1,
            name: 'amar'
        };
        console.log('user:', user);
        return user;
    }, 3000);
}
function doSomething() {
    console.log('Hi');
}
function doAnotherThing() {
    console.log('Bye');
}
doSomething();
getUser();
doAnotherThing();
