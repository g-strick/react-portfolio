import React from "react";
import ContactItem from "../Components/ContactItem";
// import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../Components/Title";
function ContactPage() {
  return (
    <>
      <Title title={"About Me"} span={"About Me"} className="title" />
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208648.0049232124!2d-80.97991234516904!3d35.20335333326351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C%20NC!5e0!3m2!1sen!2sus!4v1613599388949!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="contact map"
          ></iframe>
        </div>
        <div className="contact-sect">
          {/* <ContactItem icon={phone} text1={"+257 7756110718"} title={"Phone"} /> */}
          <ContactItem
            icon={email}
            text1={"graysonstricker@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Charlotte, NC"}
            title={"Location"}
          />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
