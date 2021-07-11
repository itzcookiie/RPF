import showdown from 'showdown'
import '../base.scss';
import './index.css'
import './dial.jpg'
const converter = new showdown.Converter()


async function loadModules() {
  const API = await import('../API')
  const { website } = API 
  return website.then(({ Contact, APIURL }) => {

    const contactInfo = [];
    console.log(Contact)

    for(const key in Contact) {
      if(key === 'location' || key == 'contact_number') {
        if(Contact[key].length) {
          const contactNum = Contact[key].find(p => p)
          const newContactNum = {
            ...contactNum,
            supporting_text: converter.makeHtml(contactNum.supporting_text)
          }
          contactInfo.push(newContactNum)
        } else {
          const newLocationInfo = {
            ...Contact[key],
            address: converter.makeHtml(Contact[key].address),
            direction: converter.makeHtml(Contact[key].direction),
            supporting_text: converter.makeHtml(Contact[key].supporting_text)
          }
          contactInfo.push(newLocationInfo)
        }
      }
    }

    console.log(contactInfo)

const contactMsg = document.querySelector('.contactMsg')
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
  heroTitle.innerText = Contact.Section

  breadcrumbList.innerHTML = 
  `
  <li><a href="../Home/index.html">Home</a></li>
  <li class="is-active"><a href="#" aria-current="page">${Contact.Section}</a></li>
  `

  const fragment = document.createDocumentFragment()
  const columns = document.createElement('div')
  columns.className = 'columns is-multiline'
    contactInfo.map(cInfo => {
        const column = document.createElement('div')
        column.className = 'column is-one-half'
        if(cInfo.section) {
          column.innerHTML = 
          `
          <section>
            <div class="container has-text-centered">
              <h1 class="title">${cInfo.section}</h1>
              ${cInfo.direction}
              ${cInfo.supporting_text}
            </div>
          </section>
          `
          const aTag = column.querySelector('a')
          aTag.href = '../Livestream/index.html'
        } else {
          column.innerHTML = 
          `
          <section>
            <div class="container has-text-centered">
              <h1 class="title">Contact number</h1>
              <p >${cInfo.supporting_text}</p>
              <p>Phone number: ${cInfo.phone_number}</p>
            </div>
          </section>
          `
        }
        columns.appendChild(column)
    })
  fragment.appendChild(columns)
  // newsContainer.appendChild(fragment)
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