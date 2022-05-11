function menu() {
    const burgerBtn = document.querySelector(".nav-header-burger");
    const navHeader = document.querySelector(".nav-header");
    const submenuLists = document.querySelectorAll(".has-submenu");
    

    burgerBtn.addEventListener('click', (el) => {
        el.preventDefault();
        burgerBtn.classList.toggle('active');
        if (burgerBtn.classList.contains('active')) {
            navHeader.classList.add('open');
        } else {
            navHeader.classList.remove('open');            
        }
    }) 
    
    for (let submenuList of submenuLists) {
        submenuList.addEventListener('click', (e) => {
            e.preventDefault();
            for (let i = 0; i < submenuLists.length; i++) {
                console.log(submenuLists[i]);
                if (submenuLists[i].classList.contains('open')) {
                    submenuLists[i].classList.remove('open');
                }
            }
            submenuList.classList.add('open');
        })
    }
}
menu();