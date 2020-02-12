const sliders = document.getElementsByClassName("slider")

const initSliders = function(slider) {

  /*------------ Would rather move this stuff out of here start --------------*/

  const slides = slider.getElementsByClassName("slides")
  const slidesArr = Array.prototype.slice.call(slides)
  const next = slider.getElementsByClassName("next")[0]
  const numberNavBox = document.createElement("div")
  numberNavBox.className = "navNumbers"
  const numbers = numberNavBox.children
  let currentSlide = 1

  const changeSlide = n => {
    slides[currentSlide-1].style.display = 'none'
    removeActiveNum(currentSlide-1)
    slides[n-1].style.display = 'block'
    activeNum(n-1)
    currentSlide = parseInt(n)
  }

  const calcSlide = n => {
    const slide = currentSlide + n
    if(slide > slides.length) return 1
    else if(slide < 1) return slides.length
    else return slide
  }

  slidesArr.forEach((slide, idx) => {
    const nthBtn = document.createElement("div")
    nthBtn.textContent = idx+1
    nthBtn.classList.add("btn")
    numberNavBox.appendChild(nthBtn)
  })
  slider.insertBefore(numberNavBox, next)

  const activeNum = n => {
    numbers[n].classList.add("activeNumber")
  }
  const removeActiveNum = n => {
    numbers[n].classList.remove("activeNumber")
  }
  activeNum(0)

/*-------------- Would rather move this stuff out of here end --------------*/

  slider.addEventListener( "click", e => {

    const potentialNum = e.target.textContent
    const tagName = e.target.tagName

    if(tagName === "IMG")
      changeSlide(calcSlide(1))
    else if(e.target.classList.contains("next"))
      changeSlide(calcSlide(1))
    else if(e.target.classList.contains("prev"))
      changeSlide(calcSlide(-1))
    else if(!isNaN(potentialNum) && potentialNum !==""){
      changeSlide(potentialNum)
    }
  })
}

;[].forEach.call(sliders, initSliders)
