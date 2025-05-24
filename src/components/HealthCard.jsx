const HealthCard = ({ icon: Icon, title, date, status, color }) => (
  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3 mb-3">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
      <div className={`h-2 rounded-full ${color.replace('bg-', 'bg-')}`} style={{ width: status }}></div>
    </div>
  </div>
);

export default HealthCard;