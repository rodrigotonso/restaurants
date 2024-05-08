import client from "@/lib/client";

export class RestaurantApi {
    static async getRestaurants(page: number, take: number): Promise<any> {
        const response = await client.get<any>(
            `/restaurants-services/restaurants`,
            {
                params: { page, take },
            }
        );
        return response.data.data;
    }
}
