import React, { useState } from 'react';
import '../MainOS.scss';
import logo from './../../../public/appLogo.png';
import './OSHeader.scss';
import * as service from '../../Parent/ParentService';

export interface DropDownLabel {
  label: string;
  id: number;
  options: {
    option: string;
    id: number;
    onClick: () => any;
    disabled?: boolean;
  }[];
}

export default function OSHeader(props: any) {
  let dropDownStatics = [
    // static dropdown definitions
    {
      label: 'File',
      options: [
        {
          option: 'New',
          disabled: true,
        },
        {
          option: 'Open',
          disabled: true,
        },
        {
          option: 'Get Info',
          disabled: true,
        },
        {
          option: 'Close',
          onClick: () => {
            service.$toggleOS.next();
          },
        },
      ],
    },
    {
      label: 'Edit',
      options: [
        {
          option: 'Cut',
          disabled: true,
        },
        {
          option: 'Copy',
          disabled: true,
        },
        {
          option: 'Paste',
          disabled: true,
        },
        {
          option: 'Clear',
          disabled: true,
        },
        {
          option: 'Select All',
          disabled: true,
        },
      ],
    },
    {
      label: 'View',
      options: [
        {
          option: 'Toggle Audio',
          onClick: () => {
            service.$audioToggle.next();
          },
        },
        {
          option: 'Toggle Video',
          onClick: () => {
            service.$videoToggle.next();
          },
        },
      ],
    },
    {
      label: 'Special',
      options: [
        {
          option: 'Clean Up',
          onClick: () => {
            service.$removeAllWindows.next();
          },
        },
        {
          option: 'Erase Disk',
          disabled: true,
        },
        {
          option: 'Show Hidden Folders',
          disabled: true,
        },
      ],
    },
  ];
  let dropdowns: DropDownLabel[] = dropDownStatics.map((el, index) => {
    return {
      ...el,
      id: index, // attach id to labels
      options: (el.options as any).map((op: any, index: any) => {
        return {
          ...op,
          id: index, // attach id to options of labels
          disabled: op.disabled ?? false, // fill in disabled key
          onClick: op.onClick ?? undefined, //fill in disabled onclick func
        };
      }),
    };
  });

  const [group, setGroup] = useState(
    dropdowns.map((a) => ({ ...a, opened: false })) //attached a 'opened' flag
  );

  let onToggle = (id: number, action: 'enter' | 'leave') => {
    setGroup(
      group.map((a) => {
        if (a.id === id) return { ...a, opened: action === 'enter' };
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
            onMouseOver={(e) => onToggle(label.id, 'enter')}
            onMouseLeave={(e) => onToggle(label.id, 'leave')}
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
          <div className="option" key={op.id} onClick={op.onClick}>
            {op.option}
          </div>
        );
      })}
    </div>
  );
}
