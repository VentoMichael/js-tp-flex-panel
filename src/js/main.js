(function panel() {
    const PanelShow = {
        init() {
            document.documentElement.classList.add('js-enabled');
            this.panels = document.querySelectorAll('.panel');
            this.addEventListeners();
        },
        addEventListeners() {
            function toggleOpen() {
                this.classList.toggle('open');
            }
            function toggleActive(e) {
                if (e.propertyName.includes('flex')) {
                    this.classList.toggle('open-active');
                }
            }
            this.panels.forEach(panel => panel.addEventListener('click', toggleOpen));
            this.panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
        }
    };
    PanelShow.init();
})();