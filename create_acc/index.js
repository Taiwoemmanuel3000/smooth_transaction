function createAccount() {
    const username = $("#username").val();
    const email = $("#email").val();

    const user = {
        id: Date.now(),
        username,
        email
    };

    localStorage.setItem("user", JSON.stringify(user));

    $("#accountResult").text("Account created for " + username);
}