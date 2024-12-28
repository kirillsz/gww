"use client";
import { useState } from "react";
import Input from "../Input";
import Button from "../Button";

const ContactForm = () => {
  const [inputText, setinputText] = useState("");
  const [pending, setpending] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setpending(true);
    setTimeout(() => {
      console.log("Submited");
      setpending(false);
    }, 1500);
  };
  const handleInputChange = (value: string) => {
    setinputText(value);
  };
  return (
    <form className="contact-form" onSubmit={handleFormSubmit}>
      <Input
        onChange={handleInputChange}
        value={inputText}
        name="socials"
        type="text"
        placeholder="@Telegram, WhatsApp, email"
      />

      <Button pending={pending} text="Оставить заявку" />
    </form>
  );
};

export default ContactForm;
