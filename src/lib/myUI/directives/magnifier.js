function getStyle (dom, prop) {
    return parseFloat(window.getComputedStyle(dom, null)[prop])
}

export default {
    mounted (el) {
        const imgWrap = el,
            staticImg = imgWrap.querySelector('.static-img'),
            magWrap = imgWrap.querySelector('.mag-wrapper'),
            mag = imgWrap.querySelector('.mag-img'),
            magImg = imgWrap.querySelector('.mag-img img'),
            staticL = staticImg.offsetLeft,
            staticT = staticImg.offsetTop,
            staticW = getStyle(staticImg, 'width'),
            staticH = getStyle(staticImg, 'height'),
            magW = getStyle(magWrap, 'width'),
            magH = getStyle(magWrap, 'height');


        staticImg.addEventListener('mouseover', (e) => {
            magWrap.classList.add('show')
            mag.classList.add('show')
        })
        staticImg.addEventListener('mouseout', (e) => {
            magWrap.classList.remove('show')
            mag.classList.remove('show')
            magImg.style.top = 0
            magImg.style.left = 0
        })

        staticImg.addEventListener('mousemove', e => showMag(getXY(e).X, getXY(e).Y), false)
        function showMag (x, y) {
            if (x <= 0) {
                x = 0
            } else if (x >= staticW - magW) {
                x = staticW - magW
            }
            if (y <= 0) {
                y = 0
            } else if (y >= staticH - magH) {
                y = staticH - magH
            }
            magWrap.style.top = y + 'px'
            magWrap.style.left = x + 'px'
            magImg.style.top = -y * 2 + 'px'
            magImg.style.left = -x * 2 + 'px'
        }

        function getXY (e) {
            return {
                X: e.pageX - staticL - magW / 2,
                Y: e.pageY - staticT - magH / 2,
            }
        }

    }
};