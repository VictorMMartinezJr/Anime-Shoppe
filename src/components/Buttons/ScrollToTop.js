const ScrollToTopBtn = () => {
    const scrollToTop = () => {
        window.scroll(0, 0)
    }

    return (
        <div className='back-to-top' onClick={scrollToTop}>
            <i className="fas fa-arrow-circle-up"></i>
            <p>Back to top</p>
        </div>
    )
}

export default ScrollToTopBtn