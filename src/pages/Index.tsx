import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const services = [
    {
      category: "Computação",
      title: "Cloud Computing",
      description: "Soluções cloud para empresas e desenvolvedores",
      categoryColor: "text-primary"
    },
    {
      category: "Alojamento", 
      title: "Virtual Servers",
      description: "Servidores virtuais na nuvem",
      categoryColor: "text-primary"
    },
    {
      category: "Armazenamento",
      title: "Files & Storage", 
      description: "Armazenamento de ficheiros, documentos e dados",
      categoryColor: "text-primary"
    },
    {
      category: "Generative AI",
      title: "Automation & AI",
      description: "Criação de assistentes IA e automação de processos", 
      categoryColor: "text-primary"
    },
    {
      category: "Ferramentas de desenvolvedor",
      title: "Web Resources",
      description: "Recursos para criação de plataformas web, aplicações e sistemas",
      categoryColor: "text-primary"
    },
    {
      category: "Redes e entrega de conteúdo",
      title: "Multimedia", 
      description: "Sistemas de criação e entrega de conteúdo global",
      categoryColor: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-12">
            Easynet Pro
          </h1>
          <SearchBar />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              category={service.category}
              title={service.title}
              description={service.description}
              categoryColor={service.categoryColor}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
