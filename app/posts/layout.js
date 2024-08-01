export default function MdxLayout({ children }) {
  // Create any shared layout or styles here
  return (
    <section className="articlePage">
      <div className="articleContain">{children}</div>
    </section>
  );
}
