import { ChevronDown } from "lucide-react";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MainHeader = ({toggleSidebar}) => {
    return (
      <header className="h-16 bg-[#0d0d1a] border-b border-gray-800 flex items-center justify-between px-6">
             {/* Logo */}
      <div className="p-4 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
          <span className="text-xs font-bold text-white">ROT</span>
        </div>
        <span className="text-lg font-semibold text-white">Rot</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-300">Cole Salle</span>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center overflow-hidden">
          <img src="/male-avatar-portrait.jpg" alt="User avatar" className="w-full h-full object-cover" />
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </header>
    );
};

export default MainHeader;