import React from "react";

const ButtonComponent = ({
  label,
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
}) => {
  
  const baseStyle = "flex items-center justify-center gap-2 rounded transition";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyle = "opacity-50 cursor-not-allowed";

  const finalClass = `
    ${baseStyle}
    ${variants[variant]}
    ${sizes[size]}
    ${(disabled || loading) ? disabledStyle : ""}
  `;

  return (
    <>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        variant={variant}
        iconPosition={iconPosition}
        className={finalClass}
      >
        {loading ? (
          "Loading..."
        ) : (
          <>
            {icon && iconPosition === "left" && icon}
            <span> {label} </span>
            {icon && iconPosition === "right" && icon}
          </>
        )}
      </button>
    </>
  );
};
export default ButtonComponent;
