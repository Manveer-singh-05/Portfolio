import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full"
    >
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold mb-2">
        Contact Me
      </h2>

      <p className="text-center text-sm text-slate-400 mb-10">
        Feel free to reach out for opportunities or collaboration.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-md space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl bg-white/5 backdrop-blur-xl 
                     border border-white/10 
                     px-4 py-3 text-sm text-slate-200 
                     placeholder-slate-400 
                     outline-none
                     focus:border-sky-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl bg-white/5 backdrop-blur-xl 
                     border border-white/10 
                     px-4 py-3 text-sm text-slate-200 
                     placeholder-slate-400 
                     outline-none
                     focus:border-sky-400"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl bg-white/5 backdrop-blur-xl 
                     border border-white/10 
                     px-4 py-3 text-sm text-slate-200 
                     placeholder-slate-400 
                     outline-none
                     focus:border-sky-400 resize-none"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full rounded-full bg-sky-400 py-3 
                     text-sm font-medium text-slate-950
                     transition
                     hover:shadow-[0_0_30px_rgba(56,189,248,0.9)]"
        >
          Send Message
        </motion.button>

        {status && (
          <p
            className={`text-center text-xs ${
              status.includes("successfully")
                ? "text-sky-400"
                : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </motion.div>
  );
};

export default Contact;
