import { Auth, Amplify } from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

try {
  const username = document.querySelector("#email").value;
  const { user } = await Auth.signUp({
    username,
    password: document.querySelector("#password").value,
    attributes: {
      phone_number: document.querySelector("#phone-number").value,
    },
  });

  window.location.href = "/confirm.html?username=" + username;
} catch (err) {
  console.log(err);
}

document.querySelector("#sign-up-button").addEventListener("click", () => {
  handleSignUp();
});
