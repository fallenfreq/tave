// ==UserScript==
// @name        Tave css
// @namespace   Violentmonkey Scripts
// @match       https://tave.com/app/*
// @grant       none
// @run-at      document-start
// @version     1.0
// @author      -
// @description 12/02/2020, 20:30:08 adds new css to tave at start
// ==/UserScript==

const styleLoader = styleMap => {
  styleMap.forEach(pair => {
    const regex = pair[0]
    const link = pair[1]
    if( regex.test( window.location.href )) {
        const style = document.createElement('link')
        style.type = 'text/css'
        style.href = convertDropBoxLink(link)
        style.rel = 'stylesheet'
        document.getElementsByTagName('head')[0].appendChild(style)
    }
  })
}

const convertDropBoxLink = link => {
  const regex = /w+\.\w+/
  return link.replace(regex, "dl.dropboxusercontent")
}

styleLoader([
  [/forms\/response\/edit/, "https://www.dropbox.com/s/br1wztkektlrssy/questionnaire.css?dl=0"],
  [/jobs\/(edit)|(forms\/response\/edit)|(orders\/new)/, "https://www.dropbox.com/s/4ou7ytoh13v9r3c/missingPopup.css?dl=0"],
  [/tave/, "https://www.dropbox.com/s/yuuuphroc2xvfgd/due.css?dl=0"],
  [/tave/, "https://www.dropbox.com/s/yuuuphroc2xvfgd/due.css?dl=0"],
  [/tave/, "https://www.dropbox.com/s/gp9br6efer57fvv/smallNav.css?dl=0"],
  [/tave/, "https://www.dropbox.com/s/c9jodd0exqo1f4s/forceWhiteText.css?dl=0"],
  [/app\/tasks/,"https://www.dropbox.com/s/ntgxkbvg0j1v0dk/taskFliter.css?dl=0"],
  [/calendar\/month/,"https://www.dropbox.com/s/gmin5sf0yx9jg9y/expandBlocks.css?dl=0"],
  [/calendar/,"https://www.dropbox.com/s/72i1kc7ulv7a1aj/largeCal.css?dl=0"],
  [/calendar\/month/,"https://www.dropbox.com/s/72i1kc7ulv7a1aj/largeCal2.css?dl=0"],
])
