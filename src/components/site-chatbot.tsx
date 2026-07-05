"use client";

import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { chatRootStepId, chatSteps } from "@/data/chatbot";

const chatActionClass = "theme-chat-action";

export function SiteChatbot() {
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [stepId, setStepId] = useState(chatRootStepId);

  const step = chatSteps[stepId] ?? chatSteps[chatRootStepId];

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const openPanel = useCallback(() => {
    setStepId(chatRootStepId);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close, open]);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
  }, [open, stepId]);

  const handleAction = (action: (typeof step.actions)[number]) => {
    if (action.kind === "step") {
      setStepId(action.stepId);
      return;
    }
    close();
  };

  return (
    <div className="fixed bottom-[5.25rem] end-4 z-[45] 2xl:bottom-6">
      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${panelId}-title`}
          tabIndex={-1}
          className="theme-chat-panel mb-3 w-[min(100vw-2rem,22rem)] shadow-lift"
        >
          <div className="theme-chat-header">
            <div className="min-w-0">
              <p id={`${panelId}-title`} className="theme-text-heading font-semibold">
                {step.title}
              </p>
              {step.body ? <p className="theme-text-muted mt-1 text-sm leading-relaxed">{step.body}</p> : null}
            </div>
            <button
              type="button"
              onClick={close}
              className="theme-icon-btn h-9 w-9"
              aria-label="סגירת הצ'אט"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <ul className="max-h-[min(60vh,20rem)] space-y-2 overflow-y-auto p-3">
            {step.actions.map((action) => {
              const content = (
                <>
                  <span className="theme-text-heading block font-medium">{action.label}</span>
                  {action.description ? (
                    <span className="theme-text-muted mt-0.5 block text-xs leading-relaxed">{action.description}</span>
                  ) : null}
                </>
              );

              if (action.kind === "link") {
                if (action.external || action.href.startsWith("http") || action.href.startsWith("mailto:") || action.href.startsWith("tel:")) {
                  return (
                    <li key={action.label}>
                      <a
                        href={action.href}
                        className={chatActionClass}
                        onClick={close}
                        {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {content}
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={action.label}>
                    <Link href={action.href} className={chatActionClass} onClick={close}>
                      {content}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={action.label}>
                  <button type="button" onClick={() => handleAction(action)} className={chatActionClass}>
                    {content}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <button
        type="button"
        onClick={open ? close : openPanel}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? "סגירת עוזר ניווט" : "פתיחת עוזר ניווט"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-500 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        {open ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}
      </button>
    </div>
  );
}
