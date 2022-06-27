if ( document.querySelector('.capital__list')) {
    const capitalList = document.querySelector('.capital__list');
    const capitalGraph = document.querySelector('.capital__graph');
    const childGraphs = capitalGraph.querySelectorAll('svg path');
    
    capitalList.addEventListener('mouseover', (e) => {
        if(e.target.classList.contains('capital__link')) {
            childGraphs.forEach(element => {
                element.classList.remove('graphLink-show');
                if (e.target.id == element.classList) {
                    element.classList.add('graphLink-show');
                }
            });
        } else {
            childGraphs.forEach(element => {
                element.classList.remove('graphLink-show');
            });
        }
    })
}