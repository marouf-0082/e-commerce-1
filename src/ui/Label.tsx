import React from "react";

function Label({ name, label }: { name: string; label: string }) {
  return (
    <label
      htmlFor={name}
      className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2
                bg-white
                px-1
                text-[16px]
                text-[#97A1AF]
                transition-all
                duration-200

                peer-focus:top-0
                peer-focus:-translate-y-1/2
                peer-focus:text-[12px]
                peer-focus:text-[#F69E0A]

                
                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:text-[14px]
                
                peer-[:not(:placeholder-shown)]:top-0
              peer-[:not(:placeholder-shown)]:-translate-y-1/2
              peer-[:not(:placeholder-shown)]:text-[12px]
              peer-[:not(:placeholder-shown)]:text-[#F69E0A]
              "
    >
      {label}
    </label>
  );
}

export default Label;
