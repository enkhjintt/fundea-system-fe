"use client";

import { Dropdown as AntdDropdown, type DropDownProps } from "antd";
import React, { forwardRef } from "react";

type IProps = DropDownProps & {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  renderClassName?: string;
  override?: boolean;
};

const Dropdown = forwardRef<HTMLDivElement, IProps>(
  (
    {
      header,
      footer,
      renderClassName,
      override = false,
      trigger,
      ...restProps
    },
    ref
  ) => {
    return (
      <AntdDropdown
        trigger={trigger || ["click"]}
        {...(header || renderClassName
          ? {
              dropdownRender: (menu) => (
                <div
                  // id="borderdropdown"
                  ref={ref}
                  className={
                    override
                      ? renderClassName
                      : `p-0 font-normal text-base text-gray-900 shadow-lg rounded-xl border border-gray-300 overflow-hidden focus-visible-class dark:bg-gray-200"`
                  }
                >
                  {header}

                  {menu}
                  <div className="p-2 flex justify-center dark:bg-gray-200">
                    {footer}
                  </div>
                </div>
              ),
            }
          : {})}
        {...restProps}
      />
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
