import { useState, forwardRef } from "react";

const InputField = forwardRef(
  (
    {
      id,
      label,
      type = "text",
      placeholder,
      value,
      onChange,
      error,
      icon: Icon,
      rightElement,
      disabled,
      autoComplete,
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={id}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <Icon size={16} />
            </div>
          )}
          <input
            ref={ref}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            autoComplete={autoComplete}
            className={`
              w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400
              transition-all duration-200 outline-none input-focus-glow
              ${Icon ? "pl-9" : "pl-3"}
              ${rightElement ? "pr-11" : "pr-3"}
              ${
                error
                  ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                  : "border-slate-200 focus:border-indigo-500"
              }
              ${disabled ? "opacity-60 cursor-not-allowed bg-slate-50" : ""}
            `}
          />
          {rightElement && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {rightElement}
            </div>
          )}
        </div>
        {error && (
          <p className="text-xs text-red-500 flex items-center gap-1 animate-fade-in" role="alert">
            <span>⚠</span> {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
export default InputField;
