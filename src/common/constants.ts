// constants.ts
export const Category = {
    "men's clothing": '패션',
    "women's clothing": '패션',
    electronics: '디지털',
    jewelery: '액세서리',
  } as const;
  

  export const ProductCategory = [
    {
        cat: "fashion",
        title: "패션",
        list: ["men's clothing", "women's clothing"],
    },
    {
      cat: "jewelery", title: "액세서리", list: ["jewelery"] ,
    },
    {
      cat: "electronics", title: "디지털", list: ["electronics"] ,
    },
  ] 
  
      
      
      