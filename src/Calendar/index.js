import showdown from 'showdown'
import './index.css'
const converter = new showdown.Converter()


async function loadModules() {
  const API = await import('../API')
  const { website } = API 
  return website.then(({ Calendar }) => {

    console.log(Calendar)

const titleDiv = document.querySelector('.display .title')
const container = document.querySelector('.display .container')
const nav = document.querySelector('.navbar')
const breadcrumb = document.querySelector('.breadcrumb')
const breadcrumbList = breadcrumb.querySelector('ul')
const parallaxImage = document.querySelector('.parallax')
const heroTitle = document.querySelector('.hero .title')
const heroSubtitle = document.querySelector('.hero .subtitle')

function showNews() {

  heroTitle.innerText = Calendar.Section
  heroSubtitle.innerText = Calendar.Supporting_Text
  // parallaxImage.style.backgroundImage = `url(${'./newspaper.jpg'})`

  breadcrumbList.innerHTML = 
  `
  <li><a href="../Home/index.html">Home</a></li>
  <li class="is-active"><a href="#" aria-current="page">${Calendar.Section}</a></li>
  `

  // titleDiv.innerText = Calendar.extra_text

  const stringToNode = document.createRange().createContextualFragment(Calendar.Calender)

  container.appendChild(stringToNode)
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