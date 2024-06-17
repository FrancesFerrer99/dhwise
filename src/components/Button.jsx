import PropTypes from "prop-types"
const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[12px]"
}
const variants = {
    fill: {
        white_A700_33: "bg-white-A700_33 text-white-A700",
        white_A700_66: "bg-white-A700_66",
        white_A700_99: "bg-white-A700_99",
        white_A700: "bg-white-A700 text-gray-500",
        gray_100_33: "bg-gray-100_33 text-gray-900",
        gray_100: "bg-gray-100 text-gray-500",
        gray_500_14: "bg-gray-500_14 text-gray-900",
        gray_500_33: "bg-gray-500_33 text-gray-500",
        gray_900_33: "bg-gray-900_33 text-white-A700",
        gray_900: "bg-gray-900 text-white_A700",
        indigo_A200: "bg-indigo-A200 text-white-A700",
        indigo_A200_33: "bg-indigo-A200_33",
        indigo_600: "bg-indigo-600 text-white-A700",
        light_blue_200_33: "bg-light_blue-200_33",
        light_blue_200: "bg-light_blue-200 text-white_A700",
        red_A200: "bg-red-A200 text-white-A700",
        green_400: "bg-green-400 text-white-A700",
    },
    outline: {
        gray_500_33: "border-gray-500_33 border-2 border-solid text-gray-900",
        gray_500_99: "border-gray-500_99 border-2 border-solid text-white-A700",
        gray_500_66: "border-gray-500_66 border-2 border-solid text-gray-900",
        white_A700_33: "border-white-A700_33 border-2 border-solid",
    }
}
const sizes = {
    xs: "h-[1.06rem] text-[0.88rem]",
    sm: "h-[1.25rem] px-[0.06rem] text-[0.75rem]",
    md: "h-[1.75rem] px-[0.44rem] text-[0.63rem]",
    lg: "h-[1.75rem] px-[0.44rem]",
    xl: "h-[1.88rem] px-[0.69rem] text-[0.88rem]",
    "2xl": "h-[2.38rem] px-[0.63rem] text-[0.88rem]",
    "3xl": "h-[2.38rem] px-[0.63rem]",
    "4xl": "h-[2.81rem] px-[0.69rem]",
    "5xl": "h-[3rem] px-[1rem]",
    "6xl": "h-[3rem] px-[1.13rem] text-[1.38rem]",
    "7xl": "h-[3.63rem] px-[0.88rem] text-[1.38rem]",
    "8xl": "h-[3.63rem] px-[2.19rem] text-[0.88rem]",
    "9xl": "h-[4.88rem] px-[1.25rem]",
}

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "lg",
    color = "indigo_A200",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(variant & variants[variant]?.[color]) || ""}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf([
        "white_A700_33",
        "white_A700_66",
        "white_A700_99",
        "white_A700",
        "gray_100_33",
        "gray_100",
        "gray_500_14",
        "gray_500_33",
        "gray_900_33",
        "gray_900",
        "indigo_A200",
        "indigo_A200_33",
        "indigo_600",
        "light_blue_200_33",
        "light_blue_200",
        "red_A200",
        "green_400"
    ]),
}
export { Button }