/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
extend: {
colors:{
"yellow" : "#efed70",
"blue": "#041367",
"skyBlue" : "#98c7d6",
"darkWhite" : "#DCF3F9",
"pink":"#F9BDAE",
},
backgroundImage:{
"hero":"url(https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/6165df133eba1b0460eb4957_image-home-hero.png)",
"spine":"url(https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/61647df68010cc7b2c5f2f85_image-home-spine.jpg)"

}
}
      
    },
    plugins: []

};
