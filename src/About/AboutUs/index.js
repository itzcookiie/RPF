import showdown from 'showdown'
import './index.css'
import './cover.jpg'
import '../RPF-Church-Cover.jpg'

const converter = new showdown.Converter()


async function loadModules() {
  const API = await import('../../API')
  const { website } = API 
  return website.then(({ Announcements, Footer, Navbar, APIURL, ...rest }) => {
   const aboutTheChurch = rest["About us"]
   console.log(rest)

   const aboutTheChurchKeys = Object.keys(aboutTheChurch.RPF)
   const pictureKeys = aboutTheChurchKeys.filter(key => key === 'url' || key === 'formats')
   const modifiedAboutTheChurch = pictureKeys.reduce((newAboutTheChurch, pictureKey) => {
       // Randomly adding markdown to one of the iterations.
       // Ideally, I would have made sure there was a Content key in pictureKeys
       // I would have changed the variable name as well
       // But I want to get the website now as soon as possible, therefore I am skipping some steps
       // TODO: Filter for 'Content' and 'RPF' keys in aboutTheChurchKeys
       // Map over the keys and if key is 'RPF', extract the keys 'url' and 'formats' from aboutTheChurch.RPF object
       // Make a switch statement for if key === 'Content', 'url' and 'formats'
       const newAboutTheChurchObject = newAboutTheChurch.find(n => n)
       return pictureKey === 'url' ?
       ([
           {
        ...newAboutTheChurchObject,
        RPF: {
            ...newAboutTheChurchObject.RPF,
            url: `${APIURL}${newAboutTheChurchObject.RPF.url}`
        }
       }]
       )
       :
       ([
           {
        ...newAboutTheChurchObject,
        Content: converter.makeHtml(newAboutTheChurchObject.Content),
        RPF: {
            ...newAboutTheChurchObject.RPF,
            formats: {
                ...newAboutTheChurchObject.RPF.formats,
                small: {
                    ...newAboutTheChurchObject.RPF.formats.small,
                    url: `${APIURL}${newAboutTheChurchObject.RPF.formats.small.url}`
                }
            }
        }
       }
    ])
   }, [aboutTheChurch])

    const modifiedAnnouncements = Announcements.announcements.map(announcement => {

      return {
        ...announcement,
        Content: converter.makeHtml(announcement.Content),
        updated_at: new Date(announcement.updated_at).toLocaleDateString(),
        picture: {
          ...announcement.picture,
          url: `${APIURL}${announcement.picture.url}`,
          formats: {
            ...announcement.picture.formats,
            small: {
              ...announcement.picture.formats.small,
              url: `${APIURL}${announcement.picture.formats.small.url}`
            }
          }
        }
      }
    })

    console.log(modifiedAboutTheChurch, 'lool')


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
const contentDiv = document.querySelector('.church-content .columns')

function showNews() {
  if(newsContainer.children.length) {
    newsContainer.innerHTML = ''
  }

  hero.style.display = 'flex'
  heroTitle.innerText = aboutTheChurch.Section
  heroSubtitle.innerText = 'Who is Redeemed Pillar of Fire?'

  breadcrumbList.innerHTML = 
  `
  <li><a href="../../Home/index.html">Home</a></li>
  <li class="is-active"><a href="#" aria-current="page">${aboutTheChurch.Section}</a></li>
  `

  modifiedAboutTheChurch.map(church => {
    contentDiv.innerHTML = 
    `
        <div class="column">
            ${church.Content}
        </div>
        <div class="column">
            <img class="content-image" src="../../assets/image/RPF-Church-Cover.jpg">
        </div>
    `
  })
}

    showNews()
  })
}

loadModules()