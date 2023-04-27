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
