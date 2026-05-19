export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  rating: number;
  details?: {
    origin: string;
    altitude: string;
    roast: string;
    profile: string;
    body: string;
    acidity: string;
  };
}

export const products: Product[] = [
  {
    id: "yirgacheffe-specialty",
    name: "sidama-coffee",
    price: "$22.00",
    description: "Fruity, jasmine notes with a balanced medium body. Highly prized by coffee connoisseurs worldwide.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/attachments/8125c7aa-d9dd-4e40-b993-5621fdf4e946/1778342500968_1__2_.jpg",
    rating: 5,
    details: {
      origin: "Yirgacheffe, Ethiopia",
      altitude: "1,700 - 2,100m",
      roast: "Light",
      profile: "Jasmine, Lemon, Peach",
      body: "Elegant & Tea-like",
      acidity: "High & Complex"
    }
  },
    {
    id: "sidama-coffee",
    name: "yirgacheffe-specialty",
    price: "$18.00",
    description: "Smooth, floral, and bright notes from the Sidama highlands. A classic representation of Ethiopian terroir.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/attachments/8125c7aa-d9dd-4e40-b993-5621fdf4e946/1778342817100_5__2_.jpg",
    rating: 5,
    details: {
      origin: "Sidama Region, Ethiopia",
      altitude: "1,500 - 2,200m",
      roast: "Light-Medium",
      profile: "Floral, Citrus, Berry",
      body: "Light & Silky",
      acidity: "Bright & Winey"
    }
  },
  {
    id: "guji-espresso",
    name: "Guji Espresso",
    price: "$20.00",
    description: "Bold and chocolatey, perfectly roasted for the ultimate espresso experience with a rich crema.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/attachments/8125c7aa-d9dd-4e40-b993-5621fdf4e946/1778342817120_6__2_.jpg",
    rating: 4,
    details: {
      origin: "Guji Zone, Ethiopia",
      altitude: "1,900 - 2,300m",
      roast: "Medium-Dark",
      profile: "Dark Chocolate, Sweetness, Spice",
      body: "Full & Creamy",
      acidity: "Low & Balanced"
    }
  },
  {
    id: "harar-dark-roast",
    name: "Harar Dark Roast",
    price: "$19.00",
    description: "Intense and earthy, honoring traditional Ethiopian deep roasting. Strong, complex, and memorable.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/attachments/8125c7aa-d9dd-4e40-b993-5621fdf4e946/1778342857202_7__2_.jpg",
    rating: 5,
    details: {
      origin: "Harar, Ethiopia",
      altitude: "1,500 - 1,800m",
      roast: "Dark",
      profile: "Wild, Earthy, Blueberry",
      body: "Heavily Textured",
      acidity: "Muted & Earthy"
    }
  },
  {
    id: "garfe-tasting-set",
    name: "Garfe Tasting Set",
    price: "$45.00",
    description: "The perfect introduction to our heritage. A curated collection of our finest roasts in three convenient sizes.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/attachments/8125c7aa-d9dd-4e40-b993-5621fdf4e946/1778342801946_4__2_.jpg",
    rating: 5,
    details: {
      origin: "Multi-Region, Ethiopia",
      altitude: "Various",
      roast: "Mixed Variety",
      profile: "Diverse & Comprehensive",
      body: "Varies by Roast",
      acidity: "Balanced Collection"
    }
  },
  {
    id: "premium-heritage-roast",
    name: "Premium Heritage Roast",
    price: "$24.00",
    description: "Our flagship blend, representing 100 years of passion. A sophisticated profile for the true coffee enthusiast.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/attachments/8125c7aa-d9dd-4e40-b993-5621fdf4e946/1778342857184_8.png",
    rating: 5,
    details: {
      origin: "Ethiopian Highlands",
      altitude: "2,000m+",
      roast: "Medium",
      profile: "Rich, Velvety, Nutty",
      body: "Full Bodied",
      acidity: "Elegant & Smooth"
    }
  }
];
