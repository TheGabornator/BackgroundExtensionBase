function importAll(r) {
  return r.keys().map(r);
}

function getRandomIntWithLimit(max) {
  return Math.floor(Math.random() * max);
}

export const imageUrlList = importAll(
  require.context("../images/", false, /\.(png|jpe?g|svg)$/)
).map((item) => item.default);

export const getRandomImageUrl = (urlList) =>
  imageUrlList[getRandomIntWithLimit(urlList.length)];
