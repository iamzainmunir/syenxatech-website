export const useCasesData = {
    doctor: {
        slug: "doctor",
        hero: {
            title: "Never Miss a Patient, Even Outside Surgery Hours",
            subtitle:
                "AI-powered receptionists that triage emergencies and book appointments 24/7.",
        },
        challenges: [
            "Patients ringing outside surgery hours for emergencies and appointments",
            "Reception staff overwhelmed during busy periods",
            "High DNA (Did Not Attend) rates due to missed reminders",
            "Lost revenue from unanswered out-of-hours calls",
        ],
        solutions: [
            {
                title: "24/7 Appointment Booking",
                description:
                    "Patients book appointments via telephone, online chat, or WhatsApp at any time—even at midnight.",
            },
            {
                title: "Emergency Triage",
                description:
                    "AI assesses dental emergencies and connects urgent cases to on-call dentists straightaway.",
            },
            {
                title: "Automated Reminders",
                description:
                    "Send appointment confirmations and reminders via SMS, email, and WhatsApp to reduce DNAs.",
            },
            {
                title: "NHS & Private Insurance Verification",
                description:
                    "Answer common questions about NHS availability, private treatment options, and accepted insurance plans.",
            },
            {
                title: "Prescription Requests",
                description:
                    "Handle routine prescription requests and forward to appropriate staff members.",
            },
        ],
        stats: [
            { value: 40, label: "Reduction in DNAs", suffix: "%" },
            { value: 24, label: "Availability", suffix: "/7" },
            { value: 85, label: "Patient Satisfaction Increase", suffix: "%" },
        ],
        caseStudy: {
            title: "Multi-Location Dental Practice",
            scenario:
                "Dr. John owns three dental surgeries across London, Manchester, and Birmingham. Each location needs a local number, but managing multiple physical SIMs and phone systems is costly and complicated.",
            challenge:
                "Patients prefer ringing local numbers; managing three separate phone systems and staff; tracking which location receives which enquiries; high costs for multiple phone lines.",
            solution:
                "Activate three local eSIM numbers (020, 0161, 0121) instantly. One AI system answers all three numbers with location-specific responses. Patients automatically directed to nearest surgery.",
            result: '"We went from three separate phone systems to one unified eSIM solution. Our costs dropped by 60%, and we never miss a booking from any location. The AI knows which surgery to book based on the number called."',
        },
    },
    "real-estate": {
        slug: "real-estate",
        hero: {
            title: "Capture Every Lead, Close More Deals",
            subtitle:
                "Your always-on property agent that qualifies leads and schedules viewings instantly.",
        },
        challenges: [
            "Leads lost due to delayed response times",
            "Agents wasting time on unqualified prospects",
            "Missed inquiries during weekends and evenings",
            "Inconsistent follow-up with potential buyers",
        ],
        solutions: [
            {
                title: "Instant Lead Qualification",
                description:
                    "AI screens callers to identify serious buyers, their budget, and timeline before passing them to agents.",
            },
            {
                title: "24/7 Viewing Scheduling",
                description:
                    "Automatically syncs with agent calendars to book property viewings instantly, day or night.",
            },
            {
                title: "Property & Neighborhood FAQ",
                description:
                    "Instantly answers questions about property specs, schools, and local amenities.",
            },
            {
                title: "Automated Follow-ups",
                description:
                    "Nurtures leads with SMS and email drip campaigns to keep your agency top-of-mind.",
            },
        ],
        stats: [
            { value: 60, label: "Increase in Valid Leads", suffix: "%" },
            { value: 0, label: "Missed Calls", suffix: "%" },
            { value: 3, label: "Hours Saved Daily per Agent", suffix: "hrs" },
        ],
        caseStudy: {
            title: "Urban Living Estate Agents",
            scenario:
                "A boutique agency in Chicago was struggling to keep up with weekend inquiries for luxury rentals.",
            challenge:
                "Agents were burning out trying to answer calls 24/7, yet leads were still slipping through the cracks during peak hours.",
            solution:
                "Implemented an AI Voice Agent to handle scheduling and initial screening. The AI integrates directly with their CRM to log every interaction.",
            result: '"We doubled our viewing bookings in the first month. Our agents now only speak to qualified buyers, and morale is at an all-time high."',
        },
    },
    gym: {
        slug: "gym",
        hero: {
            title: "Boost Membership & Retention on Autopilot",
            subtitle:
                "Engage members and handle inquiries without distracting your floor staff.",
        },
        challenges: [
            "Front desk staff tied up with phone calls instead of members",
            "Missed class booking opportunities",
            "Failed payment recovery conversations are awkward",
            "Members churning due to lack of engagement",
        ],
        solutions: [
            {
                title: "Class & PT Booking",
                description:
                    "Members can book classes or personal training sessions instantly via voice or chat.",
            },
            {
                title: "Membership FAQ Automation",
                description:
                    "Answers questions about pricing, hours, and amenities instantly.",
            },
            {
                title: "Churn Prevention",
                description:
                    "Proactively reaches out to members who haven't visited in 30 days with special offers.",
            },
            {
                title: "Payment Reminders",
                description:
                    "Gentle, automated follow-ups for expired cards or failed payments.",
            },
        ],
        stats: [
            { value: 30, label: "Increase in Class Attendance", suffix: "%" },
            { value: 50, label: "Admin Time Saved", suffix: "%" },
            { value: 15, label: "Churn Reduction", suffix: "%" },
        ],
        caseStudy: {
            title: "IronClad Fitness chain",
            scenario:
                "A 5-location gym brand needed to centralize member support without hiring a call center.",
            challenge:
                "Inconsistent information given by staff at different locations and missed calls during rush hours.",
            solution:
                "Deployed a central AI agent handling calls for all 5 locations, routing specific complex queries to the right site manager.",
            result: '"Our front desk staff can finally focus on the members in the gym. The AI handles 90% of routine questions and bookings perfectly."',
        },
    },
    "beauty-salon": {
        slug: "beauty-salon",
        hero: {
            title: "Seamless Booking for Premium Salons",
            subtitle:
                "Let your stylists focus on beauty while AI handles the bookings.",
        },
        challenges: [
            "Stylists interrupting treatments to answer the phone",
            "Double-booking errors",
            "Lost revenue from last-minute cancellations",
            "Client frustration with unanswered calls",
        ],
        solutions: [
            {
                title: "Smart Scheduling",
                description:
                    "Integrates with booking software to find the perfect slot based on treatment duration and staff availability.",
            },
            {
                title: "Deposit Collection",
                description:
                    "Securely collects deposits during booking to reduce no-shows.",
            },
            {
                title: "Pre-appointment Instructions",
                description:
                    "Automatically informs clients about aftercare or preparation needed for their specific treatment.",
            },
            {
                title: "Review Management",
                description:
                    "Follows up after appointments to request reviews and feedback.",
            },
        ],
        stats: [
            { value: 95, label: "Booking Accuracy", suffix: "%" },
            { value: 20, label: "Revenue Increase", suffix: "%" },
            { value: 100, label: "Response Rate", suffix: "%" },
        ],
        caseStudy: {
            title: "Luxe Spa & Salon",
            scenario:
                "A high-end spa in Beverly Hills wanted to offer a premium booking experience matching their service quality.",
            challenge:
                "Clients expected immediate attention, but the receptionist was often overwhelmed with guests in the lobby.",
            solution:
                "A custom 24/7 AI concierge that handles bookings, reschedules, and answers service questions with a polite, luxury tone.",
            result: '"It\'s like having a dedicated receptionist for every single client. Our bookings are full, and the lobby atmosphere is always calm."',
        },
    },
};
