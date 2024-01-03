import Head from "next/head";

type SeoProps = {
  title: string;
};

const Seo: React.FC<SeoProps> = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default Seo;
