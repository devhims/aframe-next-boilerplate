import dynamic from 'next/dynamic';
import BlankAframe from '../components/BlankAframe';

const CubeDemo = dynamic(
  () => {
    return import('../components/CubeDemo');
  },
  { ssr: false }
);

// const BlankAframe = dynamic(
//   () => {
//     return import('../components/BlankAframe');
//   },
//   { ssr: false }
// );

export default function Home() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <BlankAframe />
    </div>
  );
}
