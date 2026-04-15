"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

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
};

const inputClassName =
  "w-full bg-transparent border-b border-sol-bark/20 font-sans text-sm text-sol-bark py-3 focus:outline-none focus:border-sol-terracotta transition-colors placeholder:text-sol-bark/30";

const labelClassName =
  "mb-1 block font-sans text-xs uppercase tracking-widest text-sol-bark/50";

const errorClassName = "mt-1 font-sans text-xs text-sol-terracotta";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
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
        <h3 className="mt-4 font-serif text-2xl text-sol-bark">Messaggio inviato</h3>
        <p className="mt-2 font-sans text-sm text-sol-bark/70">
          Ti risponderemo entro 24 ore.
        </p>
      </div>
    );
  }

  return (
    <form className="bg-sol-mist p-8 md:p-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="nome" className={labelClassName}>
            Nome
          </label>
          <input
            id="nome"
            type="text"
            className={inputClassName}
            placeholder="Il tuo nome"
            {...register("nome", { required: "Inserisci il tuo nome." })}
          />
          {errors.nome ? <p className={errorClassName}>{errors.nome.message}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClassName}
            placeholder="nome@email.it"
            {...register("email", {
              required: "Inserisci la tua email.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Inserisci un indirizzo email valido.",
              },
            })}
          />
          {errors.email ? <p className={errorClassName}>{errors.email.message}</p> : null}
        </div>

        <div>
          <label htmlFor="telefono" className={labelClassName}>
            Telefono
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
            Oggetto
          </label>
          <select id="oggetto" className={inputClassName} {...register("oggetto")}>
            <option value="Informazioni generali">Informazioni generali</option>
            <option value="Prenotazione camere">Prenotazione camere</option>
            <option value="Prenotazione agriglamping">Prenotazione agriglamping</option>
            <option value="Eventi privati">Eventi privati</option>
            <option value="Altro">Altro</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="messaggio" className={labelClassName}>
            Messaggio
          </label>
          <textarea
            id="messaggio"
            rows={4}
            className={inputClassName}
            placeholder="Scrivi qui il tuo messaggio..."
            {...register("messaggio", {
              required: "Inserisci un messaggio.",
              minLength: {
                value: 10,
                message: "Il messaggio deve contenere almeno 10 caratteri.",
              },
            })}
          />
          {errors.messaggio ? (
            <p className={errorClassName}>{errors.messaggio.message}</p>
          ) : null}
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
            Messaggio inviato
          </>
        ) : isSubmitting ? (
          "Invio in corso..."
        ) : (
          "Invia messaggio"
        )}
      </button>
    </form>
  );
}
