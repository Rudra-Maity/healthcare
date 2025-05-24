const SidebarItem = ({ icon: Icon, label, active = false, onClick }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
      active
        ? ' text-gray-900 '
        : 'text-gray-400 hover:bg-gray-100 hover:text-gray-900'
    }`}
    onClick={onClick}
  >
    <Icon size={20} className={`${active ?'fill-slate-700' :""}`} />
    <span className="font-medium">{label}</span>
  </div>
);
export default SidebarItem;