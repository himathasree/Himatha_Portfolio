import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { contact } from "../data/siteContent";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timer = window.setTimeout(() => {
      setToastMessage("");
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const onSubmit = async (event) => {
  event.preventDefault();

  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    setStatus({
      type: "error",
      message: "Please fill in your name, email, and message.",
    });
    return;
  }

  if (!isValidEmail(formData.email)) {
    setStatus({
      type: "error",
      message: "Please enter a valid email address.",
    });
    return;
  }

  if (!formspreeEndpoint) {
    setStatus({
      type: "error",
      message: "Form endpoint is not configured. Please set VITE_FORMSPREE_ENDPOINT.",
    });
    return;
  }

  setIsSubmitting(true);
  setStatus({ type: "idle", message: "" });

  try {
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      body: new FormData(event.target),
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Submission failed");
    }

    setToastMessage("Message sent successfully.");
    setFormData({ name: "", email: "", subject: "", message: "" });

  } catch (error) {
    setStatus({
      type: "error",
      message: error.message || "Could not send the message.",
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section id="contact" className="scroll-mt-24 py-12 md:py-14 lg:py-12 xl:py-16">
      <div className="container-base">
        <SectionHeading
          title="Get In Touch"
          subtitle="Feel free to reach out for opportunities, collaborations, or just a quick chat. I’m always open to discussing new ideas and building meaningful projects."
        />

        <div className="grid items-stretch gap-4 md:gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-5">
          <aside className="glass h-full rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7">
            <h3 className="text-3xl font-bold text-text">Contact Information</h3>
            <p className="mt-4 text-lg text-muted">Have a project idea, opportunity, or question? I’d love to hear from you. Send me a message and I’ll get back to you as soon as possible.</p>

            <div className="mt-6 space-y-4">
              <p className="flex items-center gap-3 text-muted">
                <Mail size={18} className="text-brand" />
                {contact.email}
              </p>
              <p className="flex items-center gap-3 text-muted">
                <Phone size={18} className="text-brand" />
                {contact.phone}
              </p>
              <p className="flex items-center gap-3 text-muted">
                <MapPin size={18} className="text-brand" />
                {contact.location}
              </p>
            </div>

            <h4 className="mt-8 text-xl font-semibold text-text">Let’s connect</h4>
            <div className="mt-4 flex items-center gap-3">
              <a className="glass cursor-pointer rounded-full p-3 text-muted transition-all duration-300 hover:scale-110 hover:bg-brand/10 hover:text-text" href={contact.socials.github} target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a className="glass cursor-pointer rounded-full p-3 text-muted transition-all duration-300 hover:scale-110 hover:bg-brand/10 hover:text-text" href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a className="glass cursor-pointer rounded-full p-3 text-muted transition-all duration-300 hover:scale-110 hover:bg-brand/10 hover:text-text" href={contact.socials.email}>
                <Mail size={20} />
              </a>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="glass flex h-full flex-col gap-4 rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:gap-5 md:p-7">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text">Your Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={onChange}
                  className="w-full rounded-xl border border-borderSoft bg-panelSoft px-4 py-3 text-text placeholder:text-muted focus:border-brand focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text">Your Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={onChange}
                  className="w-full rounded-xl border border-borderSoft bg-panelSoft px-4 py-3 text-text placeholder:text-muted focus:border-brand focus:outline-none"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-text">Subject</span>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={onChange}
                className="w-full rounded-xl border border-borderSoft bg-panelSoft px-4 py-3 text-text placeholder:text-muted focus:border-brand focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-text">Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={onChange}
                className="w-full rounded-xl border border-borderSoft bg-panelSoft px-4 py-3 text-text placeholder:text-muted focus:border-brand focus:outline-none"
              />
            </label>

            {status.type === "error" ? (
              <p className="mt-4 text-sm text-rose-500">
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary mt-auto w-full rounded-xl py-3 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_14px_34px_rgba(73,97,221,0.42)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {toastMessage ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-24 z-[60] rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-4 py-3 text-sm font-medium text-emerald-300 shadow-lg backdrop-blur"
        >
          {toastMessage}
        </div>
      ) : null}
    </section>
  );
}
