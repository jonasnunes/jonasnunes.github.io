// objeto contendo o nome de usuário das minhas redes sociais
const linksSocialMedia = {
  instagram: 'jonasnunesjj',
  facebook: 'jonas.nunes.56',
  twitter: 'jonas_nunees',
  linkedin: 'in/jonasnunees/'
}

function changeSocialMediaLinks(){

  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }

}

changeSocialMediaLinks()

// github
const linkGitHubProfile = {
  github: 'jonasnunes'
}

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linkGitHubProfile.github}`

  fetch(url).then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    // userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()

// exibindo a data atual
let date = document.getElementById('date')

let data = new Date()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()

switch(mes){
  case 0:
    mes = 'Janeiro'
    break
  case 1:
    mes = 'Fevereiro'
    break
  case 2: 
    mes = 'Março'
    break
  case 3: 
    mes = 'Abril'
    break
  case 4: 
    mes = 'Maio'
    break
  case 5: 
    mes = 'Junho'
    break
  case 6: 
    mes = 'Julho'
    break
  case 7: 
    mes = 'Agosto'
    break
  case 8: 
    mes = 'Setembro'
    break
  case 9: 
    mes = 'Outubro'
    break
  case 10: 
    mes = 'Novembro'
    break
  case 11: 
    mes = 'Dezembro'
    break
}

date.innerHTML = `${dia} de ${mes} de ${ano}`

// efeito de escrita na tela
function typeWriter(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = '';
  textArray.forEach((letter, i) => {
     setTimeout(() => element.innerHTML += letter, 130 * i);
  });
};

const title = document.querySelector('p');
typeWriter(title);
