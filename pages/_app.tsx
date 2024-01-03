import { ReactElement } from "react";
import Layout from "../components/Layout";
import '@/styles/globals.css'
type AppProps = {
  Component: React.ComponentType<any>;
  pageProps: any;
};

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
