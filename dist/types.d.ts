import React, { FC } from "react";
interface IDateRangePickerProps {
    range: {
        startDate: Date;
        endDate: Date;
    };
    buttonClasses: string;
    onChangeDateRange: React.Dispatch<React.SetStateAction<{
        startDate: Date;
        endDate: Date;
    }>>;
}
export const DateRangePicker: FC<IDateRangePickerProps>;

//# sourceMappingURL=types.d.ts.map
