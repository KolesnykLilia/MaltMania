import productImg01 from "../images/double-sofa-01.png";
import productImg02 from "../images/double-sofa-02.png";
import productImg03 from "../images/double-sofa-03.png";

import productImg04 from "../images/single-sofa-01.jpg";
import productImg05 from "../images/single-sofa-02.jpg";
import productImg06 from "../images/single-sofa-03.jpg";
import productImg007 from "../images/single-sofa-04.png";

import productImg07 from "../images/arm-chair-01.jpg";
import productImg08 from "../images/arm-chair-02.jpg";
import productImg09 from "../images/arm-chair-03.jpg";
import productImg10 from "../images/arm-chair-01.jpg";

import productImg13 from "../images/phone-01.jpg";
import productImg14 from "../images/phone-02.jpg";
import productImg15 from "../images/phone-03.png";
import productImg16 from "../images/phone-04.jpg";
import productImg17 from "../images/phone-05.jpg";
import productImg18 from "../images/phone-06.jpg";

import productImg19 from "../images/watch-01.jpg";
import productImg20 from "../images/watch-02.jpg";
import productImg21 from "../images/watch-03.jpg";
import productImg22 from "../images/watch-04.jpg";

import productImg23 from "../images/wireless-01.png";

import productImg25 from "../images/wireless-03.png";

