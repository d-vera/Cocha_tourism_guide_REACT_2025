import Carousel from '../components/Carousel'

function TopPlaces() {
  const places = [
    {
      number: 10,
      title: 'La casona de Santivañez',
      description: [
        'Parte del patrimonio histórico de la ciudad, perteneció en su momento a Don Juan Santivañez de Gazna entre 1770 a 1845, representa la arquitectura de estilo colonial, preservando y exponiendo muebles al puro estilo de Luis XV en un museo y centro de exposición cultural, cada salón muestra es su máximo esplendor el arte de esa época.',
        'Podrás una autentica cocina de la época colonial, jardines europeos, instalaciones de la servidumbre, fotografías y más.',
        'Al adquirir tu entrada te recomendamos siempre ir con un guía turístico que podrá otorgarte más información y datos interesantes durante el recorrido de aproximadamente una hora.'
      ],
      images: ['/images/casona.jpg', '/images/casona0.jpg', '/images/casona1.jpg']
    },
    {
      number: 9,
      title: 'El Boulevard',
      description: [
        'El paseo el boulevard es un paseo de la ciudad que con los años fue ganando popularidad, abarcando el lugar con ventas y gastronomía es un buen espacio para estirar los pies, buscar algo de comer y relajarte un momento sin tener que salir de la ciudad.',
        'Por las tardes podrías encontrarte con aluna feria artesanal o alguna otra feria en particular pero es especialmente atractivo en las noches dado sus diversos boliches, discotecas y restaurants que abren a partir de las 6 de la tarde.',
        'Es un buen espacio para conocer gente nueva y hacer amigos cochabambinos u otros turistas, procura llevar dinero porque de seguro algo se te antojara.'
      ],
      images: ['/images/Boulevard.jpg', '/images/Boulevard0.jpg', '/images/Boulevard1.jpg']
    },
    {
      number: 8,
      title: 'Parque de Aves Agloflori',
      description: [
        'EL parque de aves Agroflori también se encuentra saliendo de la ciudad específicamente en al municipio de Quillacollo fundado hace aproximadamente 22 años, pero fue abierto al público recién hace 5 años, es un refugio de animales silvestres, siendo un espacio que lucha contra el tráfico ilegal de la vida silvestre.',
        'Cuentan con una variedad de fauna y flora, entre ellos más de 54 especies de aves, algunas en peligro de extinción, las cuales podrás admirar y con tu entrada apoyar al mantenimiento de ese precio lugar, cuyo principal atractivo es el aviario, el espacio de las aves rescatas y la recuperación, sus diversos colores y sora un día de campo relajante.'
      ],
      images: ['/images/aglofori.jpg', '/images/aglofori0.jpg', '/images/aglofori1.jpg']
    },
    {
      number: 7,
      title: 'Plaza Colón',
      description: [
        'Otra de las plazas más concurridas de la ciudad así como un punto de reunión y paseo es la plaza colon, nombre dado en honor a Cristóbal Colon, sus principales características son las bellas flores de la región, fuentes y abundantes árboles',
        'Algo que también a hace especial es debido a que es el inicio del que conocemos como el paseo del prado, varias cuadras de follaje verde y refrescante donde podrás pasear y disfrutar de la ciudad en su máximo esplendor, descansar un poco y aprovechar de hacer fotos más relajadas, hallarás de todo en tu paseo como comida, compras, helado, galerías, el paseo termina cuando llegas a la plaza de las banderas, una plaza que representa la unión de los países americanos.'
      ],
      images: ['/images/colon.jpg', '/images/colon0.jpg', '/images/colon1.jpg']
    },
    {
      number: 6,
      title: 'Parque de la familia',
      description: [
        'Conocido también como las aguas danzantes fue inaugurado apenas en el año 2015, cuyo mayor atractivo está en cuanto el sol comienza a oponerse.',
        'Creado especialmente para que cualquier miembro de la familia pueda disfrutarlo, sea niños, adolescentes o adultos el parque de la familia es un parque acuático con aguas danzantes, el mejor espectáculo es siempre por la noche porque es cuando las aguas cobran múltiples colores, embaucándote en un sueño mágico donde las aguas danzan y brillan, incluso podrás ver reproducidos videos musicales en el agua.',
        'Música, magia y por supuesto comida el acompañamiento infalible para terminar una noche en su plaza de comidas.',
        'Definitivamente una experiencia que no te puedes perder, pero recuerda llevarte una muda de ropa extra, porque mojarte será inevitable si deseas vivir la verdadera experiencia del lugar'
      ],
      images: ['/images/familia.jpg', '/images/familia0.jpg', '/images/familia1.jpg']
    },
    {
      number: 5,
      title: 'Museo convento Santa Teresa',
      description: [
        'Actualmente es un monasterio histórico reflejando el arte de la construcción medieval creada en 1760, fue el lugar donde vivían la orden de Carmelitas Descalzas, un grupo de mujeres acomodadas devotas a la viren del Carmen y santa teresa, usando el lugar para sus rezos y oraciones quedando enclaustradas en el monasterio de por vida.',
        'Se dice que aquellas que eran enclaustradas eran las segundas hijas de familias acomodadas que deseaban tener la gracia de la iglesia, estas niñas pasaban a ser carmelitas las cuales oraban en silencio por la salvación y producía vino como una forma de sustento para el monasterio.',
        'Actualmente este convento que puede llegar a ser de los más antiguos del departamento de Cochabamba es un atractivo museo, donde podrás encontrar increíbles historias y construcciones, es por esto mismo que es importante que para el ingreso al museo optes por para un guía turístico que te enseñara todos los sectores del monasterio y también te contara sorprendentes relatos sobre la historia que sucedió entre esas paredes.',
        'Las fotografías que pueden obtenerse en este místico lugar son asombrosas pero no en todos los ambientes está prohibido fotografiar.'
      ],
      images: ['/images/teresa.jpg', '/images/teresa0.jpg', '/images/teresa1.jpg']
    },
    {
      number: 4,
      title: 'La laguna "La Angostura"',
      description: [
        'Uno de los paisajes más bellos que podrás encontrar, se trata de una laguna artificial creada por la represa de la ciudad, acumulando casi cincuenta millones de metros cúbicos de agua, creada ya en 1948 durante todos estos años fue fuente de alimentos para muchos cultivos de la ciudad.',
        'La laguna se encuentra a las afueras de la ciudad, dándote la oportunidad de respirar un aire más puro, por lo que muchos cochabambinos lo toman como destino un fin de sema ya que podrás tomar increíbles fotos, disfrutar de la comida que se ofrecen en los alrededores, por supuesto en su mayoría a base de pescados, también tienes otras opciones de entretenimiento como ser las lanchas botes turísticos, juegos acuáticos y demás, alegría y diversión no faltaran si decides ir a la angostura, eso sí, puedes optar en llevar una muda de ropa extra si entraras a los juegos más rudos como los salvavidas tirados por una lancha o el paseo en las motos acuáticas.'
      ],
      images: ['/images/angostura.jpg', '/images/angostura0.jpg', '/images/angostura1.jpg']
    },
    {
      number: 3,
      title: 'Palacio Portales',
      description: [
        'El segundo lugar más recomendado es el palacio Portales un lugar turístico y de cultura tanto para los cochabambinos como para aquellos que llegan de visita, construido por el empresario Simón Patiño también conocido "El Barón del Estaño" entre los años 1915 a 1927, estos 12 años de arduo trabajo por parte de los obreros y artesanos son la causa de la belleza al puro estilo neoclásico fue un palacio el cual usaría de residencia hasta su fallecimiento.',
        'Posteriormente paso por varios dueños antes de poder ser un museo que brinda un espectáculo para los visitantes como bellas estatuas de mármol, delicadas pinturas galerías y una galería de espejos única en Cochabamba.',
        'Actualmente las antiguas caballerizas de convirtieron en la biblioteca más importante de la ciudad.'
      ],
      images: ['/images/portales.jpg', '/images/portales0.jpg', '/images/portales1.jpg.5']
    },
    {
      number: 2,
      title: 'Plaza 14 de Septiembre',
      description: [
        'Conocida también como la plaza principal, fue en algún momento llamada plaza de armas, su nombre actual fue dado en honor a la fecha mas impórtate de la independencia de Cochabamba.',
        'En esta plaza podrás encontrar la fuente de las tres gracias, una estatua sobre la fuente principal que representa a las tres diosas: Áglae: diosa de la belleza y esplendor. Talía: diosa del teatro y las festividades. Eufrosina: representante del júbilo y la alegría. Quienes bendicen el lugar y a sus visitantes.',
        'Tenemos también la columna de los héroes erguida en 1851 en honor a los valientes participantes de a revolución, ubicada en la parte central de la plaza donde incluso están inscritos los nombres de los primeros hombres cochabambinos en dar el rito de libertad.',
        'Es un centro de reunión para muchos de los cochabambinos, ideal para familias, parejas o amigos, se puede decir que gires a cualquier lado de la plaza tendrás algo con que distraerte, así te guste el arte, las catedrales, las compras o solo descansar un momento podrás hallarlo todo, y si caminas un poco más podrás encontrar lo que nosotros conocemos como e correo que es en realidad un espacio donde podrás encontrar de todo, como, libros, artesanías, joyas, regalos, anime y demás, puede que al inicio no lo creas pero caminar por la plaza principal y sus alrededores será toda una experiencia para ti.'
      ],
      images: ['/images/14square.jpg', '/images/14square0.jpg', '/images/14square1.jpg']
    },
    {
      number: 1,
      title: 'Cristo de la Concordia',
      description: [
        'El Cristo de la concordia es uno de los primeros lugares que no te puedes perder cuando vienes por este hermoso departamento, su nombre hace alusión a la amabilidad y hospitalidad del pueblo cochabambino recibiendo a todos con los brazos abiertos.',
        'Una enorme estatua dedicada a Jesús ubicada en el cerro San pedro a más de 200 metros de altura sobre la ciudad, la cual que tardó 7 años en ser construida con el apoyo de la iglesia católica e instituciones privadas de Cochabamba.',
        'Hay varias formas de llegar cada una tiene su encanto puedes subir por el teleférico o subir la montaña a pie como un modo de ejercitar, cada ruta vale la pena y cuando estés en la cima podrás tener la mejor vista de la ciudad cochabambina ideal para tomar fotos, admirar el paisaje, también ten en cuenta que podrás encontrar juegos para los niños, deliciosa comida y recuerdos inolvidables.'
      ],
      images: ['/images/cristo.jpg', '/images/cristo0.jpg', '/images/cristo1.jpg']
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">
        Los lugares que debes conocer en Cochabamba
      </h1>

      <div className="space-y-12">
        {places.map((place, index) => (
          <div 
            key={place.number}
            className={`grid md:grid-cols-2 gap-8 ${
              index % 2 === 0 ? '' : 'md:grid-flow-dense'
            }`}
          >
            <div className={index % 2 === 0 ? '' : 'md:col-start-2'}>
              <h2 className="text-3xl font-bold mb-4">
                {place.number}. {place.title}
              </h2>
              {place.description.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className={index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}>
              <Carousel images={place.images} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopPlaces
