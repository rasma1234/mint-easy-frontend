export const menu = [
  {
    id: 1,
    title: "",
    listItems: [
      {
        id: 1,
        title: "Home",
        url: "/",
        icon: "home.svg",
      },

      {
        id: 3,
        title: "Trading",
        url: "/trading",
        icon: "post2.svg",
      },

      {
        id: 4,
        title: "Invest",
        url: "/invest",
        icon: "order.svg",
      },

      {
        id: 5,
        title: "Watchlist",
        url: "/watchlist",
        icon: "post.svg",
      },

      {
        id: 8,
        title: "About us",
        url: "/about",
        icon: "profile.svg",
      },

      {
        id: 6,
        title: "Subscribe",
        url: "/",
        icon: "note.svg",
      },

      {
        id: 7,
        title: "Contact",
        url: "/contact",
        icon: "log.svg",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "Settings",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "Apartments",
  //       url: "/users",
  //       icon: "apartment3.svg",
  //     },
  //     {
  //       id: 2,
  //       title: "Platforms",
  //       url: "/products",
  //       icon: "product.svg",
  //     },
  //     {
  //       id: 3,
  //       title: "Tax rates",
  //       url: "/orders",
  //       icon: "order.svg",
  //     },

  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Reports",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "City tax",
  //       url: "/",
  //       icon: "element.svg",
  //     },
  //     {
  //       id: 2,
  //       title: "Sales",
  //       url: "/",
  //       icon: "note.svg",
  //     },

  //   ],
  // },
];

export const pieChartData = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#222b3c",
  icon: "/userIcon.svg",
  title: "Microsoft",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "#222b3c",
  icon: "/productIcon.svg",
  title: "Amazon",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "#222b3c",
  icon: "/revenueIcon.svg",
  title: "Google",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "#222b3c", // frontend
  icon: "/conversionIcon.svg", // frontend
  title: "Apple", // backend name
  number: "2.6", // current price
  dataKey: "ratio", // ?
  percentage: 12, // backend percent change
  chartData: [
    // date and closing price from last 7 days
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
  // ticker: "aapl", // backend name
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const watchlistItems = [
  {
    id: 1,
    asset: "Tesla",
    ticker: "tsla",
    price: 233.11,
    units: 207.8,
    avg_open: 240.61,
    p_l: -1500.09,
    p_l_percent: 15.65,
    value: 48000.0,
    short: 220.2,
  },
  {
    id: 2,
    asset: "Apple",
    ticker: "aapl",
    price: 233.11,
    units: 133.8,
    avg_open: 240.61,
    p_l: -800.09,
    p_l_percent: 9.4,
    value: 15000.0,
    short: 250.2,
  },

  {
    id: 3,
    asset: "Google",
    ticker: "goog",
    price: 333.11,
    units: 707.8,
    avg_open: 640.61,
    p_l: -3500.09,
    p_l_percent: 35.65,
    value: 39000.0,
    short: 120.2,
  },
  {
    id: 4,
    asset: "Facebook",
    ticker: "fb",
    price: 233.11,
    units: 133.8,
    avg_open: 240.61,
    p_l: -800.09,
    p_l_percent: 9.4,
    value: 45000.0,
    short: 250.2,
  },
  {
    id: 5,
    asset: "Amazon",
    ticker: "amzn",
    price: 1233.11,
    units: 533.8,
    avg_open: 1240.61,
    p_l: -300.09,
    p_l_percent: 5.4,
    value: 65000.0,
    short: 650.2,
  },
  {
    id: 6,
    asset: "Microsoft",
    ticker: "msft",
    price: 233.11,
    units: 133.8,
    avg_open: 240.61,
    p_l: -800.09,
    p_l_percent: 9.4,
    value: 15000.0,
    short: 250.2,
  },
];

export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};

export const userStockData = [
  {
    id: 1,
    color: "black",
    icon: "/conversionIcon.svg",
    title: "TSLA",
    number: 45.6,
    percentage: 23.4,
    dataKey: "revenue",
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  },

  {
    id: 2,
    color: "black",
    icon: "/conversionIcon.svg",
    title: "AAPL",
    number: 45.6,
    percentage: 23.4,
    dataKey: "revenue",
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  },

  {
    id: 3,
    color: "black",
    icon: "/conversionIcon.svg",
    title: "GOOG",
    number: 45.6,
    percentage: 23.4,
    dataKey: "revenue",
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  },
  {
    id: 4,
    color: "green",
    icon: "/conversionIcon.svg",
    title: "GGFD",
    number: 2245.6,
    percentage: -13.14,
    dataKey: "revenue",
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  },
  {
    id: 5,
    color: "blue",
    icon: "/conversionIcon.svg",
    title: "YAHOO",
    number: 335.6,
    percentage: 33.5,
    dataKey: "revenue",
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  },
  {
    id: 6,
    color: "red",
    icon: "/conversionIcon.svg",
    title: "MSFT",
    number: 425.6,
    percentage: -13.4,
    dataKey: "revenue",
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  },
];

export const stockPortfolioItems = [
  {
    id: 1,
    asset: "Tesla",
    ticker: "tsla",
    price: 233.11,
    units: 207.8,
    avg_open: 240.61,
    p_l: -1500.09,
    p_l_percent: 15.65,
    value: 48000.0,
    short: 220.2,
  },
  {
    id: 2,
    asset: "Apple",
    ticker: "aapl",
    price: 233.11,
    units: 133.8,
    avg_open: 240.61,
    p_l: -800.09,
    p_l_percent: 9.4,
    value: 15000.0,
    short: 250.2,
  },

  {
    id: 3,
    asset: "Google",
    ticker: "goog",
    price: 333.11,
    units: 707.8,
    avg_open: 640.61,
    p_l: -3500.09,
    p_l_percent: 35.65,
    value: 39000.0,
    short: 120.2,
  },
  {
    id: 4,
    asset: "Facebook",
    ticker: "fb",
    price: 233.11,
    units: 133.8,
    avg_open: 240.61,
    p_l: -800.09,
    p_l_percent: 9.4,
    value: 45000.0,
    short: 250.2,
  },
  {
    id: 5,
    asset: "Amazon",
    ticker: "amzn",
    price: 1233.11,
    units: 533.8,
    avg_open: 1240.61,
    p_l: -300.09,
    p_l_percent: 5.4,
    value: 65000.0,
    short: 650.2,
  },
  {
    id: 6,
    asset: "Microsoft",
    ticker: "msft",
    price: 233.11,
    units: 133.8,
    avg_open: 240.61,
    p_l: -800.09,
    p_l_percent: 9.4,
    value: 15000.0,
    short: 250.2,
  },
];
