// https://superheroapi.com/api/1073214297441026/245

const SUPERHERO_TOKEN = '1073214297441026'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const searchButton = document.getElementById('searchButton')
const newHeroButton = document.getElementById('newHeroButton')
const searchInput = document.getElementById('searchInput')
const refreshButton = document.getElementById('refresh')




const getStatsHtml = (character) => {
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`

    })
    console.log(stats.join(''));
    return stats.join('');
}



const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            const stats = getStatsHtml(json)
            console.log(json)
            getStatsHtml(json)
            document.querySelector("body").innerHTML += `<h1> "${json.name}" <h1/>`
            document.querySelector("body").innerHTML += `<img src= "${json.image.url}" height= 400 width= 400/>${stats} `


        })
}





const getSearchSuperHero = (name) => {

    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {

            const hero = json.results[0]
            const stats = getStatsHtml(hero)
            console.log(hero)
            document.querySelector("body").innerHTML += `<h1> "${hero.name}" <h1/>`
            document.querySelector("body").innerHTML += `<img src= "${hero.image.url}" height= 400 width= 400/> ${stats} `

        })
}

searchButton.onclick = () => getSearchSuperHero(searchInput.value)

newHeroButton.onclick = () => getSuperHero(Math.floor(Math.random() * 731) + 1)



function refreshPage() {
    window.location.reload();
}




