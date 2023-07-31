
// olho 1
function showPassword() {
  let passwordInput = document.getElementById('password');
  passwordInput.type = "text";
}

function hidePassword() {
  let passwordInput = document.getElementById('password');
  passwordInput.type = "password";
}

document.getElementById("olho").onclick = showPassword;
document.getElementById("olho").onmouseleave = hidePassword;

//olho 2
function mostrarPassword() {
  let passwordInput = document.getElementById('pass');
  passwordInput.type = "text";
}

function esconderPassword() {
  let passwordInput = document.getElementById('pass');
  passwordInput.type = "password";
}

document.getElementById("olho2").onclick = mostrarPassword;
document.getElementById("olho2").onmouseleave = esconderPassword;

// id="confiPassword" criar um input pra confirmar senha, mexer no mySQL

const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

  // Verificar se o checkbox está marcado e salvar a senha no armazenamento local
  document.getElementById("lembrarSenha").addEventListener("change", function() {
    var senhaInput = document.getElementById("pass");
    if (this.checked) {
      localStorage.setItem("senhaSalva", senhaInput.value);
    } else {
      localStorage.removeItem("senhaSalva");
    }
  });

  // Preencher o campo de senha com o valor salvo ao carregar a página, se existir
  window.addEventListener("load", function() {
    var senhaInput = document.getElementById("pass");
    var senhaSalva = localStorage.getItem("senhaSalva");
    if (senhaSalva) {
      senhaInput.value = senhaSalva;
      document.getElementById("lembrarSenha").checked = true;
    }
  });
  
  //login google
  function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);

    fullName.textContent = data.name
    sub.textContent = data.sub
    given_name.textContent = data.given_name
    family_name.textContent = data.family_name
    email.textContent = data.email
    verifiedEmail.textContent = data.email_verified
    picture.setAttribute("src", data.picture)
  }

  window.onload = function () {

    google.accounts.id.initialize({
      client_id: "195425938133-8v67o5h10152ol0bkkgvqsnfb9uupjsn.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
    );

    google.accounts.id.prompt(); // also display the One Tap dialog
  }

