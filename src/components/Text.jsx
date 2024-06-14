const sizes = {
    xs: "text-[0.63rem] font-medium",
    s: "text-[0.75rem] front-normal",
    md: "text-[0.88rem] font-medium"
}

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
    const Component = as || "p"

    return (
        <Component className={`text-gray-500 font-inter ${className} ${sizes[size]}`}{...restProps}>
            {children}
        </Component>
    )
}

export { Text }