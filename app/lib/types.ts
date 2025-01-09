export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export interface Theme {
  mode: "light" | "dark";
  colors: {
    background: string;
    text: string;
    primary: string;
  };
}

export interface UserPreferences {
  layout: "grid" | "list";
  itemsPerPage: number;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}
