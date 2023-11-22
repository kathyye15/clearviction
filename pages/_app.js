import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div class="container">
      <Component {...pageProps} />
    </div>
  );
}
