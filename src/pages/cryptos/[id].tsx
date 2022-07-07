import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { GetStaticPaths } from 'next';

export default function Cryptos(ctx: any) {
  const router = useRouter();

  const { data } = ctx;

  return (
    <div>
      {data.map((d) => {
        return <h1>{d.name}</h1>;
      })}
    </div>
  );
}
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch(`http://localhost:3000/cryptos.json`);
  const data = await response.json();
  return {
    props: { data: data?.data },
  };
};
