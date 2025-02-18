const { Style } = require('../models');

const styleData = [
  // {
  //   product_name: 'Adidas',
  //   brand_id: 3,
  //   filename: '01-adidas.png',
  //   description: 'Adidas logo',
  // },
  // {
  //   product_name: 'Jordan',
  //   brand_id: 2,
  //   filename: '02-jordan.png',
  //   description: 'Jordan logo',
  // },
  // {
  //   product_name: 'Nike',
  //   brand_id: 1,
  //   filename: '03-nike.png',
  //   description: 'Nike logo',
  // },
  // {
  //   product_name: 'New Balance',
  //   brand_id: 4,
  //   filename: '04-new-balance.png',
  //   description: 'New Balance logo',
  // },
  {
    product_name: 'Adidas shoe',
    brand_id: 3,
    filename: '05-Adidas-Originals-NMD_R1.png',
    price: '$160',
    description: 'Adidas Originals NMD_R1',
    product_description:"Bringing back the 2015 debut colorway of the silhouette, the NMD_R1 'Black OG' released six years later. Built with stretch knit, the shoe's upper appears in black, supported by a bound collar that replaces the Primeknit cuff of its predecessor. A heel pull-loop is included for easy on and off, while underfoot, white full-length Boost provides cushioning and contrast, accented by red and blue EVA plugs for stability.",
  },
  {
    product_name: 'Adidas shoe',
    brand_id: 3,
    filename: '06-Adidas-Pharrell-Human-Race-Sichona-Burgundy.png',
    price: '$180',
    description: 'Adidas Pharrell x Human Race Sichona "Burgundy"',
    product_description:"Pharrell teamed up with adidas to deliver the Human Race Sichona 'Burgundy.' The silhouette with a name that translates to the Indigenous phrase for 'connecting to the earth,' or the Dakota tribe's way of saying 'barefoot.' Its' seamless construction is built with adidas' Futurnatural technology, highlighted by a maroon Primeknit upper that blends with a magenta-colored, anatomically molded TPU midsole. 'Humanrace' is printed in yellow lettering across the lateral quarter panel, while adidas branding decorates a pink webbing pull tab on the tongue. The rubber outsole underneath has a digitally printed Humanrace typographic pattern.",
  },
  {
    product_name: 'Adidas shoe',
    brand_id: 3,
    filename: '07-Adidas-Superstar.png',
    price: '$100',
    description: 'Adidas Superstar',
    product_description:"The adidas Superstar Shoes first stepped onto the basketball hardwood in 1970. It didn't take long for them to make the leap from athletic gear to streetwear staple. These shoes show off the materials, proportions and style that made the original such a legend. They've got a smooth leather upper with sporty 3-Stripes and a heel tab. They're finished off with the world-famous rubber shell toe.",
  },
  {
    product_name: 'Adidas shoe',
    brand_id: 3,
    filename: '08-Adidas-Yeezy-Boost-350-Turtle-Dove.png',
    price: '$200',
    description: 'Adidas Yeezy Boost 350 "Turtle Dove"',
    product_description:"The Yeezy Boost 350 Turtle Dove was the second shoe released in the adidas Yeezy collection after the Yeezy Boost 750 OG. First seen on Kanye and his models at the Yeezy Season 1 fashion show in February 2015, this colorway was anointed 2015 Shoe of the Year at the Footwear News 29th Annual Achievement Awards.",
  },
  {
    product_name: 'Adidas shoe',
    brand_id: 3,
    filename: '09-Adidas-YEEZY-FOAM-RUNNER-Onyx.png',
    price: '$170',
    description: 'Adidas YEEZY FOAM RUNNER "Onyx"',
    product_description:"Utilizing a sleek monochrome finish, the adidas Yeezy Foam Runner Onyx is an understated colorway for a futuristic slip-on. A molded one-piece upper showcases open vents for breathability, while the injected EVA foam is lightweight and is secured by a unique traction pattern for grip.",
  },
  {
    product_name: 'Jordan shoe',
    brand_id: 2,
    filename: '10-Air-Jordan-1-High-85-Georgetown.png',
    price: '$200',
    description: 'Air Jordan 1 High 85 "Georgetown"',
    product_description:'The Air Jordan 1 Retro High 85 "Georgetown" pays tribute to the OG silhouette with a restored heritage build. The two-tone design commemorates the 40th anniversary of the Michael Jordan title-clinching shot against the Hoyas on March 29, 1982, pairing a light grey base with contrasting College Navy overlays. Signature details include a woven Nike Air tag on the nylon tongue and a retro Wings logo stamped on the lateral ankle. The classic high-top is mounted on a rubber cupsole, with an Air-sole heel unit encapsulated in polyurethane.',
  },
  {
    product_name: 'Jordan shoe',
    brand_id: 2,
    filename: '11-Air-Jordan-1-Travis-Scott-Low-Reverse-Mocha.png',
    price: '$150',
    description: 'Air Jordan 1 Travis Scott Low "Reverse Mocha"',
    product_description:'The Travis Scott x Air Jordan 1 Low OG "Reverse Mocha" renews a memorable color scheme with this version of the rapper 2019 Mocha. Made for little kids, brown nubuck with leather overlays in off-white are accented on the upper by an exaggerated Swoosh in reverse. Branding pairs "Nike Air" and Cactus Jack on the tongue, while the heel has the signature TS face sketch on the left and Jordan wings logo on the right, both in scarlet-red stitching. Underfoot, a brown rubber outsole enhances grip and traction beneath the midsole in an vintage-feel off-white.',
  },
  {
    product_name: 'Jordan shoe',
    brand_id: 2,
    filename: '12-Air-Jordan-4-White-Oreo.png',
    price: '$190',
    description: 'Air Jordan 4 "White Oreo"',
    product_description:'Modeled after the Air Jordan 4 Oreo from 1999, the Air Jordan 4 Retro White Oreo released in May 2021. The shoe upper emerges with a white tumbled leather construction, with the usual mesh inserts at the quarter panel and vamp. The molded eyelets sport a cement finish, matched underfoot by the polyurethane midsole. Visible Air in the heel provides cushioning, giving way to a rubber outsole for traction.',
  },
  {
    product_name: 'Jordan shoe',
    brand_id: 2,
    filename: '13-Air-Jordan-6-UNC.png',
    price: '$210',
    description: 'Air Jordan 6 "UNC"',
    product_description:'The Air Jordan 6 Retro UNC Home pays homage to Michael Jordan alma mater, bearing a colorway reminiscent of the University of North Carolina. The classic hoops sneakers feature a white leather upper set against University Blue nubuck underlays. Hits of navy appear on the molded TPU heel tab and collar lining. Navy repeats on the midsole, which houses visible Air-sole cushioning. The jock tag on the heel reinforces the shoe varsity athletics theme.',
  },
  {
    product_name: 'Jordan shoe',
    brand_id: 2,
    filename: '14-Air-Jordan-12-Playoffs.png',
    price: '$210',
    description: 'Air Jordan 12 "Playoffs"',
    product_description:'Bringing back the mid-top that Michael wore during his 1997 championship campaign is the 2022 edition of the Air Jordan 12 Retro Playoff. It features an essential two-tone color scheme, featuring radiating stitched lines on the black leather upper and lizard-textured overlays in a contrasting white finish. Metallic silver eyelets are molded on, while color-popped crimson accents land on the Jumpman-embroidered tongue and webbing heel loop. Full-length Zoom Air cushioning is underneath with a carbon fiber shank plate and a rubber outsole with herringbone traction pods under the forefoot and heel.',
  },
  {
    product_name: 'Nike shoe',
    brand_id: 1,
    filename: '15-Nike-Air-Force-1.png',
    price: '$100',
    description: 'Nike Air Force 1',
    product_description:'The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
  },
  {
    product_name: 'Nike shoe',
    brand_id: 1,
    filename: '16-Nike-Air-Max-90.png',
    price: '$130',
    description: 'Nike Air Max 90',
    product_description:'Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.',
  },
  {
    product_name: 'Nike shoe',
    brand_id: 1,
    filename: '17-Nike-Air-Max-95-SE.png',
    price: '$180',
    description: 'Nike Air Max 95 SE',
    product_description:'Playful retro graphics vibe with layers of 90s track aesthetics for a look that celebrates 50 years of Nike innovation. This throwback twist does not mean we have stepped back from cutting-edge design—the supersoft Air cushioning and durable construction make it your must-have wardrobe staple for the next 50 years.',
  },
  {
    product_name: 'Nike shoe',
    brand_id: 1,
    filename: '18-Nike-Air-Max-97.png',
    price: '$170',
    description: 'Nike Air Max 97',
    product_description:'Step into the history books. These special edition kicks pay homage to Frank Rudy, the man who created the coveted cornerstone of cushioning—Air. From the see-through "Air pocket" heel logo to "Est. 1997" proudly stamped on the Air unit, celebrate the legacy of Frank with fun details that deliver a lesson in comfort.',
  },
  {
    product_name: 'Nike shoe',
    brand_id: 1,
    filename: '19-Nike-Dunk-Low-Panda.png',
    price: '$100',
    description: 'Nike Dunk Low Panda',
    product_description:'Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. This basketball icon channels 80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century.',
  },
  {
    product_name: 'New Balance shoe',
    brand_id: 4,
    filename: '20-Joe-Freshgoods-9060-Penny-Cookie-Pink.png',
    price: '$200',
    description: 'Joe Freshgoods 9060 Penny Cookie Pink',
    product_description:"The Joe Freshgoods x New Balance 9060 Penny Cookie Pink is a colorful silhouette introduced by a partnership between designer Joe Freshgoods and New Balance in their Inside Voices pack, a follow-up their 2021 collaboration Outside Clothes. Echoing elements of the 990 series and heritage runners from the early 2000's, pale peach and bright pink partner in a ventilated mesh upper, suede overlays and a quilted lining. The ABZORB midsole features mint-green cushioning and rides on a futuristic outsole make up of gum rubber pods in pale peach.",
  },
  {
    product_name: 'New Balance shoe',
    brand_id: 4,
    filename: '21-FuelCell-4040-v6-Turf-Trainer.png',
    price: '$90',
    description: 'FuelCell 4040 v6 Turf Trainer',
    product_description:"Function and style come together to boost your performance and your swagger with the FuelCell T4040v6 baseball turf shoes. Full-length FuelCell midsoles provide impressive energy return and propulsion and nubby rubber outsoles offer reliable traction. The uppers of these men’s shoes are built with synthetic and mesh material and feature a burrito tongue to help keep feet locked in comfortably. An eye-catching flying NB logo adds speedy style to match the fast feel.",
  },
  {
    product_name: 'New Balance shoe',
    brand_id: 4,
    filename: '22-TWO-WXY-v3.png',
    price: '$120',
    description: 'TWO WXY v3',
    product_description:"Inspired by the brains firing synapses, the TWO WXY v3 is designed for basketballs split-second reactions - the sudden accelerations, quick stops, pivots, and high-impact landings that occur throughout every game. A lively, dual-density, energy returning FuelCell midsole is amplified by ABZORB cushioning, strategically placed at the heel and forefoot. The dynamic underfoot feel is balanced by stabilizing features. A midfoot TPU clip adds lateral stability, while a molded textile upper allows for a secure lockdown fit, without adding extra weight.",
  },
  {
    product_name: 'New Balance shoe',
    brand_id: 4,
    filename: '23-574-Core.png',
    price: '$85',
    description: '574 Core',
    product_description:"The most New Balance shoe ever says it all, right? No, actually. The 574 might be our unlikeliest icon. The 574 was built to be a reliable shoe that could do a lot of different things well rather than as a platform for revolutionary technology, or as a premium materials showcase. This unassuming, unpretentious versatility is exactly what launched the 574 into the ranks of all-time greats. As hybrid road/trail design built on a wider last than the previous generations narrow racing silhouettes, the 574 offered a uniquely versatile mix of new, different, uncomplicated, rugged, durable, and comfortable that was adopted as a closet staple across the globe. Thats why today, the 574 is synonymous with the boundary defying New Balance style, and worn by anyone.",
  },
  {
    product_name: 'New Balance shoe',
    brand_id: 4,
    filename: '24-Fresh-Foam-1080v12.png',
    price: '$160',
    description: 'Fresh Foam 1080v12',
    product_description:"If we only made one running shoe, that shoe would be the 1080. What makes the 1080 unique is not just that it is the best running shoe we make, it is also the most versatile. The 1080 delivers top-of-the-line performance to every kind of runner, whether you are training for world-class competition, or catching a rush hour train. The Fresh Foam X 1080v12 represents a consistent progression of the models signature qualities. The smooth transitions of the pinnacle underfoot cushioning experience are fine-tuned with updated midsole mapping, which applies more foam to wider areas of the midsole and increases flexibility at the narrower points. The ultra-modern outlook is also reflected in the 1080s upper construction. The v12 offers a supportive, second-skin style fit with an engineered Hypoknit upper, for a more streamlined overall design.",
  },
 
];

const seedStyles = () => Style.bulkCreate(styleData);

module.exports = seedStyles;
