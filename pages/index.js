import dynamic from 'next/dynamic';

const CubeDemo = dynamic(
  () => {
    return import('../components/CubeDemo');
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <CubeDemo />
    </div>
  );
}
