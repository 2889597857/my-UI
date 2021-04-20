export default {
    mounted (el, a, b) {
        const selector = el,
            input = el.querySelector('input'),
            icon = el.querySelector('.icon')
        document.addEventListener('click', handler, false)
        function handler (e) {
            if (el.contains(e.target)) {
                a.instance.showContent()
            } else {
                a.instance.hideContent()
            }
        }
    },
}