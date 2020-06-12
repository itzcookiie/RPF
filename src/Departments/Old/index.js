async function loadModules() {
    const API = await import('../API.js')
    const { website } = API
    website.then(({ Departments, Footer, Navbar, APIURL }) => {
        console.log(Departments, Footer, Navbar, APIURL)

    const modifiedDepartments = Departments.departments.map(department => {
        return {
            ...department,
            image: {
                ...department.image,
                url: `${APIURL}${department.image.url}`
            }
        }
    })

    console.log(modifiedDepartments)


const reelBox = document.querySelector('.departments-container'),
    selected = document.querySelector('.selected');

let = firstNumber = 0,
    secondNumber = 2;

const leftArrow = document.querySelector('.left-arrow'),
    rightArrow = document.querySelector('.right');

function showDepartments(position) {
    const ulElement = document.querySelector('.department-list')
    if(ulElement && ulElement.children.length) {
        ulElement.remove()
    }
    const ul = document.createElement('ul')
    ul.className = "department-list"
    const chosenDepartments = modifiedDepartments.slice(firstNumber, secondNumber)
    const displayDepartments = chosenDepartments
    .map((department,index) => {
        const li = document.createElement('li')
        li.innerHTML = 
        `
            <li class="item${index}">${department.Title}</li>
        `

        ul.appendChild(li)
    })
    reelBox.appendChild(ul)

    const middleDepartment = position === 'start' ?  secondNumber - firstNumber - 2 : secondNumber - firstNumber - 1

    console.log(chosenDepartments, 'cd', firstNumber, secondNumber)

    if(chosenDepartments.length === 3) {
        return showDepartment(chosenDepartments[secondNumber - firstNumber - 2])
    }
    if(firstNumber === 0) {
        return showDepartment(chosenDepartments[firstNumber])
    }
    if(secondNumber === modifiedDepartments.length) {
        return showDepartment(chosenDepartments[secondNumber - firstNumber - 1])
    }
}

function showDepartment(department) {
    console.log(firstNumber, secondNumber, 'now')
    if(selected.children) {
        selected.innerHTML = ''
    }
    console.log(department.Title, department)
    const headerTitle = document.createElement('h1')
    if(department.Title === 'Youth') {
        selected.innerHTML = 
        `
            <h1>
                <a href="youth-ministry.html">${department.Title}</a>
            </h1>
            <img src="./${department.image.url}.jpg">
        `
    } else {
    selected.innerHTML = 
    `
        <h1>${department.Title}</h1>
        <img src="${department.image.url}">
    `
    }
}

const arrows = [leftArrow, rightArrow]

arrows.map(arrow => {
    arrow.addEventListener('click', event => {
        const parent = event.target.parentNode.className
        if (parent === 'right') {
            if(secondNumber === 2) {
                secondNumber += 1
                return showDepartments()
            } else if(secondNumber === modifiedDepartments.length && firstNumber === secondNumber - 2) {
                return showDepartments()
            } else if(secondNumber === modifiedDepartments.length) {
                firstNumber = secondNumber - 2
                return showDepartments()
            } else {
                secondNumber += 1
                firstNumber = secondNumber - 3
                return showDepartments()
            }
        } else {
            if(firstNumber === 0) {
                secondNumber = firstNumber + 2
                return showDepartments()
            } else if(firstNumber === modifiedDepartments.length - 2) {
                firstNumber = modifiedDepartments.length - 3
                return showDepartments()
            }
            else {
                firstNumber -= 1
                secondNumber = firstNumber + 3
                return showDepartments()
            }
        }
    })
})

    showDepartments()
})
}

loadModules()
