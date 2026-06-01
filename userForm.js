//importing modules from other files//
function userForm(req,res){
    res.write(`
         <form action="/submit" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="submit">
    </form>`);
};
module.exports=userForm;