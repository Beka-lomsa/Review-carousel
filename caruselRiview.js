const animalList = [
    {
        img: "./src-carusel/Red-Panda.jpg",
        name: "Red panda",
        description: "Smily",
        about:"You might know this one as the star of the movie Turning Red. The red panda is an adorable mammal, native to China and the Himalayas. With red and brown fur and cat-like ears, it looks more like a raccoon than a panda.",
    },
    {
        img: "./src-carusel/Flying-fox.webp",
        name:"Flying fox",
        description: "Bat-fox",
        about:"This animal isn’t actually a fox that flies. But it’s easy to understand how it got that name. A flying fox is a type of bat, called a “megabat,” because of its huge size. But don't let that scare you. They mostly eat fruit, which is why they're also known",
    },
    {
        img:"./src-carusel/Pangolin.webp",
        name:"Pangolin",
        description:"Searcher",
        about:"The pangolin is a unique mammal found in Asia and Africa. It's known for its overlapping scales that look a bit like medieval armour. When threatened, the pangolin curls up into an armoured ball and looks like a giant pine cone",
    },
    {
        img:"./src-carusel/Proboscis-monkey.webp",
        name:"Proboscis monkey",
        description:"Lier",
        about:"This might be one of the silliest-looking monkeys in the world! The proboscis  monkey can be identified by its long nose and bright coat. Proboscis actually means nose, and is how the animal got its name. The males tend to have large, bulbous noses. ",
    },
    {
        img:"./src-carusel/Philippine-Eagle.webp",
        name:"The Philippine eagle",
        description:"Cleaver",
        about:"It's the biggest eagle in the world in terms of wingspan. From end to end, their average wingspan is around two metres! That's as big as a cougar! At that size, it’s no surprise they can hunt anything from monkeys to flying foxes",
    }
]

const imgDisplay = document.querySelector('.img');
const nameOf = document.getElementById('name');
const description = document.getElementById('description');
const aboutOf = document.querySelector('#about');
const buttons = document.querySelectorAll('.buttons');
let count = 0

window.addEventListener('DOMContentLoaded', () => {
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const selected = e.currentTarget.classList
        if(selected.contains('right-btn')){
            count++
            if(count > animalList.length - 1){
                count = 0;
            }
            imgDisplay.src = animalList[count].img
            nameOf.textContent = animalList[count].name
            description.textContent = animalList[count].description
            aboutOf.textContent = animalList[count].about
            
        }else if(selected.contains('left-btn')){
            count--
            if(count < 0){
                count = animalList.length - 1;
            }
            imgDisplay.src = animalList[count].img
            nameOf.textContent = animalList[count].name
            description.textContent = animalList[count].description
            aboutOf.textContent = animalList[count].about
        }else if(selected.contains('random-btn')){
            const randCount = Math.floor(Math.random() * animalList.length)
            imgDisplay.src = animalList[randCount].img
            nameOf.textContent = animalList[randCount].name
            description.textContent = animalList[randCount].description
            aboutOf.textContent = animalList[randCount].about
        }
       
      })
    })  
})

