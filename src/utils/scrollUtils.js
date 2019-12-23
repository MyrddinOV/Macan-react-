export const getScrollProps = (addArguments = {}) => ({
    duration: 500,
    delay: 300,
    spy: true,
    smooth: true,
    activeClass: "active",
    offset: -80,
    ...addArguments
})