import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import TopicsList from './TopicsList';
import { LogOut, Home } from 'lucide-react';

const AdminDashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
            {/* Header */}
            <header className="bg-black/30 backdrop-blur-lg border-b border-white/10 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            <h1 className="text-2xl font-bold text-white">SEMEZANA Admin</h1>
                            <span className="text-sm text-gray-400">|</span>
                            <span className="text-sm text-purple-300">{user?.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => navigate('/')}
                                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition flex items-center gap-2 border border-white/10"
                            >
                                <Home className="w-4 h-4" />
                                View Site
                            </button>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition flex items-center gap-2"
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Topic Submissions</h2>
                    <p className="text-gray-400">Manage podcast topic suggestions from listeners</p>
                </div>

                {/* Topics List */}
                <TopicsList />
            </main>
        </div>
    );
};

export default AdminDashboard;
