import { ref } from 'vue';
export default function useStars (num, callback) {
    const star = ref(num)
    const setStar = (num, disabled) => {
        if (disabled) {
            star.value = num
            callback()
        }
    }
    return [
        star, setStar
    ]
}