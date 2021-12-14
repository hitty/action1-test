let togglers = document.getElementsByClassName('toggler__icon'),
    items = document.getElementsByClassName("collapse");;
let toggle = function () {
    let index = this.getAttribute("data-index"),
        active = '';
    if( this.classList.contains('active') ) {
        this.classList.remove('active')
        active = false;
    } else {
        this.classList.add('active');
        active = true;
    }
    /*
      set item  statements
     */
    for (var i = 0; i < items.length; i++) {
        let item_index = items[i].getAttribute("data-index"),
            item = items[i];

        if( item_index == index ){
            if (item.classList.contains("show")) item.classList.remove("show");
            else item.classList.add("show");
        }

    }

};
for (var i = 0; i < togglers.length; i++) {
    togglers[i].addEventListener('click', toggle, false);
}