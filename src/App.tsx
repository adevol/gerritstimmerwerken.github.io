import { Hammer, Home, Wrench, HardHat, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';

function App() {
  const keyServices = [
    'Onderhoud van woningen en bedrijfspanden',
    'Renovatie van keukens, badkamers en leefruimtes',
    'Restauratie van karaktervolle panden',
    'Timmerwerk op maat, binnen en buiten',
    'Dakwerk: reparatie, isolatie en vernieuwing',
    'Funderingsherstel en versterking',
    'Afbouw: van plinten tot plafonds',
  ];

  const projectPhotos = [
    {
      city: 'Kesteren',
      service: 'Nieuwbouwproject',
      description: 'Het bouwen van een molen, inclusief draaiende wieken.',
      image: '/img24.jpg',
    },
    {
      city: 'Reuver',
      service: 'Nieuwbouwproject',
      description: 'Complete nieuwbouwwoning gebouwd, van fundering tot afbouw.',
      image: '/img5.jpg',
    },
    {
      city: 'Hoeven',
      service: 'Gevelbekleding',
      description: 'Strakke gevelbekleding aangebracht voor een frisse en duurzame uitstraling.',
      image: '/img9.jpg',
    },
    {
      city: 'Valkenburg',
      service: 'Schoolbouw',
      description: 'Volledige school nieuw neergezet, inclusief dakwerk en interieur.',
      image: '/img13.jpg',
    },
    {
      city: 'Geldrop',
      service: 'Appartementsbouw in kerk',
      description: 'Kerk omgebouwd tot stijlvolle appartementen met oog voor details.',
      image: '/img15.jpg',
    },
    {
      city: 'Bergeijk',
      service: 'Vakantiehuis renovatie',
      description: 'Vakantiehuis verbouwd inclusief zwembad en luxe afwerking.',
      image: '/img18.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-amber-600 text-white py-6 px-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Hammer className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Gerrits Timmerwerken</h1>
              <p className="text-amber-100 text-sm">gerritstimmerwerken.be</p>
            </div>
          </a>
          <a href="#contact" className="bg-white text-amber-600 px-6 py-2 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
            Contact
          </a>
        </div>
      </header>

      <section className="relative h-[600px] bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 flex items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Eerlijk vakmanschap.<br />
            Geen gedoe.
          </h2>
          <p className="text-2xl mb-8 text-amber-50">
            Van kozijn tot dakpan. En ja, we nemen ook de telefoon op.
          </p>
          <a href="#diensten" className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-colors">
            Bekijk onze diensten <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Wie is Gerrit?</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Een timmerman die ook echt kan timmeren. Revolutionair, toch?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="/house_sis.jpg" alt="Project gebouwd door Gerrits Timmerwerken" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
            <div className="space-y-6">
              <p className="text-lg text-stone-700 leading-relaxed">
                Sinds 1987 doen we wat we het beste kunnen: bouwen. Geen fancy verhalen,
                geen marketingpraat. Gewoon goed vakwerk waar je decennia plezier van hebt.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                Met meer dan 35 jaar ervaring heeft Gerrit inmiddels zo'n beetje alles
                gebouwd en gerepareerd. Dit huis? Een van onze trots projecten. Complete
                afwerking van A tot Z. Behalve relaties. Die repareren we niet.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                Ons team bestaat uit ervaren vakmensen die nog weten hoe een waterpas werkt
                en die niet in paniek raken als er geen WiFi is op de bouwplaats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="diensten" className="py-20 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Onze Diensten</h2>
            <p className="text-xl text-stone-600">
              We doen alles. En als we het niet kunnen, zeggen we dat gewoon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Home className="w-12 h-12" />}
              title="Kozijnen & Deuren"
              description="Van klassiek hout tot modern kunststof. We plaatsen ze recht. Eerste keer goed."
              color="from-amber-500 to-orange-600"
            />
            <ServiceCard
              icon={<Wrench className="w-12 h-12" />}
              title="Dakwerkzaamheden"
              description="Lekkages verhelpen, dakpannen vervangen, of een volledig nieuw dak. We zijn hoogtevreesvrij."
              color="from-orange-500 to-red-600"
            />
            <ServiceCard
              icon={<HardHat className="w-12 h-12" />}
              title="Bouwbegeleiding"
              description="Supervisie voor uw bouwproject. We zorgen dat anderen ook hun werk goed doen."
              color="from-red-500 to-amber-600"
            />
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border-l-8 border-amber-500">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Overige werkzaamheden:</h3>
            <p className="text-stone-600 mb-6">
              Onderhoud, renovatie, restauratie, timmerwerk, dakwerk, fundering en afbouw: we pakken het allemaal aan met hetzelfde vakmanschap.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-stone-700">
              {keyServices.map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1" aria-hidden="true" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl shadow-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Waarom Gerrits Timmerwerken?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold mb-2">35+</div>
                <div className="text-xl text-amber-50">Jaar ervaring</div>
                <p className="text-sm text-amber-100 mt-2">En nog steeds al onze vingers</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-xl text-amber-50">Vakmanschap</div>
                <p className="text-sm text-amber-100 mt-2">Meetlint gebruikt bij elke klus</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">0%</div>
                <div className="text-xl text-amber-50">Onzin</div>
                <p className="text-sm text-amber-100 mt-2">Duidelijke communicatie, eerlijke prijzen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Recente projecten</h2>
            <p className="text-xl text-stone-600">
              Van Reuver tot Breda: een greep uit ons onderhoud, renovatie, restauratie- en dakwerk.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectPhotos.map((project) => (
              <article key={`${project.city}-${project.service}`} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100">
                <img src={project.image} alt={`${project.service} in ${project.city}`} className="h-56 w-full object-cover" />
                <div className="p-6 space-y-2">
                  <p className="text-sm uppercase tracking-wide text-amber-600">{project.city}</p>
                  <h3 className="text-2xl font-bold text-stone-800">{project.service}</h3>
                  <p className="text-stone-600">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Contact</h2>
            <p className="text-xl text-stone-600">
              Bel of mail. We bijten niet. Tenzij u vraagt of we het ook in het weekend kunnen doen.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Telefoon</h3>
                    <a href="tel:+31634162782" className="text-amber-600 font-medium hover:underline">+31 6 34162782</a>
                    <p className="text-sm text-stone-500 mt-1">Bel gewoon</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">E-mail</h3>
                    <a href="mailto:gerritstimmerwerken1@gmail.com" className="text-amber-600 font-medium hover:underline">gerritstimmerwerken1@gmail.com</a>
                    <p className="text-sm text-stone-500 mt-1">Stuur gerust foto's of plannen mee</p>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 mt-8">
                  <p className="text-stone-700 font-medium mb-2">Spoedklus?</p>
                  <p className="text-stone-600 text-sm">
                    Daklek of andere spoedeisende zaken? Bel direct. We komen niet met sirenes,
                    maar wel snel.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Werkgebied</h3>
                <p className="text-stone-700 mb-4">
                  Actief in:
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    Limburg (NL en BE)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    Noord-Brabant
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    Zuid-Holland
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    Gelderland
                  </li>
                </ul>
                <p className="text-sm text-stone-600 mt-6 italic">
                  Voornamelijk Nederland. Voor een mooie klus rijden we best een stukje verder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Hammer className="w-6 h-6 text-amber-500" />
            <span className="text-xl font-bold">Gerrits Timmerwerken</span>
          </div>
          <p className="text-stone-400 mb-6">
            Bouwen zonder omwegen sinds 1987
          </p>
          <div className="border-t border-stone-700 pt-6">
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} Gerrits Timmerwerken. Alle rechten voorbehouden.
            </p>
            <p className="text-stone-500 text-sm mt-2">
              Kapelstraat 25, 3940 Hechtel-Eksel | +31 6 34162782
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function ServiceCard({ icon, title, description, color }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
      <div className={`bg-gradient-to-br ${color} text-white w-20 h-20 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-stone-800 mb-3">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default App;


