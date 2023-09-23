
const template = document.getElementById('contact-card');
const clone = document.importNode(template.content, true);


clone.querySelector('.contact-avatar').src = 'https://pikuco.ru/upload/test_stable/713/71304d4e2dc93d81b93f26cd7ba47b03.webp';
clone.querySelector('.contact-name').textContent = 'Алиса';
clone.querySelector('.contact-email').textContent = 'littlegirl@gmail.com';
clone.querySelector('.contact-phone').textContent = '+7(977)-313-51-87';


document.body.appendChild(clone);




const clone2 = document.importNode(template.content, true);

clone2.querySelector('.contact-avatar').src = 'https://avatars.dzeninfra.ru/get-zen_doc/1873427/pub_5e482c84e9c3ad18fb31b817_5e48f9ee35e95e4cbef012b2/scale_1200';
clone2.querySelector('.contact-name').textContent = 'Грут';
clone2.querySelector('.contact-email').textContent = 'iamgrut@gmail.com';
clone2.querySelector('.contact-phone').textContent = '+7(952)-152-41-52';

document.body.appendChild(clone2);



const clone3 = document.importNode(template.content, true);

clone3.querySelector('.contact-avatar').src = 'https://citaty.info/files/quote-pictures/636686-klinok-rassekayushii-demonov-kimetsu-no-yaiba.png';
clone3.querySelector('.contact-name').textContent = 'Танджиро';
clone3.querySelector('.contact-email').textContent = 'savesister@gmail.com';
clone3.querySelector('.contact-phone').textContent = '+7(932)-113-21-17';

document.body.appendChild(clone3);



const clone4 = document.importNode(template.content, true);

clone4.querySelector('.contact-avatar').src = 'https://sun9-78.userapi.com/impg/PYNr_eJw40udhEXXZ9EVrQTxvw3Zg5vzXpmXeA/Kqe-PXYxSxU.jpg?size=807x806&quality=95&sign=030c0603b64635ebd1876818b0482351&c_uniq_tag=gWYk0IDfth1lWvfBYi_WgdndEwZocTf4QdDu9VOA6ps&type=album';
clone4.querySelector('.contact-name').textContent = 'Alblak 52';
clone4.querySelector('.contact-email').textContent = 'al52black52@gmail.com';
clone4.querySelector('.contact-phone').textContent = '+7(952)-812-21-17';

document.body.appendChild(clone4);