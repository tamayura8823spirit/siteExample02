document.addEventListener('DOMContentLoaded', function () {

    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    const btn = document.querySelector('#btn');

    ta.animate();
    ta2.animate();
    btn.addEventListener('click', ta.animate.bind(ta));
    btn.addEventListener('click', ta2.animate.bind(ta2));
});


class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}
