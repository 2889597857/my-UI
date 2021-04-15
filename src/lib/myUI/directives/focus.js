export default {
    mounted (el) {
        const InputContainer = el,
            Input = InputContainer.querySelector('input'),
            Icon = InputContainer.querySelector('.icon i'),
            type = Input.getAttribute('type');

        function show () {
            if (!Input.value.length) {
                Icon.style.display = 'none'
            }
        }
        function init () {
            if (type) {
                switch (type) {
                    case 'text':
                        Icon.classList.add('icon-clear')
                        break;
                    case 'password':
                        Icon.classList.add('icon-eye')
                        break;
                    default:
                        break;
                }
                Input.addEventListener('focus', e => {
                    Icon.style.display = 'block'
                }, false)

                Input.addEventListener('blur', (e) => {
                    show()
                }, false)

                Icon.addEventListener('click', () => {
                    Input.focus()
                    switch (type) {
                        case 'text':
                            if (Input.value.length) {
                                Input.value = ''
                            }
                            break;
                        case 'password':
                            const type = Input.getAttribute('type')
                            if (type == 'text') {
                                Input.setAttribute('type', 'password')
                            } else {
                                Input.setAttribute('type', 'text')
                            }
                            break;
                        default:
                            break;
                    }
                }, false)
                show()
            }
        }
        init()
    }
}
