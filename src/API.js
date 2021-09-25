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

const getImages = async () => {
    const response = await fetch('http://127.0.0.1:8000/images/');
    const json = await response.json();
    const data = json.resources.reduce((images, image) => {
        if (image.tags.includes('logo')) {
            return {
                ...images,
                logo: image["secure_url"]
            }
        } else {
            const pageName = image["public_id"].split("/")[1].split(" ")[0]
            return {
                ...images,
                [pageName]: {
                    ...images[pageName],
                    [image.tags.find(t => t)]:
                        images[pageName] && images[pageName][image.tags.find(t => t)] ? [...images[pageName][image.tags.find(t => t)], image["secure_url"]] : [image["secure_url"]]
                }
            }
        }
    }, {})
}