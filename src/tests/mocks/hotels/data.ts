export const hotels = [
  {
    id: "OBMNG1",
    name: "OBM Hotel 1",
    description:
      "Etag for the win chocolate biscuit wafer soufflé toffee toffee donut. Tart biscuit wafer pudding chocolate cake oat cake halvah\r\nMarshmallow halvah gingerbread apple pie muffin biscuit. Cake pudding topping pie lemon drops lollipop. Bear claw oat cake jelly beans. Bonbon toffee caramels pudding gingerbread cookie lollipop.",
    address1: "Address 1",
    address2: "Address 2",
    postcode: "WC1R 4PS",
    town: "London",
    country: "United Kingdom",
    countryCode: "GB",
    starRating: "4",
    facilities: [],
    telephone: "12345666",
    email: "JabbaScript@guestline.com",
    images: [
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG",
      },
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/hotel4.jpg",
      },
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room5.jpg",
      },
    ],
    checkInHours: "14",
    checkInMinutes: "00",
    checkOutHours: "11",
    checkOutMinutes: "00",
    position: {
      latitude: "51.507351000",
      longitude: "-0.127758000",
      timezone: "GMT",
    },
  },
  {
    id: "OBMNG2",
    name: "OBM Hotel 2",
    description:
      "Fruitcake brownie sugar plum cotton candy pastry marzipan pie lollipop ice cream. Sweet pie tootsie roll oat cake apple pie candy pastry wafer jelly beans. Cake sweet oat cake chocolate sweet chocolate pudding biscuit.",
    address1: "10 Palace Place",
    address2: "",
    postcode: "SW1E 5BW",
    town: "London",
    country: "United Kingdom",
    countryCode: "GB",
    starRating: "5",
    facilities: [],
    telephone: "54453559",
    email: "JabbaScript@guestline.com",
    images: [
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG2/hotel1.jpg",
        alt: "Hotel image",
      },
    ],
    checkInHours: "13",
    checkInMinutes: "00",
    checkOutHours: "10",
    checkOutMinutes: "00",
    position: {
      latitude: "1.100000000",
      longitude: "-1.100000000",
      timezone: "GMT",
    },
  },
  {
    id: "OBMNG3",
    name: "OBM Hotel 3",
    description:
      "Chocolate marzipan muffin danish cake chupa chups pastry. Croissant sweet sweet wafer sweet roll chocolate. Carrot cake pudding tart pastry lemon drops croissant cupcake brownie croissant. Sweet lollipop soufflé tart cookie sweet gingerbread pudding croissant.",
    address1: "10 Carlisle Street",
    address2: "",
    postcode: "W1D 3BR",
    town: "London",
    country: "United Kingdom",
    countryCode: "GB",
    starRating: "3",
    facilities: [],
    telephone: "1235345",
    email: "jabbaservices@guestline.com",
    images: [
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG3/hotel2.jpg",
        alt: "hotel",
      },
    ],
    checkInHours: "12",
    checkInMinutes: "00",
    checkOutHours: "9",
    checkOutMinutes: "00",
    position: {
      latitude: "1.200000000",
      longitude: "-1.200000000",
      timezone: "GMT",
    },
  },
  {
    id: "OBMNG4",
    name: "OBM Hotel 4",
    description:
      "Carrot cake pudding tart pastry lemon drops croissant cupcake brownie croissant. Sweet lollipop soufflé tart cookie sweet gingerbread pudding croissant.\r\nSesame snaps tootsie roll tootsie roll chocolate cake halvah cake dessert. Sesame snaps wafer sweet ice cream cotton candy sugar plum sweet roll. Bonbon candy canes chocolate bar pie halvah caramels jelly-o. Powder chocolate cake carrot cake chupa chups apple pie.",
    address1: "27 Chapter Way",
    address2: "",
    postcode: "SW19 2RF",
    town: "Liverpool",
    country: "United Kingdom",
    countryCode: "GB",
    starRating: "5",
    facilities: [],
    telephone: "123456",
    email: "jabbaservices@guestline.com",
    images: [
      {
        url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG4/hotel3.jpg",
        alt: "hotel",
      },
    ],
    checkInHours: "15",
    checkInMinutes: "00",
    checkOutHours: "12",
    checkOutMinutes: "00",
  },
];

