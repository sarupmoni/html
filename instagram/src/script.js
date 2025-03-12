const createElement = (tag, position, attrType, attrContent, content) => {
  const location = document.querySelector(position);
  console.log(location);
  const newArticle = document.createElement(tag);
  if (attrType) {
    newArticle.setAttribute(attrType, attrContent);
  }
  newArticle.textContent = content;
  location.appendChild(newArticle);
};

const createContent = (i) => {
  createElement("li", ".contents", "class", `content${i}`);
  createElement("article", `.content${i}`);
  createElement("header", "article", "class", `header${i}`);
  createElement("ul", `.header${i}`, "class", `ul${i}`);
  createElement("li", `.ul${i}`, "class", "logo", "logo");
  createElement("li", `.ul${i}`, "class", "caption", "caption");
  createElement("li", `.ul${i}`, "class", "option", "option");
  createElement("main", "article");
  createElement("footer", "article", "class", `footer${i}`);
  createElement("div", "footer", "class", `action${i}`);
  createElement("div", `.action${i}`, "class", `like${i}`);
  createElement(
    "img",
    `.like${i}`,
    "src",
    "https://pngfre.com/wp-content/uploads/Black-Heart-2.png"
  );
  createElement("div", `.action${i}`, "class", `comment${i}`);
  createElement(
    "img",
    `.comment${i}`,
    "src",
    "https://e7.pngegg.com/pngimages/14/789/png-clipart-ford-f-series-bubble-emoji-ford-ranchero-fuel-tank-ford-speech-balloon-auto-part-thumbnail.png"
  );
  createElement("div", `.action${i}`, "class", `share${i}`);
  createElement(
    "img",
    `.share${i}`,
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1EJBJUJuC8sNCpKuJCNG0Xc-kCt1wUlZAw&s"
  );
  createElement("div", `.action${i}`, "class", `save${i}`);
  createElement(
    "img",
    `.save${i}`,
    "src",
    "https://static.vecteezy.com/system/resources/thumbnails/012/528/048/small_2x/simple-save-icon-isolated-on-white-background-bookmark-symbol-modern-simple-for-web-site-or-mobile-app-vector.jpg"
  );
  createElement(
    "p",
    `.footer${i}`,
    "",
    "",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aspernatur iste ut, laudantium voluptas molestiae."
  );
};

const main = () => {
  createElement("ul", "main", "class", "contents");
  for (let i = 0; i < 10; i++) {
    createContent(i);
  }
};

main();
