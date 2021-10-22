const linksSocialMedia = {
  instagram: 'jonasnunesjj',
  facebook: 'jonas.nunes.56',
  twitter: 'jonas_nunees',
  youtube: 'channel/UC_iFTfXj8nIKwwFln0CQIhA'
}

function changeSocialMediaLinks(){

  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }

}

changeSocialMediaLinks()