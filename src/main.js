import { fetchTodo } from './components/fetchTodo';

let app = document.querySelector('#app');

let api = import.meta.env.VITE_API_OPENWEATHER


fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${api}`).then(response => response.json()).then(data => {
 app.innerHTML = data.base
})