import showdown from 'showdown'
import './index.css'
import '../base.scss';
import './logo.jpg'
import './newspaper.jpg'
const converter = new showdown.Converter()


async function loadModules() {
  const API = await import('../API')
  const { website } = API 
  return website.then(({ Announcements, APIURL }) => {

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

function showNews() {
  if(newsContainer.children.length) {
    newsContainer.innerHTML = ''
  }

  // window.addEventListener('scroll', () => {
  //   window.pageYOffset > 0 ? nav.classList.remove("has-background-info") : nav.classList.add("has-background-info")
  // })

  // titleDiv.innerHTML =
  // `
  //   <h1>${Announcements.Section}</h1>
  // </div>
  // `
  // subtitle.innerText = Announcements.Supporting_Text
  hero.style.display = 'flex'
  // heroTitle.innerText = Announcements.Section
  // heroSubtitle.innerText = Announcements.Supporting_Text
  // parallaxImage.style.backgroundImage = `url(${'./newspaper.jpg'})`

  breadcrumbList.innerHTML = 
  `
  <li><a href="../Home/index.html">Home</a></li>
  <li class="is-active"><a href="#" aria-current="page">${Announcements.Section}</a></li>
  `

  const fragment = document.createDocumentFragment()
  const columns = document.createElement('div')
  columns.className = 'columns is-multiline'
    Announcements.announcements.map(news => {
      console.log(news.picture.formats.small.url)
        const column = document.createElement('div')
        column.className = 'column is-one-third'
        column.innerHTML = 
        `
          <div class="container">
          <figure class="image is-square">
            <img src="${news.picture.url}">
            <div class="is-overlay overlay"></div>
          </figure>
          <div class="is-overlay is-clickable">
            <h1 class="title has-text-light">
            <p class="single-news-title">${news.Title}</p>
            <button class="button is-link is-inverted is-outlined has-text-weight-bold">READ MORE</button>
            </h1>
          </div>
        `
        columns.appendChild(column)
        const cardAction = column.querySelector('.title')
        const button = column.querySelector('.button')
        const actions = [cardAction, button]
        actions.map(action => {
            action.addEventListener('click', (event) => {
                event.preventDefault()
                showSingleNews(news)
            })
        })
    })
  fragment.appendChild(columns)
  newsContainer.appendChild(fragment)
}

function showSingleNews(news) {

  const otherNewsPosts = Announcements.announcements.filter(announcement => announcement.id === news.id + 1 || announcement.id === news.id - 1)
  console.log(otherNewsPosts)

  hero.style.display = 'none'
  parallaxImage.style.backgroundImage = `url(${news.picture.url})`
  heroTitle.innerText = news.Title 
  heroSubtitle.innerText = ''
  breadcrumbList.innerHTML = 
  `
  <li><a href="#">Home</a></li>
  <li><a href="./index.html">${Announcements.Section}</a></li>
  <li class="is-active"><a href="#" aria-current="page">${news.Title}</a></li>
  `
  newsContainer.innerHTML =
  `
      <div class="news-detail">
      <h6 class="subtitle is-spaced is-size-7">REDEEMED PILLAR OF FIRE</h6>
      <h1 class="title is-1 has-text-weight-light	">${news.Title}</h1>
      <h4 class="has-text-centered">${news.updated_at}</h4>
      <img src="${news.picture.url}">
      <div class="news-content">
        ${news.Content}
      </div>
      <nav class="level">
        <div class="level-left">
        
        </div>
        <div class="level-right">
        <div class="level-item">

        </div>
      </div>
      </nav>
      </div>
  `
  const newsTitle = newsContainer.querySelector('.title')
  newsTitle.scrollIntoView(true)
  otherNewsPosts.map(newsPost => {
    const level = newsContainer.querySelector('.level-left')
    if(newsPost.id === news.id - 1) {
      console.log(level)
      level.innerHTML = 
      `
      <div class="level-item has-text-centered">
        <a class="button is-inverted is-link">
          <h6 class="subtitle is-spaced is-size-7 more-announcements">Previous</h6>
          <h4 class="title is-4 has-text-weight-light">${newsPost.Title}</h4>
        </a>
      </div>
      `
      const button = level.querySelector('.button')
      button.addEventListener('click', () => {
        event.preventDefault();
        console.log(newsPost)
        showSingleNews(newsPost)
      })
    } else {
      const level = newsContainer.querySelector('.level-right')
      level.innerHTML =
      `
      <div class="level-item has-text-centered">
        <a class="button is-inverted is-link">
          <h6 class="subtitle is-spaced is-size-7 more-announcements">Next</h6>
          <h4 class="title is-4 has-text-weight-light">${newsPost.Title}</h4>
        </a>
      </div>
      `
      const button = level.querySelector('.button')
      button.addEventListener('click', () => {
        event.preventDefault();
        console.log(newsPost)
        showSingleNews(newsPost)
      })
    }
  })
  // const button = newsContainer.querySelector('button')
  // button.addEventListener('click', showNews)
}

    showNews()
  })
}

