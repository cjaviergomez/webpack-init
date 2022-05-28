import '../css/components.css';

export const greeting = (name) => {
    console.log(`Creating H1 element`);

    const h1 = document.createElement('h1');
    h1.innerText = `Hi ${name}!!!`;

    document.body.append(h1);

    // console.log({webpackLogo});
    // const img = document.createElement('img');
    // img.src = webpackLogo;
    // img.alt = 'Webpack logo';
    // document.body.append(img);
}