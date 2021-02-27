export default {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 8,
        partialVisibilityGutter: 40
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        partialVisibilityGutter: 20
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1.2,
        partialVisibilityGutter: 10
    }
};