import type { AppProps } from "next/app";
import "normalize.css";
import "@/styles/globals.scss";
import Layout from "@/components/layout";
import wrapper from "@/stores";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import "antd/dist/reset.css";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </ConfigProvider>
    </Provider>
  );
}
