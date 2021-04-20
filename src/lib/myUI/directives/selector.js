export default {
    mounted (el, a, b) {
        const selector = el,
            input = el.querySelector('input'),
            icon = el.querySelector('.icon')

        input.addEventListener('focus', handlerFocus, false)
        input.addEventListener('blur', handlerBlur, false)
        function handlerFocus (e) {
            a.instance.showContent()
            icon.classList.add('rotate')

        }
        function handlerBlur (e) {
            setTimeout(() => {
                a.instance.hideContent()
                icon.classList.remove('rotate')

            }, 200)

        }
    },
}