const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    shortDesc:
      "Цей диван із глибокими подушками та міцним каркасом допоможе вам додати максимального комфорту та стилю будь-якому житловому простору у вашому домі.",
    description:
      "Ніколи не вірте, що вам доведеться пожертвувати комфортом заради стилю — у цього дивана є і те, і інше. Каркас з масиву дерева та ніжки з міцної оббивки з 100% поліестеру, міцної лямки та пухових подушок. Подушки сидінь і спинок наповнені розкішним пухом. Збірка за 15 хвилин або менше Щоб очистити, уникайте вологи та протріть чистою м’якою тканиною.",
    reviews: [
      {
        rating: 4.7,
        text: "Дуже зручний",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc:
      "Рама з масиву дерева, основа цоколя та кутові конічні ніжки з пінопластовою оббивкою та тканинною оббивкою.",
    description:
      "Натхнення середини століття поєднується зі скандинавськими штрихами для створення величного виробу, який поєднується з будь-яким інтер’єром будинку. Щедрі подушки з пінопласту забезпечують комфорт, рама з твердої деревини та ніжки для підтримки та довговічності. Збірка за 15 хвилин або менше. Уникайте вологи. Протріть м’якою сухою тканиною. Поставляється в кількох коробках, можливо окремо.",
    reviews: [
      {
        rating: 4.8,
        text: "Крутий диван",
      },
      {
        rating: 4.8,
        text: "Зручно.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "sofa",
    price: 173,
    shortDesc:
      "Рама з твердої деревини, ніжки з масиву бука та міцна шкіряна оббивка стійкі до зношування.",
    description:
      "Цей сучасний диван має прості лінії та квадратні підлокітники на високих звужених ніжках, що надає йому відчуття мінімалізму, яке чудово виглядає в більшості стилів декору. Збирайте за 15 хвилин або менше, просто прикріпіть ніжки, які застібаються на блискавку всередині виробу. Протріть м’якою сухою тканиною. Поставляється в кількох коробках, можливо окремо.",
    reviews: [
      {
        rating: 4.6,
        text: "Якісний диван",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc:
      "Рама з масиву дерева, основа цоколя та кутові конічні ніжки з пінопластовою оббивкою та тканинною оббивкою.",
    description:
      "Натхнення середини століття поєднується зі скандинавськими штрихами для створення величного виробу, який поєднується з будь-яким інтер’єром будинку. Щедрі подушки з пінопласту забезпечують комфорт, рама з твердої деревини та ніжки для підтримки та довговічності. Збірка за 15 хвилин або менше. Уникайте вологи. Протріть м’якою сухою тканиною. Поставляється в кількох коробках, можливо окремо.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg04,
    category: "sofa",
    price: 163,
    shortDesc:
      "Це крісло має широке застосування, його можна використовувати як у вітальню або балкон, і насолоджуватися теплом сім'ї.",
    description:
      "М'який і зручний на дотик цей стілець добре зроблений. Простий дизайн, цей диван надзвичайно легко зібрати. Це плюшеве крісло легко зібрати самостійно, маючи наполегливу інструкцію. Наше хутряне крісло є рідним для всіх типів меблів, у тому числі деяких цікавих порід дерева, які носять професійні кухарі.",
    reviews: [
      {
        rating: 4.6,
        text: "Дуже м'яке.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "sofa",
    price: 163,
    shortDesc:
      "Міцний дерев’яний каркас, обгорнутий підтримуючою піною та міцною оксамитовою тканиною, це крісло пропонує чудову підтримку з вагою 250 фунтів на сидіння.",
    description:
      "Подушки сидінь, наповнені високоміцним поролоном і оксамитовою тканиною, забезпечують зручну підтримку для вашого тіла під час сидіння та легко відновлюють свою форму, коли ви піднімаєтеся. Не втрачайте стиль у своїх вітальнях або компактних приміщеннях! Завдяки дизайну з ворсом, цей диван додасть шарму середини минулого століття вашій невеликій квартирі, гуртожитку, вітальні чи мансарді, а його обтічні ручки силуету зливаються разом, щоб створити. Оздоблення цвяхами та дизайн подушок із пучком створюють тепло та шарм для вашого офісу чи вітальні.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "High Back Sofa",
    imgUrl: productImg06,
    category: "sofa",
    price: 163,
    shortDesc:
      "Міцний дерев'яний каркас і ніжки з твердої деревини забезпечують довговічність і стабільність.",
    description:
      "Зручний диван сірого кольору, щоб прикрасити будь-який простір, доповнити меблі у вашій вітальні або створити затишний куточок для читання у вашій спальні.ШИРОКЕ ЗАСТОСУВАННЯ - підходить для вашої вітальні, кабінету, спальні, магазину та інших зон відпочинку. Красиве однотонне крісло з простими лініями та звуженими ніжками пропонує гостям вишуканий візуальний ефект і стане ідеальним доповненням до вашого дому.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Sakarias Armchair",
    imgUrl: productImg07,
    category: "chair",
    price: 99,
    shortDesc:
      "Тканина подушки міцна, дихаюча та не сколюється, що не тільки забезпечує тривале використання, але й дружнє до домашніх тварин.",
    description:
      "Середня міцність і комфорт: оснащений каркасом із твердої деревини та піною високої щільності, диван може витримати 900 фунтів і вмістити 3 дорослих. Матеріал ніжок дивана виготовлений із пластику та оснащений нековзкими накладками для захисту підлоги від подряпин. Оснащений міцним дерев’яним каркасом і пінопластом високої щільності, диван може витримати 900 фунтів і вмістити 3 дорослих. Матеріал ніжок дивана виготовлений із пластику та оснащений нековзкими накладками для захисту підлоги від подряпин.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 173,
    shortDesc:
      "Цей шезлонг випромінює відчуття розкоші та вишуканості. Гладка та еластична текстура штучної шкіри додає нотку розкоші, а її легкість у очищенні забезпечує безпроблемний догляд.",
    description:
      "Сірий шезлонг із лівими підлокотниками має вишуканий дизайн без підлокітників, що робить його відмінним елементом будь-якої кімнати. Каркас із твердої деревини, подвійна пружинна система та високоякісна губка забезпечують виняткову підтримку, дозволяючи вам поринути в справжнє блаженство. Додавання шовкової нитки додає додатковий шар плюшу для комфортного сидіння. Створений для довговічності, наш шезлонг виготовлено з масивної дерев’яної рами, що забезпечує стабільність і довговічність.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    shortDesc:
      "Корпус сидіння на масивних букових ніжках не лише впишеться в інтер'єр оселі, але й забезпечить комфортну посадку - аж до того моменту, коли вам не захочеться вставати з-за столу.",
    description:
      "Зручно сидіти завдяки ергономічній формі сидіння та закругленій спинці. Легко встановлюється без інструментів і шурупів.Ніжки з масиву бука є міцними і покращують якість стільця. Легко чистити. За потреби протріть виріб м’якою тканиною, змоченою в м’якому неабразивному мийному засобі або мильному розчині.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Halmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    shortDesc:
      "Оббивка крісла CHERRY із зносостійкого, тактильно приємного велюру, на якому присутня стяжка - втоплені в оббивку гудзики. Ними декорована вся внутрішня частина сидіння. Металева нога має цільнозварну конструкцію, фарбовану в чорний колір.",
    description:
      "Завдяки своєму стриманому дизайну, зручній посадці та міцній конструкції рекомендується для застосування не тільки в домашніх умовах, а й у кафе та ресторанах. також конференц залах. Металева нога має цільну конструкцію, фарбовану у чорний колір. Завдяки своєму стриманому дизайну, зручній посадці та міцній конструкції рекомендується для застосування не тільки в домашніх умовах, а й у кафе та ресторанах.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Apple iPhone 12 Pro",
    imgUrl: productImg13,
    category: "mobile",
    price: 799,
    shortDesc:
      "Дисплей iPhone 12 Pro має вигляд стандартного прямокутника із закругленими кутами. Довжина діагоналі складає 6,06 дюйма, якщо її вимірювати між вершинами стандартного прямокутника (фактична зона перегляду менша).",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Sakarias Armchair",
    imgUrl: productImg10,
    category: "chair",
    price: 99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Apple iPhone 12 Max",
    imgUrl: productImg14,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Realme 8",
    imgUrl: productImg15,
    category: "mobile",
    price: 599,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: productImg16,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Apple iPhone 13 Pro",
    imgUrl: productImg17,
    category: "mobile",
    price: 899,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Samsung Galaxy S22",
    imgUrl: productImg18,
    category: "mobile",
    price: 699,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Rolex Watch",
    imgUrl: productImg19,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Timex Easy Reader Watch",
    imgUrl: productImg20,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "Rolex Watch",
    imgUrl: productImg21,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Apple Watch",
    imgUrl: productImg22,
    category: "watch",
    price: 399,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Beat Studio Wireless",
    imgUrl: productImg23,
    category: "wireless",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "22",
    productName: "Beat EP Headphones",
    imgUrl: productImg25,
    category: "wireless",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
];

export default products;
