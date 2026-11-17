import { useState } from "react";
import SectionHeading from "./Heading";

// Get a free endpoint at formspree.io and paste it here
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const labelClass = "mb-2 block text-[13px] font-bold uppercase tracking-widest";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="mt-28 bg-linear-to-br from-violet to-[#2a1fb0] px-8 py-24"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Start a project" title="Got a game in mind?" className="mb-4 [&>p]:!text-white" />
          <p className="text-lg leading-relaxed text-white/90">
            Got a big idea or brand in gaming? We’d love to hear about your project! Reach out, and let’s team up to bring your vision to life. We’re here to provide the support you need to level up your project.
            <br /> <br />
            Or email <a href="mailto:hello@example.com" className="underline">info@andicoxstudio.com</a>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <label htmlFor="name" className={labelClass}>Name</label>
            <input id="name" name="name" type="text" required autoComplete="name" className="field" />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" className="field" />
          </div>
          <div>
            <label htmlFor="message" className={labelClass}>Tell us about your project</label>
            <textarea id="message" name="message" rows={4} required className="field" />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn cursor-pointer bg-ink text-white hover:brightness-125 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" aria-live="polite" className="text-sm font-medium">
              {status === "sent" && "Thanks! We'll be in touch soon."}
              {status === "error" && "Something went wrong. Please try again or email us."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
