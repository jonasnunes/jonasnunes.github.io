const linkGitHubProfile = {
  github: 'jonasnunes'
}

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linkGitHubProfile.github}`

  fetch(url).then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()