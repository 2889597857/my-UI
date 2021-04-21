import { reactive, provide, isRef, ref } from 'vue'
export default function carousel (props) {
    const currentIndex = ref('')
    const itemLen = ref(0)
    currentIndex.value = props.initial
    provide('currentIndex', currentIndex)

    let time
    const autoPlay = () => {
        if (props.autoPlay) {
            time = setInterval(() => {
                setIndex('next')
            }, props.duration)
        }
    }

    const setIndex = (dir) => {
        switch (dir) {
            case 'next':
                currentIndex.value += 1
                if (currentIndex.value === itemLen.value) {
                    currentIndex.value = 0
                }
                break;
            case 'prev':
                currentIndex.value -= 1
                if (currentIndex.value === -1) {
                    currentIndex.value = itemLen.value - 1
                }
            default:
                break;
        }
    }
    const stop = () => {
        clearInterval(time)
        time = null
    }

    const dotClick = index => {
        currentIndex.value = index
    }

    const mouseleave = () => {
        autoPlay()
    }
    const mouseenter = () => {
        stop()
    }
    const dirClick = dir => {
        setIndex(dir)
    }
    return {
        currentIndex, itemLen, time, autoPlay, setIndex, stop, dotClick, mouseleave, mouseenter, dirClick
    }
}