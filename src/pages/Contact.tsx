import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="container pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="text-center mb-12">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">Get in Touch</p>
          <h1 className="font-display text-3xl md:text-5xl mb-3">Contact Us</h1>
          <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {[
              { icon: Mail, label: "Email", value: "hello@styleaura.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 234-5678" },
              { icon: MapPin, label: "Address", value: "123 Fashion Ave, New York, NY 10001" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-foreground" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-0.5">{label}</p>
                  <p className="font-body text-sm">{value}</p>
                </div>
              </div>
            ))}

            <div>
              <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2">Business Hours</p>
              <p className="font-body text-sm">Mon – Fri: 9am – 6pm EST</p>
              <p className="font-body text-sm text-muted-foreground">Sat – Sun: 10am – 4pm EST</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="md:col-span-2 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-sm font-medium mb-1.5 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-4 py-3 bg-card border border-border rounded font-body text-sm outline-none focus:border-foreground transition-colors"
                  placeholder="Your name"
                />
                {errors.name && <p className="font-body text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="font-body text-sm font-medium mb-1.5 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-3 bg-card border border-border rounded font-body text-sm outline-none focus:border-foreground transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="font-body text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className="font-body text-sm font-medium mb-1.5 block">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                className="w-full px-4 py-3 bg-card border border-border rounded font-body text-sm outline-none focus:border-foreground transition-colors"
                placeholder="How can we help?"
              />
              {errors.subject && <p className="font-body text-xs text-destructive mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label className="font-body text-sm font-medium mb-1.5 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded font-body text-sm outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Tell us more..."
              />
              {errors.message && <p className="font-body text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm font-medium rounded hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Contact;
