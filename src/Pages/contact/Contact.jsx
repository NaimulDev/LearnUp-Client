import contactBg from "../.././assets/Banner/contact.png";
import { FaLocationArrow, FaClock, FaPhone } from "react-icons/fa";

// Define an array of addresses with icons
const addresses = [
  {
    icon: FaLocationArrow, // Icon for address
    a: "2750 Quadra Street Victoria Road,",
    b: "New York, Canada",
  },
  {
    icon: FaClock, // Icon for working hours
    a: "Monday - Friday: 09:00 - 20:00",
    b: "Sunday & Saturday: 10:30 - 22:00",
  },
  {
    icon: FaPhone, // Icon for phone number
    a: "+1 (123) 456-7890",
    b: "hello@ellen.com",
  },
];

const Contact = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-32 lg:py-32">
      <div className="flex flex-col lg:flex-row gap-4 ">
        <div className="lg:w-1/2">
          <div>
            {/* Contact Details Heading */}
            <h3 className="text-red font-bold text-sm sm:text-base md:text-lg lg:text-xl">
              CONTACT DETAILS
            </h3>
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-2">
              Get in Touch
            </h1>
            {/* Description */}
            <p className="text-xs sm:text-xs lg:text-base my-5 text-slate-600">
              Have an inquiry or some feedback for us? Fill out the form below
              to contact our team. For partnership and business development
              inquiries, please contact us at hello@ellen.com.
            </p>
          </div>
          {/* Render address sections with icons */}
          {addresses.map((address, index) => (
            <div className="flex gap-4 my-6" key={index}>
              <div className=" px-7 bg-secondary hover:bg-info flex items-center">
                {<address.icon className="text-red justify-center my-auto" />}
              </div>
              <div className="">
                {/* Address Heading */}
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl">
                  {address.icon === FaLocationArrow
                    ? "Our Address"
                    : address.icon === FaClock
                    ? "Working Hours"
                    : "Phone Number"}
                </h1>
                {/* Content */}
                <h4 className="text-xs my-3">{address.a}</h4>
                <h4 className="text-xs">{address.b}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          {/* Contact Background Image */}
          <img
            className="w-full lg:w-auto lg:h-auto rounded-lg shadow-lg "
            src={contactBg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
