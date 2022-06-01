let testSayisi = 5;

for(let i = 1; i<=testSayisi; i++){
    //parent elementi çağırdık
    const imageParent = document.querySelector('.test-image');

    // aşağıda img elementini ürettik ve parent' altına ekledik
    const img = document.createElement('img');
    img.setAttribute('src',`./images/test-number/${i}.png`); // test-number created

    const a = document.createElement('a');
    a.setAttribute('href',`./testler/test-${i}/index.html`);
    imageParent.appendChild(a);
    a.appendChild(img);
}