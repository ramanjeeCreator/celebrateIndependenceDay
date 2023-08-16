let allElements = document.querySelectorAll('body>*');
allElements[0].remove();
allElements[1].remove();
allElements[2].remove();
allElements[3].remove();

let cont = document.createElement('div');
let contP = document.createElement('p');
let contI1 = document.createElement('img');
let contI2 = document.createElement('img');

cont.setAttribute("class", 'container');
document.body.appendChild(cont);

contP.textContent = "तिरंगे को टच करके देखो";
cont.appendChild(contP);

contI1.setAttribute("src", "./img/arrow.gif");
contI1.setAttribute("alt", "IMG");
contI1.setAttribute("id", "arrow");
cont.appendChild(contI1);

contI2.setAttribute("src", "./img/flag-with-animation.gif");
contI2.setAttribute("alt", "IMG");
contI2.setAttribute("id", "flag");
cont.appendChild(contI2);

contI2.addEventListener('click', () => {
    cont.remove();
    contP.remove();
    contI1.remove();
    contI2.remove();

    document.body.appendChild(allElements[0]);
    document.body.appendChild(allElements[1]);
    document.body.appendChild(allElements[2]);
    document.body.appendChild(allElements[3]);

    
    try {
        const locationSearch = window.location.search;
        
        const urlParam = new URLSearchParams(locationSearch);
        
        let name = urlParam.get('name');
        if (name == null) {
            console.log('Name is not set!, Please set name then Enter...');
        } else {
            console.log(name, "is now live on the site");
            document.getElementById('change-it1').innerHTML = name;
            document.getElementById('change-it3').innerHTML = name;
            document.getElementById('change-it2').innerHTML = name;
        }
        
        
        let createOwn = document.getElementById('create-own');
        createOwn.addEventListener('click', () => {
            let createName = prompt("Write the name you wan't to create!", "Raman Jee")
            let createURL = `https://${window.location.host}/?name=${createName}`;
            window.location.replace(createURL);
        });
    } catch (error) {
        console.log(error);
    }


    let imgChange = document.getElementById('img1');
    let first = setInterval(() => {
        imgChange.setAttribute("src", "./img/15th-aug-img2.png");
    }, 1500);
    let second = setInterval(() => {
        imgChange.setAttribute("src", "./img/15th-aug-img3.png");
    }, 3000);
    setInterval(() => {
        imgChange.setAttribute("src", "./img/15th-aug-img1.png");
    }, 4500);

    function getDateDifference(date1, date2) {
        let timeDifference = Math.abs(date2 - date1);

        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        timeDifference -= days * (1000 * 60 * 60 * 24);

        let hours = Math.floor(timeDifference / (1000 * 60 * 60));
        timeDifference -= hours * (1000 * 60 * 60);

        let minutes = Math.floor(timeDifference / (1000 * 60));
        timeDifference -= minutes * (1000 * 60);

        let seconds = Math.floor(timeDifference / 1000);

        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }


    let dateDifference = "";
    setInterval(() => {
        let date1 = new Date();
        let date2 = new Date('2023-08-15 00:00:00');
        dateDifference = getDateDifference(date1, date2);
        day.innerHTML = dateDifference.days;
        hours.innerHTML = dateDifference.hours;
        minutes.innerHTML = dateDifference.minutes;
        seconds.innerHTML = dateDifference.seconds;
    }, 1);
})
