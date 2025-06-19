import { Badge } from "./ui/badge";

const Customerlogos = () => {
  const customers = [
    { name: "TechCorp", logo: "TC" },
    { name: "DataFlow", logo: "DF" },
    { name: "InnovateLab", logo: "IL" },
    { name: "FutureWorks", logo: "FW" },
    { name: "CloudSync", logo: "CS" },
    { name: "AnalyticsPro", logo: "AP" },
    { name: "SmartData", logo: "SD" },
    { name: "NextGen", logo: "NG" }
  ];

  return (
    <section className="py-16 font-poppins border-t border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by leading companies worldwide
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-ticker space-x-8 whitespace-nowrap">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex space-x-8 items-center">
                {customers.map((customer, index) => (
                  <div 
                    key={`${groupIndex}-${index}`}
                    className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Badge 
                      variant="outline" 
                      className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
                    >
                      {customer.logo}
                    </Badge>
                    <span className="text-sm font-medium text-muted-foreground">
                      {customer.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customerlogos;