loadModules()


/* 
Test Data

const totalNews = [
  {
  title: 'RPF is now online!',
  picture: 'Online.jpg',
  description: `Cause dried no solid no an small so still widen. Ten weather evident smiling bed against she examine its. Rendered far opinions two yet moderate sex striking. Sufficient motionless compliment by stimulated assistance at. Convinced resolving extensive agreeable in it on as remainder. Cordially say affection met who propriety him. Are man she towards private weather pleased. In more part he lose need so want rank no. At bringing or he sensible pleasure. Prevent he parlors do waiting be females an message society.  

  Over fact all son tell this any his. No insisted confined of weddings to returned to debating rendered. Keeps order fully so do party means young. Table nay him jokes quick. In felicity up to graceful mistaken horrible consider. Abode never think to at. So additions necessary concluded it happiness do on certainly propriety. On in green taken do offer witty of.  
  
  Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.`,
  date: '18/05/2020'
}, {
  title: 'We’ve moved',
  picture: 'Travelling.jpg',
  description: `Cause dried no solid no an small so still widen. Ten weather evident smiling bed against she examine its. Rendered far opinions two yet moderate sex striking. Sufficient motionless compliment by stimulated assistance at. Convinced resolving extensive agreeable in it on as remainder. Cordially say affection met who propriety him. Are man she towards private weather pleased. In more part he lose need so want rank no. At bringing or he sensible pleasure. Prevent he parlors do waiting be females an message society.  

  Over fact all son tell this any his. No insisted confined of weddings to returned to debating rendered. Keeps order fully so do party means young. Table nay him jokes quick. In felicity up to graceful mistaken horrible consider. Abode never think to at. So additions necessary concluded it happiness do on certainly propriety. On in green taken do offer witty of.  
  
  Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.`,
  date: '18/05/2020'
}, {
  title: 'Mandate for the year',
  picture: 'Mandate.jpg',
  description: `Cause dried no solid no an small so still widen. Ten weather evident smiling bed against she examine its. Rendered far opinions two yet moderate sex striking. Sufficient motionless compliment by stimulated assistance at. Convinced resolving extensive agreeable in it on as remainder. Cordially say affection met who propriety him. Are man she towards private weather pleased. In more part he lose need so want rank no. At bringing or he sensible pleasure. Prevent he parlors do waiting be females an message society.  

  Over fact all son tell this any his. No insisted confined of weddings to returned to debating rendered. Keeps order fully so do party means young. Table nay him jokes quick. In felicity up to graceful mistaken horrible consider. Abode never think to at. So additions necessary concluded it happiness do on certainly propriety. On in green taken do offer witty of.  
  
  Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.`,
  date: '18/05/2020'
}, {
  title: 'Response to COVID 19',
  picture: 'COVID.jpg',
  description: `Cause dried no solid no an small so still widen. Ten weather evident smiling bed against she examine its. Rendered far opinions two yet moderate sex striking. Sufficient motionless compliment by stimulated assistance at. Convinced resolving extensive agreeable in it on as remainder. Cordially say affection met who propriety him. Are man she towards private weather pleased. In more part he lose need so want rank no. At bringing or he sensible pleasure. Prevent he parlors do waiting be females an message society.  

  Over fact all son tell this any his. No insisted confined of weddings to returned to debating rendered. Keeps order fully so do party means young. Table nay him jokes quick. In felicity up to graceful mistaken horrible consider. Abode never think to at. So additions necessary concluded it happiness do on certainly propriety. On in green taken do offer witty of.  
  
  Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.`,
  date: '18/05/2020'
}]

*/