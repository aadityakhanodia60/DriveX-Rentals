import PageTransition from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <div className="py-24 container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">About DriveX</h1>
        <p className="text-gray-400">Premium car rental services since 2024.</p>
      </div>
    </PageTransition>
  );
}
