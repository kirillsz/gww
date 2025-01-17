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
  const [isPending, setisPending] = useState(false);
  const [buttonText, setButtonText] = useState("Оставить заявку");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    setisPending(true);
    const result = await postData("/api/pipls/", data);
    if (result !== 201) {
      alert("Произошла ошибка, попробуйте еще раз!");
      setisPending(false);
      return;
    }
    setButtonText("Заявка отправлена успешно!");
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
          {...register("date", { required: true })}
        />
        {errors.date && (
          <p
            className="input-box__text fs-300 fw-medium"
            style={{ color: "red" }}
          >
            Это обязательное поле
          </p>
        )}
      </div>

      <Button text={buttonText} disabled={isPending} />
    </form>
  );
};

export default ContactForm;
