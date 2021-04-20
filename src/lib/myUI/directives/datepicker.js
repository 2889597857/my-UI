export default {
    mounted (el, a, b) {
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