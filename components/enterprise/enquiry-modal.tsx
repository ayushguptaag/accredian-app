"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckBig, LoaderCircle, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { enquiryDefaultValues, enquirySchema } from "@/lib/enquiry-schema";
import type {
  EnquiryFormValues,
  EnquiryResponse,
  SelectOption,
} from "@/types/site";

type EnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  domainOptions: SelectOption[];
  modeOptions: SelectOption[];
};

type SubmissionState =
  | { kind: "idle"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-brand";

const labelClassName = "text-sm font-semibold text-ink";

export function EnquiryModal({
  isOpen,
  onClose,
  domainOptions,
  modeOptions,
}: EnquiryModalProps) {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    kind: "idle",
    message: "",
  });
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: enquiryDefaultValues,
    mode: "onChange",
  });

  const closeModal = useCallback(() => {
    setSubmissionState({ kind: "idle", message: "" });
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const focusTarget = dialogRef.current?.querySelector<HTMLElement>(
      "input, select, button, textarea",
    );

    focusTarget?.focus();

    return () => {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const listener = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements || focusableElements.length === 0) {
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [closeModal, isOpen]);

  if (!isOpen) {
    return null;
  }

  const onSubmit = handleSubmit(async (values) => {
    setSubmissionState({ kind: "idle", message: "" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result: EnquiryResponse = await response.json();

      if (!response.ok || !result.ok) {
        if (!result.ok && result.fieldErrors) {
          for (const [field, message] of Object.entries(result.fieldErrors)) {
            if (!message) {
              continue;
            }

            setError(field as keyof EnquiryFormValues, {
              type: "server",
              message,
            });
          }
        }

        setSubmissionState({
          kind: "error",
          message:
            result.message ||
            "We could not submit your request right now. Please try again shortly.",
        });
        return;
      }

      reset();
      setSubmissionState({ kind: "success", message: result.message });
    } catch {
      setSubmissionState({
        kind: "error",
        message:
          "We could not submit your request right now. Please check your connection and try again.",
      });
    }
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4 py-8 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-heading"
        className="surface-panel reveal-up relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-white"
      >
        <div className="brand-gradient border-b border-line px-6 py-5 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Speak with our Advisor
              </p>
              <h2
                id="enquiry-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink"
              >
                Enquire Now
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                Share your team requirements and we&apos;ll recommend a tailored
                learning path.
              </p>
            </div>

            <button
              type="button"
              onClick={closeModal}
              className="rounded-full border border-line bg-white p-2 text-ink hover:border-brand hover:text-brand"
              aria-label="Close enquiry form"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-5 px-6 py-6 sm:px-8 sm:py-8">
          {submissionState.kind === "success" ? (
            <div className="rounded-3xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
              <div className="flex items-start gap-3">
                <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0" />
                <p>{submissionState.message}</p>
              </div>
            </div>
          ) : null}

          {submissionState.kind === "error" ? (
            <div className="rounded-3xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {submissionState.message}
            </div>
          ) : null}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClassName}>
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                className={fieldClassName}
                {...register("name")}
              />
              {errors.name ? (
                <p className="mt-2 text-xs font-medium text-rose-600">
                  {errors.name.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className={labelClassName}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className={fieldClassName}
                {...register("email")}
              />
              {errors.email ? (
                <p className="mt-2 text-xs font-medium text-rose-600">
                  {errors.email.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="phone" className={labelClassName}>
                Contact Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone number is required"
                className={fieldClassName}
                {...register("phone")}
              />
              {errors.phone ? (
                <p className="mt-2 text-xs font-medium text-rose-600">
                  {errors.phone.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="company" className={labelClassName}>
                Company Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Enter company name"
                className={fieldClassName}
                {...register("company")}
              />
              {errors.company ? (
                <p className="mt-2 text-xs font-medium text-rose-600">
                  {errors.company.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="courseDomain" className={labelClassName}>
                Course Domain
              </label>
              <select
                id="courseDomain"
                className={fieldClassName}
                defaultValue=""
                {...register("courseDomain")}
              >
                <option value="" disabled>
                  Select Domain
                </option>
                {domainOptions.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.courseDomain ? (
                <p className="mt-2 text-xs font-medium text-rose-600">
                  {errors.courseDomain.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="candidates" className={labelClassName}>
                Number of Candidates
              </label>
              <input
                id="candidates"
                type="number"
                min={1}
                inputMode="numeric"
                placeholder="Enter No. of candidates"
                className={fieldClassName}
                {...register("candidates", { valueAsNumber: true })}
              />
              {errors.candidates ? (
                <p className="mt-2 text-xs font-medium text-rose-600">
                  {errors.candidates.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="mode" className={labelClassName}>
                Mode of Delivery
              </label>
              <select
                id="mode"
                className={fieldClassName}
                defaultValue=""
                {...register("mode")}
              >
                <option value="" disabled>
                  Select Mode of Delivery
                </option>
                {modeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.mode ? (
                <p className="mt-2 text-xs font-medium text-rose-600">
                  {errors.mode.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="location" className={labelClassName}>
                Preferred Location
              </label>
              <input
                id="location"
                type="text"
                placeholder="Eg: Gurgaon, Delhi, India"
                className={fieldClassName}
                {...register("location")}
              />
              {errors.location ? (
                <p className="mt-2 text-xs font-medium text-rose-600">
                  {errors.location.message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-muted">
              Mock API note: enter <span className="font-semibold">test-error</span>{" "}
              as the location to simulate a backend failure response.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-w-36 items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(36,115,234,0.24)] hover:-translate-y-0.5 hover:bg-brand-deep disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-brand/70"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Submitting
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
