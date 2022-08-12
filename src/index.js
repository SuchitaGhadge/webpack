import App from './App'

const root = document.getElementById('root');
root.innerHTML = `
    <h1> Learning Web tooling today </h1>
    ${App({name : "Suchita"})}
`