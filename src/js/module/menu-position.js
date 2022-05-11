function submenuShift() {
    const listParents = document.querySelectorAll(".nav-header__list > li");
    
    for (let listParent of listParents) {
        let listChild = listParent.querySelector('ul');
        let widthParrent = listParent.offsetWidth;// width parrent
        let widthChild = listChild.offsetWidth;// width child
        let moveChild = (widthChild / 2) - (widthParrent / 2);
    
        listChild.style.left = `-${moveChild}px`;
    }
}
submenuShift();

window.addEventListener('resize', () => {
    submenuShift();
}, true);