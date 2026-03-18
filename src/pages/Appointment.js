import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import RelatedDoctors from "../components/RelatedDoctors";
import { fetchSingleDoctor } from "../api/doctors";
const Appointment = () => {
    const { docId } = useParams();
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [time, setTime] = useState();
    const [docInfo, setDocIfo] = useState(null);
    const fetchDoctorData = async () => {
        console.log("hello 1");
        if (!docId)
            return;
        const doctorData = await fetchSingleDoctor(docId);
        setDocIfo(doctorData.doctor);
    };
    useEffect(() => {
        fetchDoctorData();
    }, [docId]);
    const getAvailableSlots = () => {
        const today = new Date();
        const slots = [];
        for (let i = 0; i < 7; i++) { // 👈 7 days
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            const daySlots = [];
            let startTime = new Date(currentDate);
            startTime.setHours(10, 0, 0);
            for (let j = 0; j < 8; j++) {
                const tempDate = new Date(startTime);
                tempDate.setMinutes(startTime.getMinutes() + j * 30);
                daySlots.push({
                    datetime: new Date(tempDate),
                    time: tempDate.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                });
            }
            slots.push(daySlots);
        }
        setDocSlots(slots);
    };
    useEffect(() => {
        getAvailableSlots();
    }, [docInfo]);
    useEffect(() => {
        console.log(docSlots);
    }, [docSlots]);
    const daysOfWeek = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "mt-10 mb-10 px-4", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [_jsx("div", { className: "bg-blue-400 rounded-lg overflow-hidden \r\n                    w-full md:w-1/3 flex justify-center items-end", children: _jsx("img", { src: docInfo?.image, alt: docInfo?.name, className: "w-full h-72 md:h-full object-cover" }) }), _jsxs("div", { className: "w-full md:w-2/3 border px-6 py-5 \r\n                    border-gray-300 rounded-lg", children: [_jsx("p", { className: "font-bold text-2xl md:text-3xl", children: docInfo?.name }), _jsxs("div", { className: "flex flex-wrap items-center gap-3 mt-2", children: [_jsx("p", { className: "text-sm text-gray-600", children: docInfo?.speciality }), _jsx("p", { className: "border px-3 py-1 text-sm text-gray-600 \r\n                      rounded-full border-gray-300", children: docInfo?.experience })] }), _jsxs("h5", { className: "flex font-bold gap-1 mt-4 items-center", children: ["About", _jsx(FcAbout, {})] }), _jsx("p", { className: "text-gray-600 text-sm mt-2 leading-relaxed", children: docInfo?.about }), _jsxs("p", { className: "text-sm mt-4 text-gray-600", children: ["Appointment fee:", _jsxs("span", { className: "font-bold text-black ml-2", children: ["$", docInfo?.fees] })] })] })] }) }), _jsxs("div", { className: "w-full mt-6 px-4 md:px-0 font-medium text-gray-700", children: [_jsx("p", { className: "text-xl md:text-2xl mb-4 font-bold", children: "Booking Slots" }), _jsx("div", { className: "flex gap-3 overflow-x-auto scrollbar-hide py-4", children: docSlots.length > 0 &&
                            docSlots.map((item, index) => (_jsxs("div", { onClick: () => setSlotIndex(index), className: `text-center py-4 px-4 min-w-[70px] 
            rounded-full cursor-pointer transition-all duration-200
            ${slotIndex === index
                                    ? "bg-blue-500 text-white"
                                    : "border border-gray-300 text-gray-600"}`, children: [_jsx("p", { className: "text-sm font-medium", children: item[0]?.datetime &&
                                            daysOfWeek[item[0].datetime.getDay()] }), _jsx("p", { className: "text-sm", children: item[0]?.datetime &&
                                            item[0].datetime.getDate() })] }, index))) }), _jsx("div", { className: "flex gap-3 overflow-x-auto scrollbar-hide mt-4 pb-4", children: docSlots.length > 0 &&
                            docSlots[slotIndex]?.map((item, index) => (_jsx("p", { onClick: () => setTime(item.time), className: "text-sm flex-shrink-0 px-5 py-2 \r\n                     border border-gray-300 \r\n                     rounded-full cursor-pointer \r\n                     hover:bg-blue-500 hover:text-white \r\n                     transition", children: item.time.toLowerCase() }, index))) }), _jsx(Link, { to: '', className: "flex  w-sm items-center justify-center bg-blue-500 text-white\r\n        rounded-full  py-2 mx-auto mt-4 cursor-pointer", children: "Book an Appiontment" })] }), _jsx("div", { className: "mt-10", children: _jsx(RelatedDoctors, { docId: "" }) })] }));
};
export default Appointment;
