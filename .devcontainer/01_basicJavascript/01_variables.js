const accountId = 1233442
let accountEmail = "vipin@google.com"
var accountPassword = "12345"
accountCity = "Gurugram"
let accountState;

/* above we declare accountState without any provided
value this will return undefined */

/*prefer not to use var
because of issues in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])