import { db } from "../_lib/prisma";
import ResstaurantItem from "./restaurant-item";

const RestaurantList = async () => {
  const restaurants = await db.restaurant.findMany({ take: 10 });

  return (
    <div className="flex justify-between gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant) => (
        <ResstaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
