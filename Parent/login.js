let users = [
    {
        "user_name":"Mostafa",
        "password":"mostafa123"
    },
    {
        "user_name":"Hamza",
        "password":"hamza123"
    }
];
function login()
{
    let usrname = document.getElementById("user");
    let pass_word = document.getElementById("pass");
    let check = false;
    for(let i = 0;i<users.length; i++)
    {
        if(users[i].user_name == usrname.value && users[i].password == pass_word.value)
        {
            check = true;
        }
    }
    if(check == true)
    {
        window.location.assign('index.html');
    }
    else
    {
        alert("some thing wrong :(");
    }
}