import { Shoes, getShoes, getSingleShoe } from "@/app/shoes";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: any) => {
  const id = params.id;
  const shoesArray = await getShoes();
  const filteredData = shoesArray.filter((item: Shoes) => item.id == id);

  return (
    <div>
      {filteredData.map((item: Shoes) => (
        <div key={item.id} className="single-card">
          <div className="card-image">
            <Image
              src={`${item.image}`}
              alt={item.name}
              height={200}
              width={200}
            />
          </div>

          <div className="card-heading">
            <h1 className="card-name">Name : {item.name}</h1>
            <h3>Price : {item.price}</h3>
            <h3>Quantity : {item.quantity}</h3>
            <p>Description : {item.description}</p>
            <h2>Rating</h2>
            <h4>
              {item.rating.count} | {item.rating.rate}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
