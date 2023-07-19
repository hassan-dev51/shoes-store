export type Shoes = {
  id: number;
  name: string;
  price: number;
  image: URL;
  description: string;
  quantity: number;
  rating: { rate: number; count: number };
};

const options: RequestInit = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_RAPID_API_KEY?.trim() ?? "",
    "X-RapidAPI-Host": process.env.NEXT_RAPID_API_HOST?.trim() ?? "",
    "content-type": "application/octet-stream",
  },
};
export async function getShoes() {
  const res = await fetch(
    "https://shoes-collections.p.rapidapi.com/shoes",
    options
  );
  if (!res.ok) {
    throw new Error("Could not retrieve data");
  }
  return await res.json();
}

export async function getSingleShoe(id: string) {
  const res = await fetch(
    `https://shoes-collections.p.rapidapi.com/shoes/${id}`,
    options
  );
  if (!res.ok) {
    throw new Error("Could not retrieve data for single product");
  }
  return await res.json();
}

export const TateBagData = [
  {
    id: 1,
    image: "/1.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: ["BsStarFill", "BsStarFill", "BsStarFill", "BsStarFill"],
    review: 2,
  },
  {
    id: 2,
    image: "/2.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
  },
  {
    id: 3,
    image: "/3.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
  },
  {
    id: 4,
    image: "/4.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: ["BsStarFill", "BsStarFill"],
    review: 3,
  },
  {
    id: 5,
    image: "/5.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
  },
  {
    id: 6,
    image: "/6.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
  },
  {
    id: 7,
    image: "/7.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: ["BsStarFill", "BsStarFill"],
    review: 3,
  },
  {
    id: 8,
    image: "/8.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
  },
];
export const ShoulderBagData = [
  {
    id: 1,
    image: "/1.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: ["BsStarFill", "BsStarFill", "BsStarFill", "BsStarFill"],
    review: 2,
  },
  {
    id: 2,
    image: "/2.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: ["BsStarFill", "BsStarFill", "BsStarFill", "BsStarFill"],
    review: 2,
  },
  {
    id: 3,
    image: "/3.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: ["BsStarFill", "BsStarFill", "BsStarFill", "BsStarFill"],
    review: 2,
  },
  {
    id: 4,
    image: "/4.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: ["BsStarFill", "BsStarFill", "BsStarFill", "BsStarFill"],
    review: 2,
  },
  {
    id: 5,
    image: "/5.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: ["BsStarFill", "BsStarFill", "BsStarFill", "BsStarFill"],
    review: 2,
  },
  {
    id: 6,
    image: "/6.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: ["BsStarFill", "BsStarFill", "BsStarFill", "BsStarFill"],
    review: 2,
  },
  {
    id: 7,
    image: "/7.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: ["BsStarFill", "BsStarFill", "BsStarFill", "BsStarFill"],
    review: 2,
  },
  {
    id: 8,
    image: "/8.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: ["BsStarFill", "BsStarFill", "BsStarFill", "BsStarFill"],
    review: 2,
  },
];
export const LeatherBagData = [
  {
    id: 1,
    image: "/1.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    review: 2,
  },
  {
    id: 2,
    image: "/2.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    review: 2,
  },
  {
    id: 3,
    image: "/3.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    review: 2,
  },
  {
    id: 4,
    image: "/4.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    review: 2,
  },
  {
    id: 5,
    image: "/5.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    review: 2,
  },
  {
    id: 6,
    image: "/6.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    review: 2,
  },
  {
    id: 7,
    image: "/7.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    review: 2,
  },
  {
    id: 8,
    image: "/8.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    review: 2,
  },
];
