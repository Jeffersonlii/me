import React, { useState } from "react";
import "../MainOS.scss";
import logo from "./../../../public/appLogo.png";
import "./OSHeader.scss";

export interface DropDownLabel {
  label: string;
  id: number;
  options: {
    option: string;
    id: number;
    disabled?: boolean;
  }[];
}

export default function OSHeader(props: any) {
  let dropDownStatics = [
    {
      label: "File",
      options: [
        {
          option: "New",
          disabled: true,
        },
        {
          option: "Open",
          disabled: true,
        },
        {
          option: "Get Info",
        },
        {
          option: "Close",
        },
      ],
    },
    {
      label: "Edit",
      options: [
        {
          option: "Cut",
          disabled: true,
        },
        {
          option: "Copy",
          disabled: true,
        },
        {
          option: "Paste",
          disabled: true,
        },
        {
          option: "Clear",
          disabled: true,
        },
        {
          option: "Select All",
          disabled: true,
        },
      ],
    },
    {
      label: "View",
      options: [
        {
          option: "Toggle Audio",
        },
        {
          option: "Toggle Audio",
        },
      ],
    },
    {
      label: "Special",
      options: [
        {
          option: "Clean Up",
        },
        {
          option: "Erase Disk",
        },
        {
          option: "Show Hidden Folders",
        },
      ],
    },
  ];
  let dropdowns: DropDownLabel[] = dropDownStatics.map((el, index) => {
    return {
      ...el,
      id: index,
      options: el.options.map((op, index) => ({
        ...op,
        id: index,
        disabled: op.disabled ?? false,
      })),
    };
  });

  const [group, setGroup] = useState(
    dropdowns.map((a) => ({ ...a, opened: false }))
  );

  let onToggle = (id: number, action: "enter" | "leave") => {
    setGroup(
      group.map((a) => {
        if (a.id === id) return { ...a, opened: action === "enter" };
        return a;
      })
    );
  };
  return (
    <>
      <div className="link img">
        <div className="img">
          <img src={logo} alt="apple logo" />
        </div>
      </div>
      {group.map((label) => {
        return (
          <div
            className="link"
            key={label.id}
            onMouseOver={(e) => onToggle(label.id, "enter")}
            onMouseLeave={(e) => onToggle(label.id, "leave")}
          >
            {label.label}
            {(() => {
              if (label.opened) return <DropPanel label={label}></DropPanel>;
            })()}
          </div>
        );
      })}
    </>
  );
}

function DropPanel(props: { label: DropDownLabel }) {
  return (
    <div className="panel">
      {props.label.options.map((op) => {
        return op.disabled ? (
          <div className="option disabled" key={op.id}>
            {op.option}
          </div>
        ) : (
          <div className="option" key={op.id}>
            {op.option}
          </div>
        );
      })}
    </div>
  );
}
