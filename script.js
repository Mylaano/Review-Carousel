const reviews = [
    {
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    }
];

const boxImg = document.querySelector(".box-img");
const boxName = document.querySelector(".box-name");
const boxJob = document.querySelector(".box-job");
const boxText = document.querySelector(".box-text");
const arrow = document.querySelectorAll(".arrow");
const boxButton = document.querySelector(".box-button");

let currentIndex = 0;

function randomCarousel() {
    let randomIndex = Math.round(Math.random() * (reviews.length-1 + 0) - 0);

    while(randomIndex == currentIndex) {
        randomIndex = Math.round(Math.random() * (reviews.length-1 + 0) - 0);
    }

    return randomIndex;
}

function updateCarousel() {
    boxImg.src = reviews[currentIndex].img;
    boxName.innerHTML = `${reviews[currentIndex].name}`;
    boxJob.innerHTML = `${reviews[currentIndex].job}`;
    boxText.innerHTML = `${reviews[currentIndex].text}`;
}

arrow.forEach(item => {
    item.addEventListener('click', e => {
        console.log(e.target);
        switch(e.target.dataset.direction) {
            case "left":
                currentIndex--;
                if(currentIndex < 0)
                    currentIndex = reviews.length-1;
            break;
            case "right":
                currentIndex++;
                if(currentIndex >= reviews.length)
                    currentIndex = 0;
            break;
        }

        updateCarousel();
    })
})

boxButton.addEventListener('click', () => {
    currentIndex = randomCarousel();
    updateCarousel();
})

updateCarousel();