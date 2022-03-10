export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(
        id = 1,
        name = "",
        description = '',
        price = 0,
        imageUrl = 'https://media.istockphoto.com/vectors/isometric-illustration-of-cheeseburger-with-tomato-salad-and-onion-vector-id1288456586?b=1&k=20&m=1288456586&s=170667a&w=0&h=_fVUVNva9vAgql1fjsQdQbu4unfF2B2o1x2c9xGeDhE=') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
