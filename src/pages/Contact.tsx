import PageTransition from '../components/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <div className="py-24 container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-gray-400">Get in touch for any queries.</p>
      </div>
    </PageTransition>
  );
}
