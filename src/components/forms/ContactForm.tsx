"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { contact } from "@/lib/site";
import { track } from "@/components/analytics/Analytics";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

type ContactFormValues = {
  nome: string;
  email: string;
  telefono: string;
  oggetto:
    | "Informazioni generali"
    | "Prenotazione camere"
    | "Prenotazione agriglamping"
    | "Eventi privati"
    | "Altro";
  messaggio: string;
  privacy: boolean;
};

const inputClassName =
  "w-full bg-transparent border-b border-sol-bark/20 font-sans text-sm text-sol-bark py-3 focus:outline-none focus:border-sol-terracotta transition-colors placeholder:text-sol-bark/30";

const labelClassName =
  "mb-1 block font-sans text-xs uppercase tracking-widest text-sol-bark/70";

const errorClassName = "mt-1 font-sans text-xs text-sol-terracotta-deep";

type ContactFormProps = {
  dict: Dictionary["contactForm"];
  locale: Locale;
};

export default function ContactForm({ dict, locale }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      nome: "",
      email: "",
      telefono: "",
      oggetto: "Informazioni generali",
      messaggio: "",
      privacy: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsError(false);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.nome,
          email: data.email,
          telefono: data.telefono,
          oggetto: data.oggetto,
          messaggio: data.messaggio,
          lingua: locale,
        }),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio");
      }

      track("generate_lead", { form: "contatti", subject: data.oggetto, language: locale });
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-sol-olive/10 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-sol-olive"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20 7L10 17L5 12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="mt-4 font-serif text-2xl text-sol-bark">{dict.successTitle}</h3>
        <p className="mt-2 font-sans text-sm text-sol-bark/70">
          {dict.successText}
        </p>
      </div>
    );
  }

  return (
    <form className="bg-sol-mist p-8 md:p-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="nome" className={labelClassName}>
            {dict.name}
          </label>
          <input
            id="nome"
            type="text"
            className={inputClassName}
            placeholder={dict.namePlaceholder}
            {...register("nome", { required: dict.nameRequired })}
          />
          {errors.nome ? <p className={errorClassName}>{errors.nome.message}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>
            {dict.email}
          </label>
          <input
            id="email"
            type="email"
            className={inputClassName}
            placeholder={dict.emailPlaceholder}
            {...register("email", {
              required: dict.emailRequired,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: dict.emailInvalid,
              },
            })}
          />
          {errors.email ? <p className={errorClassName}>{errors.email.message}</p> : null}
        </div>

        <div>
          <label htmlFor="telefono" className={labelClassName}>
            {dict.phone}
          </label>
          <input
            id="telefono"
            type="tel"
            className={inputClassName}
            placeholder="+39 ..."
            {...register("telefono")}
          />
        </div>

        <div>
          <label htmlFor="oggetto" className={labelClassName}>
            {dict.subject}
          </label>
          <select id="oggetto" className={inputClassName} {...register("oggetto")}>
            <option value="Informazioni generali">{dict.subjects["Informazioni generali"]}</option>
            <option value="Prenotazione camere">{dict.subjects["Prenotazione camere"]}</option>
            <option value="Prenotazione agriglamping">{dict.subjects["Prenotazione agriglamping"]}</option>
            <option value="Eventi privati">{dict.subjects["Eventi privati"]}</option>
            <option value="Altro">{dict.subjects["Altro"]}</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="messaggio" className={labelClassName}>
            {dict.message}
          </label>
          <textarea
            id="messaggio"
            rows={4}
            className={inputClassName}
            placeholder={dict.messagePlaceholder}
            {...register("messaggio", {
              required: dict.messageRequired,
              minLength: {
                value: 10,
                message: dict.messageMin,
              },
            })}
          />
          {errors.messaggio ? (
            <p className={errorClassName}>{errors.messaggio.message}</p>
          ) : null}
        </div>
        <div className="md:col-span-2">
          <label className="flex items-start gap-3 font-sans text-xs leading-relaxed text-sol-bark/70">
            <input
              type="checkbox"
              className="mt-0.5 accent-sol-terracotta"
              {...register("privacy", {
                required: dict.privacyRequired,
              })}
            />
            <span>
              {dict.privacyBefore}
              <Link href="/privacy-policy" className="underline underline-offset-2">
                {dict.privacyLink}
              </Link>
              {dict.privacyAfter}
            </span>
          </label>
          {errors.privacy ? <p className={errorClassName}>{errors.privacy.message}</p> : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex items-center gap-2 rounded-none bg-sol-terracotta px-8 py-4 font-sans text-xs uppercase tracking-wide text-white transition-colors hover:bg-sol-terracotta/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitted ? (
          <>
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20 7L10 17L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {dict.successTitle}
          </>
        ) : isSubmitting ? (
          dict.submitting
        ) : (
          dict.submit
        )}
      </button>
      {isError ? (
        <p className="mt-3 font-sans text-xs text-sol-terracotta-deep">
          {dict.error}{" "}
          <Link href={`mailto:${contact.email}`} className="underline underline-offset-2">
            {contact.email}
          </Link>
        </p>
      ) : null}
    </form>
  );
}
