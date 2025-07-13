import React from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { TrendingUp, Users, Trash2, Tag } from "lucide-react";

export default function ModernDataCard({ title, value, icon, trend, color = "green" }) {
    const getIcon = () => {
        switch (icon) {
            case 'trash':
                return <Trash2 className="h-6 w-6" />;
            case 'users':
                return <Users className="h-6 w-6" />;
            case 'tag':
                return <Tag className="h-6 w-6" />;
            default:
                return <TrendingUp className="h-6 w-6" />;
        }
    };

    const getColorClasses = () => {
        switch (color) {
            case 'blue':
                return {
                    bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
                    iconBg: 'bg-blue-100',
                    iconColor: 'text-blue-600'
                };
            case 'purple':
                return {
                    bg: 'bg-gradient-to-br from-purple-500 to-purple-600',
                    iconBg: 'bg-purple-100',
                    iconColor: 'text-purple-600'
                };
            case 'orange':
                return {
                    bg: 'bg-gradient-to-br from-orange-500 to-orange-600',
                    iconBg: 'bg-orange-100',
                    iconColor: 'text-orange-600'
                };
            default:
                return {
                    bg: 'bg-gradient-to-br from-green-500 to-green-600',
                    iconBg: 'bg-green-100',
                    iconColor: 'text-green-600'
                };
        }
    };

    const colorClasses = getColorClasses();

    return (
        <Card className={`${colorClasses.bg} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0`}>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <p className="text-white/80 text-sm font-medium mb-1">
                            {title}
                        </p>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-3xl font-bold text-white">
                                {value}
                            </span>
                            {trend && (
                                <span className="text-white/80 text-sm font-medium">
                                    {trend}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className={`${colorClasses.iconBg} p-3 rounded-xl`}>
                        <div className={colorClasses.iconColor}>
                            {getIcon()}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}