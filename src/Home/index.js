import showdown from 'showdown';
import '../base.scss';
import './index.scss';
import carousel0 from './fiyin-reading-bible.jpg';
import carousel1 from './livestream-fellowship.jpg';
import carousel2 from './carousel-2.jpg';
import carousel3 from './samuel-with-bible-on-head.jpg';
import welcome_pic from './samuel.jpg';
import kentThursdayEvent from './kent-thursday-event.jpg';
import fridayBibleStudy from './bible-study.jpg';
import './carousel-1.jpg';
import './podcast.jpg';
import './livestream-fellowship.jpg';
import video from './welcome-to-kent.mp4';
import bulmaCollapsible from '@creativebulma/bulma-collapsible';

bulmaCollapsible.attach('.is-collapsible');

const instaImageElements = document.querySelectorAll('.follow-us-on-insta-section img');
const instaImages = [carousel0, carousel1, carousel2, carousel3];
instaImageElements.forEach((image, index) => {
  image.src = `${instaImages[index]}`;
})
document.querySelector('video').src = video
document.querySelector('video').play();

const converter = new showdown.Converter()

document.addEventListener('scroll', e => {
  const button = document.querySelector('.navbar-end .button')
  if(!!window.scrollY) {
    document.body.classList.add('fixnav');
    button.classList.add('is-outlined');
  } else {
    document.body.classList.remove('fixnav');
    button.classList.remove('is-outlined');
  }
})

async function loadModules() {
  const API = await import('../API')
  const { website } = API
  return website.then(({ Announcements, Footer, Navbar, APIURL, ...rest }) => {

    console.log(rest["Livestream"])

    const keys = Object.keys(Footer)
    const logoAndSocialMediaKeys = keys.filter(key => key === 'logo' || key === 'social_medias')
    const modifiedFooter = logoAndSocialMediaKeys.reduce((footerData, key) =>
          key === 'logo'
          ? ({
            ...footerData,
            logo: {
              ...Footer.logo,
              url: `${APIURL}${Footer.logo.url}`
            }
          })
          : ({
            ...footerData,
            social_medias: footerData.social_medias.map(sm =>
                ({
                  ...sm,
                  Icon: {
                    ...sm.Icon,
                    url: `${APIURL}${sm.Icon.url}`
                  }
                })
              )
          })
      ,{...Footer})

      console.log(modifiedFooter)

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
const footerLinks = document.querySelector('.footer-links'),
      footerLogo = document.querySelector('.footer-logo'),
      footerLocation = document.querySelector('.footer-location');
const newsContainer = document.querySelector('.root')
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
  breadcrumbList.innerHTML =
  `
  <li><a href="../Home/index.html">Home</a></li>
  <li class="is-active"><a href="#" aria-current="page">${Announcements.Section}</a></li>
  `
}
    showNews()
  })
}

// loadModules()


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
