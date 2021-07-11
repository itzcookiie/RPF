import showdown from 'showdown'
import './index.css'
import '../../base.scss';
const converter = new showdown.Converter()


async function loadModules() {
  const API = await import('../../API')
  const { website } = API 
  return website.then(({ Announcements, Footer, Navbar, APIURL, ...rest }) => {
    const churchHistory = rest["How the church started"]
   const aboutTheChurch = rest["About us"]
   console.log(churchHistory)


   const modifiedImages = churchHistory.images.map(image => {
     return {
       ...image,
          url: `${APIURL}${image.url}`
     }
   })

   const paragraphs = churchHistory.Content.split(/\n/g).filter(p => p)
   console.log(paragraphs)

   const modifiedChurchHistory = {
     ...churchHistory,
     Content: paragraphs.map(paragraph => converter.makeHtml(paragraph)),
     images: [
      ...modifiedImages
     ]
   }

const newsContainer = document.querySelector('.news-container')
const titleDiv = document.querySelector('.title')
const subtitle = document.querySelector('.subtitle')
const nav = document.querySelector('.navbar')
const breadcrumb = document.querySelector('.breadcrumb')
const breadcrumbList = breadcrumb.querySelector('ul')
const hero = document.querySelector('.hero')
const heroBody = document.querySelector('.hero-body')
const parallaxImage = document.querySelector('.parallax')
const heroTitle = document.querySelector('.hero .title')
const heroSubtitle = document.querySelector('.hero .subtitle')
const contentDiv = document.querySelector('.church-content')
const contentColumnsDiv = document.querySelector('.church-content .columns')

function showNews() {
  if(newsContainer.children.length) {
    newsContainer.innerHTML = ''
  }

  hero.style.display = 'flex'
  heroTitle.innerText = modifiedChurchHistory.Section
  heroSubtitle.innerText = 'Our journey so far'

  breadcrumbList.innerHTML = 
  `
  <li><a href="../../Home/index.html">Home</a></li>
  <li class="is-active"><a href="#" aria-current="page">${modifiedChurchHistory.Section}</a></li>
  `
  function showImageAndText(frag, divElement, containsImage, position) {
    // Rewrite using Media Object
    if(position === 'left') {
      for(const element of frag.children) {
        const image = element.removeChild(containsImage)
        divElement.className = 'columns is-vcentered'
        divElement.innerHTML = 
        `
          <div class="column">
            <figure class="image is-square">
              <img src="${image.src}">
            </figure>
          </div>
          <div class="column content">
            <p>${element.innerHTML}</p>
          </div>
        `
        contentDiv.appendChild(divElement)
      }
    } else {
      for(const element of frag.children) {
        const image = element.removeChild(containsImage)
        divElement.className = 'columns is-vcentered'
        divElement.innerHTML = 
        `
          <div class="column content">
            <p>${element.innerHTML}</p>
          </div>
          <div class="column">
            <figure class="image is-square">
              <img src="${image.src}">
            </figure>
          </div>
        `
        contentDiv.appendChild(divElement)
      }
    }
  }

  //Possibly createDocFragment, append to that, then append to contentDiv for one smooth motion

  //For ordering images, check if index is divisible by 2. All even numbers go on the right
  modifiedChurchHistory.Content.map((church,index) => {
    const frag = document.createRange().createContextualFragment(church)
    const containsImage = frag.querySelector('img')
    const columnsDiv = document.createElement('div')
    const containsText = frag.querySelector('p').innerText
    if(containsImage && containsText) {
      if(index % 2 === 0) {
        showImageAndText(frag, columnsDiv, containsImage, 'left')
      } else {
        showImageAndText(frag, columnsDiv, containsImage, 'right')
      }
    } else {
      columnsDiv.className = 'columns'
      columnsDiv.appendChild(frag)
      contentDiv.appendChild(columnsDiv)
    }
  })
}

    showNews()
  })
}

loadModules()