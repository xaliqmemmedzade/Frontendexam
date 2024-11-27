const ad = document.querySelector('.ad')
const sahe = document.querySelector('.sahe')
const flag = document.querySelector('.flag img')
const capital = document.querySelector('.capital')
const gerb = document.querySelector('.gerb img')



fetch('https://restcountries.com/v3.1/name/azerbaijan')
    .then(res => res.json())
    .then(data => data.forEach((element) => {
        console.log(ad)
        let lastData = element.name
        console.log(lastData)   
        console.log(lastData.common);
        console.log(element.flags.png);
        ad.innerHTML = `${lastData.common}`
        flag.src= `${element.flags.png}`
        console.log(sahe);
    }))