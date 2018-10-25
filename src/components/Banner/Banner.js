import React from 'react'
import ReactSwiper from 'reactjs-swiper'
import './Banner.css'

const swiperOptions = {
    preloadImages: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: true
}

const images = [{
	image: 'http://img2.imgtn.bdimg.com/it/u=2731339575,992297243&fm=26&gp=0.jpg',
	title: '图片1',
	link: ''
}, {
	image: 'http://img5.imgtn.bdimg.com/it/u=4064536751,3460762960&fm=26&gp=0.jpg',
	title: '图片2',
}, {
	image: 'http://img.sj33.cn/uploads/allimg/201207/20120718235734773.jpg',
	title: '图片3'
}, {
	image: 'http://img.sj33.cn/uploads/allimg/201008/20100823080228932.jpg',
	title: '图片4',
}];

class Banner extends React.Component {
    render() {
        return (
        	<ReactSwiper 
        		swiperOptions={swiperOptions} 
        		showPagination 
        		items={images}
             	className="swiper" 
            />
        )
    }
}

export default Banner
