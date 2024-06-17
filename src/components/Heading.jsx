const sizes = {
    xs: "text-[0.63rem] font-bold",
    s: "text-[0.75rem] font-bold",
    md: "text-[0.88rem] font-bold",
    lg: "text-[1rem] font-bold",
    xl: "text-[1.38rem] font-bold",
    "2xl": "text-[1.88rem] font-bold md:text-[1.75rem] sm:text-[1.63rem]",
}

const Heading = ({
    children,
    className = "",
    size = "",
    as,
    ...restProps
}) => {
    const Component = as || "h6"

    return (
        <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    )
}

export { Heading }