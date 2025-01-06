"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { postData } from "@/hooks/hooks";
import Button from "../Button";

type ContactFormInputs = {
  name: string;
  date: string;
};

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [buttonText, setButtonText] = useState("Оставить заявку");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();
  const onSubmit = async (data) => {
    setFormStatus(true);
    const result = await postData("http://127.0.0.1:9000/api/pipls/", data);
    console.log(result);
    if (result === 201) {
      setButtonText("Заявка отправлена успешно!");
    }
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-box">
        <input
          className="sr-only"
          defaultValue="GWW_USER"
          {...register("name")}
        />
        <input
          placeholder="@Telegram, WhatsApp, Email"
          className="input fs-300 fw-medium"
          aria-invalid={errors.date ? "true" : "false"}
          autoComplete="email"
          {...register("date", { required: true })}
        />
        {errors.date && (
          <p className="input-box__text fs-300 fw-medium">
            Это обязательное поле
          </p>
        )}
      </div>

      <Button text={buttonText} disabled={formStatus} />
    </form>
  );
};

export default ContactForm;
