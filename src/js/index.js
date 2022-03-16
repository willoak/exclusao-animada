import "../css/style.scss";

let item = document.querySelectorAll(".item");

item.forEach((itemSelecionado) => {
  itemSelecionado.children[0].addEventListener("click", () => {
    itemSelecionado.children[0].closest(".item").classList.toggle("open");
  });
});

item.forEach((itemSelecionado) => {
  console.log("lciquei");
  itemSelecionado.children[1].addEventListener("click", () => {
    itemSelecionado.children[1].closest(".item").classList.add("delete");
  });
});
