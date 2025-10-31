import { Types } from "mongoose";

export enum Category {
  CHROME_EXTENSION = "Chrome Extension",
  SOFTWARE_PLUGIN = "Software Plugin",
  WORDPRESS_PLUGIN = "WordPress Plugin",
  E_BOOK = "E-book",
  OTHER = "Other",
}

export interface IDigitalProduct {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  category: Category;
  price: number;
  fileUrl: string;
  licenseKey?: string;
  version?: string;
  downloadLimit?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
