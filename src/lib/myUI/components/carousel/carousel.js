import { reactive } from 'vue'
export default function carousel (props) {
    const state = reactive({
        currentIndex: props.initial,
        itemLen: 0
    })
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
                state.currentIndex += 1
                if (state.currentIndex === state.itemLen) {
                    state.currentIndex = 0
                }
                break;
            case 'prev':
                state.currentIndex -= 1
                if (state.currentIndex === -1) {
                    state.currentIndex = state.itemLen - 1
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
        state.currentIndex = index
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
        state, time, autoPlay, setIndex, stop, dotClick, mouseleave, mouseenter, dirClick
    }
}