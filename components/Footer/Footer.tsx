import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.wrap}>
        <p>© 2026 NoteHub</p>
        <p>Developed by Your Name</p>
        <p>
          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </p>
      </div>
    </footer>
  );
}
