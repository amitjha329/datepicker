require("./main.css");
var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
var $8zHUo$react = require("react");
var $8zHUo$clsx = require("clsx");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "DateRangePicker", () => $b3e27ee364e3327b$export$2e2bcd8739ae039);



const $13d8e8993949ae7c$export$d0bdf45af03a6ea3 = new Date();
const $13d8e8993949ae7c$export$39458a1b768bf7ff = $13d8e8993949ae7c$export$d0bdf45af03a6ea3.getFullYear();
const $13d8e8993949ae7c$export$6d38785a67d7c41 = $13d8e8993949ae7c$export$d0bdf45af03a6ea3.getMonth();
const $13d8e8993949ae7c$export$d2d39d1adcc883a2 = $13d8e8993949ae7c$export$d0bdf45af03a6ea3.getDate();


const $3f4b50244a1901db$export$10cefe68e4bb6b44 = 86400000;
const $3f4b50244a1901db$export$21efc6774a7e7807 = (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).setHours(0, 0, 0, 0);
const $3f4b50244a1901db$var$getTimestampOfDate = (year, monthIndex, date)=>{
    return new Date(year, monthIndex, date).getTime();
};
const $3f4b50244a1901db$export$9036342a2aa93328 = {
    getStartOfWeek: ()=>{
        return $3f4b50244a1901db$var$getTimestampOfDate((0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getFullYear(), (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getMonth(), (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getDate() - (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getDay());
    },
    getEndOfWeek: ()=>{
        return $3f4b50244a1901db$var$getTimestampOfDate((0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getFullYear(), (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getMonth(), (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getDate() - (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getDay() + 6);
    },
    getStartOfLastSevenDays: ()=>{
        return $3f4b50244a1901db$var$getTimestampOfDate((0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getFullYear(), (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getMonth(), (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getDate() - 7);
    },
    getEndOfLastSevenDays: ()=>{
        return $3f4b50244a1901db$export$21efc6774a7e7807 - $3f4b50244a1901db$export$10cefe68e4bb6b44;
    },
    getStartOfMonth: ()=>{
        return $3f4b50244a1901db$var$getTimestampOfDate((0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getFullYear(), (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getMonth(), 1);
    },
    getEndOfMonth: ()=>{
        return new Date((0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getFullYear(), (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getMonth() + 1, 0).getTime();
    },
    getStartOfLastMonth: ()=>{
        return $3f4b50244a1901db$var$getTimestampOfDate((0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getFullYear(), (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getMonth() - 1, 1);
    },
    getEndOfLastMonth: ()=>{
        return $3f4b50244a1901db$var$getTimestampOfDate((0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getFullYear(), (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).getMonth(), 0);
    }
};


const $04f600d3f756153f$export$16352d1b10c5eb38 = {
    en: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    de: [
        "Januar",
        "Februar",
        "M\xe4rz",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
    ],
    fr: [
        "Janvier",
        "F\xe9vrier",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Ao\xfbt",
        "Septembre",
        "Octobre",
        "Novembre",
        "D\xe9cembre"
    ],
    tr: [
        "Ocak",
        "\u015Eubat",
        "Mart",
        "Nisan",
        "May\u0131s",
        "Haziran",
        "Temmuz",
        "A\u011Fustos",
        "Eyl\xfcl",
        "Ekim",
        "Kas\u0131m",
        "Aral\u0131k"
    ]
};



const $c2343a66497a5af3$var$useDate = (ranges)=>{
    const [date, setDate] = (0, $8zHUo$react.useState)({
        month: (0, $13d8e8993949ae7c$export$6d38785a67d7c41),
        year: (0, $13d8e8993949ae7c$export$39458a1b768bf7ff)
    });
    const [startDate, setStartDate] = (0, $8zHUo$react.useState)(ranges.startDate.setHours(0, 0, 0, 0));
    const [endDate, setEndDate] = (0, $8zHUo$react.useState)(ranges.endDate.setHours(0, 0, 0, 0));
    const [selectedQuickRange, setSelectedQuickRange] = (0, $8zHUo$react.useState)("");
    const [isSelectingStartDate, setIsSelectingStartDate] = (0, $8zHUo$react.useState)(true);
    const month = date.month;
    const year = date.year;
    const onSelectQuickRange = (range)=>{
        setSelectedQuickRange(range);
        let startTimestamp = 0, endTimestamp = 0;
        switch(range){
            case "today":
                startTimestamp = endTimestamp = (0, $3f4b50244a1901db$export$21efc6774a7e7807);
                break;
            case "yesterday":
                startTimestamp = endTimestamp = (0, $3f4b50244a1901db$export$21efc6774a7e7807) - (0, $3f4b50244a1901db$export$10cefe68e4bb6b44);
                break;
            case "this_week":
                startTimestamp = (0, $3f4b50244a1901db$export$9036342a2aa93328).getStartOfWeek();
                endTimestamp = (0, $3f4b50244a1901db$export$9036342a2aa93328).getEndOfWeek();
                break;
            case "last_seven_days":
                startTimestamp = (0, $3f4b50244a1901db$export$9036342a2aa93328).getStartOfLastSevenDays();
                endTimestamp = (0, $3f4b50244a1901db$export$9036342a2aa93328).getEndOfLastSevenDays();
                break;
            case "this_month":
                startTimestamp = (0, $3f4b50244a1901db$export$9036342a2aa93328).getStartOfMonth();
                endTimestamp = (0, $3f4b50244a1901db$export$9036342a2aa93328).getEndOfMonth();
                break;
            case "last_month":
                startTimestamp = (0, $3f4b50244a1901db$export$9036342a2aa93328).getStartOfLastMonth();
                endTimestamp = (0, $3f4b50244a1901db$export$9036342a2aa93328).getEndOfLastMonth();
                break;
            default:
                console.log(range);
                break;
        }
        setStartDate(startTimestamp);
        setEndDate(endTimestamp);
        setDate({
            month: new Date(endTimestamp).getMonth(),
            year: new Date(endTimestamp).getFullYear()
        });
    };
    const onClickPrevMonth = ()=>{
        let prevMonthIndex = month - 1;
        let prevYear = year;
        if (prevMonthIndex < 0) {
            prevMonthIndex = 11;
            prevYear--;
        }
        setDate({
            month: prevMonthIndex,
            year: prevYear
        });
    };
    const onClickNextMonth = ()=>{
        let nextMonthIndex = month + 1;
        let nextYear = year;
        if (nextMonthIndex > 11) {
            nextMonthIndex = 0;
            nextYear++;
        }
        setDate({
            month: nextMonthIndex,
            year: nextYear
        });
    };
    const onSelectYear = (year)=>{
        setDate((prevState)=>({
                ...prevState,
                year: year
            }));
    };
    const onSelectMonth = (month)=>{
        let index = (0, $04f600d3f756153f$export$16352d1b10c5eb38)["en"].findIndex((el)=>{
            return el == month;
        });
        setDate((prevState)=>({
                ...prevState,
                month: index
            }));
    };
    const onClickDay = (timestamp)=>{
        setSelectedQuickRange("");
        if (isSelectingStartDate) {
            setStartDate(timestamp);
            setEndDate(timestamp);
            setIsSelectingStartDate(false);
            return;
        }
        setIsSelectingStartDate(true);
        if (timestamp < startDate) {
            setEndDate(startDate);
            setStartDate(timestamp);
            return;
        }
        setEndDate(timestamp);
    };
    return {
        date: date,
        setDate: setDate,
        startDate: startDate,
        endDate: endDate,
        setStartDate: setStartDate,
        setEndDate: setEndDate,
        onClickDay: onClickDay,
        selectedQuickRange: selectedQuickRange,
        onSelectQuickRange: onSelectQuickRange,
        onClickPrevMonth: onClickPrevMonth,
        onClickNextMonth: onClickNextMonth,
        onSelectYear: onSelectYear,
        onSelectMonth: onSelectMonth,
        isSelectingStartDate: isSelectingStartDate,
        setIsSelectingStartDate: setIsSelectingStartDate
    };
};
var $c2343a66497a5af3$export$2e2bcd8739ae039 = $c2343a66497a5af3$var$useDate;




function $b0e5e3c7c6fb4754$export$38b7717c9b483fd5(year, month) {
    // Increment the month value because it should be between 1 and 12, as it is currently between 0 and 11.
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}



const $31607ca6f8947e28$export$1c66a1a76784793d = (params)=>{
    // Calculate the index of the current day in the month
    let dayIndex = params.counter - params.firstDay;
    // Calculate the day of the week (0-6) for the current day
    let dayOfWeek = params.counter % 7;
    // Calculate the previous month and year
    let prevMonth = params.month - 1;
    let prevYear = params.year;
    if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }
    // Get the number of days in the previous month
    let prevMonthNumberOfDays = (0, $b0e5e3c7c6fb4754$export$38b7717c9b483fd5)(prevYear, prevMonth);
    // Calculate the date number for the current day
    // If the day index is negative, it means the day is from the previous month
    // In this case, we add the number of days from the previous month to the day index
    // Otherwise, we use the modulo operator to wrap the date number back to 1 if it exceeds the number of days in the month
    let dateNumber = dayIndex < 0 ? prevMonthNumberOfDays + dayIndex : dayIndex % params.numberOfDays;
    // Increment the date number to get the actual date (since it is zero-based)
    dateNumber += 1;
    // Calculate the month status for the current day
    // If the day index is negative, day is from the previous month, month status is -1
    // If the day index is greater than or equal to the number of days in the month, day is from the next month, month status is 1
    // Otherwise, month status is 0, day is from the current month
    let monthStatus = dayIndex < 0 ? -1 : dayIndex >= params.numberOfDays ? 1 : 0;
    let date = new Date(params.year + "-" + (params.month + 1 + monthStatus) + "-" + dateNumber);
    let timestamp = new Date(date).setHours(0, 0, 0, 0);
    // Return an object with the day's details
    return {
        dateNumber: dateNumber,
        dayOfWeek: dayOfWeek,
        monthStatus: monthStatus,
        timestamp: timestamp
    };
};


function $fb76bf3f471d1d51$export$fb9b45fbf5d9b232(year, month) {
    let date = new Date(year, month, 1);
    let index = date.getDay();
    return index;
}


const $f3b69b6d3958d3b1$export$cdeb55f7078b69d7 = (year, month)=>{
    let firstDay = (0, $fb76bf3f471d1d51$export$fb9b45fbf5d9b232)(year, month);
    let numberOfDays = (0, $b0e5e3c7c6fb4754$export$38b7717c9b483fd5)(year, month);
    // Initialize an empty array to hold the details for each day in the month
    let daysInMonth = [];
    // Set the number of rows to 6 (this is the maximum number of rows needed to display all the days in a month)
    let rows = 6;
    // Set the number of columns to 7 (this is the number of days in a week)
    let cols = 7;
    let currentDay = {
        dateNumber: 0,
        dayOfWeek: 0,
        monthStatus: 0,
        timestamp: 0
    };
    let counter = 0;
    for(let row = 0; row < rows; row++)for(let col = 0; col < cols; col++){
        // Get the details for the current day
        currentDay = (0, $31607ca6f8947e28$export$1c66a1a76784793d)({
            counter: counter,
            numberOfDays: numberOfDays,
            firstDay: firstDay,
            year: year,
            month: month
        });
        daysInMonth.push(currentDay);
        counter++;
    }
    return daysInMonth;
};




const $bda2ff458deb7f8f$export$3cf5dda4201cc0f2 = {
    en: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    de: [
        "Son",
        "Mon",
        "Die",
        "Mit",
        "Don",
        "Fre",
        "Sam"
    ],
    fr: [
        "Dim",
        "Lun",
        "Mar",
        "Mer",
        "Jeu",
        "Ven",
        "Sam"
    ],
    tr: [
        "Paz",
        "Pzt",
        "Sal",
        "\xc7ar",
        "Per",
        "Cum",
        "Cmt"
    ]
};







const $316e1b2414deb557$export$2da940f77d8983f4 = (isCurrentMonth)=>{
    let className = "day";
    className += isCurrentMonth ? " day-of-current-month" : " day-of-other-month";
    return className;
};
const $316e1b2414deb557$export$c2a52bfe707fc23d = (isToday, isSelectedDate)=>{
    let className = " day-number-wrapper";
    className += isToday ? " today" : "";
    className += isSelectedDate ? " selected-day" : "";
    return className;
};
const $316e1b2414deb557$export$468213d01abb0c77 = (position, isValidDate)=>{
    let isLeft = position === "left";
    let className = " side-elements";
    className += isLeft ? " left-element" : "";
    className += isValidDate ? " fill-side-element-bg" : "";
    return className;
};


const $381cc55b31155464$var$Day = ({ onClickDay: onClickDay, day: day, startDate: startDate, endDate: endDate })=>{
    const currDayTimestamp = day.timestamp;
    const todayTimestamp = (0, $13d8e8993949ae7c$export$d0bdf45af03a6ea3).setHours(0, 0, 0, 0);
    const isCurrentMonth = day.monthStatus === 0;
    const isStartDate = startDate === currDayTimestamp;
    const isEndDate = endDate === currDayTimestamp;
    const isToday = currDayTimestamp === todayTimestamp;
    // Check if the current day is the selected start or end date
    const isSelectedDate = (isStartDate || isEndDate) && isCurrentMonth ? true : false;
    const isWithinDifferentDates = endDate && endDate != startDate;
    const isValidEndDate = isEndDate && isCurrentMonth && isWithinDifferentDates ? true : false;
    const isValidStartDate = isStartDate && isCurrentMonth && isWithinDifferentDates ? true : false;
    const dayClass = (0, $316e1b2414deb557$export$2da940f77d8983f4)(isCurrentMonth);
    const dayNumberWrapperClass = (0, $316e1b2414deb557$export$c2a52bfe707fc23d)(isToday, isSelectedDate);
    // Check if the current day is within the range of the start and end dates
    const isWithinDateRange = currDayTimestamp > startDate && (endDate == null ? null : currDayTimestamp < endDate) && isCurrentMonth;
    const dayBgColor = isWithinDateRange ? "#d2f4f5" : "";
    const rightElementClass = (0, $316e1b2414deb557$export$468213d01abb0c77)("right", isValidStartDate);
    const leftElementClass = (0, $316e1b2414deb557$export$468213d01abb0c77)("left", isValidEndDate);
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
        onClick: ()=>onClickDay(day.timestamp),
        className: dayClass,
        style: {
            borderTopLeftRadius: day.dayOfWeek == 0 ? 100 : 0,
            borderBottomLeftRadius: day.dayOfWeek == 0 ? 100 : 0,
            borderTopRightRadius: day.dayOfWeek == 6 ? 100 : 0,
            borderBottomRightRadius: day.dayOfWeek == 6 ? 100 : 0,
            background: dayBgColor
        },
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                className: leftElementClass
            }),
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                className: dayNumberWrapperClass,
                children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("span", {
                    children: day.dateNumber
                })
            }),
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                className: rightElementClass
            })
        ]
    });
};
var $381cc55b31155464$export$2e2bcd8739ae039 = $381cc55b31155464$var$Day;


const $030ff12640f54313$var$CalendarGrid = ({ daysInMonth: daysInMonth, startDate: startDate, endDate: endDate, onClickDay: onClickDay })=>{
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: "calendar-grid",
        children: daysInMonth?.map((day, index)=>/*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $381cc55b31155464$export$2e2bcd8739ae039), {
                onClickDay: onClickDay,
                day: day,
                startDate: startDate,
                endDate: endDate
            }, index))
    });
};
var $030ff12640f54313$export$2e2bcd8739ae039 = $030ff12640f54313$var$CalendarGrid;


const $2ea9ff98943ecbec$var$Calendar = ({ daysInMonth: daysInMonth, startDate: startDate, endDate: endDate, onClickDay: onClickDay })=>{
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
        className: "calendar",
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                className: "calendar-header ",
                children: (0, $bda2ff458deb7f8f$export$3cf5dda4201cc0f2)["en"].map((day, index)=>/*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                        className: "day-label",
                        children: day
                    }, index))
            }),
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $030ff12640f54313$export$2e2bcd8739ae039), {
                daysInMonth: daysInMonth,
                startDate: startDate,
                endDate: endDate,
                onClickDay: onClickDay
            })
        ]
    });
};
var $2ea9ff98943ecbec$export$2e2bcd8739ae039 = $2ea9ff98943ecbec$var$Calendar;








const $a9717135fd69f4b9$var$createYearList = ()=>{
    let years = [];
    for(let i = 2042; i >= 1973; i--)years.push(i);
    return years;
};
const $a9717135fd69f4b9$export$719fa6a98a21baf2 = $a9717135fd69f4b9$var$createYearList();


const $7b1ce4cd21a64a86$var$MonthAndYearPickers = ({ month: month, year: year, handleMonthPicker: handleMonthPicker, handleYearPicker: handleYearPicker })=>{
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
        className: "month-and-year-pickers",
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("select", {
                className: "month-picker",
                onChange: (e)=>handleMonthPicker(e.target.value),
                value: (0, $04f600d3f756153f$export$16352d1b10c5eb38)["en"][month],
                children: (0, $04f600d3f756153f$export$16352d1b10c5eb38)["en"].map((el, index)=>/*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("option", {
                        children: el
                    }, index))
            }),
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("select", {
                className: "year-picker",
                onChange: (e)=>handleYearPicker(Number(e.target.value)),
                value: (0, $a9717135fd69f4b9$export$719fa6a98a21baf2)?.[2042 - year],
                children: (0, $a9717135fd69f4b9$export$719fa6a98a21baf2)?.map((el, index)=>{
                    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("option", {
                        children: el
                    }, index);
                })
            })
        ]
    });
};
var $7b1ce4cd21a64a86$export$2e2bcd8739ae039 = $7b1ce4cd21a64a86$var$MonthAndYearPickers;






const $7b132d8753f7d9e7$var$LeftArrow = (props)=>/*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 32 32",
        style: {
            enableBackground: "new 0 0 512 512"
        },
        xmlSpace: "preserve",
        ...props,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("path", {
            clipRule: "evenodd",
            d: "M21.06 4.94a1.5 1.5 0 0 1 0 2.12L12.122 16l8.94 8.94a1.5 1.5 0 0 1-2.122 2.12l-10-10a1.5 1.5 0 0 1 0-2.12l10-10a1.5 1.5 0 0 1 2.122 0z",
            fill: "#22ccce",
            fillRule: "evenodd",
            "data-original": "#000000"
        })
    });
var $7b132d8753f7d9e7$export$2e2bcd8739ae039 = $7b132d8753f7d9e7$var$LeftArrow;




const $bf96f87280f4f789$var$RightArrow = (props)=>/*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 32 32",
        style: {
            enableBackground: "new 0 0 512 512",
            marginLeft: 2
        },
        xmlSpace: "preserve",
        ...props,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("path", {
            clipRule: "evenodd",
            d: "M8.94 27.06a1.5 1.5 0 0 1 0-2.12L17.878 16l-8.94-8.94a1.5 1.5 0 0 1 2.122-2.12l10 10a1.5 1.5 0 0 1 0 2.12l-10 10a1.5 1.5 0 0 1-2.122 0z",
            fill: "#22ccce",
            fillRule: "evenodd",
            "data-original": "#000000"
        })
    });
var $bf96f87280f4f789$export$2e2bcd8739ae039 = $bf96f87280f4f789$var$RightArrow;


const $5890bf6f37ca8b7c$var$NextPrevButton = ({ direction: direction, handleClick: handleClick })=>{
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: "next-prev-button-wrapper",
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            className: "next-prev-button",
            onClick: handleClick,
            children: direction === "prev" ? /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $7b132d8753f7d9e7$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $bf96f87280f4f789$export$2e2bcd8739ae039), {})
        })
    });
};
var $5890bf6f37ca8b7c$export$2e2bcd8739ae039 = $5890bf6f37ca8b7c$var$NextPrevButton;




const $8315150177611a27$export$6e1d6395c58140f8 = {
    en: [
        {
            label: "Today",
            value: "today"
        },
        {
            label: "Yesterday",
            value: "yesterday"
        },
        {
            label: "This Week",
            value: "this_week"
        },
        {
            label: "Last 7 Days",
            value: "last_seven_days"
        },
        {
            label: "This Month",
            value: "this_month"
        },
        {
            label: "Last Month",
            value: "last_month"
        }
    ]
};


const $b419f602c3edfaa3$var$QuickRanges = ({ selectedQuickRange: selectedQuickRange, handleQuickRanges: handleQuickRanges })=>{
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
        className: "quick-ranges-container",
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
            style: {
                display: "flex",
                flexDirection: "column"
            },
            children: (0, $8315150177611a27$export$6e1d6395c58140f8)["en"].map((range, index)=>/*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("span", {
                    className: `range-label${selectedQuickRange === range.value ? " selected-range-label" : ""}`,
                    style: {
                        color: selectedQuickRange === range.value ? "#22ccce" : ""
                    },
                    onClick: ()=>handleQuickRanges(range.value),
                    children: range.label
                }, index))
        })
    });
};
var $b419f602c3edfaa3$export$2e2bcd8739ae039 = $b419f602c3edfaa3$var$QuickRanges;




const $431ac2f8cab7410d$var$SelectedDates = ({ startDate: startDate, endDate: endDate, isSelectingStartDate: isSelectingStartDate, setIsSelectingStartDate: setIsSelectingStartDate })=>{
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const startDateString = new Date(startDate).toLocaleDateString("en-US", options);
    const endDateString = endDate ? new Date(endDate).toLocaleDateString("en-US", options) : undefined;
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
        className: "selected-dates-container",
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                className: "start-end-date",
                style: {
                    borderColor: isSelectingStartDate ? "#22ccce" : ""
                },
                onClick: ()=>setIsSelectingStartDate(true),
                children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("span", {
                    children: startDateString
                })
            }),
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                className: "start-end-date",
                style: {
                    borderColor: isSelectingStartDate ? "" : "#22ccce"
                },
                onClick: ()=>setIsSelectingStartDate(false),
                children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("span", {
                    children: endDateString ?? "-"
                })
            })
        ]
    });
};
var $431ac2f8cab7410d$export$2e2bcd8739ae039 = $431ac2f8cab7410d$var$SelectedDates;


const $e72f03f8dc70d945$var$PickerContainer = ({ handleCancel: handleCancel, handleApply: handleApply, position: position, ...props })=>{
    const [daysInMonthDetails, setDaysInMonthDetails] = (0, $8zHUo$react.useState)([]);
    const refDatePickerContainer = (0, $8zHUo$react.useRef)(null);
    const { date: date, startDate: startDate, endDate: endDate, selectedQuickRange: selectedQuickRange, onClickDay: onClickDay, onSelectQuickRange: onSelectQuickRange, onClickNextMonth: onClickNextMonth, onClickPrevMonth: onClickPrevMonth, onSelectMonth: onSelectMonth, onSelectYear: onSelectYear, isSelectingStartDate: isSelectingStartDate, setIsSelectingStartDate: setIsSelectingStartDate } = props;
    (0, $8zHUo$react.useEffect)(()=>{
        let days_in_month_details = (0, $f3b69b6d3958d3b1$export$cdeb55f7078b69d7)(date.year, date.month);
        setDaysInMonthDetails(days_in_month_details);
    }, [
        date
    ]);
    (0, $8zHUo$react.useEffect)(()=>{
        const hideOnEscape = (e)=>{
            if (e.key === "Escape") handleCancel();
        };
        const hideOnClickOutside = (e)=>{
            if (refDatePickerContainer.current && !refDatePickerContainer.current.contains(e.target)) handleCancel();
        };
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
        return ()=>{
            document.removeEventListener("keydown", hideOnEscape, true);
            document.removeEventListener("click", hideOnClickOutside, true);
        };
    }, []);
    const handlePrevMonthClick = ()=>onClickPrevMonth();
    const handleNextMonthClick = ()=>onClickNextMonth();
    const handleYearPicker = (year)=>onSelectYear(year);
    const handleMonthPicker = (month)=>onSelectMonth(month);
    const handleQuickRanges = (range)=>onSelectQuickRange(range);
    const containerStyle = position ? {
        left: 0
    } : {
        right: 0
    };
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
        className: "module-container",
        ref: refDatePickerContainer,
        style: {
            ...containerStyle
        },
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $431ac2f8cab7410d$export$2e2bcd8739ae039), {
                startDate: startDate,
                endDate: endDate,
                isSelectingStartDate: isSelectingStartDate,
                setIsSelectingStartDate: setIsSelectingStartDate
            }),
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
                style: {
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $b419f602c3edfaa3$export$2e2bcd8739ae039), {
                        selectedQuickRange: selectedQuickRange,
                        handleQuickRanges: handleQuickRanges
                    }),
                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
                        className: "date-picker-container",
                        children: [
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
                                className: "month-and-year-container",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $5890bf6f37ca8b7c$export$2e2bcd8739ae039), {
                                        direction: "prev",
                                        handleClick: handlePrevMonthClick
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $7b1ce4cd21a64a86$export$2e2bcd8739ae039), {
                                        month: date.month,
                                        year: date.year,
                                        handleMonthPicker: handleMonthPicker,
                                        handleYearPicker: handleYearPicker
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $5890bf6f37ca8b7c$export$2e2bcd8739ae039), {
                                        direction: "next",
                                        handleClick: handleNextMonthClick
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $2ea9ff98943ecbec$export$2e2bcd8739ae039), {
                                daysInMonth: daysInMonthDetails,
                                startDate: startDate,
                                endDate: endDate,
                                onClickDay: onClickDay
                            }),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
                                className: "btn-container",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("button", {
                                        className: "cancel-button",
                                        onClick: handleCancel,
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("button", {
                                        className: "apply-button",
                                        onClick: ()=>handleApply(startDate, endDate),
                                        children: "Apply"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var $e72f03f8dc70d945$export$2e2bcd8739ae039 = $e72f03f8dc70d945$var$PickerContainer;








const $b7a477b3af68a916$var$Button = ({ setShowCalendar: setShowCalendar, showCalendar: showCalendar, start_date: start_date, end_date: end_date, className: className })=>{
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)((0, $8zHUo$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("label", {
                style: {
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem"
                },
                children: "Select Duration"
            }),
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
                id: "date_picker",
                className: (0, ($parcel$interopDefault($8zHUo$clsx)))("container", className),
                style: {
                    pointerEvents: showCalendar ? "none" : "all"
                },
                onClick: ()=>setShowCalendar(true),
                children: [
                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                        className: "date",
                        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("span", {
                            children: new Date(start_date).toLocaleDateString("en-IN")
                        })
                    }),
                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                        className: "space",
                        children: " to "
                    }),
                    /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("div", {
                        className: "date",
                        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("span", {
                            children: [
                                " ",
                                new Date(end_date).toLocaleDateString("en-IN")
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
var $b7a477b3af68a916$export$2e2bcd8739ae039 = $b7a477b3af68a916$var$Button;


const $b3e27ee364e3327b$var$DateRangePicker = ({ range: range, onChangeDateRange: onChangeDateRange, buttonClasses: buttonClasses })=>{
    const [showCalendar, setShowCalendar] = (0, $8zHUo$react.useState)(false);
    const [isButtonCloserToLeftSide, setIsButtonCloserToLeftSide] = (0, $8zHUo$react.useState)(false);
    const dateProps = (0, $c2343a66497a5af3$export$2e2bcd8739ae039)(range);
    const [dateRange, setDateRange] = (0, $8zHUo$react.useState)({
        start_date: dateProps.startDate,
        end_date: dateProps.endDate
    });
    const refDiv = (0, $8zHUo$react.useRef)(null);
    const handleCancel = ()=>{
        dateProps.setStartDate(dateRange.start_date);
        dateProps.setEndDate(dateRange.end_date);
        setDateToStartDate(dateRange.start_date);
        setShowCalendar(false);
    };
    const handleApply = (start_date, end_date)=>{
        setDateToStartDate(start_date);
        setDateRange({
            start_date: start_date,
            end_date: end_date
        });
        setShowCalendar(false);
        onChangeDateRange({
            startDate: new Date(start_date),
            endDate: new Date(end_date)
        });
    };
    const setDateToStartDate = (startDate)=>{
        let _startDate = new Date(startDate);
        dateProps.setDate({
            month: _startDate.getMonth(),
            year: _startDate.getFullYear()
        });
    };
    (0, $8zHUo$react.useEffect)(()=>{
        const div = refDiv.current;
        const rect = div.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const screenCenter = window.innerWidth / 2;
        if (center < screenCenter) setIsButtonCloserToLeftSide(true);
        else setIsButtonCloserToLeftSide(false);
    }, []);
    console.log(showCalendar);
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsxs)("div", {
        ref: refDiv,
        style: {
            position: "relative",
            width: "fit-content"
        },
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $b7a477b3af68a916$export$2e2bcd8739ae039), {
                setShowCalendar: setShowCalendar,
                showCalendar: showCalendar,
                start_date: dateRange.start_date,
                end_date: dateRange.end_date,
                className: buttonClasses
            }),
            showCalendar ? /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $e72f03f8dc70d945$export$2e2bcd8739ae039), {
                handleCancel: handleCancel,
                handleApply: handleApply,
                position: isButtonCloserToLeftSide,
                ...dateProps
            }) : /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $8zHUo$reactjsxruntime.Fragment), {})
        ]
    });
};
var $b3e27ee364e3327b$export$2e2bcd8739ae039 = $b3e27ee364e3327b$var$DateRangePicker;








//# sourceMappingURL=main.js.map
