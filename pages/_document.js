import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Helix AI Orchestrator – Professional Marketing Landing Page</title>
          <meta name="description" content="Helix combines cutting-edge AI with intuitive workflow management to deliver unparalleled productivity and insight." />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://helix-ai-orchestrator.vercel.app/",
              "name": "Helix AI Orchestrator",
              "description": "Helix combines cutting-edge AI with intuitive workflow management to deliver unparalleled productivity and insight."
            }, null, 2)}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;