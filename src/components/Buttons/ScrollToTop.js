import {BsFillArrowUpCircleFill} from 'react-icons/bs';

const ScrollToTopBtn = () => {
    const scrollToTop = () => {
        window.scroll(0, 0)
    }

    return (
        <div className='back-to-top' onClick={scrollToTop}>
            <BsFillArrowUpCircleFill style={{fontSize: '2rem'}} className="fas fa-arrow-circle-up" />
            <p>Back to top</p>
        </div>
    )
}

export default ScrollToTopBtn