// const { default: Axios } = require("axios");
const axios = require('axios');
const { rendering } = require('./render')

console.log('hello world!')

const init = async () => {
    console.log('hey')
    const respond = await axios.get('/api/friends');
    console.log(respond);
    const buds = respond.data;
    rendering(buds);
    // const ul = document.querySelector('ul');
    // console.log(ul)
    // const html = buds.map( bud => {
    //     return `
    //     <li class="budy">
    //         ${bud.name}
    //     </li>
    //     `;
    // }).join('');
    // console.log(html);
    // ul.innerHTML = html;
};

init();