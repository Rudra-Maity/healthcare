import data from '../Data/Activity'
const ActivityChart = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];


  return (
    <div className="bg-white rounded-lg p-6 shadow-sm w-96">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Activity</h3>
        <span className="text-sm text-gray-500">3 appointments on this week</span>
      </div>
      
      <div className="flex items-end justify-between h-32 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 flex-1">
            <div className="flex flex-col gap-1 items-center w-full">
              {item.values.map((value, i) => (
                <div
                  key={i}
                  className={`w-3 rounded-full ${
                    i === 0 ? 'bg-cyan-400' : i === 1 ? 'bg-blue-500' : 'bg-purple-500'
                  }`}
                  style={{ height: `${value * 0.6}px` }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;