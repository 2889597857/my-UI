export default {
    mounted (el) {
        const InputContainer = el,
            Input = InputContainer.querySelector('input'),
            IconContainer = InputContainer.querySelector('.icon '),
            Icon = InputContainer.querySelector('.icon i'),
            type = Input.getAttribute('type');

        Input.addEventListener('focus', e => {
            IconContainer.style.display = 'block'
        }, false)

        Input.addEventListener('blur', (e) => {
            show()
        }, false)

        IconContainer.addEventListener('click', () => {
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

        function show () {
            if (!Input.value.length) {
                IconContainer.style.display = 'none'
            }
        }
        function init () {
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
            show()
        }
        init()
    }
}
