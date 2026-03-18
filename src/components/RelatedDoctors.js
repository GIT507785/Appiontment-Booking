import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { doctors } from '../assets/assets/assets';
import { useNavigate } from 'react-router-dom';
const RelatedDoctors = ({ docId }) => {
    // ✅ Make it an ARRAY
    const [relatedDoctor, setRelatedDoctor] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (doctors.length > 0) {
            const currentDoctor = doctors.find((doc) => doc._id === docId);
            if (!currentDoctor)
                return;
            const relatedDoctorsData = doctors.filter((doc) => doc._id !== docId &&
                doc.speciality === currentDoctor.speciality);
            setRelatedDoctor(relatedDoctorsData);
        }
    }, [docId]);
    return (_jsxs("div", { className: "mt-6 flex flex-col items-center justify-center", children: [_jsx("h1", { className: "text-3xl md:text-4xl font-medium", children: "Related Doctors to Book" }), _jsx("div", { className: "grid sm:grid-cols-5 grid-cols-1 gap-5 mt-10", children: relatedDoctor.slice(0, 10).map((item) => (_jsxs("div", { onClick: () => navigate(`/appointment/${item._id}`), className: "border border-blue-300 rounded cursor-pointer hover:translate-y-[-10px] transition-all duration-300", children: [_jsx("img", { src: item.image, alt: item.name, className: "bg-blue-100 rounded-t" }), _jsxs("div", { className: "px-2 mt-1 flex gap-3", children: [_jsx("p", { className: "h-2.5 w-2.5 mt-2 bg-green-500 rounded-full" }), _jsx("p", { className: "text-xs text-green-500", children: "Available" })] }), _jsx("p", { className: "px-2 text-sm font-medium", children: item.name }), _jsx("p", { className: "px-2 text-xs mb-2", children: item.speciality })] }, item._id))) })] }));
};
export default RelatedDoctors;
