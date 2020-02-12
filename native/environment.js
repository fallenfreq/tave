/* style loader already exsists, need to make all this code modular */
/* Cross-Origin Read Blocking (CORB) blocked cross-origin response text/plain */

const scriptLoader = link => {
  const script = document.createElement('script')
  script.src = link
  script.type = 'text/javascript'
  document.getElementsByTagName('body')[0].appendChild(script)
  console.log({script, link})
}

const liveEnviroment = true
let fileHref

if(liveEnviroment === true)
fileHref = "https://raw.githubusercontent.com/fallenfreq/tave/a1aabb178e70b3b0b832332b0848f4016221862e/native/footer.js"
if(liveEnviroment === false)
fileHref =  "https://dl.dropboxusercontent/s/gmo2uy84vywier1/footer.js"

scriptLoader(fileHref)
