import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  category: string;
  title: string;
  description: string;
  categoryColor?: string;
}

const ServiceCard = ({ category, title, description, categoryColor = "text-primary" }: ServiceCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-1 bg-card border border-border">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <p className={`text-sm font-medium ${categoryColor} mb-2`}>
              {category}
            </p>
            <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;