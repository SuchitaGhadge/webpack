import App from './App'
import Logo from './logo.svg'
const root = document.getElementById('root');
root.innerHTML = `
    <img src="${Logo}" alt="Build icon" />
    <h1> Learning Web tooling today </h1>
    ${App({name : "Suchita"})}
`