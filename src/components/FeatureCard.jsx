export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded shadow p-6 w-64 hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
