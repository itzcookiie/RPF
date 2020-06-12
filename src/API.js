// const pageIDs = [
//     'about-the-church', 'announcement-page', 'tithe-donate', 'footer-page', 'livestream-hours', 'navbar', 'how-the-church-started', 'salvation-prayer', 'youth-ministry', 'contact-page', 'home-page', 'services-page', 'department', 'events'
// ]

const pageIDs = [
    'about-the-church', 'announcement-page', 'how-the-church-started', 'contact-page', 'events'
]

export const website = Promise.all(pageIDs.map(pageID => {
    return fetch(`https://rpfchurch.herokuapp.com/${pageID}`)
        .then(r => r.json())
    }))
    .then(result => 
        result.reduce((pages, page) => 
            ({
                ...pages,
                [page.Section]: page,
            }), {APIURL: 'http://localhost:1337'})
    )
