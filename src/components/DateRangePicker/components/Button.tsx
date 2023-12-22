import React, {FC} from 'react';

interface IButtonProps {
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  showCalendar: boolean;
  start_date: number;
  end_date?: number;
}

const Button: FC<IButtonProps> = ({
  setShowCalendar,
  showCalendar,
  start_date,
  end_date
}) => {
  return (
    <div
      className="container"
      style={{pointerEvents: showCalendar ? 'none' : 'all'}}
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
  );
};

export default Button;
