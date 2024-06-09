function filterProducts() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let productContainer = document.getElementById('container-produto');
    let cards = productContainer.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let caption = cards[i].getElementsByTagName('figcaption')[0];
        if (caption) {
            let textValue = caption.textContent || caption.innerText;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}