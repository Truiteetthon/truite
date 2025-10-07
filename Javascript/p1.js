
const ressourcesB = document.getElementById('ressourcesB');
const ressources = document.getElementById('ressources');

const portfolioB = document.getElementById('portfolioB');
const portfolio = document.getElementById('portfolio');

const architectesB = document.getElementById('architectesB');
const architectes = document.getElementById('architectes');

const multimediaB = document.getElementById('multimediaB');
const multimedia = document.getElementById('multimedia');


ressourcesB.addEventListener('click',function () {
  ressources.setAttribute("class", "page2");
  retourp1.setAttribute("class", "retourp1");
});

portfolioB.addEventListener('click',function () {
  portfolio.setAttribute("class", "page2");
  retourp1.setAttribute("class", "retourp1");
});

curriculumB.addEventListener('click',function () {
  curriculum.setAttribute("class", "page2");
  retourp1.setAttribute("class", "retourp1");
});

photographiesB.addEventListener('click',function () {
  photographies.setAttribute("class", "page2");
  retourp1.setAttribute("class", "retourp1");
});

architectesB.addEventListener('click',function () {
  architectes.setAttribute("class", "page3");
  retourp2.setAttribute("class", "retourp2");
});

multimediaB.addEventListener('click',function () {
  multimedia.setAttribute("class", "page3");
  retourp2.setAttribute("class", "retourp2");
});





retourp1.addEventListener('click',function () {
  retourp1.setAttribute("class", "hidden");
  retourp2.setAttribute("class", "hidden");
  architectes.setAttribute("class", "hidden");
  multimedia.setAttribute("class", "hidden");
  ressources.setAttribute("class", "hidden");
  portfolio.setAttribute("class", "hidden");
  curriculum.setAttribute("class", "hidden");
  photographies.setAttribute("class", "hidden");
});

retourp2.addEventListener('click',function () {
  retourp2.setAttribute("class", "hidden");
  architectes.setAttribute("class", "hidden");
  multimedia.setAttribute("class", "hidden");
  photographies.setAttribute("class", "hidden");
});

