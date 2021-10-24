const linksSocialMedia = {
  instagram: 'jonasnunesjj',
  facebook: 'jonas.nunes.56',
  twitter: 'jonas_nunees',
  linkedin: 'in/jonas-nunes-🇧🇷-7b6945138/'
}

function changeSocialMediaLinks(){

  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }

}

changeSocialMediaLinks()