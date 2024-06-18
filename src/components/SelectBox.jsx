import Select from "react-select"
import PropTypes from "prop-types"
import React from "react"

const shapes = {
    round: "rounded-lg"
}
const variants = {
    fill: {
        white_A700: "bg-white-A700 text-gray-500"
    }
}
const sizes = {
    xs: "h-[3.00rem] pl-[0.94rem] pr-[2.19rem] text-[0.88rem]"
}

const SelectBox = React.forwardRef(
    (
        {
            children,
            className = "",
            options = [],
            isSearchable = false,
            indicator,
            shape,
            variant = "fill",
            size = "xs",
            color = "white_A700",
            ...restProps
        },
        ref
    ) => {
        return (
            <>
                <Select
                    ref={ref}
                    options={options}
                    className={`${className} flex ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.color) || ""}`}
                    isSearchable={isSearchable}
                    isMulti={isMulti}
                    components={{
                        IndicatorSeparator: () => null,
                        ...(indicator && { DropdownIndicator: () => indicator })
                    }}
                    styles={{
                        container: (provided) => ({
                            ...provided,
                            zIndex: 0
                        }),
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            border: "0 !important",
                            boxShadow: "0 !important",
                            minHeight: "auto",
                            width: "100%",
                            "&:hover": {
                                border: "0 !important"
                            }
                        }),
                        input: (provided) => ({
                            ...provided,
                            color:"inherit"
                        }),
                        option: (provided) => ({
                            ...provided,
                            color:"#000"
                        }),
                        valueContainer: (provided) => ({
                            ...provided,
                            padding:0
                        }),
                        placeholder: (provided) => ({
                            ...provided,
                            margin:0
                        }),
                        menuPortal: (base) => ({
                            ...base, zIndex:999999
                        })
                    }}
                    menuPortalTarget={document.body}
                    closeMenuOnScroll={(event) => {
                        return event.target.id === "scrollContainer"
                    }}
                    {...restProps}
                />
                {children}
            </>
        )
    }
)


SelectBox.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    isSearchable: PropTypes.bool,
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    indicator: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["white_A700"])
}

export {SelectBox}