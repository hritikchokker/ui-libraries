export type Slider = {
    defaultSlidesToShow: number, //rendered on initial render,
    gapBetweenTiles: number,
    loop: boolean,
    slidesToScroll: number, // number of slides to scroll when user scrolls,
    showEdgeToEdgeSlide: boolean,
    leftArrowIcon: string | React.FC,
    rightArrowIcon: string | React.FC,
    defaultSlidesOnMobileView: number,
    gapBetweenMobileViewTiles: number,
    showEdgeToEdgeSlideOnMobile: boolean,
    responsiveViewBreakPoints: Array<{
        breakPoint: number,
        slidesToShow: number,
        slidesToScroll?: number,
    }>
}

export const dummy: Slider = {
    defaultSlidesToShow: 3,
    gapBetweenTiles: 10, //10px,
    loop: true,
    slidesToScroll: 3,
    showEdgeToEdgeSlide: false,
    leftArrowIcon: 'arrow_back',
    rightArrowIcon: 'arrow_forward',
    defaultSlidesOnMobileView: 2,
    gapBetweenMobileViewTiles: 10,
    showEdgeToEdgeSlideOnMobile: false,
    responsiveViewBreakPoints: [
        {
            breakPoint: 1200,
            slidesToShow: 3,
        },
        {
            breakPoint: 900,
            slidesToShow: 2,
        },
        {
            breakPoint: 600,
            slidesToShow: 1,
        },

    ]
}