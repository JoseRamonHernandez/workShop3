import axios from 'axios';

const apiKey = '25745ce0da2954b896c845ab208d6851';
const iconUrl = 'http://openweathermap.org/img/wn/';
//const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${apiKey}&units=metric`);
//const  ciudad = respuesta.data.name;

const input = document.querySelector('input');
const form = document.querySelector('form');

const getData = async (city) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const  ciudad = respuesta.data.name;
    const pais = respuesta.data.sys.country;
    const temp = respuesta.data.main.temp;
    const icon = respuesta.data.weather[0].icon;
    const descripcion = respuesta.data.weather[0].description;
    const coorLong = respuesta.data.coord.lon;
    const coorLat = respuesta.data.coord.lat;
    console.log(ciudad);
    console.log(pais);
    console.log(icon);
    console.log(temp);
    console.log(descripcion);
    console.log(coorLong);
    console.log(coorLat);

    const container = document.getElementById('container');

    // ciudad
    const h1 = document.createElement('h1');
    container.appendChild(h1);
    const text = document.createTextNode(`${ciudad}, `);
    h1.appendChild(text);

    // pais
    const text2 = document.createTextNode(`${pais}`);
    h1.appendChild(text2);

    //icono
    const center = document.createElement('center');
    const image = document.createElement('img');
    image.src = `${iconUrl}/${icon}@2x.png`;
    center.appendChild(image);
    container.appendChild(center);

    //Temperatura
    const h2 = document.createElement('h2');
    container.appendChild(h2)
    const text3 = document.createTextNode(`Temperatura: ${temp}`);
    h2.appendChild(text3);
    
    //Descripcion
    const h2_2 = document.createElement('h2');
    container.appendChild(h2_2);
    const text4 = document.createTextNode(`${descripcion}`);
    h2_2.appendChild(text4);

    //Coordenadas 
    const h3 = document.createElement('h3');
    container.appendChild(h3);
    const text5 = document.createTextNode(`Long: ${coorLong}, `);
    h3.appendChild(text5);
    const text6 = document.createTextNode(`Lat: ${coorLat}`);
    h3.appendChild(text6);
}

const formSubmit = (e) =>{
    e.preventDefault();
    const nameCity = input.value;
    getData(nameCity);
}



form.addEventListener('submit', formSubmit);


