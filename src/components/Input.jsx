import PropTypes from "prop-types"
import React from "react"

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-lg"
}
const variants = {
    fill: {
        gray_800: "bg-gray-800 text-gray-500",
        gray_900_33: "bg-gray-900_33 text-white-A700",
        gray_100: "bg-gray-100 text-gray-500",
        white_A700: "bg-white-A700 text-gray-500"
    },
    outline: {
        gray_500_33: "border-gray-500_33 border border-solid text-gray-500"
    }
}
const sizes = {
    xs: "h-[1.63rem] text-[0.88rem]",
    sm: "h-[2rem] pl-[0.56rem] pr-[2.19rem] text-[0.88rem]",
    md: "h-[2.25rem] pl-[0.56rem] pr-[2.19rem] text-[0.88rem]",
    lg: "h-[3rem] pl-[0.88rem] pr-[2.19rem] text-[0.88rem]",
    xl: "h-[3.36rem] pl-[1.25rem] pr-[2.19rem] text-[0.88rem]"
}

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            children,
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "lg",
            color = "white_A700",
            ...restProps
        },
        ref,
    ) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.value)
        }
        return (
            <>
                <label
                    className={`${className} flex items-center justify-center cursor-text text-[0.88rem] font-medium ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
                >
                    {!!label && label}
                    {!!prefix && prefix}
                    <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
                    {!!prefix && prefix}
                </label>
            </>
        )
    }
)

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["xs", "md", "sm", "xl", "lg"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf(["gray_800", "gray_900_33", "gray_100", "white_A700", "gray_500_33"])
}

export { Input }