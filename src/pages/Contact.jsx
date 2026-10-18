const contacts = [
  {
    label: "Telegram",
    value: "@Samandarov_2804",
    href: "https://t.me/Samandarov_2804",
  },
  {
    label: "Email",
    value: "jama25jama25@mail.ru",
    href: "mailto:jama25jama25@mail.ru",
  },
  {
    label: "GitHub",
    value: "github.com/Jamshid-1207",
    href: "https://github.com/Jamshid-1207",
  },
];

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>

      {contacts.map(({ label, value, href }) => (
        <p key={label}>
          {label}:{" "}
          <a
            className="contact-link"
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer">
            {value}
          </a>
        </p>
      ))}
    </section>
  );
}
