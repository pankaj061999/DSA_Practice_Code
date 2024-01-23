const userNameValidation = (username) => {
  if (username.length < 4) {
    return false;
  }

  if (username[username.length - 1] === "_") {
    return false;
  }

  let flag = true;

  for (let i = 0; i < username.length; i++) {
    /* if(+username[i]) */
    //console.log("Print nuber ==>>", +username[i])
    if (username[i] >= 0 && username[i] < 10) {
      flag = false;
    }
  }

  console.log("Print flag =====>..", flag);
};

let username = "pankaj96_meena"; // 1.) length>4 2.) username not have any nuber , 3.) username lastname not end "_" && nuber.

userNameValidation(username);
