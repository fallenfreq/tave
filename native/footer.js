// gets source code from url
// needs to be used with a cors proxy if using cross domain
// eg: "https://cors-anywhere.herokuapp.com/"
  function httpGetAsync(theUrl, callback, proxy) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText)
    }
    xmlHttp.open("GET", theUrl, true)
    xmlHttp.send(null)
}

// variable for content box on tave pages
const contentBox = document.getElementById("Content")
const header = document.getElementById("Header")

// set svg logo hosted on CatsDog website as the header content
const getProxy = "https://cors-anywhere.herokuapp.com/"
const svgLogoUrl = "https://catsdog.co.uk/wp-content/uploads/2019/10/CatsDog_Wordmark.svg"
const addLogoToHeader = sourceCode => {
  header.innerHTML = "<div class='svgBox'>"+sourceCode+"</div>"
}
const svgLogo = httpGetAsync(getProxy+svgLogoUrl,addLogoToHeader)

// check if you are on a contact page by id
const onContactPage = id => document.body
.getAttribute('data-request-path') === 'contact/'+id

// get an array of all labels that contain the passed in text
const textNodeParents = text => Array.prototype.slice
.call( document.getElementsByTagName('label') )
.filter( el => RegExp(text).test(el.textContent) )

// contact form variables
const privacyOptInNo = document.getElementById("PrivacyOptIn_01")
, privacyOptInYes = document.getElementById("PrivacyOptIn_00")
, enterBtn = document.getElementById("Save")
, form = document.getElementById('EditForm')

// if on a contact page that has loaded through an iFrame
// tave chaneges href brand in url to brand-inline
// native js way of checking is the second condition
if( /tave\.com\/catsdog-inline\/contact/.test(window.location.href) || window.self !== window.top ) {
  // set max width to 100% so form fills container
  document.getElementsByClassName("contactFormContainer")[0].style.maxWidth = "none"
  // remove padding from contact form in iframe
  contentBox.style.padding = 0
}

// if on FB Prize draw entery page
if(onContactPage('52215c')) {

  // Warn users that they need to select yes to enter
  const blockAndWarn = e => {
    e.preventDefault()
    alert('You must select "Yes, I love all things dog" to enter the prize draw')
  }

  // block the form from submitting when clicked if No is selected
 enterBtn.addEventListener('click', e => {
    if( privacyOptInNo.checked )
    blockAndWarn(e)
  })

  // block enter from submitting form if No is selected
  form.addEventListener('keypress', e => {
    if( e.keyCode == 13 && privacyOptInNo.checked )
    blockAndWarn(e)
  })

}