export const hotelRoomRates = {
  rooms: [
    {
      id: "DTFF",
      name: "Deluxe Twin",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes.",
      occupancy: {
        maxAdults: 3,
        maxChildren: 2,
        maxOverall: 4,
      },
      disabledAccess: false,
      bedConfiguration: "Twin",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room3.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
      ],
      facilities: [
        {
          code: "27",
          name: "4 Poster Bed",
        },
        {
          code: "33",
          name: "24 Hour Reception",
        },
        {
          code: "8",
          name: "Mini Bar",
        },
        {
          code: "4",
          name: "Telephone",
        },
        {
          code: "5",
          name: "Video",
        },
        {
          code: "25",
          name: "Jacuzzi Bath",
        },
        {
          code: "3",
          name: "TV",
        },
        {
          code: "15",
          name: "24 Hour Room Service",
        },
        {
          code: "28",
          name: "Kitchen Utensils",
        },
      ],
    },
    {
      id: "STND",
      name: "Double/Twin Standard Double",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Bear claw marshmallow bear claw tiramisu caramels dragée. Pastry sweet sugar plum sugar plum candy icing tiramisu danish.\r\nHalvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes to",
      occupancy: {
        maxAdults: 2,
        maxChildren: 0,
        maxOverall: 2,
      },
      disabledAccess: false,
      bedConfiguration: "Both",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room4.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
      ],
      facilities: [
        {
          code: "9",
          name: "Room Service (Restricted Hours)",
        },
        {
          code: "27",
          name: "4 Poster Bed",
        },
        {
          code: "33",
          name: "24 Hour Reception",
        },
        {
          code: "8",
          name: "Mini Bar",
        },
        {
          code: "16",
          name: "Hair Dryer",
        },
        {
          code: "6",
          name: "TV / Radio",
        },
        {
          code: "1",
          name: "Internet Access",
        },
        {
          code: "19",
          name: "Hot Tub",
        },
        {
          code: "4",
          name: "Telephone",
        },
        {
          code: "7",
          name: "Tea / Coffee Making Facilities",
        },
        {
          code: "5",
          name: "Video",
        },
        {
          code: "11",
          name: "Radio",
        },
        {
          code: "31",
          name: "Balcony",
        },
        {
          code: "25",
          name: "Jacuzzi Bath",
        },
        {
          code: "35",
          name: "Lake View",
        },
        {
          code: "24",
          name: "Ironing Facilities",
        },
        {
          code: "28",
          name: "Kitchen Utensils",
        },
        {
          code: "17",
          name: "Air Conditioning",
        },
        {
          code: "13",
          name: "In-room Safe",
        },
        {
          code: "22",
          name: "iPod Docking Station",
        },
        {
          code: "3",
          name: "TV",
        },
        {
          code: "15",
          name: "24 Hour Room Service",
        },
        {
          code: "10",
          name: "Bathrobes",
        },
        {
          code: "12",
          name: "TV with Satellite channels",
        },
        {
          code: "2",
          name: "High Speed Internet Access",
        },
        {
          code: "34",
          name: "Sea View",
        },
        {
          code: "29",
          name: "Garden",
        },
      ],
    },
    {
      id: "STTW",
      name: "Standard Twin",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription: "Standard Twin",
      occupancy: {
        maxAdults: 2,
        maxChildren: 1,
        maxOverall: 2,
      },
      disabledAccess: false,
      bedConfiguration: "Twin",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room4.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
      ],
      facilities: [
        {
          code: "9",
          name: "Room Service (Restricted Hours)",
        },
        {
          code: "27",
          name: "4 Poster Bed",
        },
        {
          code: "33",
          name: "24 Hour Reception",
        },
        {
          code: "8",
          name: "Mini Bar",
        },
        {
          code: "16",
          name: "Hair Dryer",
        },
        {
          code: "6",
          name: "TV / Radio",
        },
        {
          code: "1",
          name: "Internet Access",
        },
        {
          code: "19",
          name: "Hot Tub",
        },
        {
          code: "4",
          name: "Telephone",
        },
        {
          code: "7",
          name: "Tea / Coffee Making Facilities",
        },
        {
          code: "11",
          name: "Radio",
        },
        {
          code: "31",
          name: "Balcony",
        },
        {
          code: "25",
          name: "Jacuzzi Bath",
        },
        {
          code: "35",
          name: "Lake View",
        },
        {
          code: "24",
          name: "Ironing Facilities",
        },
        {
          code: "28",
          name: "Kitchen Utensils",
        },
        {
          code: "17",
          name: "Air Conditioning",
        },
        {
          code: "26",
          name: "Dishwasher",
        },
        {
          code: "20",
          name: "Cooking Facilities",
        },
        {
          code: "13",
          name: "In-room Safe",
        },
        {
          code: "14",
          name: "Disabled Access / Facilities",
        },
        {
          code: "22",
          name: "iPod Docking Station",
        },
        {
          code: "3",
          name: "TV",
        },
        {
          code: "15",
          name: "24 Hour Room Service",
        },
        {
          code: "30",
          name: "Games Console",
        },
        {
          code: "10",
          name: "Bathrobes",
        },
        {
          code: "12",
          name: "TV with Satellite channels",
        },
        {
          code: "2",
          name: "High Speed Internet Access",
        },
        {
          code: "34",
          name: "Sea View",
        },
        {
          code: "32",
          name: "Fully Equipped Kitchen",
        },
        {
          code: "29",
          name: "Garden",
        },
        {
          code: "18",
          name: "DVD Player",
        },
      ],
    },
    {
      id: "PSFF",
      name: "Principle Suite Front Facing",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes.",
      occupancy: {
        maxAdults: 2,
        maxChildren: 1,
        maxOverall: 3,
      },
      disabledAccess: false,
      bedConfiguration: "Double",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room4.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
      ],
      facilities: [
        {
          code: "20",
          name: "Cooking Facilities",
        },
        {
          code: "13",
          name: "In-room Safe",
        },
        {
          code: "14",
          name: "Disabled Access / Facilities",
        },
        {
          code: "27",
          name: "4 Poster Bed",
        },
        {
          code: "16",
          name: "Hair Dryer",
        },
        {
          code: "31",
          name: "Balcony",
        },
        {
          code: "32",
          name: "Fully Equipped Kitchen",
        },
        {
          code: "15",
          name: "24 Hour Room Service",
        },
        {
          code: "30",
          name: "Games Console",
        },
        {
          code: "10",
          name: "Bathrobes",
        },
        {
          code: "19",
          name: "Hot Tub",
        },
        {
          code: "17",
          name: "Air Conditioning",
        },
      ],
    },
    {
      id: "SMCF",
      name: "Small Double Courtyard",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes.",
      occupancy: {
        maxAdults: 2,
        maxChildren: 0,
        maxOverall: 2,
      },
      disabledAccess: false,
      bedConfiguration: "Double",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room5.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
      ],
      facilities: [
        {
          code: "20",
          name: "Cooking Facilities",
        },
        {
          code: "14",
          name: "Disabled Access / Facilities",
        },
        {
          code: "27",
          name: "4 Poster Bed",
        },
        {
          code: "33",
          name: "24 Hour Reception",
        },
        {
          code: "31",
          name: "Balcony",
        },
        {
          code: "32",
          name: "Fully Equipped Kitchen",
        },
        {
          code: "15",
          name: "24 Hour Room Service",
        },
        {
          code: "18",
          name: "DVD Player",
        },
        {
          code: "30",
          name: "Games Console",
        },
        {
          code: "10",
          name: "Bathrobes",
        },
        {
          code: "17",
          name: "Air Conditioning",
        },
        {
          code: "26",
          name: "Dishwasher",
        },
      ],
    },
    {
      id: "STUDIO",
      name: "Studio Suite",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Bear claw marshmallow bear claw tiramisu caramels dragée. Pastry sweet sugar plum sugar plum candy icing tiramisu danish.\r\nHalvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes to",
      occupancy: {
        maxAdults: 2,
        maxChildren: 1,
        maxOverall: 3,
      },
      disabledAccess: false,
      bedConfiguration: "Double",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room5.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
      ],
      facilities: [
        {
          code: "20",
          name: "Cooking Facilities",
        },
        {
          code: "14",
          name: "Disabled Access / Facilities",
        },
        {
          code: "27",
          name: "4 Poster Bed",
        },
        {
          code: "31",
          name: "Balcony",
        },
        {
          code: "15",
          name: "24 Hour Room Service",
        },
        {
          code: "10",
          name: "Bathrobes",
        },
        {
          code: "17",
          name: "Air Conditioning",
        },
      ],
    },
    {
      id: "DSFF",
      name: "Deluxe Suite Front Facing",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Caramels muffin candy gingerbread dessert wafer dessert gummi bears marshmallow. Toffee sweet bear claw icing gummies chocolate chocolate cake tootsie roll. Liquorice dessert candy wafer topping oat cake ice cream marzipan halvah. Bear claw marshmallow bear claw tiramisu caramels dragée. Pastry sweet sugar plum sugar plum candy icing tiramisu danish.",
      occupancy: {
        maxAdults: 2,
        maxChildren: 2,
        maxOverall: 3,
      },
      disabledAccess: false,
      bedConfiguration: "Double",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room2.jpg",
          alt: "image 1",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "living room",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "music",
        },
      ],
      facilities: [],
    },
    {
      id: "DLXDBL",
      name: "Deluxe Double",
      shortDescription:
        "blah blah blah blah blah test test test test test blah blah blah blah https://www.destinationedinburghapartments.co.uk/terms-and-conditions/",
      longDescription:
        "Danish candy pastry jujubes fruitcake jelly beans. Donut croissant dessert cotton candy cake icing biscuit. Cheesecake icing sugar plum fruitcake cookie. Marzipan gummies topping jelly icing biscuit halvah. Muffin pie brownie bear claw jelly beans toffee jelly marshmallow croissant. Bonbon bonbon jelly beans gummi bears jelly biscuit tootsie roll. Chocolate cake topping oat cake oat cake oat cake dragée cotton candy jujubes. Caramels muffin candy gingerbread dessert wafer dessert gummi bears marshmallow. Toffee sweet bear claw icing gummies chocolate chocolate cake tootsie roll. Liquorice dessert candy wafer topping oat cake ice cream marzipan halvah. Bear claw marshmallow bear claw tiramisu caramels dragée. Pastry sweet sugar plum sugar plum candy icing tiramisu danish. (Testing This out)\r\n\r\nTesting\r\n1\r\n2\r\n3",
      occupancy: {
        maxAdults: 6,
        maxChildren: 4,
        maxOverall: 10,
      },
      disabledAccess: false,
      bedConfiguration: "Double",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room1.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
      ],
      facilities: [],
    },
  ],
  ratePlans: [
    {
      id: "24_HOUR",
      shortDescription: "24 Hour Rate - Payment Type Pay Now",
      longDescription:
        "Code: 24_HOUR, Prepayment: Pay now\r\n\r\nTesting bullet points\r\n1\r\n2\r\n3",
      prePayment: "Reserve",
      cancellationPolicy: {
        name: "Free Cancelation",
        text: "You can cancel when ever you like.",
        penalty: "Fixed",
        applicable: "Full Stay",
        amount: 0,
        hour: "10 AM",
      },
    },
    {
      id: "BAR_BB10",
      shortDescription: "-10% off",
      prePayment: "First night",
    },
    {
      id: "BB_SAVER",
      shortDescription: "Bed and Breakfast",
      longDescription: "BB_SAVER - Pre Payment Type",
      prePayment: "Deposit",
      cancellationPolicy: {
        name: "Strict",
        text: "There will be no refund. Do not pass go. Do not collect £200.",
        penalty: "Fixed",
        applicable: "Full Stay",
        amount: 100,
        days: 300,
      },
      prePaymentValue: 25,
      prePaymentIsPercentage: true,
    },
    {
      id: "BAR_RO",
      shortDescription: "Room Only - Payment Type Per Adult",
      longDescription: "Code: BAR_RO, Prepayment: Per Adult 25.00",
      prePayment: "Reserve",
      cancellationPolicy: {
        name: "Free Cancelation",
        text: "You can cancel when ever you like.",
        penalty: "Fixed",
        applicable: "Full Stay",
        amount: 0,
        hour: "10 AM",
      },
    },
    {
      id: "BAR_BB",
      shortDescription: "Bed and Breakfast - Payment Type Guarantee",
      longDescription: "Code: BAR_BB, Prepayment: Guarantee",
      prePayment: "Reserve",
      cancellationPolicy: {
        name: "Free Cancelation",
        text: "You can cancel when ever you like.",
        penalty: "Fixed",
        applicable: "Full Stay",
        amount: 0,
        hour: "10 AM",
      },
    },
    {
      id: "BAR_DBB",
      shortDescription: "Dinner, Bed & Breakfast - Payment Type Deposit",
      longDescription: "BAR_DBB. Payment Type: Deposit 50%",
      prePayment: "Reserve",
      cancellationPolicy: {
        name: "Strict",
        text: "There will be no refund. Do not pass go. Do not collect £200.",
        penalty: "Fixed",
        applicable: "Full Stay",
        amount: 100,
        days: 300,
      },
    },
    {
      id: "CORP001",
      shortDescription: "Corporate Rate 1",
      prePayment: "First night",
      cancellationPolicy: {
        name: "Strict",
        text: "There will be no refund. Do not pass go. Do not collect £200.",
        penalty: "Fixed",
        applicable: "Full Stay",
        amount: 100,
        days: 300,
      },
    },
  ],
};
