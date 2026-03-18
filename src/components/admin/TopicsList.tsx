import React, { useEffect, useState } from 'react';
import { getAllTopics, updateTopicStatus, Topic } from '../../services/topics';
import { Clock, Mail, User, MessageSquare, AlertCircle, CheckCircle, Archive } from 'lucide-react';

const TopicsList: React.FC = () => {
    const [topics, setTopics] = useState<Topic[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'pending' | 'reviewed' | 'archived'>('all');

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = async () => {
        setLoading(true);
        const data = await getAllTopics();
        setTopics(data);
        setLoading(false);
    };

    const handleStatusUpdate = async (topicId: string, newStatus: 'pending' | 'reviewed' | 'archived') => {
        const result = await updateTopicStatus(topicId, newStatus);
        if (result.success) {
            // Update local state
            setTopics(topics.map(topic =>
                topic.id === topicId ? { ...topic, status: newStatus } : topic
            ));
        }
    };

    const getStatusBadge = (status: string) => {
        const styles = {
            pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
            reviewed: 'bg-green-500/20 text-green-300 border-green-500/50',
            archived: 'bg-gray-500/20 text-gray-300 border-gray-500/50'
        };

        const icons = {
            pending: <AlertCircle className="w-4 h-4" />,
            reviewed: <CheckCircle className="w-4 h-4" />,
            archived: <Archive className="w-4 h-4" />
        };

        return (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles]}`}>
                {icons[status as keyof typeof icons]}
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    const formatDate = (timestamp: any) => {
        if (!timestamp) return 'N/A';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const filteredTopics = filter === 'all'
        ? topics
        : topics.filter(topic => topic.status === filter);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
                    <p className="mt-4 text-gray-400">Loading topics...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Filter Tabs */}
            <div className="flex gap-2 border-b border-gray-700 pb-4">
                {(['all', 'pending', 'reviewed', 'archived'] as const).map((status) => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`px-4 py-2 rounded-lg font-medium transition ${filter === status
                            ? 'bg-purple-600 text-white'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                        {status !== 'all' && (
                            <span className="ml-2 text-xs opacity-75">
                                ({topics.filter(t => t.status === status).length})
                            </span>
                        )}
                        {status === 'all' && (
                            <span className="ml-2 text-xs opacity-75">
                                ({topics.length})
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Topics List */}
            {filteredTopics.length === 0 ? (
                <div className="text-center py-12">
                    <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">No topics found</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredTopics.map((topic) => (
                        <div
                            key={topic.id}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-semibold text-white">{topic.topic}</h3>
                                        {getStatusBadge(topic.status)}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <Mail className="w-4 h-4" />
                                            {topic.email}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {formatDate(topic.createdAt)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2">
                                {topic.status !== 'reviewed' && (
                                    <button
                                        onClick={() => handleStatusUpdate(topic.id, 'reviewed')}
                                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition flex items-center gap-2"
                                    >
                                        <CheckCircle className="w-4 h-4" />
                                        Mark as Reviewed
                                    </button>
                                )}
                                {topic.status !== 'archived' && (
                                    <button
                                        onClick={() => handleStatusUpdate(topic.id, 'archived')}
                                        className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition flex items-center gap-2"
                                    >
                                        <Archive className="w-4 h-4" />
                                        Archive
                                    </button>
                                )}
                                {topic.status !== 'pending' && (
                                    <button
                                        onClick={() => handleStatusUpdate(topic.id, 'pending')}
                                        className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-sm font-medium transition flex items-center gap-2"
                                    >
                                        <AlertCircle className="w-4 h-4" />
                                        Mark as Pending
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TopicsList;
