import { Types } from "mongoose";

export enum DigitalProductCategory {
  CHROME_EXTENSION = "Chrome Extension",
  SOFTWARE_PLUGIN = "Software Plugin",
  WORDPRESS_PLUGIN = "WordPress Plugin",
  EBOOK = "E-book",
  OTHER = "Other",
}

export interface IDigitalProduct {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  category: DigitalProductCategory;
  price: number;
  fileUrl: string;
  licenseKey?: string;
  version?: string;
  downloadLimit?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
