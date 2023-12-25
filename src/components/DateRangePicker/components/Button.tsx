import React, { FC } from 'react';
import clsx from 'clsx'

interface IButtonProps {
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  showCalendar: boolean;
  start_date: number;
  end_date?: number;
  className: string;
}

const Button: FC<IButtonProps> = ({
  setShowCalendar,
  showCalendar,
  start_date,
  end_date,
  className
}) => {
  return (
    <>
      <label style={{
        fontSize: "0.875rem",
        lineHeight: "1.25rem"
      }}>Select Duration</label>
      <div
        id='date_picker'
        className={clsx("container", className)}
        style={{ pointerEvents: showCalendar ? 'none' : 'all' }}
        onClick={() => setShowCalendar(true)}
      >
        <div className="date">
          <span>{new Date(start_date).toLocaleDateString('en-IN')}</span>
        </div>
        <div className="space"> to </div>
        <div className="date">
          <span> {new Date(end_date!!).toLocaleDateString('en-IN')}</span>
        </div>
      </div>
    </>
  );
};

export default Button;
