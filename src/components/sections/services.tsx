import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const services = [
  {
    title: 'Websites',
    description: 'Responsive websites and dashboards for your business.',
  },
  {
    title: 'Apps',
    description: 'Designing mobile apps for iOS and Android users.',
  },
  {
    title: 'Design systems',
    description: 'Building robust and flexible design systems for easy scalability.',
  }
];

export function Services() {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <div 
                className="relative rounded-[20px] p-8 h-[300px] bg-[#111111] hover:bg-[#161616] transition-colors duration-500"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)'
                }}
              >
                <h3 className="text-2xl font-medium text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-[#666666] text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}