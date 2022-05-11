const defaultSelect = () => {
    const element = document.querySelector('.select-accent');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: "",
    });
};

defaultSelect();