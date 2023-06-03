const renderToDOM = (divID, content) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = content;
};

export default renderToDOM;
