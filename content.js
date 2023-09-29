const links = document.querySelectorAll(".actionBar-action--reaction");
links.forEach((link) => {
  let clone = link.cloneNode(true);
  let href = clone.href;
  href = href.replace("reaction_id=1", "reaction_id=3");
  clone.href = href;
  clone.innerHTML = "😂 Fake Haha";
  link.parentNode.appendChild(clone);
});
