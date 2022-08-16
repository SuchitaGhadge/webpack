import App from './App'
import Logo from '../assets/logo'
const root = document.getElementById('root');
root.innerHTML = `
    <h1> Learning Web tooling today </h1>
    <img src="${Logo}" alt="Build icon" />
    ${App({name : "Suchita"})}
`